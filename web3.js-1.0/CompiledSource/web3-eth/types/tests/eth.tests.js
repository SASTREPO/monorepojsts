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
 * @file eth-tests.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2018
 */
exports.__esModule = true;
var web3_eth_1 = require("web3-eth");
var eth = new web3_eth_1.Eth('http://localhost:8545');
// $ExpectType new (jsonInterface: AbiItem | AbiItem[], address?: string | undefined, options?: ContractOptions | undefined) => Contract
eth.Contract;
// $ExpectType new (iban: string) => Iban
eth.Iban;
// $ExpectType Personal
eth.personal;
// $ExpectType Accounts
eth.accounts;
// $ExpectType Ens
eth.ens;
// $ExpectType AbiCoder
eth.abi;
// $ExpectType Network
eth.net;
eth.clearSubscriptions();
// $ExpectType Subscription<Log>
eth.subscribe('logs');
// $ExpectType Subscription<Log>
eth.subscribe('logs', {});
// $ExpectType Subscription<Log>
eth.subscribe('logs', {}, function (error, log) { });
// $ExpectType Subscription<Syncing>
eth.subscribe('syncing');
// $ExpectType Subscription<Syncing>
eth.subscribe('syncing', null, function (error, result) { });
// $ExpectType Subscription<BlockHeader>
eth.subscribe('newBlockHeaders');
// $ExpectType Subscription<BlockHeader>
eth.subscribe('newBlockHeaders', null, function (error, blockHeader) { });
// $ExpectType Subscription<string>
eth.subscribe('pendingTransactions');
// $ExpectType Subscription<string>
eth.subscribe('pendingTransactions', null, function (error, transactionHash) { });
// $ExpectType Providers
web3_eth_1.Eth.providers;
// $ExpectType any
eth.givenProvider;
// $ExpectType BatchRequest
new eth.BatchRequest();
// $ExpectType string | null
eth.defaultAccount;
// $ExpectType string | number
eth.defaultBlock;
// $ExpectType HttpProvider | IpcProvider | WebsocketProvider | Web3EthereumProvider | CustomProvider
eth.currentProvider;
// $ExpectType Promise<string>
eth.getProtocolVersion();
// $ExpectType Promise<string>
eth.getProtocolVersion(function (error, protocolVersion) { });
// $ExpectType Promise<boolean | Syncing>
eth.isSyncing();
// $ExpectType Promise<boolean | Syncing>
eth.isSyncing(function (error, syncing) { });
// $ExpectType Promise<string>
eth.getCoinbase();
// $ExpectType Promise<string>
eth.getCoinbase(function (error, coinbaseAddress) { });
// $ExpectType Promise<boolean>
eth.isMining();
// $ExpectType Promise<boolean>
eth.isMining(function (error, mining) { });
// $ExpectType Promise<number>
eth.getHashrate();
// $ExpectType Promise<number>
eth.getHashrate(function (error, hashes) { });
// $ExpectType Promise<string>
eth.getGasPrice();
// $ExpectType Promise<string>
eth.getGasPrice(function (error, gasPrice) { });
// $ExpectType Promise<string[]>
eth.getAccounts();
// $ExpectType Promise<string[]>
eth.getAccounts(function (error, accounts) { });
// $ExpectType Promise<number>
eth.getBlockNumber();
// $ExpectType Promise<number>
eth.getBlockNumber(function (error, blockNumber) { });
// $ExpectType Promise<string>
eth.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1');
// $ExpectType Promise<string>
eth.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1', '1000');
// $ExpectType Promise<string>
eth.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1', '1000', function (error, balance) { });
// $ExpectType Promise<string>
eth.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 1000);
// $ExpectType Promise<string>
eth.getBalance('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 1000, function (error, balance) { });
// $ExpectType Promise<string>
eth.getStorageAt('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 2);
// $ExpectType Promise<string>
eth.getStorageAt('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 2, '1000');
// $ExpectType Promise<string>
eth.getStorageAt('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 2, '1000', function (error, balance) { });
// $ExpectType Promise<string>
eth.getStorageAt('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 2, 1000);
// $ExpectType Promise<string>
eth.getStorageAt('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 2, 1000, function (error, balance) { });
// $ExpectType Promise<string>
eth.getCode('0x407d73d8a49eeb85d32cf465507dd71d507100c1');
// $ExpectType Promise<string>
eth.getCode('0x407d73d8a49eeb85d32cf465507dd71d507100c1', '1000');
// $ExpectType Promise<string>
eth.getCode('0x407d73d8a49eeb85d32cf465507dd71d507100c1', '1000', function (error, balance) { });
// $ExpectType Promise<string>
eth.getCode('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 1000);
// $ExpectType Promise<string>
eth.getCode('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 1000, function (error, balance) { });
// $ExpectType Promise<Block>
eth.getBlock('0x407d73d8a49eeb85d32cf465507dd71d507100c1');
// $ExpectType Promise<Block>
eth.getBlock(345);
// $ExpectType Promise<Block>
eth.getBlock('0x407d73d8a49eeb85d32cf465507dd71d507100c1', true);
// $ExpectType Promise<Block>
eth.getBlock('0x407d73d8a49eeb85d32cf465507dd71d507100c1', false);
// $ExpectType Promise<Block>
eth.getBlock(345);
// $ExpectType Promise<Block>
eth.getBlock(345, true);
// $ExpectType Promise<Block>
eth.getBlock(345, false);
// $ExpectType Promise<Block>
eth.getBlock('0x407d73d8a49eeb85d32cf465507dd71d507100c1', function (error, block) { });
// $ExpectType Promise<Block>
eth.getBlock(345, function (error, block) { });
// $ExpectType Promise<Block>
eth.getBlock(345, true, function (error, block) { });
// $ExpectType Promise<Block>
eth.getBlock(345, false, function (error, block) { });
// $ExpectType Promise<Block>
eth.getBlock('0x407d73d8a49eeb85d32cf465507dd71d507100c1', true, function (error, block) { });
// $ExpectType Promise<Block>
eth.getBlock('0x407d73d8a49eeb85d32cf465507dd71d507100c1', false, function (error, block) { });
// $ExpectType Promise<number>
eth.getBlockTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1', function (error, numberOfTransactions) { });
// $ExpectType Promise<number>
eth.getBlockTransactionCount(345);
// $ExpectType Promise<number>
eth.getBlockTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1', function (error, numberOfTransactions) { });
// $ExpectType Promise<number>
eth.getBlockTransactionCount(345);
// $ExpectType Promise<Block>
eth.getUncle('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 4);
// $ExpectType Promise<Block>
eth.getUncle(345, 4);
// $ExpectType Promise<Block>
eth.getUncle('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 4, true);
// $ExpectType Promise<Block>
eth.getUncle('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 4, false);
// $ExpectType Promise<Block>
eth.getUncle('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 4, function (error, uncle) { });
// $ExpectType Promise<Block>
eth.getUncle(345, 4, function (error, uncle) { });
// $ExpectType Promise<Block>
eth.getUncle(345, 4, true);
// $ExpectType Promise<Block>
eth.getUncle(345, 4, false);
// $ExpectType Promise<Block>
eth.getUncle('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 4, true, function (error, uncle) { });
// $ExpectType Promise<Block>
eth.getUncle('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 4, false, function (error, uncle) { });
// $ExpectType Promise<Block>
eth.getUncle(345, 4, true, function (error, uncle) { });
// $ExpectType Promise<Block>
eth.getUncle(345, 4, false, function (error, uncle) { });
// $ExpectType Promise<Transaction>
eth.getTransaction('0x407d73d8a49eeb85d32cf465507dd71d507100c1');
// $ExpectType Promise<Transaction>
eth.getTransaction('0x407d73d8a49eeb85d32cf465507dd71d507100c1', function (error, transaction) { });
// $ExpectType Promise<Transaction>
eth.getTransactionFromBlock('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 2);
// $ExpectType Promise<Transaction>
eth.getTransactionFromBlock(345, 2);
// $ExpectType Promise<Transaction>
eth.getTransactionFromBlock('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 2, function (error, transaction) { });
// $ExpectType Promise<Transaction>
eth.getTransactionFromBlock(345, 2, function (error, transaction) { });
// $ExpectType Promise<TransactionReceipt>
eth.getTransactionReceipt('0x407d73d8a49eeb85d32cf465507dd71d507100c1');
// $ExpectType Promise<TransactionReceipt>
eth.getTransactionReceipt('0x407d73d8a49eeb85d32cf465507dd71d507100c1', function (error, transactionReceipt) { });
// $ExpectType Promise<number>
eth.getTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1');
// $ExpectType Promise<number>
eth.getTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 1000);
// $ExpectType Promise<number>
eth.getTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1', '1000');
// $ExpectType Promise<number>
eth.getTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1', function (error, count) { });
// $ExpectType Promise<number>
eth.getTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1', function (error, count) { });
// $ExpectType Promise<number>
eth.getTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 1000, function (error, count) { });
// $ExpectType Promise<number>
eth.getTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1', '1000', function (error, count) { });
var code = '603d80600c6000396000f3007c0';
// $ExpectType PromiEvent<TransactionReceipt>
eth.sendTransaction({
    from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',
    data: 'code'
});
// $ExpectType PromiEvent<TransactionReceipt>
eth.sendTransaction({
    from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',
    data: 'code'
}, function (error, hash) { });
// $ExpectType PromiEvent<TransactionReceipt>
eth.sendSignedTransaction('0xf889808609184e72a0008227109');
// $ExpectType PromiEvent<TransactionReceipt>
eth.sendSignedTransaction('0xf889808609184e72a0008227109', function (error, gas) { });
// $ExpectType Promise<string>
eth.sign('Hello world', '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe');
// $ExpectType Promise<string>
eth.sign('Hello world', 3);
// $ExpectType Promise<string>
eth.sign('Hello world', '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe', function (error, signature) { });
// $ExpectType Promise<string>
eth.sign('Hello world', 3, function (error, signature) { });
// $ExpectType Promise<RLPEncodedTransaction>
eth.signTransaction({
    from: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
    gasPrice: '20000000000',
    gas: '21000',
    to: '0x3535353535353535353535353535353535353535',
    value: '1000000000000000000',
    data: ''
});
// $ExpectType Promise<RLPEncodedTransaction>
eth.signTransaction({
    from: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
    gasPrice: '20000000000',
    gas: '21000',
    to: '0x3535353535353535353535353535353535353535',
    value: '1000000000000000000',
    data: ''
}, '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0');
// $ExpectType Promise<RLPEncodedTransaction>
eth.signTransaction({
    from: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
    gasPrice: '20000000000',
    gas: '21000',
    to: '0x3535353535353535353535353535353535353535',
    value: '1000000000000000000',
    data: ''
}, function (error, signedTransaction) { });
// $ExpectType Promise<RLPEncodedTransaction>
eth.signTransaction({
    from: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
    gasPrice: '20000000000',
    gas: '21000',
    to: '0x3535353535353535353535353535353535353535',
    value: '1000000000000000000',
    data: ''
}, '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0', function (error, signedTransaction) { });
// $ExpectType Promise<string>
eth.call({
    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
});
// $ExpectType Promise<string>
eth.call({
    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
}, 100);
// $ExpectType Promise<string>
eth.call({
    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
}, '100');
// $ExpectType Promise<string>
eth.call({
    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
}, function (error, data) { });
// $ExpectType Promise<string>
eth.call({
    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
}, '100', function (error, data) { });
// $ExpectType Promise<string>
eth.call({
    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
}, 100, function (error, data) { });
// $ExpectType Promise<string>
eth.call({
    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
}, 100, function (error, data) { });
// $ExpectType Promise<number>
eth.estimateGas({
    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
});
// $ExpectType Promise<number>
eth.estimateGas({
    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003'
}, function (error, gas) { });
// $ExpectType Promise<Log[]>
eth.getPastLogs({
    address: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    topics: ['0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234']
});
// $ExpectType Promise<Log[]>
eth.getPastLogs({
    address: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    topics: ['0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234']
}, function (error, logs) { });
// $ExpectType Promise<string[]>
eth.getWork();
// $ExpectType Promise<string[]>
eth.getWork(function (error, result) { });
// $ExpectType Promise<boolean>
eth.submitWork([
    '0x0000000000000001',
    '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
    '0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000'
]);
// $ExpectType Promise<boolean>
eth.submitWork([
    '0x0000000000000001',
    '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
    '0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000'
], function (error, result) { });
//# sourceMappingURL=eth.tests.js.map