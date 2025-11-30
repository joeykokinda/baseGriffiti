import { ethers } from "hardhat";

async function main() {
  const graffiti = await ethers.deployContract("BaseGraffiti");

  await graffiti.waitForDeployment();

  console.log("BaseGraffiti deployed at:", await graffiti.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


