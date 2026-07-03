import { useState } from "react";

function BusinessRegistration() {
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");

  const handleRegister = () => {
    if (!businessName || !ownerName) {
      alert("Please fill all fields");
      return;
    }

    alert("Business Registered Successfully!");
  };

  return (
    <div
      style={{
        padding: "20px",
        margin: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2>🏢 Business Registration</h2>

      <input
        type="text"
        placeholder="Business Name"
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Owner Name"
        value={ownerName}
        onChange={(e) => setOwnerName(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleRegister}>
        Register Business
      </button>
    </div>
  );
}

export default BusinessRegistration;