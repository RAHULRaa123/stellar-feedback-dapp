import React, { useState } from "react";
import { requestAccess, getAddress } from "@stellar/freighter-api";

const Header = ({ setPubKey }) => {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState("");

  const connectWallet = async () => {
    try {
      // Step 1: Permission
      await requestAccess();

      // Step 2: Get address
      const res = await getAddress();

      if (res.error) {
        alert("Error getting address");
        return;
      }

      setPublicKey(res.address);
      setPubKey(res.address); // important
      setConnected(true);

      alert("Connected: " + res.address);

    } catch (e) {
      console.error(e);
      alert("Connection failed");
    }
  };

  return (
    <div>
      <h2>Stellar dApp</h2>

      {publicKey && (
        <div>
          {publicKey.slice(0, 4)}...{publicKey.slice(-4)}
        </div>
      )}

      <button onClick={connectWallet}>
        {connected ? "Connected" : "Connect Wallet"}
      </button>
    </div>
  );
};

export default Header;