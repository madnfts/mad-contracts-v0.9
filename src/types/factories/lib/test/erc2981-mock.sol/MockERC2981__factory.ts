/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../../common";
import type {
  MockERC2981,
  MockERC2981Interface,
} from "../../../../lib/test/erc2981-mock.sol/MockERC2981";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newRoyaltyFee",
        type: "uint256",
      },
    ],
    name: "RoyaltyFeeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newRecipient",
        type: "address",
      },
    ],
    name: "RoyaltyRecipientSet",
    type: "event",
  },
  {
    inputs: [],
    name: "_royaltyFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_royaltyRecipient",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "setRoyaltyRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a03461014557601f61069538819003918201601f19168301916001600160401b0383118484101761014a5780849260409485528339810103126101455780516020909101516001600160a01b03811691908290036101455760805233156101105760008054336001600160a01b031991821681178355839190837f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768180a36001541617600155604051917f2a5a1009e36beb67c3a1ada61dd1343d7e9ec62c70965492fbaa06234f8316b18280a27fc36422dcc77a5c93a5c48743078f8130c9fcc2a0ff893904ee62a3565688117c6080519180a26105349081610161823960805181818160fa01526102220152f35b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a7146103dd5750816313af4035146102e75781631525131c146102945781632a55205a146101d157816341e42f301461011d57508063769da943146100c557638da5cb5b1461007257600080fd5b346100c157817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100c15773ffffffffffffffffffffffffffffffffffffffff60209254169051908152f35b5080fd5b50346100c157817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100c157602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b8390346100c15760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100c1573573ffffffffffffffffffffffffffffffffffffffff8082168092036101cd5761017c908354163314610499565b807fffffffffffffffffffffffff000000000000000000000000000000000000000060015416176001557f2a5a1009e36beb67c3a1ada61dd1343d7e9ec62c70965492fbaa06234f8316b18280a280f35b8280fd5b9050823461029157827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610291576024359073ffffffffffffffffffffffffffffffffffffffff60015416927f000000000000000000000000000000000000000000000000000000000000000092838102938185041490151715610265575050612710908351928352046020820152f35b9060116024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b80fd5b5050346100c157817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100c15760209073ffffffffffffffffffffffffffffffffffffffff600154169051908152f35b9050346101cd5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101cd5780359073ffffffffffffffffffffffffffffffffffffffff92838316938484036103d95761034a908654163314610499565b831561037c5750508255337f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768380a380f35b90602060649251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152600d60248201527f496e76616c6964206f776e6572000000000000000000000000000000000000006044820152fd5b8580fd5b8491346101cd5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101cd57357fffffffff0000000000000000000000000000000000000000000000000000000081168091036101cd57602092507f01ffc9a700000000000000000000000000000000000000000000000000000000811490811561046f575b5015158152f35b7f2a55205a0000000000000000000000000000000000000000000000000000000091501483610468565b156104a057565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a454400000000000000000000000000000000000000006044820152fdfea26469706673582212205aad7536c73acce57e28f321e8bdad258083cec06c5396d93cba61cd3c160fd664736f6c63430008130033";

type MockERC2981ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC2981ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC2981__factory extends ContractFactory {
  constructor(...args: MockERC2981ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    fee: PromiseOrValue<BigNumberish>,
    recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockERC2981> {
    return super.deploy(
      fee,
      recipient,
      overrides || {}
    ) as Promise<MockERC2981>;
  }
  override getDeployTransaction(
    fee: PromiseOrValue<BigNumberish>,
    recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(fee, recipient, overrides || {});
  }
  override attach(address: string): MockERC2981 {
    return super.attach(address) as MockERC2981;
  }
  override connect(signer: Signer): MockERC2981__factory {
    return super.connect(signer) as MockERC2981__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC2981Interface {
    return new utils.Interface(_abi) as MockERC2981Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC2981 {
    return new Contract(address, _abi, signerOrProvider) as MockERC2981;
  }
}