/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../../common";
import type {
  SplitterImpl,
  SplitterImplInterface,
} from "../../../../contracts/lib/splitter/SplitterImpl";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "payees",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shares_",
        type: "uint256[]",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyPayee",
    type: "error",
  },
  {
    inputs: [],
    name: "DeadAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "DeniedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShare",
    type: "error",
  },
  {
    inputs: [],
    name: "LengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "NoPayees",
    type: "error",
  },
  {
    inputs: [],
    name: "NoShares",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ERC20PaymentReleased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "PayeeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_payees",
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
        name: "",
        type: "address",
      },
    ],
    name: "_shares",
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
    name: "payeesLength",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "releasable",
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
    inputs: [
      {
        internalType: "contract ERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "releasable",
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
    inputs: [
      {
        internalType: "address payable",
        name: "account",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "releaseAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "released",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "released",
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
    inputs: [
      {
        internalType: "contract ERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "totalReleased",
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
    name: "totalReleased",
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
    name: "totalShares",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60406080815262000c6b803803806200001881620002b5565b928339810182828203126200028f5781516001600160401b0392908381116200028f5781019180601f840112156200028f57825193620000626200005c86620002db565b620002b5565b928394868552602080950185600598891b830101918583116200028f578601905b8282106200029457505050838101519182116200028f57019080601f830112156200028f578151620000b96200005c82620002db565b928480858481520192881b8201019283116200028f5784809101915b8383106200027e5750505050825192815184036200026a578315620002595760005b8481106200010e5786516109629081620003098239f35b6001600160a01b03620001228284620002f3565b511690620001318185620002f3565b51821562000248578015620002375782600052878652886000205462000226576006928354680100000000000000008110156200021057600194858201808255821015620001fa5760005287600020018160018060a01b031982541617905580600052888752818a6000205560005490828201809211620001e4577f40c340f65e17194d14ddddb073d3c9f888e3cb52b5aae0c6c7706b4fbc905fac928b92600055825191825288820152a101620000f7565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b885163215a865160e11b8152600490fd5b885163040357dd60e21b8152600490fd5b88516384ff3e1b60e01b8152600490fd5b8551637b21919d60e01b8152600490fd5b85516001621398b960e31b03198152600490fd5b8251815291810191859101620000d5565b600080fd5b81516001600160a01b03811681036200028f57815290860190860162000083565b6040519190601f01601f191682016001600160401b038111838210176200021057604052565b6001600160401b038111620002105760051b60200190565b8051821015620001fa5760209160051b01019056fe60806040526004361015610023575b361561001957600080fd5b610021610518565b005b60003560e01c80631916558714610127578063283248be1461011e5780633a98ef3914610115578063406072a91461010c57806348b75044146101035780635be7fde8146100fa5780639852595c146100f1578063a3f8eace146100e8578063b34c8caf146100df578063c45ac050146100d6578063d79779b2146100cd578063e33b7de3146100c45763e919ecad0361000e576100bf6104f9565b61000e565b506100bf6104da565b506100bf61049c565b506100bf610482565b506100bf610444565b506100bf610414565b506100bf6103d6565b506100bf6103bc565b506100bf6102a2565b506100bf61025c565b506100bf610215565b506100bf6101b9565b506100bf610146565b6001600160a01b0381160361014157565b600080fd5b50346101415760203660031901126101415761002160043561016781610130565b610587565b6006548110156101a35760066000527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0190600090565b634e487b7160e01b600052603260045260246000fd5b5034610141576020366003190112610141576004356006548110156101415760066000527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f01546040516001600160a01b039091168152602090f35b5034610141576000366003190112610141576020600054604051908152f35b60409060031901126101415760043561024c81610130565b9060243561025981610130565b90565b503461014157602061029961027036610234565b6001600160a01b0391821660009081526004855260408082209290931681526020919091522090565b54604051908152f35b5034610141576102b136610234565b6001600160a01b038116600090815260056020526040902090919054156103aa576102dc8282610766565b8015610398578161033b846103247f3be5b7a71e84ed12875d241991c70855ac5817d847039e17a9d895c1ceb0f18a9560018060a01b03166000526004602052604060002090565b9060018060a01b0316600052602052604060002090565b610346838254610570565b90556001600160a01b038116600090815260036020526040902061036b838254610570565b90556103788285836108bb565b604080516001600160a01b039586168152602081019390935293169290a2005b604051635c70873f60e11b8152600490fd5b60405163b317087b60e01b8152600490fd5b503461014157600036600319011261014157610021610644565b5034610141576020366003190112610141576004356103f481610130565b60018060a01b031660005260026020526020604060002054604051908152f35b503461014157602036600319011261014157602061043c60043561043781610130565b6106ac565b604051908152f35b50346101415760203660031901126101415760043561046281610130565b60018060a01b031660005260056020526020604060002054604051908152f35b503461014157602061043c61049636610234565b90610766565b5034610141576020366003190112610141576004356104ba81610130565b60018060a01b031660005260036020526020604060002054604051908152f35b5034610141576000366003190112610141576020600154604051908152f35b5034610141576000366003190112610141576020600654604051908152f35b610520610644565b604080513381523460208201527f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be77091819081015b0390a1565b50634e487b7160e01b600052601160045260246000fd5b9190820180921161057d57565b610585610559565b565b6001600160a01b038116600081815260056020526040902054909190156103aa576105b1826106ac565b9081156103985761061482847fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b0569560005260026020526040600020805490838201809211610637575b5561060f61060a83600154610570565b600155565b610870565b604080516001600160a01b03909216825260208201929092529081908101610554565b61063f610559565b6105fa565b60065460005b818110610655575050565b8061066160019261016c565b90549061066d8361016c565b929091610688868060a01b03809454600396871b1c166106ac565b610697575b505050500161064a565b6106a3931b1c16610587565b3880808061068d565b610259904760015481018091116106dd575b6001600160a01b038216600090815260026020526040902054916106ea565b6106e5610559565b6106be565b6001600160a01b031660009081526005602052604090205481151560001983900482111661074a575b60005491821561073457020490810390811161072c5790565b610259610559565b634e487b7160e01b600052601260045260246000fd5b610752610559565b610713565b90816020910312610141575190565b6040516370a0823160e01b81523060048201529291906020846024816001600160a01b0385165afa938415610864576000946107f3575b506107ec826103246107d061025996976107c98660018060a01b03166000526003602052604060002090565b5490610570565b6001600160a01b03909416600090815260046020526040902090565b54916106ea565b936020903d821161085c575b601f8201601f191686019067ffffffffffffffff82118783101761084857506103246107d061083d61025997986107ec958895604052810190610757565b97965050505061079d565b634e487b7160e01b81526041600452602490fd5b3d91506107ff565b6040513d6000823e3d90fd5b600080809381935af11561088057565b60405162461bcd60e51b815260206004820152601360248201527211551217d514905394d1915497d19052531151606a1b6044820152606490fd5b600091826044926020956040519363a9059cbb60e01b8552600485015260248401525af13d15601f3d11600160005114161716156108f557565b60405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606490fdfea26469706673582212201a4d6d8ed16edb5ffca81772fefb32117314e4a162c021e3a2a3a6712f3caecc64736f6c63430008100033";

type SplitterImplConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SplitterImplConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SplitterImpl__factory extends ContractFactory {
  constructor(...args: SplitterImplConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    payees: PromiseOrValue<string>[],
    shares_: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<SplitterImpl> {
    return super.deploy(
      payees,
      shares_,
      overrides || {}
    ) as Promise<SplitterImpl>;
  }
  override getDeployTransaction(
    payees: PromiseOrValue<string>[],
    shares_: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(payees, shares_, overrides || {});
  }
  override attach(address: string): SplitterImpl {
    return super.attach(address) as SplitterImpl;
  }
  override connect(signer: Signer): SplitterImpl__factory {
    return super.connect(signer) as SplitterImpl__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SplitterImplInterface {
    return new utils.Interface(_abi) as SplitterImplInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SplitterImpl {
    return new Contract(address, _abi, signerOrProvider) as SplitterImpl;
  }
}
