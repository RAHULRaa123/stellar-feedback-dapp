import React, { useState } from "react";
import { connectWallet, getBalance } from "./Freighter";

const Header = ({ setPubKey }) => {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState("");
  const [balance, setBalance] = useState("0");

  const handleConnect = async () => {
    try {
      // 🔥 Direct connect (no checkConnection)
      const key = await connectWallet();

      if (!key) {
        alert("Connection failed");
        return;
      }

      const bal = await getBalance();

      setPublicKey(key);
      setPubKey(key);
      setBalance(Number(bal).toFixed(2));
      setConnected(true);

      console.log("Connected:", key);

    } catch (e) {
      console.error(e);
      alert("Connection failed");
    }
  };

  return (
    <div>
      <h2>Stellar dApp</h2>

      {publicKey && (
        <>
          <div>{`${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`}</div>
          <div>Balance: {balance} XLM</div>
        </>
      )}

      <button onClick={handleConnect}>
        {connected ? "Connected" : "Connect Wallet"}
      </button>
    </div>
  );
};

export default Header;