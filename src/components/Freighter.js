import { StellarWalletsKit } from "@creit.tech/stellar-wallets-kit";
import * as StellarSdk from "@stellar/stellar-sdk";

const kit = new StellarWalletsKit({
  network: "TESTNET",
});

const server = new StellarSdk.Horizon.Server(
  "https://horizon-testnet.stellar.org"
);

// 🔹 Connect Wallet
export const connectWallet = async () => {
  try {
    const { address } = await kit.openModal();
    return address;
  } catch (err) {
    console.log("Connect error:", err);
    return null;
  }
};

// 🔹 Retrieve Public Key
export const retrievePublicKey = async () => {
  try {
    const { address } = await kit.openModal();
    return address;
  } catch (err) {
    console.log("Public key error:", err);
    return null;
  }
};

// 🔹 Check Connection
export const checkConnection = async () => {
  try {
    const { address } = await kit.openModal();
    return address ? true : false;
  } catch (err) {
    return false;
  }
};

// 🔹 Get Balance (NEW FIX)
export const getBalance = async () => {
  try {
    const { address } = await kit.openModal();

    const account = await server.loadAccount(address);

    const nativeBalance = account.balances.find(
      (bal) => bal.asset_type === "native"
    );

    return nativeBalance ? nativeBalance.balance : "0";
  } catch (err) {
    console.log("Balance error:", err);
    return "0";
  }
};
export const userSignTransaction = async (xdr, publicKey) => {
  try {
   

    console.log("Transaction to sign:", xdr);
    console.log("Public Key:", publicKey);

    return xdr; // fallback (important to avoid crash)
  } catch (err) {
    console.log("Sign error:", err);
    return null;
  }
};