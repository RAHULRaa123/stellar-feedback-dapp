function AgentDiscovery() {
  const agents = [
    {
      name: "Rajesh Traders",
      city: "Jaipur",
      liquidity: "850 XLM",
      reputation: "98%",
      status: "Available",
    },
    {
      name: "SK Finance",
      city: "Delhi",
      liquidity: "420 XLM",
      reputation: "94%",
      status: "Busy",
    },
    {
      name: "Digital Pay Hub",
      city: "Mumbai",
      liquidity: "1260 XLM",
      reputation: "99%",
      status: "Available",
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
      <h2>Agent Discovery</h2>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Agent</th>
            <th>City</th>
            <th>Liquidity</th>
            <th>Reputation</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {agents.map((agent, index) => (
            <tr key={index}>
              <td>{agent.name}</td>
              <td>{agent.city}</td>
              <td>{agent.liquidity}</td>
              <td>{agent.reputation}</td>
              <td>{agent.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AgentDiscovery;