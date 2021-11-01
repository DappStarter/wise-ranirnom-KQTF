require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun foot champion rescue place evidence hunt hat army general'; 
let testAccounts = [
"0xfa03de3f60b1381d61015f9ffa5dbc85f352ca3aee7d2916d6d6ae683f67d651",
"0xfe21e5542f4fbf44ced76e29ad8ae5970250cd3670cc7cfbdb83f0571514490f",
"0xebcb1185b4cd48e85974f1e91c7bc42daade55b3c1f721f0b948cd3caac2ba1b",
"0x30ed7578bbdaabb0430975dd4285862818687a8bd7fe1e647e64cba78f9ccd0d",
"0x88f4469c64e88049332156f80975df493094f92dcbdcf5df6df6ec58a2d1516e",
"0x1ffe27e2339574c25e6ee107b6205acbe9c050481499585c1bf614a5f40f9a1a",
"0xe03c8d1c8cb4ec7d2deab7c123a54c2b2aa5d9528b99a986c3a4b53b30cc3339",
"0x825f7aea57d994f2f75e029f168b61b1d5bb55e6baa568b975e03ad46062be07",
"0x67fa1d18b3e4c611a4c41168424cab5c0c558c9ad52b6dd0cf78e5d3031b5f66",
"0x1bb131a74e4a5b371f5d87ea1082bd87ed21e00a9276e444e31191782d1988fa"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


