function LiquidityForecast() {
  const forecast = [
    {
      region: "Jaipur",
      current: "820 XLM",
      expected: "High",
      trend: "↑ Increasing",
    },
    {
      region: "Delhi",
      current: "410 XLM",
      expected: "Medium",
      trend: "→ Stable",
    },
    {
      region: "Mumbai",
      current: "1350 XLM",
      expected: "Very High",
      trend: "↑ Increasing",
    },
    {
      region: "Lucknow",
      current: "260 XLM",
      expected: "Low",
      trend: "↓ Decreasing",
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
      <h2>Liquidity Forecast</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Region</th>
            <th>Current Liquidity</th>
            <th>Expected Demand</th>
            <th>Trend</th>
          </tr>
        </thead>

        <tbody>
          {forecast.map((item, index) => (
            <tr key={index}>
              <td>{item.region}</td>
              <td>{item.current}</td>
              <td>{item.expected}</td>
              <td>{item.trend}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LiquidityForecast;