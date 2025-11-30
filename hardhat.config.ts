import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.23",
  },
  defaultNetwork: "hardhat",
  networks: {
    // Base mainnet (for later)
    "base-mainnet": {
      url: "https://mainnet.base.org",
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1_000_000_000,
    },
    // Base Sepolia testnet
    "base-sepolia": {
      url: "https://sepolia.base.org",
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1_000_000_000,
    },
    // Local Dev Node
    "base-local": {
      url: "http://localhost:8545",
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1_000_000_000,
    },
  },
  etherscan: {
    apiKey: {
      "base-sepolia": "PLACEHOLDER_STRING",
    },
    customChains: [
      {
        network: "base-sepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org",
        },
      },
    ],
  },
};

export default config;

