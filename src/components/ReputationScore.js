function ReputationScore() {

  const agents = [
    {
      name: "Rahul Store",
      score: 96,
      completed: 182,
      failed: 2,
    },
    {
      name: "Sharma Mart",
      score: 91,
      completed: 151,
      failed: 6,
    },
    {
      name: "City Traders",
      score: 88,
      completed: 124,
      failed: 8,
    },
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h2>Agent Reputation Score</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Business</th>
            <th>Reputation</th>
            <th>Completed</th>
            <th>Failed</th>
          </tr>
        </thead>

        <tbody>
          {agents.map((agent, index) => (
            <tr key={index}>
              <td>{agent.name}</td>
              <td>{agent.score}%</td>
              <td>{agent.completed}</td>
              <td>{agent.failed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReputationScore;