import { useState } from "react";

function BusinessRegistration() {
  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    wallet: "",
    businessType: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = () => {
    const {
      businessName,
      ownerName,
      email,
      wallet,
      businessType,
      city,
    } = form;

    if (
      !businessName ||
      !ownerName ||
      !email ||
      !wallet ||
      !businessType ||
      !city
    ) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem(
      "businessProfile",
      JSON.stringify(form)
    );

    alert("Business Registered Successfully!");

    setForm({
      businessName: "",
      ownerName: "",
      email: "",
      wallet: "",
      businessType: "",
      city: "",
    });
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "30px auto",
        padding: "25px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Business Registration</h2>

      <input
        type="text"
        name="businessName"
        placeholder="Business Name"
        value={form.businessName}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="ownerName"
        placeholder="Owner Name"
        value={form.ownerName}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="wallet"
        placeholder="Wallet Address"
        value={form.wallet}
        onChange={handleChange}
      />

      <br /><br />

      <select
        name="businessType"
        value={form.businessType}
        onChange={handleChange}
      >
        <option value="">Select Business Type</option>
        <option>Restaurant</option>
        <option>Retail Shop</option>
        <option>Hospital</option>
        <option>Education</option>
        <option>Other</option>
      </select>

      <br /><br />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleRegister}>
        Register Business
      </button>
    </div>
  );
}

export default BusinessRegistration;