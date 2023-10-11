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
 * @file network-test.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2018
 */
exports.__esModule = true;
var web3_net_1 = require("web3-net");
var network = new web3_net_1.Network('http://localhost:5000');
// $ExpectType Promise<string>
network.getNetworkType(function (error, returnValue) { console.log(returnValue); });
// $ExpectType Promise<number>
network.getId();
// $ExpectType Promise<number>
network.getId(function (error, id) { console.log(id); });
// $ExpectType Promise<boolean>
network.isListening();
// $ExpectType Promise<boolean>
network.isListening(function (error, listening) { console.log(listening); });
// $ExpectType Promise<number>
network.getPeerCount();
// $ExpectType Promise<number>
network.getPeerCount(function (error, peerCount) { console.log(peerCount); });
//# sourceMappingURL=network-test.js.map