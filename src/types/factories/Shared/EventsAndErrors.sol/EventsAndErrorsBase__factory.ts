/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  EventsAndErrorsBase,
  EventsAndErrorsBaseInterface,
} from "../../../Shared/EventsAndErrors.sol/EventsAndErrorsBase";
import { Contract, Interface, type ContractRunner } from "ethers";

const _abi = [
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "feeVal2",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeVal3",
        type: "uint256",
      },
    ],
    name: "FeesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPaymentToken",
        type: "address",
      },
    ],
    name: "PaymentTokenUpdated",
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
    name: "RecipientUpdated",
    type: "event",
  },
] as const;

export class EventsAndErrorsBase__factory {
  static readonly abi = _abi;
  static createInterface(): EventsAndErrorsBaseInterface {
    return new Interface(_abi) as EventsAndErrorsBaseInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EventsAndErrorsBase {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as EventsAndErrorsBase;
  }
}