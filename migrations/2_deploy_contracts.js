var ProofOfExistence1 = artifacts.require("../contracts/ProofOfExistence3.sol");

module.exports = function(deployer) {
  deployer.deploy(ProofOfExistence1);
};