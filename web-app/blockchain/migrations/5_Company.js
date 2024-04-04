const contract = artifacts.require("Company");

module.exports = async function (deployer, network, accounts) {
  console.log("Deploying contracts...");

  // 打印正在使用的部署账户
  const deployingAccount = accounts[1];
  console.log(`Deploying account: ${deployingAccount}`);

  // 获取并打印账户余额
  const balance = await web3.eth.getBalance(deployingAccount);
  console.log(`Account balance: ${web3.utils.fromWei(balance, 'ether')} ETH`);

  // 部署迁移合约
    governmentAdd = "0x16b45bc2B80b339092072b6f97210b9786faE5e4";
    uenNo = "Abc2018123897";
    companyName = "Abc Company";
    add = "50 Abc AVE, Singapore 639798";
    email = "office@abc.com";
    eToken = "0xeb19307E403a43825dFE9e00146dE5bF63e39997";
  await deployer.deploy(contract, governmentAdd, uenNo, companyName, add, email, eToken, { from: deployingAccount });
};