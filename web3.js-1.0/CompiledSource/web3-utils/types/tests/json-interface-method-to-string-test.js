"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file json-interface-method-to-string-test.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2018
 */
exports.__esModule = true;
var web3_utils_1 = require("web3-utils");
var abiItem = {
    anonymous: false,
    constant: true,
    inputs: [
        {
            name: 'testMe',
            type: 'uint256[3]'
        },
        {
            name: 'inputA',
            type: 'tuple',
            components: [
                {
                    name: 'a',
                    type: 'uint8'
                },
                {
                    name: 'b',
                    type: 'uint8'
                }
            ]
        },
        {
            name: 'inputB',
            type: 'tuple[]',
            components: [
                {
                    name: 'a1',
                    type: 'uint256'
                },
                {
                    name: 'a2',
                    type: 'uint256'
                }
            ]
        },
        {
            name: 'inputC',
            type: 'uint8',
            indexed: false
        }
    ],
    name: "testName",
    outputs: [
        {
            name: "test",
            type: "uint256"
        },
        {
            name: 'outputA',
            type: 'tuple',
            components: [
                {
                    name: 'a',
                    type: 'uint8'
                },
                {
                    name: 'b',
                    type: 'uint8'
                }
            ]
        },
        {
            name: 'outputB',
            type: 'tuple[]',
            components: [
                {
                    name: 'a1',
                    type: 'uint256'
                },
                {
                    name: 'a2',
                    type: 'uint256'
                }
            ]
        }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
};
// $ExpectType string
web3_utils_1.jsonInterfaceMethodToString(abiItem);
// $ExpectError
web3_utils_1.jsonInterfaceMethodToString(['string']);
// $ExpectError
web3_utils_1.jsonInterfaceMethodToString(234);
// $ExpectError
web3_utils_1.jsonInterfaceMethodToString([4]);
// $ExpectError
web3_utils_1.jsonInterfaceMethodToString(true);
// $ExpectError
web3_utils_1.jsonInterfaceMethodToString(null);
// $ExpectError
web3_utils_1.jsonInterfaceMethodToString(undefined);
//# sourceMappingURL=json-interface-method-to-string-test.js.map