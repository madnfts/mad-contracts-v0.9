// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import "forge-std/src/Test.sol";

contract BitMaskCheck is Test {
    bytes32 colID =
        0x27b72c5e04929c8f06a5f959b6d2ccaf3b171706000000000000000000000000;
    bytes32 zeroEndingAddress =
        0x00000000000000000000000027b72c5e04929c8f06a5f959b6d2ccaf3b171706;
    //                            0x0000055b68Dc11A06f6ECA9EdE1E6E6766813D70
    // PK:                        0xc075e8db94ed1cb7a4d41fd9af8bdd0d45e5b820eac222942a631af27f07b62b

    function setUp() public { }

    function testBitMask() public {
        address creatorEnd;
        address creatorFixRight;
        address creatorFixLeft;
        address _colID;
        assembly {
            // bitmask to get the first 20 bytes of storage slot
            creatorEnd :=
                and(
                    sload(zeroEndingAddress.slot),
                    0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
                )
            _colID :=
                and(sload(colID.slot), 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF)
            creatorFixLeft := shl(24, sload(colID.slot))
            creatorFixRight := shr(96, sload(colID.slot))

            // if eq(creator, origin()) { check := true }
            // // if(!check) revert AccessDenied();
            // if iszero(check) {
            //     mstore(0x00, 0x4ca88867)
            //     revert(0x1c, 0x04)
            // }
        }

        emit log_address(creatorEnd);
        emit log_address(_colID);
        emit log_address(creatorFixLeft);
        emit log_address(creatorFixRight);
    }
}