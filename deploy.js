const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'smooth proud garment mean talk account waste because diesel desk define course',
  'https://rinkeby.infura.io/8XOYsoLLg4vk8ejb8qxa'
);

const web3 = new Web3(provider);