import { useState } from "react";

function BusinessDirectory() {
  const business = JSON.parse(localStorage.getItem("businessProfile"));

  const [search, setSearch] = useState("");

  if (!business) {
    return (
      <div style={{ margin: "20px" }}>
        <h2>Business Directory</h2>
        <p>No registered businesses.</p>
      </div>
    );
  }

  const match =
    business.businessName.toLowerCase().includes(search.toLowerCase()) ||
    business.city.toLowerCase().includes(search.toLowerCase()) ||
    business.businessType.toLowerCase().includes(search.toLowerCase());

  return (
    <div style={{ margin: "20px" }}>
      <h2>Business Directory</h2>

      <input
        type="text"
        placeholder="Search by name, city or type..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      {match && (
        <div
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{business.businessName}</h3>

          <p>Owner : {business.ownerName}</p>

          <p>Type : {business.businessType}</p>

          <p>City : {business.city}</p>
        </div>
      )}
    </div>
  );
}

export default BusinessDirectory;