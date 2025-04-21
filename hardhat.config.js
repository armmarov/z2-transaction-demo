require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    z2: {
      url: 'https://z2-test-node.zetrix.com',
      accounts: ['0x84d13d24898bddb658b9f8acb00828e3b4b73e4bb69836165ed51c00c7d6ea32'],
    },
  },
};
