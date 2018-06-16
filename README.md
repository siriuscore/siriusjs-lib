# siriusjs-lib

This is an extension of bitcoinjs-lib.
It extends the network type of bitcoinjs-lib.
It also provides a useful lib to help you building SIRX transactions.

## Installation

Include the project folder in your project.

## Setup

### Node.js

``` javascript
var siriusjs = require('siriusjs-lib')
```

## New features

### Utils

#### Utils.selectTxs

```javascript
/**
 * This is a function for selecting SIRX utxos to build transactions
 * the transaction object takes at least 3 fields, value(unit is 1e-8 SIRX) , confirmations and isStake
 *
 * @param [transaction] unspentTransactions
 * @param Number amount(unit: SIRX)
 * @param Number fee(unit: SIRX)
 * @returns [transaction]
 */
function selectTxs(unspentTransactions, amount, fee)
```

#### Utils.buildPubKeyHashTransaction

```javascript
/**
 * This is a helper function to build a pubkeyhash transaction
 * the transaction object takes at least 5 fields, value(unit is 1e-8 SIRX), confirmations, isStake, hash and pos
 *
 * @param bitcoinjs-lib.KeyPair keyPair
 * @param String to
 * @param Number amount(unit: SIRX)
 * @param Number fee(unit: SIRX)
 * @param [transaction] utxoList
 * @returns String the built tx
 */
function buildPubKeyHashTransaction(keyPair, to, amount, fee, utxoList)
```

#### Utils.buildCreateContractTransaction

```javascript
/**
 * This is a helper function to build a create-contract transaction
 * the transaction object takes at least 5 fields, value(unit is 1e-8 SIRX), confirmations, isStake, hash and pos
 *
 * @param bitcoinjs-lib.KeyPair keyPair
 * @param String code The contract byte code
 * @param Number gasLimit
 * @param Number gasPrice(unit: 1e-8 SIRX/gas)
 * @param Number fee(unit: SIRX)
 * @param [transaction] utxoList
 * @returns String the built tx
 */
function buildCreateContractTransaction(keyPair, code, gasLimit, gasPrice, fee, utxoList)
```

#### Utils.buildSendToContractTransaction

```javascript
/**
 * This is a helper function to build a send-to-contract transaction
 * the transaction object takes at least 5 fields, value(unit is 1e-8 SIRX), confirmations, isStake, hash and pos
 *
 * @param bitcoinjs-lib.KeyPair keyPair
 * @param String contractAddress The contract address
 * @param String encodedData The encoded abi data
 * @param Number gasLimit
 * @param Number gasPrice(unit: 1e-8 SIRX/gas)
 * @param Number fee(unit: SIRX)
 * @param [transaction] utxoList
 * @returns String the built tx
 */
function buildSendToContractTransaction(keyPair, contractAddress, encodedData, gasLimit, gasPrice, fee, utxoList)
```