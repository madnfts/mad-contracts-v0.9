/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ImplBaseEventsAndErrors,
  ImplBaseEventsAndErrorsInterface,
} from "../../../../MADTokens/common/interfaces/ImplBaseEventsAndErrors";

const _abi = [
  {
    inputs: [],
    name: "DecOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "LoopOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxSupplyBoundExceeded",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxSupplyReached",
    type: "error",
  },
  {
    inputs: [],
    name: "NotMintedYet",
    type: "error",
  },
  {
    inputs: [],
    name: "PublicMintClosed",
    type: "error",
  },
  {
    inputs: [],
    name: "RouterIsEnabled",
    type: "error",
  },
  {
    inputs: [],
    name: "URILocked",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongArgsLength",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongPrice",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
    ],
    name: "BaseURILocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "newBaseURI",
        type: "string",
      },
    ],
    name: "BaseURISet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bool",
        name: "newPublicState",
        type: "bool",
      },
    ],
    name: "PublicMintStateSet",
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
] as const;

export class ImplBaseEventsAndErrors__factory {
  static readonly abi = _abi;
  static createInterface(): ImplBaseEventsAndErrorsInterface {
    return new Interface(_abi) as ImplBaseEventsAndErrorsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ImplBaseEventsAndErrors {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ImplBaseEventsAndErrors;
  }
}
