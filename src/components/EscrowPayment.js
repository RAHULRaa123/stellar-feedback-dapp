import { useState } from "react";

function EscrowPayment() {
  const [buyer, setBuyer] = useState("");
  const [business, setBusiness] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Escrow Payment</h2>

      <input
        placeholder="Buyer Wallet"
        value={buyer}
        onChange={(e) => setBuyer(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Business Wallet"
        value={business}
        onChange={(e) => setBusiness(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Amount (XLM)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <button>Lock Payment</button>

      <button style={{ marginLeft: "10px" }}>
        Release Payment
      </button>

      <button style={{ marginLeft: "10px" }}>
        Cancel
      </button>

      <h3>Status : Waiting for Confirmation</h3>
    </div>
  );
}

export default EscrowPayment;