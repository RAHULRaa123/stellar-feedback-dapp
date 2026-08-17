function BusinessVerification() {
  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Business Verification</h2>

      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td>Business License</td>
            <td>Verified </td>
          </tr>

          <tr>
            <td>Wallet Ownership</td>
            <td>Verified </td>
          </tr>

          <tr>
            <td>Email</td>
            <td>Verified </td>
          </tr>

          <tr>
            <td>Phone Number</td>
            <td>Pending </td>
          </tr>

          <tr>
            <td>Trust Badge</td>
            <td>Silver </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BusinessVerification;