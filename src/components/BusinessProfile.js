function BusinessProfile() {
  const data = JSON.parse(localStorage.getItem("businessProfile"));

  if (!data) {
    return (
      <div style={{ margin: "20px" }}>
        <h2>Business Profile</h2>
        <p>No business registered yet.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Business Profile</h2>

      <p><strong>Business:</strong> {data.businessName}</p>
      <p><strong>Owner:</strong> {data.ownerName}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Wallet:</strong> {data.wallet}</p>
      <p><strong>Business Type:</strong> {data.businessType}</p>
      <p><strong>City:</strong> {data.city}</p>
    </div>
  );
}

export default BusinessProfile;