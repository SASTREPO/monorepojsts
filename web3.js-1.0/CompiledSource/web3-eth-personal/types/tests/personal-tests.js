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
 * @file personal-tests.ts
 * @author Huan Zhang <huanzhang30@gmail.com>
 * @author Samuel Furter <samuel@ethereum.org>
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2018
 */
exports.__esModule = true;
var web3_eth_personal_1 = require("web3-eth-personal");
var personal = new web3_eth_personal_1.Personal('http://localhost:7545');
// $ExpectType Promise<string>
personal.newAccount('test password');
// $ExpectType Promise<string>
personal.newAccount('test password', function (error, address) { });
// $ExpectType Promise<string>
personal.sign('Hello world', '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe', 'test password!');
// $ExpectType Promise<string>
personal.sign('Hello world', '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe', 'test password!', function (error, signature) { });
// $ExpectType Promise<string>
personal.ecRecover('Hello world', '0x30755ed65396facf86c53e6217c52b4daebe72aa');
// $ExpectType Promise<string>
personal.ecRecover('Hello world', '0x30755ed65396facf86c53e6217c52b4daebe72aa', function (error, address) { });
// $ExpectType Promise<RLPEncodedTransaction>
personal.signTransaction({
    from: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
    gasPrice: '20000000000',
    gas: '21000',
    to: '0x3535353535353535353535353535353535353535',
    value: '1000000000000000000',
    data: ''
}, 'test password');
// $ExpectType Promise<RLPEncodedTransaction>
personal.signTransaction({
    from: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
    gasPrice: '20000000000',
    gas: '21000',
    to: '0x3535353535353535353535353535353535353535',
    value: '1000000000000000000',
    data: ''
}, 'test password', function (error, RLPEncodedTransaction) { });
// $ExpectType Promise<string>
personal.sendTransaction({
    from: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
    gasPrice: '20000000000',
    gas: '21000',
    to: '0x3535353535353535353535353535353535353535',
    value: '1000000000000000000',
    data: ''
}, 'test password');
// $ExpectType Promise<string>
personal.sendTransaction({
    from: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
    gasPrice: '20000000000',
    gas: '21000',
    to: '0x3535353535353535353535353535353535353535',
    value: '1000000000000000000',
    data: ''
}, 'test password', function (error, transactionHash) { });
// $ExpectType Promise<boolean>
personal.unlockAccount('0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe', 'test password!', 600);
// $ExpectType Promise<boolean>
personal.unlockAccount('0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe', 'test password!', 600, function (error) { });
// $ExpectType Promise<boolean>
personal.lockAccount('0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe');
// $ExpectType Promise<boolean>
personal.lockAccount('0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe', function (error, sucess) { });
// $ExpectType Promise<string[]>
personal.getAccounts();
// $ExpectType Promise<string[]>
personal.getAccounts(function (error, accounts) { });
// $ExpectType Promise<string>
personal.importRawKey('privateKey', 'blah2');
//# sourceMappingURL=personal-tests.js.map