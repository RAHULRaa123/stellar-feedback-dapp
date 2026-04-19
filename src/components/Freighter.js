import { isConnected, requestAccess, getPublicKey } from "@stellar/freighter-api";
import { StellarWalletsKit } from "@creit.tech/stellar-wallets-kit";
import { Horizon } from "stellar-sdk";

// 🔥 Mobile Wallet Kit
const kit = new StellarWalletsKit({
  network: "TESTNET"
});

// 🔥 CONNECT (AUTO detect)
export const connectWallet = async () => {
  try {
    // 🧠 1. Try Freighter (desktop)
    const connected = await isConnected();

    if (connected) {
      const access = await requestAccess();

      if (access.error) {
        console.log("Freighter denied");
      } else {
        const key = await getPublicKey();
        return key;
      }
    }

    // 📱 2. Fallback → Mobile Wallet Kit
    const { address } = await kit.openModal();
    return address;

  } catch (err) {
    console.error("Connect error:", err);
    return null;
  }
};

// 🔥 BALANCE
export const getBalance = async (address) => {
  try {
    const server = new Horizon.Server("https://horizon-testnet.stellar.org");
    const account = await server.loadAccount(address);

    const balance = account.balances.find(
      (b) => b.asset_type === "native"
    );

    return balance ? balance.balance : "0";
  } catch (err) {
    console.error("Balance error:", err);
    return "0";
  }
};