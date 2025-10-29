import { network } from "hardhat";

const { ethers } = await network.connect({
  network: "celo"
});

console.log("Sending transaction using Celo");

const [sender] = await ethers.getSigners();

console.log("Sending 1 wei from", sender.address, "to itself");

console.log("Sending L2 transaction");
const tx = await sender.sendTransaction({
  to: sender.address,
  value: 1n,
});

await tx.wait();

console.log("Transaction sent successfully");
