function BusinessDashboard() {
  const stats = [
    {
      title: "Total Feedback",
      value: 24,
    },
    {
      title: "Average Rating",
      value: "4.8",
    },
    {
      title: "Rewards Distributed",
      value: "120 XLM",
    },
    {
      title: "Reputation Score",
      value: "96%",
    },
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h2>Business Dashboard</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{item.title}</h3>
            <h2>{item.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessDashboard;