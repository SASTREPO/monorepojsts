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
 * @file is-topic-test.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2018
 */
exports.__esModule = true;
var BN = require("bn.js");
var web3_utils_1 = require("web3-utils");
// $ExpectType boolean
web3_utils_1.isTopic('0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef');
// $ExpectError
web3_utils_1.isTopic(656);
// $ExpectError
web3_utils_1.isTopic(new BN(3));
// $ExpectError
web3_utils_1.isTopic(['string']);
// $ExpectError
web3_utils_1.isTopic([4]);
// $ExpectError
web3_utils_1.isTopic({});
// $ExpectError
web3_utils_1.isTopic(true);
// $ExpectError
web3_utils_1.isTopic(null);
// $ExpectError
web3_utils_1.isTopic(undefined);
//# sourceMappingURL=is-topic-test.js.map