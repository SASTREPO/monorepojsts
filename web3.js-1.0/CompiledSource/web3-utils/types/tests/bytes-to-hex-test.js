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
 * @file bytes-to-hex-test.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2018
 */
exports.__esModule = true;
var BN = require("bn.js");
var web3_utils_1 = require("web3-utils");
// $ExpectType string
web3_utils_1.bytesToHex([72]);
// $ExpectError
web3_utils_1.bytesToHex(['string']);
// $ExpectError
web3_utils_1.bytesToHex(345);
// $ExpectError
web3_utils_1.bytesToHex(new BN(3));
// $ExpectError
web3_utils_1.bytesToHex({});
// $ExpectError
web3_utils_1.bytesToHex(true);
// $ExpectError
web3_utils_1.bytesToHex(['string']);
// $ExpectError
web3_utils_1.bytesToHex(null);
// $ExpectError
web3_utils_1.bytesToHex(undefined);
//# sourceMappingURL=bytes-to-hex-test.js.map