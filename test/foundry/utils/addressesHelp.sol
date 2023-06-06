// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

import "forge-std/src/Test.sol";

abstract contract AddressesHelp is Test {
    function setAndCheckAddress(
        function(address) external setAddressFunc,
        function() view external returns (address) expectedAddressFunction
    ) internal {
        // Cache current address to reset at the end.
        address originalAddress = expectedAddressFunction();

        // Create temp new address for the check
        address newAddress = makeAddr("newAddress");

        // Attempt to set the address to address(0) and expect
        // the transaction to revert.
        vm.expectRevert();
        setAddressFunc(address(0));

        // Set the address using the provided function
        setAddressFunc(newAddress);

        // Check that the address is set correctly
        assertTrue(newAddress == expectedAddressFunction());

        // Reset the address to the original address if not address(0)
        if (originalAddress != address(0)) {
            // If it is the owner() function, we need to stop the prank and then
            // start it again
            if (
                expectedAddressFunction.selector == 0x8da5cb5b // sigHash =>  owner()
            ) {
                vm.stopPrank();
                vm.prank(newAddress);
                setAddressFunc(originalAddress);

                vm.startPrank(originalAddress);
            } else {
                setAddressFunc(originalAddress);
            }

            // Check that the address is reset correctly
            assertTrue(originalAddress == expectedAddressFunction());
        }
    }

    function createManyAddresses(
        uint256 numAddresses,
        string memory name,
        uint256 _deal
    ) internal returns (address[] memory addresses) {
        addresses = new address[](numAddresses);
        for (uint256 i = 0; i < numAddresses; i++) {
            addresses[i] = makeAddr(string(abi.encode(name, i)));
            vm.deal(addresses[i], _deal);
        }
    }

    // Helper function to compare two address arrays
    function compareAddressArray(
        address[] memory array1,
        address[] memory array2
    ) private pure returns (bool) {
        uint256 len = array1.length;
        if (len != array2.length) {
            return false;
        }
        for (uint256 i = 0; i < len; i++) {
            if (array1[i] != array2[i]) {
                return false;
            }
        }
        return true;
    }
}
