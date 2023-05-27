/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  FeeOracle,
  FeeOracleInterface,
} from "../../../../lib/tokens/common/FeeOracle";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "sigHash",
        type: "bytes4",
      },
    ],
    name: "feeLookup",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class FeeOracle__factory {
  static readonly abi = _abi;
  static createInterface(): FeeOracleInterface {
    return new utils.Interface(_abi) as FeeOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeOracle {
    return new Contract(address, _abi, signerOrProvider) as FeeOracle;
  }
}