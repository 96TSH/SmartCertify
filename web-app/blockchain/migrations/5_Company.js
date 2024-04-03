const contract = artifacts.require("Company");

module.exports = async function (deployer, network, accounts) {
  console.log("Deploying contracts...");

  // 打印正在使用的部署账户
  const deployingAccount = accounts[0];
  console.log(`Deploying account: ${deployingAccount}`);

  // 获取并打印账户余额
  const balance = await web3.eth.getBalance(deployingAccount);
  console.log(`Account balance: ${web3.utils.fromWei(balance, 'ether')} ETH`);

  // 部署迁移合约
    governmentAdd = "0x273c52A3C50190FFb7E5F2FF86d4D0CfE477D0fd";
    uenNo = "Abc2018123897";
    companyName = "Abc Company";
    add = "50 Abc AVE, Singapore 639798";
    email = "office@abc.com";
    eToken = "0x12F4DA9EA5bFb53F81Ce9d4FE2D247b1c136cF75";
  await deployer.deploy(contract, governmentAdd, uenNo, companyName, add, email, eToken);
};