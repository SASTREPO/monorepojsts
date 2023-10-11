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
 * @file web3-test.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>, Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */
exports.__esModule = true;
var web3_1 = require("web3");
// $ExpectType Modules
web3_1["default"].modules;
// $ExpectType any
web3_1["default"].givenProvider;
// $ExpectType Providers
web3_1["default"].providers;
var web3 = new web3_1["default"]('https://localhost:5000/');
// $ExpectType HttpProvider | IpcProvider | WebsocketProvider | Web3EthereumProvider | CustomProvider
web3.currentProvider;
// $ExpectType Utils
web3.utils;
// $ExpectType string
web3.version;
// $ExpectType Eth
web3.eth;
// $ExpectType Shh
web3.shh;
// $ExpectType Bzz
web3.bzz;
// $ExpectType BatchRequest
new web3.BatchRequest();
//# sourceMappingURL=web3-test.js.map