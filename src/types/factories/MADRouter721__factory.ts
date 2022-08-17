/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MADRouter721, MADRouter721Interface } from "../MADRouter721";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract FactoryVerifier",
        name: "_factory",
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
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
    ],
    name: "BaseURI",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "FreeClaimState",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "PublicMintState",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_payee",
        type: "address",
      },
    ],
    name: "TokenFundsWithdrawn",
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
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "_type",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "WhitelistMintState",
    type: "event",
  },
  {
    inputs: [],
    name: "MADFactory721",
    outputs: [
      {
        internalType: "contract FactoryVerifier",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "creatorMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_freeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxFree",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_claimRoot",
        type: "bytes32",
      },
    ],
    name: "freeSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
    ],
    name: "gift",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "minimalSafeMint",
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
    stateMutability: "pure",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
    ],
    name: "setBase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
      {
        internalType: "uint8",
        name: "_stateType",
        type: "uint8",
      },
    ],
    name: "setMintState",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
    ],
    name: "setSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_supply",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "whitelistSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "_erc20",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526001805534801561001457600080fd5b50604051612087380380612087833981016040819052610033916100a6565b600080546001600160a01b031916339081178255604051909182917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a3506000805460ff60a01b19169055600280546001600160a01b0319166001600160a01b03929092169190911790556100d4565b6000602082840312156100b7578081fd5b81516001600160a01b03811681146100cd578182fd5b9392505050565b611fa4806100e36000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806367b5a642116100b2578063ab9acd5711610081578063cab2e41f11610066578063cab2e41f14610243578063d44619e314610256578063f940e3851461026957600080fd5b8063ab9acd571461021d578063ba36b92d1461023057600080fd5b806367b5a642146101c45780638456cb59146101d75780638da5cb5b146101df578063a123c38d1461020a57600080fd5b80633f4ba83a116100ee5780633f4ba83a1461017957806342a42752146101815780634328bd00146101945780635c975abb146101a757600080fd5b806306fdde031461012057806313af40351461013e57806317f9fad114610153578063182ee48514610166575b600080fd5b61012861027c565b6040516101359190611eb8565b60405180910390f35b61015161014c366004611aaa565b610293565b005b610151610161366004611acd565b610344565b610151610174366004611d71565b6103ec565b61015161052d565b61015161018f366004611acd565b610580565b6101516101a2366004611ccf565b6106b9565b600054600160a01b900460ff166040519015158152602001610135565b6101516101d2366004611b05565b610879565b610151610984565b6000546101f2906001600160a01b031681565b6040516001600160a01b039091168152602001610135565b610151610218366004611d9c565b6109d5565b61015161022b366004611c73565b610aeb565b61015161023e366004611b88565b610cba565b610151610251366004611d9c565b610e19565b6002546101f2906001600160a01b031681565b610151610277366004611cbd565b610ef5565b6060602080526606726f7574657260465260606020f35b6000546001600160a01b031633146102e15760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081178255604051909133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d769190a350565b6000546001600160a01b0316331461038d5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016102d8565b604051636c19e78360e01b81526001600160a01b038281166004830152831690636c19e78390602401600060405180830381600087803b1580156103d057600080fd5b505af11580156103e4573d6000803e3d6000fd5b505050505050565b60015460011461042b5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016102d8565b6002600155600054600160a01b900460ff16156104735760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016102d8565b600061047e836116b1565b9150508060ff16600214156104ed57604051630ef4eb0360e41b8152600481018390526001600160a01b0384169063ef4eb030906024015b600060405180830381600087803b1580156104d057600080fd5b505af11580156104e4573d6000803e3d6000fd5b50505050610524565b60405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b60448201526064016102d8565b50506001805550565b6000546001600160a01b031633146105765760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016102d8565b61057e611833565b565b6001546001146105bf5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016102d8565b6002600155600054600160a01b900460ff16156106075760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016102d8565b6000610612836116b1565b91505060ff8116156106555760405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b60448201526064016102d8565b6040516340d097c360e01b81526001600160a01b0383811660048301528416906340d097c390602401600060405180830381600087803b15801561069857600080fd5b505af11580156106ac573d6000803e3d6000fd5b5050600180555050505050565b6001546001146106f85760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016102d8565b6002600155600054600160a01b900460ff16156107405760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016102d8565b60008061074c846116b1565b915091508060ff16600114156107ff576040516355f804b360e01b81526001600160a01b038516906355f804b390610788908690600401611eb8565b600060405180830381600087803b1580156107a257600080fd5b505af11580156107b6573d6000803e3d6000fd5b50505050826040516107c89190611e0a565b6040519081900381209083907f6f8750bee7bd7661be202812d7503ffaf307fb27b6d6a954a1989fdcd156bfb790600090a361086f565b8060ff1660021415610837576040516355f804b360e01b81526001600160a01b038516906355f804b390610788908690600401611eb8565b60028160ff1611156104ed576040516355f804b360e01b81526001600160a01b038516906355f804b390610788908690600401611eb8565b5050600180555050565b6001546001146108b85760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016102d8565b6002600155600054600160a01b900460ff16156109005760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016102d8565b600061090b846116b1565b9150508060ff16600214156104ed57604051630880ea9b60e31b81526001600160a01b0385169063440754d8906109489086908690600401611e26565b600060405180830381600087803b15801561096257600080fd5b505af1158015610976573d6000803e3d6000fd5b505050505050600180555050565b6000546001600160a01b031633146109cd5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016102d8565b61057e6118cf565b600154600114610a145760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016102d8565b6002600155600054600160a01b900460ff1615610a5c5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016102d8565b6000610a67856116b1565b9150508060ff16600214156104ed576040516386997e7d60e01b81526004810185905260248101849052604481018390526001600160a01b038616906386997e7d906064015b600060405180830381600087803b158015610ac757600080fd5b505af1158015610adb573d6000803e3d6000fd5b505050505b505060018055505050565b600154600114610b2a5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016102d8565b6002600155600054600160a01b900460ff1615610b725760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016102d8565b60038160ff1610610bb45760405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b60448201526064016102d8565b600080610bc0856116b1565b9150915060018360ff161015610c1457610bdb818686611955565b8315158160ff16837f0c2bd698c33cf5bea165c8a607bdd7c7d806b8b10284bfcd5b6899674b5a486d60405160405180910390a4610ae0565b8260ff1660011415610c6457610c2b818686611a36565b8315158160ff16837f8fb26c046352958e1f6b6a24432925f21e52878afea867b4b642e5d07c6abf0f60405160405180910390a4610ae0565b8260ff1660021415610ae057610c7b818686611a70565b8315158160ff16837fcaca6c2e85f8f4d6f254385762b7a5baec7c68441678ee0a9b1ea8bb4b05bf0b60405160405180910390a4505060018055505050565b600154600114610cf95760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016102d8565b6002600155600054600160a01b900460ff1615610d415760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016102d8565b6000610d4c836116b1565b91505060018160ff1610610dde578060ff16600114610db2578060ff16600214610db25760028160ff1611610db25760405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f5459504560a01b60448201526064016102d8565b60405163b80f55c960e01b81526001600160a01b0384169063b80f55c9906104b6908590600401611e74565b826001600160a01b03166344df8e706040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561069857600080fd5b600154600114610e585760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016102d8565b6002600155600054600160a01b900460ff1615610ea05760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016102d8565b6000610eab856116b1565b9150508060ff16600214156104ed576040516313e0c8c360e11b81526004810185905260248101849052604481018390526001600160a01b038616906327c1918690606401610aad565b600154600114610f345760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016102d8565b6002600155600054600160a01b900460ff1615610f7c5760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016102d8565b600080610f88846116b1565b9150915060018160ff161015611153576001600160a01b0383161580159061102757506040516370a0823160e01b81526001600160a01b0385811660048301528416906370a082319060240160206040518083038186803b158015610fec57600080fd5b505afa158015611000573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110249190611dd6565b15155b6110c5576001600160a01b0384163161106d5760405162461bcd60e51b81526020600482015260086024820152674e4f5f46554e445360c01b60448201526064016102d8565b836001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156110a857600080fd5b505af11580156110bc573d6000803e3d6000fd5b50505050611120565b604051627a79d960e91b81526001600160a01b03848116600483015285169063f4f3b20090602401600060405180830381600087803b15801561110757600080fd5b505af115801561111b573d6000803e3d6000fd5b505050505b604051339060ff83169084907ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a190600090a45b8060ff166001141561131a576001600160a01b038316158015906111ee57506040516370a0823160e01b81526001600160a01b0385811660048301528416906370a082319060240160206040518083038186803b1580156111b357600080fd5b505afa1580156111c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111eb9190611dd6565b15155b61128c576001600160a01b038416316112345760405162461bcd60e51b81526020600482015260086024820152674e4f5f46554e445360c01b60448201526064016102d8565b836001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561126f57600080fd5b505af1158015611283573d6000803e3d6000fd5b505050506112e7565b604051627a79d960e91b81526001600160a01b03848116600483015285169063f4f3b20090602401600060405180830381600087803b1580156112ce57600080fd5b505af11580156112e2573d6000803e3d6000fd5b505050505b604051339060ff83169084907ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a190600090a45b8060ff16600214156114e1576001600160a01b038316158015906113b557506040516370a0823160e01b81526001600160a01b0385811660048301528416906370a082319060240160206040518083038186803b15801561137a57600080fd5b505afa15801561138e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b29190611dd6565b15155b611453576001600160a01b038416316113fb5760405162461bcd60e51b81526020600482015260086024820152674e4f5f46554e445360c01b60448201526064016102d8565b836001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561143657600080fd5b505af115801561144a573d6000803e3d6000fd5b505050506114ae565b604051627a79d960e91b81526001600160a01b03848116600483015285169063f4f3b20090602401600060405180830381600087803b15801561149557600080fd5b505af11580156114a9573d6000803e3d6000fd5b505050505b604051339060ff83169084907ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a190600090a45b60028160ff16111561086f576001600160a01b0383161580159061157c57506040516370a0823160e01b81526001600160a01b0385811660048301528416906370a082319060240160206040518083038186803b15801561154157600080fd5b505afa158015611555573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115799190611dd6565b15155b61161a576001600160a01b038416316115c25760405162461bcd60e51b81526020600482015260086024820152674e4f5f46554e445360c01b60448201526064016102d8565b836001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156115fd57600080fd5b505af1158015611611573d6000803e3d6000fd5b50505050611675565b604051627a79d960e91b81526001600160a01b03848116600483015285169063f4f3b20090602401600060405180830381600087803b15801561165c57600080fd5b505af1158015611670573d6000803e3d6000fd5b505050505b604051339060ff83169084907ff15624beb70c8e7a7515ad5f81ee4c24dba144c4ef1b258f8075e1a519b1a5a190600090a45050600180555050565b60025460405163617d1d3b60e01b81526001600160a01b038381166004830152600092839291169063617d1d3b9060240160206040518083038186803b1580156116fa57600080fd5b505afa15801561170e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117329190611dd6565b60025460405163b64bd5eb60e01b8152600481018390529193506001600160a01b03169063b64bd5eb90602401604080518083038186803b15801561177657600080fd5b505afa15801561178a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ae9190611c45565b505060025460405163d93cb8fd60e01b8152600481018490526001600160a01b039091169063d93cb8fd9060240160206040518083038186803b1580156117f457600080fd5b505afa158015611808573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061182c9190611dee565b9050915091565b600054600160a01b900460ff1661188c5760405162461bcd60e51b815260206004820152600860248201527f554e50415553454400000000000000000000000000000000000000000000000060448201526064016102d8565b6000805460ff60a01b191690556040513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa906020015b60405180910390a1565b600054600160a01b900460ff16156119125760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016102d8565b6000805460ff60a01b1916600160a01b1790556040513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258906020016118c5565b60018360ff1610156119c25760405163879fbedf60e01b815281151560048201526001600160a01b0383169063879fbedf906024015b600060405180830381600087803b1580156119a557600080fd5b505af11580156119b9573d6000803e3d6000fd5b50505050505050565b8260ff16600114156119fc5760405163879fbedf60e01b815281151560048201526001600160a01b0383169063879fbedf9060240161198b565b8260ff16600214156104ed5760405163879fbedf60e01b815281151560048201526001600160a01b0383169063879fbedf9060240161198b565b8260ff16600214156104ed576040516331a9da3d60e21b815281151560048201526001600160a01b0383169063c6a768f49060240161198b565b8260ff16600214156104ed57604051637e62f3b360e01b815281151560048201526001600160a01b03831690637e62f3b39060240161198b565b600060208284031215611abb578081fd5b8135611ac681611f62565b9392505050565b60008060408385031215611adf578081fd5b8235611aea81611f62565b91506020830135611afa81611f62565b809150509250929050565b600080600060408486031215611b19578081fd5b8335611b2481611f62565b9250602084013567ffffffffffffffff80821115611b40578283fd5b818601915086601f830112611b53578283fd5b813581811115611b61578384fd5b8760208260051b8501011115611b75578384fd5b6020830194508093505050509250925092565b60008060408385031215611b9a578182fd5b8235611ba581611f62565b915060208381013567ffffffffffffffff80821115611bc2578384fd5b818601915086601f830112611bd5578384fd5b813581811115611be757611be7611f4c565b8060051b9150611bf8848301611eeb565b8181528481019084860184860187018b1015611c12578788fd5b8795505b83861015611c34578035835260019590950194918601918601611c16565b508096505050505050509250929050565b60008060408385031215611c57578182fd5b8251611c6281611f62565b6020840151909250611afa81611f7a565b600080600060608486031215611c87578283fd5b8335611c9281611f62565b92506020840135611ca281611f7a565b91506040840135611cb281611f88565b809150509250925092565b60008060408385031215611adf578182fd5b60008060408385031215611ce1578182fd5b8235611cec81611f62565b915060208381013567ffffffffffffffff80821115611d09578384fd5b818601915086601f830112611d1c578384fd5b813581811115611d2e57611d2e611f4c565b611d40601f8201601f19168501611eeb565b91508082528784828501011115611d55578485fd5b8084840185840137810190920192909252919491935090915050565b60008060408385031215611d83578182fd5b8235611d8e81611f62565b946020939093013593505050565b60008060008060808587031215611db1578182fd5b8435611dbc81611f62565b966020860135965060408601359560600135945092505050565b600060208284031215611de7578081fd5b5051919050565b600060208284031215611dff578081fd5b8151611ac681611f88565b60008251611e1c818460208701611f1c565b9190910192915050565b60208082528181018390526000908460408401835b86811015611e69578235611e4e81611f62565b6001600160a01b031682529183019190830190600101611e3b565b509695505050505050565b6020808252825182820181905260009190848201906040850190845b81811015611eac57835183529284019291840191600101611e90565b50909695505050505050565b6020815260008251806020840152611ed7816040850160208701611f1c565b601f01601f19169190910160400192915050565b604051601f8201601f1916810167ffffffffffffffff81118282101715611f1457611f14611f4c565b604052919050565b60005b83811015611f37578181015183820152602001611f1f565b83811115611f46576000848401525b50505050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114611f7757600080fd5b50565b8015158114611f7757600080fd5b60ff81168114611f7757600080fdfea164736f6c6343000804000a";

type MADRouter721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MADRouter721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MADRouter721__factory extends ContractFactory {
  constructor(...args: MADRouter721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MADRouter721> {
    return super.deploy(_factory, overrides || {}) as Promise<MADRouter721>;
  }
  override getDeployTransaction(
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, overrides || {});
  }
  override attach(address: string): MADRouter721 {
    return super.attach(address) as MADRouter721;
  }
  override connect(signer: Signer): MADRouter721__factory {
    return super.connect(signer) as MADRouter721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MADRouter721Interface {
    return new utils.Interface(_abi) as MADRouter721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MADRouter721 {
    return new Contract(address, _abi, signerOrProvider) as MADRouter721;
  }
}
