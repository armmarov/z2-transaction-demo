# Hardhat Token Deployment Project For Z2 Chain

This project demonstrates the deployment and interaction of an Ethereum smart contract using Hardhat. The project focuses on deploying a contract with **Hardhat Ignition** and performing token transfers via a custom script.

---

## **Features**
- Smart contract deployment using **Hardhat Ignition**.
- Token transfer functionality through Node.js scripts.
- Support for custom networks (e.g., `z2`).

---

## **Table of Contents**
- [Getting Started](#getting-started)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [Directory Structure](#directory-structure)

---

## **Getting Started**
Follow these steps to install dependencies, deploy a new contract, and run token transfer operations.

### Install Dependencies
Run the following command to install the required project dependencies:

```bash
npm install
```

### Deploy a New Contract
To deploy the contract using **Hardhat Ignition**, use the following command:

```bash
npx hardhat ignition deploy ./ignition/modules/Token.js --network z2
```

### Transfer Tokens
To transfer tokens between accounts, execute the transfer script:

```bash
npx hardhat run scripts/transfer.js --network z2
```

---

## **Requirements**
- **Node.js**: Version 14.0.0 or higher
- **npm (Node Package Manager)**: Comes with Node.js
- **Hardhat**: Ethereum development environment
- **Hardhat Ignition Plugin**: Used for deployment workflows

---

## **Setup**
1. Clone the repository:

   ```bash
   git clone https://github.com/armmarov/z2-transaction-demo.git
   cd z2-transaction-demo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the network settings in the `hardhat.config.js` file. For example:

   ```javascript
   module.exports = {
     networks: {
       z2: {
         url: "https://z2-test-node.zetrix.com",
         accounts: ["0xYourPrivateKey"]
       }
     },
   };
   ```

4. Add sensitive data (e.g., private keys or API keys) to a `.env` file and load it using the `dotenv` package. Do not commit `.env` to your version control system.

---

## **Usage**

### Deploying Contracts
Run the **Hardhat Ignition** command to deploy the contract:

```bash
npx hardhat ignition deploy ./ignition/modules/Token.js --network z2
```
This will use the module located at `./ignition/modules/Token.js` to deploy the smart contract on the `z2` network.

### Transferring Tokens
After deploying the contract, you can transfer tokens between accounts using the custom transfer script:

```bash
npx hardhat run scripts/transfer.js --network z2
```

You can modify the `script/transfer.js` file to specify the sender, recipient, and amount of tokens to transfer.

---

## **Directory Structure**
Here’s a quick overview of the project structure:

```plaintext
├── contracts/                  # Smart contracts (written in Solidity)
│   └── Token.sol               # The Token smart contract
├── ignition/                   # Modules for Hardhat Ignition deployment
│   └── modules/
│       └── Token.js            # Script to define the Ignition deployment workflow
├── scripts/                    # Custom scripts for interacting with contracts
│   └── transfer.js             # Token transfer script
├── test/                       # Test cases for smart contracts
│   └── Token.test.js           # Tests for the Token smart contract
├── .gitignore                  # Ignored files for Git
├── hardhat.config.js           # Hardhat configuration file
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

---

## **License**
This repository is licensed under the [MIT License](LICENSE).

Feel free to modify it as per your needs.

---

## **Contributing**
If you'd like to contribute to this project:
1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a pull request.

---

Let me know if you need further assistance! 😊
