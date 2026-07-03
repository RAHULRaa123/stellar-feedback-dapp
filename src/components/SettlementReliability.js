function SettlementReliability() {
  const settlements = [
    {
      agent: "Rajesh Traders",
      success: "98%",
      avgTime: "18 sec",
      completed: 142,
    },
    {
      agent: "Digital Pay Hub",
      success: "99%",
      avgTime: "12 sec",
      completed: 201,
    },
    {
      agent: "SK Finance",
      success: "94%",
      avgTime: "27 sec",
      completed: 88,
    },
  ];

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Settlement Reliability</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Agent</th>
            <th>Success Rate</th>
            <th>Avg Time</th>
            <th>Completed</th>
          </tr>
        </thead>

        <tbody>
          {settlements.map((item, index) => (
            <tr key={index}>
              <td>{item.agent}</td>
              <td>{item.success}</td>
              <td>{item.avgTime}</td>
              <td>{item.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SettlementReliability;