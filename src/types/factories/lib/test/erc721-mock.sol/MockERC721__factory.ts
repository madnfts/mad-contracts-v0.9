/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { NonPayableOverrides } from "../../../../common";
import type {
  MockERC721,
  MockERC721Interface,
} from "../../../../lib/test/erc721-mock.sol/MockERC721";
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "__name",
        type: "string",
      },
      {
        internalType: "string",
        name: "__symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccountBalanceOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenAlreadyExists",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isApproved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "result",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "result",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isApproved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
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
        name: "result",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052346200031957620010f5803803806200001d816200031e565b928339810190604081830312620003195780516001600160401b03908181116200031957836200004f91840162000344565b916020938482015183811162000319576200006b920162000344565b825190828211620003035760008054926001958685811c95168015620002f8575b88861014620002e4578190601f9586811162000291575b5088908683116001146200022d57849262000221575b5050600019600383901b1c191690861b1781555b81519384116200020d5784548581811c9116801562000202575b87821014620001ee57838111620001a6575b50859284116001146200014157839495509262000135575b5050600019600383901b1c191690821b1790555b604051610d3e9081620003b78239f35b01519050388062000111565b9190601f1984169585845280842093905b8782106200018e5750508385961062000174575b505050811b01905562000125565b015160001960f88460031b161c1916905538808062000166565b80878596829496860151815501950193019062000152565b8582528682208480870160051c820192898810620001e4575b0160051c019086905b828110620001d8575050620000f9565b838155018690620001c8565b92508192620001bf565b634e487b7160e01b82526022600452602482fd5b90607f1690620000e7565b634e487b7160e01b81526041600452602490fd5b015190503880620000b9565b8480528985208994509190601f198416865b8c8282106200027a575050841162000260575b505050811b018155620000cd565b015160001960f88460031b161c1916905538808062000252565b8385015186558c979095019493840193016200023f565b9091508380528884208680850160051c8201928b8610620002da575b918a91869594930160051c01915b828110620002cb575050620000a3565b8681558594508a9101620002bb565b92508192620002ad565b634e487b7160e01b83526022600452602483fd5b94607f16946200008c565b634e487b7160e01b600052604160045260246000fd5b600080fd5b6040519190601f01601f191682016001600160401b038111838210176200030357604052565b919080601f84011215620003195782516001600160401b03811162000303576020906200037a601f8201601f191683016200031e565b92818452828287010111620003195760005b818110620003a257508260009394955001015290565b85810183015184820184015282016200038c56fe6080604052600436101561001257600080fd5b60003560e01c806301ffc9a7146100f757806306fdde03146100f2578063081812fc146100ed578063095ea7b3146100e857806323b872dd146100e357806340c10f19146100de57806342842e0e146100d95780636352211e146100d457806370a08231146100cf57806395d89b41146100ca578063a22cb465146100c5578063b88d4fde146100c0578063c87b56dd146100bb5763e985e9c5146100b657600080fd5b610a3b565b61090b565b610850565b6107cb565b610706565b61069c565b610630565b6105e3565b610500565b6104ec565b6103d2565b61030b565b6101c7565b3461015c57602060031936011261015c576004357fffffffff000000000000000000000000000000000000000000000000000000008116810361015c5760209060e01c60405190635b5e139f8114906301ffc9a76380ac58cd82149114171715158152f35b600080fd5b60208082528251818301819052939260005b8581106101b3575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006040809697860101520116010190565b818101830151848201604001528201610173565b3461015c576000806003193601126103085760405190808054906001918060011c92600182169283156102fe575b6020926020861085146102d1578588526020880194908115610292575060011461023a575b6102368761022a81890382610aaf565b60405191829182610161565b0390f35b6000805294509192917f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b838610610281575050509101905061022a82610236388061021a565b805485870152948201948101610265565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685525050505090151560051b01905061022a82610236388061021a565b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526022600452fd5b93607f16936101f5565b80fd5b3461015c57602060031936011261015c57600435806000527f7d8825530a5a2e7a000000000000000000000000000000000000000000000000601c52602060002081010173ffffffffffffffffffffffffffffffffffffffff808254161561037e57602091600101549060405191168152f35b63ceea21b66000526004601cfd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361015c57565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361015c57565b604060031936011261015c576103e661038c565b60243573ffffffffffffffffffffffffffffffffffffffff918216600092828452337f7d8825530a5a2e7a00000000000000000000000000000000000000000000000017601c5260208420830183019081541690811561049d57829082331433151715610479575b600101557f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258480a480f35b90508185526030600c20541561049057829061044e565b634b6e7f1885526004601cfd5b63ceea21b685526004601cfd5b600319606091011261015c5773ffffffffffffffffffffffffffffffffffffffff90600435828116810361015c5791602435908116810361015c579060443590565b6104fe6104f8366104aa565b91610af0565b005b3461015c57604060031936011261015c5761051961038c565b73ffffffffffffffffffffffffffffffffffffffff1660243581156105d5576000918183527f7d8825530a5a2e7a000000000000000000000000000000000000000000000000601c52602083208201820180548060601b6105c85782179055808352601c600c2060018154019063ffffffff8216156105bb5755827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8180a480f35b6301336cea85526004601cfd5b63c991cbb185526004601cfd5b63ea553b346000526004601cfd5b6105ec366104aa565b6105f7818385610af0565b813b6105ff57005b60405191602083019383851067ffffffffffffffff86111761062b576104fe9460405260008452610c44565b610a80565b3461015c57602060031936011261015c5773ffffffffffffffffffffffffffffffffffffffff600435806000527f7d8825530a5a2e7a000000000000000000000000000000000000000000000000601c5260206000208101015416801561037e57602090604051908152f35b3461015c57602060031936011261015c576106b561038c565b80156106f8577f7d8825530a5a2e7a000000000000000000000000000000000000000000000000601c52600052602063ffffffff601c600c205416604051908152f35b638f4eb6046000526004601cfd5b3461015c576000806003193601126103085760405190806001906001548060011c92600182169283156107c1575b6020926020861085146102d15785885260208801949081156102925750600114610768576102368761022a81890382610aaf565b600160005294509192917fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8386106107b0575050509101905061022a82610236388061021a565b805485870152948201948101610794565b93607f1693610734565b3461015c57604060031936011261015c576107e461038c565b6024359081151580920361015c5773ffffffffffffffffffffffffffffffffffffffff9181601c52670a5a2e7a0000000060085233600052806030600c205560005216337f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160206000a3005b608060031936011261015c5761086461038c565b61086c6103af565b6044356064359167ffffffffffffffff9384841161015c573660238501121561015c57836004013594851161015c57366024868601011161015c576108b2838383610af0565b813b6108ba57005b60006020866104fe976024604051986108fa857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f860116018b610aaf565b828a52018389013786010152610c44565b3461015c5760208060031936011261015c57604051906000906002546001918160011c9260018316928315610a31575b602085108414610a045784875260208701939081156109c7575060011461096d575b6102368661022a81880382610aaf565b6002600090815294509192917f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b8386106109b6575050509101905061022a826102363861095d565b80548587015294820194810161099b565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016845250505090151560051b01905061022a826102363861095d565b6024867f4e487b710000000000000000000000000000000000000000000000000000000081526022600452fd5b93607f169361093b565b3461015c57604060031936011261015c57610a5461038c565b610a5c6103af565b601c52670a5a2e7a0000000060085260005260206030600c20546040519015158152f35b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761062b57604052565b60008381527f7d8825530a5a2e7a0000000000000000000000000000000000000000000000003317601c9081526020822085018501805473ffffffffffffffffffffffffffffffffffffffff95861695948516948116808614810215610c2857508515610c1c57848452838260010180548033148833141715610bfa575b610bf2575b505085851818905580600c207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff815401905583825280600c2060018154019163ffffffff831615610be65750557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9080a4565b6004906301336cea8552fd5b558338610b73565b9091506030600c205415610c1057908591610b6e565b600485634b6e7f188852fd5b60048363ea553b348652fd5b838560049215610c3b5763a11481009052fd5b63ceea21b69052fd5b60209173ffffffffffffffffffffffffffffffffffffffff9360405194859363150b7a0285523386860152166040840152606083015260808083015284518095818060a0860152610cf4575b505060a4600095019085601c8401915af115610cde575b517feaf485fe0000000000000000000000000000000000000000000000000000000001610cd15750565b63d1a57ed690526004601cfd5b3d610ceb57818152610ca7565b503d81803e3d90fd5b818560c08601920160045afa508438610c9056fea26469706673582212201d3012019585fe5032d267f219d1ce444601a183c73656f39792d70c2ec8e17964736f6c63430008160033";

type MockERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC721__factory extends ContractFactory {
  constructor(...args: MockERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    __name: string,
    __symbol: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(__name, __symbol, overrides || {});
  }
  override deploy(
    __name: string,
    __symbol: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(__name, __symbol, overrides || {}) as Promise<
      MockERC721 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockERC721__factory {
    return super.connect(runner) as MockERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC721Interface {
    return new Interface(_abi) as MockERC721Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): MockERC721 {
    return new Contract(address, _abi, runner) as unknown as MockERC721;
  }
}