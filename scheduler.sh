#!/bin/bash

while true
do
  echo "Running the Node.js script..."
  node scripts/transfer.js  # Replace 'script.js' with the path to your Node.js script
  echo "Waiting for 1 minute..."
  sleep 60  # Wait for 60 seconds
done
