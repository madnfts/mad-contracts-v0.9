/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";

export interface FeeHandlerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "feeBurn"
      | "feeBurnErc20"
      | "feeMint"
      | "feeMintErc20"
      | "recipient"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "feeBurn", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeBurnErc20",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "feeMint", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeMintErc20",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "recipient", values?: undefined): string;

  decodeFunctionResult(functionFragment: "feeBurn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeBurnErc20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeMint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeMintErc20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "recipient", data: BytesLike): Result;
}

export interface FeeHandler extends BaseContract {
  connect(runner?: ContractRunner | null): FeeHandler;
  waitForDeployment(): Promise<this>;

  interface: FeeHandlerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  feeBurn: TypedContractMethod<[], [bigint], "view">;

  feeBurnErc20: TypedContractMethod<
    [erc20token: AddressLike],
    [[bigint, boolean] & { feeAmount: bigint; isValid: boolean }],
    "view"
  >;

  feeMint: TypedContractMethod<[], [bigint], "view">;

  feeMintErc20: TypedContractMethod<
    [erc20token: AddressLike],
    [[bigint, boolean] & { feeAmount: bigint; isValid: boolean }],
    "view"
  >;

  recipient: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "feeBurn"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "feeBurnErc20"
  ): TypedContractMethod<
    [erc20token: AddressLike],
    [[bigint, boolean] & { feeAmount: bigint; isValid: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "feeMint"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "feeMintErc20"
  ): TypedContractMethod<
    [erc20token: AddressLike],
    [[bigint, boolean] & { feeAmount: bigint; isValid: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "recipient"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}