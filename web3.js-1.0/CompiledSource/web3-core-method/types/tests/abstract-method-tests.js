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
 * @file abstract-web3-module-test.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2018
 */
exports.__esModule = true;
var web3_core_method_1 = require("web3-core-method");
var Utils = require("web3-utils");
var web3_core_helpers_1 = require("web3-core-helpers");
var web3_core_1 = require("web3-core");
var abstractWeb3Module = new web3_core_1.AbstractWeb3Module('http://localhost:8545');
var abstractMethod = new web3_core_method_1.AbstractMethod('rpc_method', 1, Utils, web3_core_helpers_1.formatters, abstractWeb3Module);
// $ExpectType Utils
abstractMethod.utils;
// $ExpectType formatters
abstractMethod.formatters;
// $ExpectType PromiEvent<any>
abstractMethod.promiEvent;
// $ExpectType string
abstractMethod.rpcMethod;
// $ExpectType number
abstractMethod.parametersAmount;
// $ExpectType any[]
abstractMethod.parameters;
// $ExpectType any
abstractMethod.getArguments();
// $ExpectType boolean
abstractMethod.isHash('string');
// $ExpectType void
abstractMethod.setArguments([]);
// $ExpectType boolean
abstractMethod.hasWallets();
// $ExpectType void
abstractMethod.callback('error', 'response');
// $ExpectType void
abstractMethod.beforeExecution(abstractWeb3Module);
// $ExpectType any
abstractMethod.afterExecution('response');
// $ExpectType string | PromiEvent<any> | Promise<any>
abstractMethod.execute();
// $ExpectType Promise<boolean | Error>
abstractMethod.clearSubscriptions('eth_unsubscribe');
//# sourceMappingURL=abstract-method-tests.js.map