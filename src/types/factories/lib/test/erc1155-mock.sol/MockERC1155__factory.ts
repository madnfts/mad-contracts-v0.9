/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../../common";
import type {
  MockERC1155,
  MockERC1155Interface,
} from "../../../../lib/test/erc1155-mock.sol/MockERC1155";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
    name: "AccountBalanceOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "ArrayLengthsMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAuthorised",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC1155ReceiverImplementer",
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
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
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
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
    ],
    name: "batchMint",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "total",
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "amount",
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
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
] as const;

const _bytecode =
  "0x346100f15733156100e357600080546001600160a01b031916339081178255817f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768180a36001908154908282811c921680156100d9575b60208310146100c557601f8211610099575b7f48656c6c6f2f576f726c64000000000000000000000000000000000000000016835561106a806100f76080396080f35b82815282601f60208320930160051c8301925b8381106100ba575050610068565b8281550183906100ac565b634e487b7160e01b81526022600452602490fd5b91607f1691610056565b63d92e233d6000526004601cfd5b600080fdfe6080604052600436101561001257600080fd5b60003560e01c8062fdd58e146100d657806301ffc9a7146100d15780630ca83480146100cc5780630e89341c146100c757806313af4035146100c2578063156e29f6146100bd5780632eb2c2d6146100b85780634e1273f4146100b35780638da5cb5b146100ae578063a22cb465146100a9578063e985e9c5146100a45763f242432a1461009f57600080fd5b610d7f565b610d39565b610cb4565b610c80565b610bc6565b6108eb565b610709565b610665565b610528565b610313565b610165565b610126565b6004359073ffffffffffffffffffffffffffffffffffffffff821682036100fe57565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff821682036100fe57565b346100fe5760406003193601126100fe5761013f6100db565b60601b679a31110384e0b0c9176020526024356000526020604060002054604051908152f35b346100fe5760206003193601126100fe576004357fffffffff0000000000000000000000000000000000000000000000000000000081168091036100fe57807f01ffc9a7000000000000000000000000000000000000000000000000000000006020921490811561020d575b81156101e3575b506040519015158152f35b7f0e89341c00000000000000000000000000000000000000000000000000000000915014386101d8565b7fd9b67a2600000000000000000000000000000000000000000000000000000000811491506101d1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176102a757604052565b610237565b9080601f830112156100fe5781359067ffffffffffffffff82116102a7578160051b604051936020936102e185840187610266565b855283808601928201019283116100fe578301905b828210610304575050505090565b813581529083019083016102f6565b346100fe5760606003193601126100fe5761032c6100db565b67ffffffffffffffff906024358281116100fe5761034f600491369083016102ac565b926044359081116100fe5761036790369083016102ac565b9173ffffffffffffffffffffffffffffffffffffffff60009381855416330361049957610392610f4b565b91815187510361048d578360601b93841561048157602094679a31110384e0b0c9178552875160051b9387925b838681146103fa5787019387808288010151918c0101518a5260408a2080549182019182106103ee57556103bf565b896301336cea8c52601cfd5b5088935089859185897f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8c6040908151938491838352885160051b8201848401818b845afa503d8401828401523d8301918a5160051b0190818b868501925afa503d010301938816933392a4833b610470578480f35b61047993610f6f565b818080808480f35b8563ea553b348852601cfd5b84633b800a468752601cfd5b836040517f1648fd01000000000000000000000000000000000000000000000000000000008152fd5b60208082528251818301819052939260005b858110610514575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006040809697860101520116010190565b8181018301518482016040015282016104d4565b346100fe576020806003193601126100fe576040519060009060019081549081831c9280831692831561065b575b828510841461062e5784875260208701939081156105f15750600114610597575b6105938661058781880382610266565b604051918291826104c2565b0390f35b6001600090815294509192917fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8386106105e057505050910190506105878261059338610577565b8054858701529482019481016105c5565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016845250505090151560051b0190506105878261059338610577565b6024867f4e487b710000000000000000000000000000000000000000000000000000000081526022600452fd5b93607f1693610556565b346100fe5760206003193601126100fe5761067e6100db565b73ffffffffffffffffffffffffffffffffffffffff6000918183541633036106df5780156106d25780835516337f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d768380a380f35b63d92e233d83526004601cfd5b60046040517f1648fd01000000000000000000000000000000000000000000000000000000008152fd5b346100fe5760606003193601126100fe576107226100db565b6024356044359073ffffffffffffffffffffffffffffffffffffffff906000938285541633036106df57610754610f4b565b928160601b1561087f57679a31110384e0b0c96020528160145282865260408620805490868201918210610872575582865284602052811685337fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62604083a4803b6107bd578480f35b60209260405194859363f23a6e61855233868601528760408601526060850152608084015260a08084015280518091818060c087015261085e575b505060c4019085601c8401915af115610848575b517f0dc5919f000000000000000000000000000000000000000000000000000000000161083b57388080808480f35b639c05499b90526004601cfd5b3d6108555781815261080c565b503d81803e3d90fd5b818660e08701920160045afa5080386107f8565b6301336cea88526004601cfd5b63ea553b3486526004601cfd5b9181601f840112156100fe5782359167ffffffffffffffff83116100fe576020808501948460051b0101116100fe57565b9181601f840112156100fe5782359167ffffffffffffffff83116100fe57602083818601950101116100fe57565b346100fe5760a06003193601126100fe576109046100db565b61090c610103565b906044359167ffffffffffffffff908184116100fe576109316004943690860161088c565b90926064358181116100fe5761094a903690880161088c565b916084359081116100fe5761096290369089016108bd565b92606097679a31110384e0b0c990891b811796891b1795602097818952818a1c97808b1c978815610b7e57893303610b63575b928b9297969594918b9460051b9160005b838103610af1575050507f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb97898b60405194604086528488019b8c967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09b8c809701988960408401378988018b8301528782019360051b809b0196879101809a8501376080818b339501030190a4893b610a3c57005b8b9885936040519e8f9d8e809d63bc197c8182523391015260408d01528b0160a0905260c08b013760c0820160808a01528189019360e08501370160e00160a08701520191838801910161010083013701036101040190601c8301905a90600091f115610ad9575b517f43e6837f0000000000000000000000000000000000000000000000000000000001610acd57005b639c05499b600052601cfd5b3d610ae75760008152610aa4565b3d6000803e3d6000fd5b91939697829193965080999a9550013590828d52808501356000526040806000208054808511610b54578490039055848e52600020805490928101908110610b47578d925501918b94918d9499989796936109a6565b8f6301336cea600052601cfd5b50508f63f4d678b8600052601cfd5b336000526034600c2054610995578c634b6e7f18600052601cfd5b8c63ea553b34600052601cfd5b6020908160408183019282815285518094520193019160005b828110610bb2575050505090565b835185529381019392810192600101610ba4565b346100fe576040806003193601126100fe5767ffffffffffffffff906004358281116100fe57610bfa90369060040161088c565b9190926024359081116100fe57610c1590369060040161088c565b928303610c725781519280845260051b60209182858301018452600095865b838103610c48578551806105938982610b8b565b679a31110384e0b0c98282013560601b178552828101358852858820548782018601528401610c34565b633b800a466000526004601cfd5b346100fe5760006003193601126100fe57602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b346100fe5760406003193601126100fe57610ccd6100db565b602435908115158092036100fe5773ffffffffffffffffffffffffffffffffffffffff91679a31110384e0b0c96020523360145281600052806034600c205560005216337f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160206000a3005b346100fe5760406003193601126100fe57610d526100db565b610d5a610103565b90679a31110384e0b0c960205260145260005260206034600c20546040519015158152f35b346100fe5760a06003193601126100fe57610d986100db565b610da0610103565b90604435606435926084359267ffffffffffffffff84116100fe57610dca600494369086016108bd565b959091679a31110384e0b0c99060601b81179360601b179560209380855260601c928760601c928315610f3e57843303610f23575b600098878a5260408a208054808411610f175783900390558652604089208054908282019182106103ee57558086528385337fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6260408da4833b610e60578880f35b60405196879563f23a6e618752338888015260408701526060860152608085015260a0808501527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828601910160c085013760c4019086601c8401915af115610f01575b517f0dc5919f0000000000000000000000000000000000000000000000000000000001610ef657808080808080808880f35b639c05499b8252601cfd5b3d610f0e57828152610ec4565b823d81803e3d90fd5b8a63f4d678b88d52601cfd5b336000526034600c2054610dff5787634b6e7f18600052601cfd5b8763ea553b34600052601cfd5b604051906020820182811067ffffffffffffffff8211176102a75760405260008252565b91602091939260a46040518095819463bc197c818352338784015260009889604085015260a06060850152805160051b8801908160c086019160045afa5060a03d80820160808601523d850192805160051b8a01908160c086019160045afa503d010160a08401523d019080518701908160c084019160045afa503d0103019085601c8401915af115611027575b517f43e6837f000000000000000000000000000000000000000000000000000000000161083b5750565b3d61085557818152610ffd56fea2646970667358221220f57e72ad2f07c754f8df3dd78d9ddb0acba89ef47b96d277bea8748359f9842964736f6c63430008130033";

type MockERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC1155__factory extends ContractFactory {
  constructor(...args: MockERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockERC1155> {
    return super.deploy(overrides || {}) as Promise<MockERC1155>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockERC1155 {
    return super.attach(address) as MockERC1155;
  }
  override connect(signer: Signer): MockERC1155__factory {
    return super.connect(signer) as MockERC1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC1155Interface {
    return new utils.Interface(_abi) as MockERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC1155 {
    return new Contract(address, _abi, signerOrProvider) as MockERC1155;
  }
}