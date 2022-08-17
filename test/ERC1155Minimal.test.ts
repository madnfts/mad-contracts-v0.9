import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import {
  BigNumber,
  ContractReceipt,
  ContractTransaction,
  Wallet,
} from "ethers";
import { ethers, network, waffle } from "hardhat";

import {
  ERC1155Minimal,
  MockERC20,
  SplitterImpl,
} from "../src/types";
import { MinimalErrors } from "./utils/errors";
import {
  smFixture1155,
  tokenFixture,
} from "./utils/fixtures";
import {
  ERC165Interface,
  ERC1155Interface,
  ERC1155MetadataInterface,
  ERC2981Interface,
  getInterfaceID,
} from "./utils/interfaces";

const createFixtureLoader = waffle.createFixtureLoader;

describe("ERC1155Minimal", () => {
  /* 
  For the sake of solely testing the nft functionalities, we consider 
  the user as the contract's owner, and the marketplace just as the 
  recipient for the royalties distribution; even though these tx 
  would've been proxied through the marketplace address when the 
  other core contracts are taken into account.
  */

  type WalletWithAddress = Wallet & SignerWithAddress;

  // contract deployer/admin
  let owner: WalletWithAddress;

  // ambassador
  let amb: WalletWithAddress;

  // marketplace address
  let mad: WalletWithAddress;

  // extra EOAs
  let acc01: WalletWithAddress;
  let acc02: WalletWithAddress;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let res: any;

  let splitter: SplitterImpl;
  let minimal: ERC1155Minimal;
  let erc20: MockERC20;

  // let tx:ContractTransaction;
  // let rc:ContractReceipt;

  const fundAmount: BigNumber =
    ethers.utils.parseEther("10000");
  const price: BigNumber = ethers.utils.parseEther("1");

  let loadFixture: ReturnType<typeof createFixtureLoader>;

  before("Set signers and reset network", async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [owner, amb, mad, acc01, acc02] = await (
      ethers as any
    ).getSigners();
    loadFixture = createFixtureLoader([
      owner,
      amb,
      mad,
      acc01,
      acc02,
    ]);
    await network.provider.send("hardhat_reset");
  });
  beforeEach("Load deployment fixtures", async () => {
    ({ minimal, splitter } = await loadFixture(
      smFixture1155,
    ));
  });

  describe("Init", async () => {
    it("Splitter and ERC1155 should initialize", async () => {
      await minimal.deployed();
      await splitter.deployed();
      expect(minimal).to.be.ok;
      expect(splitter).to.be.ok;

      expect(await minimal.callStatic.price()).to.eq(price);
      expect(await minimal.callStatic.splitter()).to.eq(
        splitter.address,
      );
      expect(await splitter.callStatic.totalShares()).to.eq(
        100,
      );
      expect(await splitter.callStatic.payee(0)).to.eq(
        mad.address,
      );
      expect(await splitter.callStatic.payee(1)).to.eq(
        amb.address,
      );
      expect(await splitter.callStatic.payee(2)).to.eq(
        owner.address,
      );
      await expect(await minimal.deployTransaction)
        .to.emit(minimal, "RoyaltyFeeSet")
        .withArgs(750)
        .and.to.emit(minimal, "RoyaltyRecipientSet")
        .withArgs(splitter.address);
    });

    it("accounts have been funded", async () => {
      // can't be eq to ethAmount due to contract deployment cost
      res = await ethers.provider.getBalance(owner.address);
      expect(res.toString()).to.have.lengthOf(22);
      // console.log(res); // lengthOf = 22
      // console.log(ethAmount); // lengthOf = 23

      // those should eq to hardhat prefunded account's value
      expect(
        await ethers.provider.getBalance(amb.address),
      ).to.eq(fundAmount);
      expect(
        await ethers.provider.getBalance(mad.address),
      ).to.eq(fundAmount);
      expect(
        await ethers.provider.getBalance(acc01.address),
      ).to.eq(fundAmount);
      expect(
        await ethers.provider.getBalance(acc02.address),
      ).to.eq(fundAmount);
    });
  });
  // each describe tests a set of functionalities of the contract's behavior
  describe("Safe Minting", async () => {
    it("Should revert if not the owner", async () => {
      const tx = minimal
        .connect(acc01)
        .safeMint(acc01.address);

      await expect(tx).to.be.revertedWith(
        MinimalErrors.Unauthorized,
      );
    });
    it("Should mint, update storage and emit events", async () => {
      const tx: ContractTransaction = await minimal
        .connect(owner)
        .safeMint(acc02.address);
      const rc: ContractReceipt = await tx.wait();
      const event = rc.events?.find(
        event => event.event === "TransferSingle",
      );
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      const operator = event?.args!["operator"];
      const from = event?.args!["from"];
      const to = event?.args!["to"];
      const id = event?.args!["id"];
      const amount = event?.args!["amount"];
      /* eslint-enable @typescript-eslint/no-non-null-assertion */
      const bal = await minimal.callStatic.balanceOf(
        acc02.address,
        1,
      );
      const ownerOf = await minimal.callStatic.ownerOf(1);

      expect(tx).to.be.ok;
      await expect(tx).to.emit(minimal, "TransferSingle");

      expect(1).to.eq(bal);
      expect(acc02.address).to.eq(ownerOf);
      expect(owner.address).to.eq(operator);
      expect(ethers.constants.AddressZero).to.eq(from);
      expect(acc02.address).to.eq(to);
      expect(1).to.eq(id);
      expect(1).to.eq(amount);
    });

    it("Should revert if already minted", async () => {
      await minimal.connect(owner).safeMint(acc01.address);
      const tx = minimal
        .connect(owner)
        .safeMint(acc02.address);

      await expect(tx).to.be.revertedWith(
        MinimalErrors.AlreadyMinted,
      );
    });
  });

  describe("Burning", async () => {
    it("Should revert if has not been minted", async () => {
      const tx = minimal.connect(owner).burn();

      await expect(tx).to.be.revertedWith(
        MinimalErrors.NotMinted,
      );
    });

    it("Should revert if not the owner", async () => {
      await minimal.connect(owner).safeMint(acc02.address);
      const tx = minimal.connect(acc01).burn();

      await expect(tx).to.be.revertedWith(
        MinimalErrors.Unauthorized,
      );
    });

    it("Should burn, update storage and emit events", async () => {
      await minimal.connect(owner).safeMint(acc02.address);
      const tx: ContractTransaction = await minimal
        .connect(owner)
        .burn();
      const rc: ContractReceipt = await tx.wait();
      const event = rc.events?.find(
        event => event.event === "TransferSingle",
      );
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      const operator = event?.args!["operator"];
      const from = event?.args!["from"];
      const to = event?.args!["to"];
      const id = event?.args!["id"];
      const amount = event?.args!["amount"];
      /* eslint-enable @typescript-eslint/no-non-null-assertion */
      const bal = await minimal.callStatic.balanceOf(
        acc02.address,
        1,
      );

      await expect(tx).to.emit(minimal, "TransferSingle");

      expect(await minimal.ownerOf(1)).to.eq(
        ethers.constants.AddressZero,
      );
      expect(tx).to.be.ok;
      expect(0).to.eq(bal);
      expect(acc02.address).to.eq(from);
      expect(ethers.constants.AddressZero).to.eq(to);
      expect(1).to.eq(id);
      expect(owner.address).to.eq(operator);
      expect(1).to.eq(amount);
    });

    it("Should revert if already burned", async () => {
      await minimal.connect(owner).safeMint(acc02.address);
      await minimal.connect(owner).burn();

      await expect(minimal.burn()).to.be.revertedWith(
        MinimalErrors.NotMinted,
      );
    });
  });
  describe("Public Minting", async () => {
    it("Should update public mint state", async () => {
      const tx = minimal
        .connect(owner)
        .setPublicMintState(true);

      await expect(
        minimal.connect(acc02).setPublicMintState(true),
      ).to.be.revertedWith(MinimalErrors.Unauthorized);
      await expect(
        await minimal.callStatic.publicMintState(),
      ).to.eq(true);
      await expect(tx).to.be.ok;
      await expect(tx).to.emit(minimal, "PublicMintStateSet");
    });

    it("Should revert if public mint is off", async () => {
      await expect(
        minimal.connect(acc01).publicMint(),
      ).to.be.revertedWith(MinimalErrors.PublicMintOff);
    });

    it("Should revert if price is wrong", async () => {
      await minimal.connect(owner).setPublicMintState(true);

      await expect(
        minimal
          .connect(acc02)
          .publicMint({ value: 10100111001 }),
      ).to.be.revertedWith(MinimalErrors.WrongPrice);
    });

    it("Should revert if already minted", async () => {
      await minimal.connect(owner).setPublicMintState(true);
      await minimal
        .connect(acc02)
        .publicMint({ value: price });

      await expect(
        minimal.connect(acc01).publicMint({ value: price }),
      ).to.be.revertedWith(MinimalErrors.AlreadyMinted);
    });

    it("Should mint, update storage and emit events", async () => {
      await minimal.connect(owner).setPublicMintState(true);
      const tx: ContractTransaction = await minimal
        .connect(acc02)
        .publicMint({ value: price });
      const rc: ContractReceipt = await tx.wait();
      const event = rc.events?.find(
        event => event.event === "TransferSingle",
      );
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      const operator = event?.args!["operator"];
      const from = event?.args!["from"];
      const to = event?.args!["to"];
      const id = event?.args!["id"];
      const amount = event?.args!["amount"];
      /* eslint-enable @typescript-eslint/no-non-null-assertion */
      const bal = await minimal.callStatic.balanceOf(
        acc02.address,
        1,
      );
      const ownerOf = await minimal.callStatic.ownerOf(1);
      const cBal = await minimal.provider.getBalance(
        minimal.address,
      );

      expect(tx).to.be.ok;
      await expect(tx).to.emit(minimal, "TransferSingle");
      expect(cBal).to.eq(price);
      expect(from).to.eq(ethers.constants.AddressZero);
      expect(to).to.eq(acc02.address);
      expect(id).to.eq(1);
      expect(bal).to.eq(1);
      expect(ownerOf).to.eq(acc02.address);
      expect(operator).to.eq(acc02.address);
      expect(amount).to.eq(1);
    });
  });

  describe("Withdrawing", async () => {
    it("Should revert if not the owner", async () => {
      await minimal.connect(owner).setPublicMintState(true);
      await minimal
        .connect(acc02)
        .publicMint({ value: price });

      await expect(
        minimal.connect(acc01).withdraw(),
      ).to.be.revertedWith(MinimalErrors.Unauthorized);
    });

    it("Should update balances of contract and owner", async () => {
      await minimal.connect(owner).setPublicMintState(true);
      await minimal
        .connect(acc02)
        .publicMint({ value: price });
      const oldOwnerBal = await ethers.provider.getBalance(
        minimal.address,
      );
      const oldContractBal = await ethers.provider.getBalance(
        owner.address,
      );
      const tx = await minimal.withdraw();

      expect(tx).to.be.ok;
      expect(oldOwnerBal).to.be.below(
        await ethers.provider.getBalance(owner.address),
      );
      expect(oldContractBal).to.be.above(
        await ethers.provider.getBalance(minimal.address),
      );
    });

    it("Should withdraw contract's ERC20s", async () => {
      ({ erc20 } = await loadFixture(tokenFixture));
      await erc20.mint(minimal.address, price);
      const bal = await erc20.callStatic.balanceOf(
        minimal.address,
      );
      const balOwner = await erc20.callStatic.balanceOf(
        owner.address,
      );
      const tx = await minimal.withdrawERC20(erc20.address);

      expect(tx).to.be.ok;
      expect(await erc20.balanceOf(minimal.address)).to.eq(
        bal.sub(price),
      );
      expect(await erc20.balanceOf(owner.address)).to.eq(
        balOwner.add(price),
      );
    });
  });
  describe("Royalties", async () => {
    it("Should retrive royalty info", async () => {
      const share = BigNumber.from(750);
      const base = BigNumber.from(10000);
      const amount = price.mul(share).div(base);
      const tx = await minimal.royaltyInfo(1, price);
      expect(tx[0]).to.eq(splitter.address);
      expect(tx[1]).to.eq(amount);
    });
  });
  describe("Token URI", async () => {
    it("Should revert if ID is not 1", async () => {
      await expect(minimal.uri(2)).to.be.revertedWith(
        MinimalErrors.InvalidId,
      );
    });
    it("Should revert if token was not minted", async () => {
      await expect(minimal.uri(1)).to.be.revertedWith(
        MinimalErrors.NotMinted,
      );
    });

    it("Should retrieve tokenURI", async () => {
      await minimal.connect(owner).safeMint(acc01.address);
      const tx = await minimal.uri(1);
      const uri: string = "ipfs://cid/id.json";

      expect(tx).to.be.ok;
      await expect(uri).to.eq(tx);
    });
  });
  describe("Interface IDs", async () => {
    it("Should support interfaces", async () => {
      const erc165 =
        getInterfaceID(ERC165Interface).interfaceID._hex;
      const erc2981 = getInterfaceID(ERC2981Interface)
        .interfaceID._hex;
      const erc1155 = getInterfaceID(ERC1155Interface)
        .interfaceID._hex;
      const erc1155meta = getInterfaceID(
        ERC1155MetadataInterface,
      ).interfaceID._hex;

      const instrospec =
        await minimal.callStatic.supportsInterface(erc165);
      const royalty =
        await minimal.callStatic.supportsInterface(erc2981);
      const nft = await minimal.callStatic.supportsInterface(
        erc1155,
      );
      const metadata =
        await minimal.callStatic.supportsInterface(
          erc1155meta,
        );

      await expect(instrospec).to.eq(true);
      await expect(royalty).to.eq(true);
      await expect(nft).to.eq(true);
      await expect(metadata).to.eq(true);
    });
  });
});
