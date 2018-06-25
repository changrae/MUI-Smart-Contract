var Migrations = artifacts.require("./Migrations.sol");

module.exports = (deployer) => {
    deployer.deploy(Migrations)
        .then(() => Migrations.deployed())
        .then(registry => new Promise(resolve => setTimeout(() => resolve(registry), 100000)))
        .catch(e => console.log(`Deployer failed. ${e}`));
};
