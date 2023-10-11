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
 * @file formatters-test.ts
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */
exports.__esModule = true;
var web3_core_1 = require("web3-core");
var web3_core_helpers_1 = require("web3-core-helpers");
// $ExpectType number
web3_core_helpers_1.formatters.outputBigNumberFormatter(100);
// $ExpectType string
web3_core_helpers_1.formatters.inputSignFormatter('0x0');
// $ExpectType string
web3_core_helpers_1.formatters.inputAddressFormatter('0x0');
// $ExpectType boolean
web3_core_helpers_1.formatters.isPredefinedBlockNumber('latest');
// $ExpectType string
web3_core_helpers_1.formatters.inputDefaultBlockNumberFormatter('0x0', new web3_core_1.AbstractWeb3Module('http://localhost:8545'));
// $ExpectType string | number
web3_core_helpers_1.formatters.inputBlockNumberFormatter('0x0');
// $ExpectType object
web3_core_helpers_1.formatters.outputBlockFormatter({});
// $ExpectType object
web3_core_helpers_1.formatters.txInputFormatter({});
// $ExpectType object
web3_core_helpers_1.formatters.inputCallFormatter({});
// $ExpectType object
web3_core_helpers_1.formatters.inputTransactionFormatter({});
// $ExpectType object
web3_core_helpers_1.formatters.outputTransactionFormatter({});
// $ExpectType object
web3_core_helpers_1.formatters.outputTransactionReceiptFormatter({});
// $ExpectType object
web3_core_helpers_1.formatters.inputLogFormatter({});
// $ExpectType object
web3_core_helpers_1.formatters.outputLogFormatter({});
// $ExpectType object
web3_core_helpers_1.formatters.inputPostFormatter({});
// $ExpectType object
web3_core_helpers_1.formatters.outputPostFormatter({});
// $ExpectType object
web3_core_helpers_1.formatters.outputSyncingFormatter({});
//# sourceMappingURL=formatters-test.js.map