const MuiToken = artifacts.require("./MuiToken.sol");
const ACB = artifacts.require("./PhaseBasedACB.sol");
const Airdrop = artifacts.require("./Airdrop.sol");

const initialSellPrice = 6 * 10 ** 9;       // 1 ether = 6000 MUI
// TODO: Change this number if you want to fund ACB contract with ether
const initialEtherDeposit = 5 * 10 ** 18;   // 5 ether
// TODO: Do not use this address in mainnet deployment!!!!!
const TOKEN_ADDRESS = '0xb83acc3c4432c34855f5009d0ef944668790c445';

// TODO: Comment out this function in mainnet deployment!!!!!!!
module.exports = (deployer, network, accounts) => {
    deployer.deploy(ACB, MuiToken.address, 0, initialSellPrice, {value: initialEtherDeposit})
//    deployer.deploy(ACB, TOKEN_ADDRESS, 0, initialSellPrice, {value: initialEtherDeposit})
        .then( _ => console.log('ACB contract has been deployed successfully.'));
};

// TODO: Comment out this function in testnet deployment
// module.exports = (deployer, network, accounts) => {
//     // Deploy MuiToken contract
//     deployer.deploy(MuiToken, accounts[0]).then(async () => {
//         // Deploy ACB contract
//         await deployer.deploy(ACB, MuiToken.address, 0, initialSellPrice, {value: initialEtherDeposit});
//         // TODO: We will deploy Airdrop contract later separately!!!
//         //await deployer.deploy(Airdrop, MuiToken.address);
//     });
// };
