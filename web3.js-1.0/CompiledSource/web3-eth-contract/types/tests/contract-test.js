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
 * @file contract-tests.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>, Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */
exports.__esModule = true;
var web3_eth_contract_1 = require("web3-eth-contract");
var contract = new web3_eth_contract_1.Contract('http://localhost:500', []);
// $ExpectType string
contract.address;
// $ExpectType string
contract.options.address;
// $ExpectType string
contract.options.data;
// $ExpectType AbiModel
contract.jsonInterface;
// $ExpectType Contract
contract.clone();
// $ExpectType ContractSendMethod
contract.deploy({
    data: '0x12345...',
    arguments: [123, 'My String']
});
// $ExpectType void
contract.once('MyEvent', {
    filter: { myIndexedParam: [20, 23], myOtherIndexedParam: '0x123456789...' },
    fromBlock: 0
}, function (error, event) { console.log(event); });
// $ExpectType void
contract.once('MyEvent', function (error, event) { console.log(event); });
// $ExpectType Promise<EventData[]>
contract.getPastEvents('MyEvent');
// $ExpectType Promise<EventData[]>
contract.getPastEvents('MyEvent', {
    filter: { myIndexedParam: [20, 23], myOtherIndexedParam: '0x123456789...' },
    fromBlock: 0,
    toBlock: 'latest'
});
// $ExpectType Promise<EventData[]>
contract.getPastEvents('MyEvent', {});
// $ExpectType Promise<EventData[]>
contract.getPastEvents('MyEvent', {
    filter: { myIndexedParam: [20, 23], myOtherIndexedParam: '0x123456789...' },
    fromBlock: 0,
    toBlock: 'latest'
}, function (error, events) { console.log(events); });
// $ExpectType Promise<EventData[]>
contract.getPastEvents('MyEvent', function (error, events) { console.log(events); });
// $ExpectType Promise<number>
contract.deploy({
    data: '0x12345...',
    arguments: [123, 'My String']
}).estimateGas();
// $ExpectType Promise<number>
contract.deploy({
    data: '0x12345...',
    arguments: [123, 'My String']
}).estimateGas({ from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe' });
// $ExpectType Promise<number>
contract.deploy({
    data: '0x12345...',
    arguments: [123, 'My String']
}).estimateGas(function (err, gas) { console.log(gas); });
// $ExpectType string
contract.deploy({
    data: '0x12345...',
    arguments: [123, 'My String']
}).encodeABI();
// $ExpectType PromiEvent<Contract>
contract.deploy({
    data: '0x12345...',
    arguments: [123, 'My String']
}).send({ from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe' });
// $ExpectType PromiEvent<Contract>
contract.deploy({
    data: '0x12345...',
    arguments: [123, 'My String']
}).send({ from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe' }, function (err, contract) { console.log(contract); });
//# sourceMappingURL=contract-test.js.map