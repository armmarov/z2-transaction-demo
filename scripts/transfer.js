// Import ethers.js from Hardhat
const { ethers: hardhatEthers } = require("hardhat");
const { ethers: standaloneEthers, Wallet} = require("ethers");

const tokenContractAddress = "0xeA952D5F013DD98EB8D8a3Fe51922A43A09bbEfa"; 
const ownerAddress = "0x1B4207C0B21206a34fFAE224a9b2309d0C087354";

async function createEthAddress() {
  // Generate a new random wallet
  const wallet = standaloneEthers.Wallet.createRandom();

  // The wallet object contains a private key, public key, and address
  console.log("Recipient Address:", wallet.address);           // Ethereum address
  console.log("Private Key:", wallet.privateKey);    // Private key (keep this safe!)

  // Optional: Wallet mnemonic (requires `brain wallet`)
  console.log("Mnemonic:", wallet.mnemonic.phrase);  // Seed phrase to recover the wallet

  return wallet;
}

async function checkContractFunc() {
  // Connect to the token contract using its ABI and address
  const tokenContract = await hardhatEthers.getContractAt("Token", tokenContractAddress);

  // Retrieve the ABI interface from the contract
  const contractInterface = tokenContract.interface;

  // List all available functions
  console.log("Available Functions:");
  for (const fragment of Object.values(contractInterface.fragments)) {
    console.log(fragment.name); // Logs each function name
  }

}

async function getAddressFromPrivateKey(privateKey) {
  try {
    // Generate a wallet instance from the private key
    const wallet = new Wallet(privateKey);
    
    // Get the address associated with the private key
    const address = wallet.address;

    console.log(`Owner Address: ${address}`);
    return address;
  } catch (error) {
    console.error(`Error deriving address: ${error.message}`);
  }
}

async function getTokenBalance(userAddress) {
  
  console.log("tokenContractAddress", tokenContractAddress);

   // Connect to the token contract using its ABI and address
  const tokenContract = await hardhatEthers.getContractAt("Token", tokenContractAddress);


  // Call `balanceOf` to get the raw balance
  const rawBalance = await tokenContract.balanceOf(userAddress);


  console.log(`Balance of user ${userAddress}: ${rawBalance}`);
}


async function main() {
  // Replace with the deployed token contract address
  

  // await checkContractFunc();
  // await getTokenBalance(ownerAddress);

  // Replace with the account that will receive the tokens
  let wallet = await createEthAddress();
  const recipientAddress = wallet.address;

  // Define the amount to transfer (in token's smallest unit, e.g., wei)
  const transferAmount = "1"; // Example: 10 tokens with 18 decimals

  // Connect to the token contract using its ABI and address
  const tokenContract = await hardhatEthers.getContractAt("Token", tokenContractAddress);

  // Execute the transfer
  console.log(`Transferring ${transferAmount.toString()} tokens to ${recipientAddress}...`);
  const tx = await tokenContract.transfer(recipientAddress, transferAmount);

  // Wait for the transaction to be confirmed
  await tx.wait();
  console.log(`Transfer successful! Transaction hash: ${tx.hash}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });