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
 * @file provider-resolver-test.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>, Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */
exports.__esModule = true;
var net = require("net");
var web3_providers_1 = require("web3-providers");
var options = {
    timeout: 20000,
    headers: [
        {
            name: 'Access-Control-Allow-Origin', value: '*'
        }
    ]
};
var provider = new web3_providers_1.HttpProvider('http://localhost:8545', options);
var providerResolver = new web3_providers_1.ProviderResolver();
// $ExpectType provider
providerResolver.resolve(provider, new net.Socket());
//# sourceMappingURL=provider-resolver-test.js.map