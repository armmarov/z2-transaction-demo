#!/bin/bash

while true
do
  echo "Running the Node.js script..."
  npx hardhat run scripts/transfer.js --network z2  # Replace 'script.js' with the path to your Node.js script
  echo "Waiting for 30 sec..."
  sleep 30  # Wait for 60 seconds
done
