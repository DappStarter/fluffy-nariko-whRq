require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name rescue magic essay hidden kangaroo army gaze'; 
let testAccounts = [
"0x958dc030cb294a5d15828d1d5f2d63ea81ccaf715bc709b684058fa618357d50",
"0x7b0ab901fb0d7071a985d7388b788feba45f91666f6c090424d17590db3ecf03",
"0x0e81b9a6025c47e508389b13dfa09de75ff508631130cad1f0e0dd640cbf6785",
"0x1fbc6fd65def528a30e7dcd5f7204727f809bdb5bd869174b398be71f83dd4b1",
"0xb248e9418feeaf7517acefea61958650c5f34683a5331c7db688840373b3e884",
"0xb26cfd1646873df3e66f7253e5fd3116d73d0f75e81df5e608285b8ecf9d9edd",
"0x0672f62bf9fc15ac61f1007714230dde794162320902818bf843b3ccbbc72252",
"0x52aae28af5f3aa11862e58230a7a52b7fcc5f9b1f75c24f342ee9fe125179115",
"0xcb9ae52b57a8435f714b9ad20a069a7d6bc5f7eef9420aac956a7b97ea3ca8b2",
"0xc665f2aad8ded1673cf5b844aaddc976b11fa6539f88c773511e22c7ce6882d1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

