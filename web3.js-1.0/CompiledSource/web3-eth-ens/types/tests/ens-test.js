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
 * @file ens-test.ts
 * @author Samuel Furter <samuel@ethereum.org>, Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2018
 */
exports.__esModule = true;
var web3_eth_accounts_1 = require("web3-eth-accounts");
var web3_eth_ens_1 = require("web3-eth-ens");
var ens = new web3_eth_ens_1.Ens('http://localhost:7545', null, new web3_eth_accounts_1.Accounts('http://localhost:7545'));
// $ExpectType Registry
ens.registry;
// $ExpectType Promise<Contract>
ens.resolver('name');
// $ExpectType Promise<boolean>
ens.supportsInterface('name', 'interfaceId');
// $ExpectType Promise<boolean>
ens.supportsInterface('name', 'interfaceId', function (error, supportsInterface) { });
// $ExpectType Promise<string>
ens.getAddress('name');
// $ExpectType Promise<string>
ens.getAddress('name', function (error, address) { });
// $ExpectType PromiEvent<any>
ens.setAddress('name', 'address', {});
// $ExpectType PromiEvent<any>
ens.setAddress('name', 'address', {}, function (error, result) { });
// $ExpectType Promise<{ [x: string]: string; }>
ens.getPubkey('name');
// $ExpectType Promise<{ [x: string]: string; }>
ens.getPubkey('name', function (error, result) { });
// $ExpectType PromiEvent<any>
ens.setPubkey('name', 'x', 'y', {});
// $ExpectType PromiEvent<any>
ens.setPubkey('name', 'x', 'y', {}, function (error, result) { });
// $ExpectType Promise<string>
ens.getText('name', 'key');
// $ExpectType Promise<string>
ens.getText('name', 'key', function (error, ensName) { });
// $ExpectType PromiEvent<any>
ens.setText('name', 'key', 'value', {});
// $ExpectType PromiEvent<any>
ens.setText('name', 'key', 'value', {}, function (error, result) { });
// $ExpectType Promise<string>
ens.getContent('name');
// $ExpectType Promise<string>
ens.getContent('name', function (error, contentHash) { });
// $ExpectType PromiEvent<any>
ens.setContent('name', 'hash', {});
// $ExpectType PromiEvent<any>
ens.setContent('name', 'hash', {}, function (error, result) { });
// $ExpectType Promise<string>
ens.getMultihash('name');
// $ExpectType Promise<string>
ens.getMultihash('name', function (error, multihash) { });
// $ExpectType PromiEvent<any>
ens.setMultihash('name', 'hash', {});
// $ExpectType PromiEvent<any>
ens.setMultihash('name', 'hash', {}, function (error, result) { });
// $ExpectType Promise<string>
ens.getContenthash('name');
// $ExpectType Promise<string>
ens.getContenthash('name', function (error, contenthash) { });
// $ExpectType PromiEvent<any>
ens.setContenthash('name', 'hash', {});
// $ExpectType PromiEvent<any>
ens.setContenthash('name', 'hash', {}, function (error, result) { });
//# sourceMappingURL=ens-test.js.map