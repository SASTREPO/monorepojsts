"use strict";
exports.__esModule = true;
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
var net = require("net");
var web3_providers_1 = require("web3-providers");
var web3_core_1 = require("web3-core");
var options = {
    timeout: 20000,
    headers: [
        {
            name: 'Access-Control-Allow-Origin',
            value: '*'
        }
    ]
};
var httpProvider = new web3_providers_1.HttpProvider('http://localhost:8545', options);
var ipcProvider = new web3_providers_1.IpcProvider('/Users/myuser/Library/Ethereum/geth.ipc', new net.Server());
var abstractWeb3Module = new web3_core_1.AbstractWeb3Module(httpProvider);
// $ExpectType BatchRequest
new abstractWeb3Module.BatchRequest();
// $ExpectType string | number
abstractWeb3Module.defaultBlock;
// $ExpectType number
abstractWeb3Module.transactionBlockTimeout;
// $ExpectType number
abstractWeb3Module.transactionConfirmationBlocks;
// $ExpectType number
abstractWeb3Module.transactionPollingTimeout;
// $ExpectType string
abstractWeb3Module.defaultGasPrice;
// $ExpectType number
abstractWeb3Module.defaultGas;
// $ExpectType Providers
web3_core_1.AbstractWeb3Module.providers;
// $ExpectType any
abstractWeb3Module.givenProvider;
// $ExpectType string | null
abstractWeb3Module.defaultAccount;
// $ExpectType HttpProvider | IpcProvider | WebsocketProvider | Web3EthereumProvider | CustomProvider
abstractWeb3Module.currentProvider;
// $ExpectType boolean
abstractWeb3Module.setProvider(httpProvider);
// $ExpectType boolean
abstractWeb3Module.setProvider('http://localhost:8545');
// $ExpectType boolean
abstractWeb3Module.isSameProvider('http://localhost:8545');
// $ExpectType boolean
abstractWeb3Module.isSameProvider(httpProvider);
// $ExpectType Promise<boolean>
abstractWeb3Module.clearSubscriptions('eth_unsubscribe');
//# sourceMappingURL=abstract-web3-module-test.js.map