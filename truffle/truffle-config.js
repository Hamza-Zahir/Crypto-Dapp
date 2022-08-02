const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const bscscan_api_key = fs.readFileSync(".bscscan_api_key").toString().trim();
const etherscan_API_KEY = fs.readFileSync(".etherscan_API_KEY").toString().trim();

module.exports = {
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: etherscan_API_KEY,
  },
  //          bscscan: bscscan_api_key


  contracts_build_directory: "../client/src/contracts",
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/28ee68a21d1d44ce8e1fbd5f029cdcc4`),
      network_id: 3,       
      gas: 5500000,        
      confirmations: 2,    
      timeoutBlocks: 200,  
      skipDryRun: true     
    },
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/28ee68a21d1d44ce8e1fbd5f029cdcc4`),
      network_id: 42,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/28ee68a21d1d44ce8e1fbd5f029cdcc4`),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      // gas: 5500000,
      // confirmations: 2,
      // timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.14",     
    }
  },

  // ropsten:  0xCf81Ec8d10851EaF632Be446595fA0eA29BED8e6
  // kovan:    0x9799b24318b5D62C317408E994b17716740897B8
  // rinkeby:  0x5Eb9Bd07EA0Eb86b771d45FA31EeFbfC0B72b6e6
  // bscTestnet:  0xe37533BD809335Ef571b8F1694e7c8613bD13e8f
};
