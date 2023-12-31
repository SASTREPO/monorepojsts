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
 * @file to-check-sum-address-test.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2018
 */
exports.__esModule = true;
var BN = require("bn.js");
var web3_utils_1 = require("web3-utils");
// $ExpectType string
web3_utils_1.toChecksumAddress('0x8ee7f17bb3f88b01247c21ab6603880b64ae53e811f5e01138822e558cf1ab51');
// $ExpectError
web3_utils_1.toChecksumAddress([4]);
// $ExpectError
web3_utils_1.toChecksumAddress(['string']);
// $ExpectError
web3_utils_1.toChecksumAddress(345);
// $ExpectError
web3_utils_1.toChecksumAddress(new BN(3));
// $ExpectError
web3_utils_1.toChecksumAddress({});
// $ExpectError
web3_utils_1.toChecksumAddress(true);
// $ExpectError
web3_utils_1.toChecksumAddress(null);
// $ExpectError
web3_utils_1.toChecksumAddress(undefined);
//# sourceMappingURL=to-check-sum-address-test.js.map