import hre from "hardhat";

async function main() {
  const MessagePortal = await hre.ethers.getContractFactory("MessagePortal"); // your contract name
  const messagePortal = await MessagePortal.deploy("Hello, Tesfa!"); // optional constructor argument

  await messagePortal.waitForDeployment();

  console.log(`✅ Contract deployed at: ${await messagePortal.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
