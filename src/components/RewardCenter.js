import { useState } from "react";

function RewardCenter() {
  const [wallet, setWallet] = useState("");
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");

  const [history, setHistory] = useState([]);

  const sendReward = () => {
    if (!wallet || !amount || !reason) {
      alert("Please fill all fields");
      return;
    }

    const reward = {
      wallet,
      amount,
      reason,
      date: new Date().toLocaleString(),
      status: "Success",
    };

    setHistory([reward, ...history]);

    alert("Reward Sent Successfully!");

    setWallet("");
    setAmount("");
    setReason("");
  };

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Reward Center</h2>

      <input
        type="text"
        placeholder="Wallet Address"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Reward Amount (XLM)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      <br /><br />

      <button onClick={sendReward}>
        Send Reward
      </button>

      <hr />

      <h3>Reward History</h3>

      {history.length === 0 ? (
        <p>No rewards sent.</p>
      ) : (
        history.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <p><b>Wallet:</b> {item.wallet}</p>
            <p><b>Amount:</b> {item.amount} XLM</p>
            <p><b>Reason:</b> {item.reason}</p>
            <p><b>Date:</b> {item.date}</p>
            <p><b>Status:</b> {item.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default RewardCenter;