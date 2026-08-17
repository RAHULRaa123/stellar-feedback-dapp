function TransactionHistory() {
  const transactions = [
    {
      id: "TXN001",
      wallet: "GABX....93HF",
      amount: "10 XLM",
      status: "Success",
      date: "03 Jul 2026",
    },
    {
      id: "TXN002",
      wallet: "GBPL....82AA",
      amount: "20 XLM",
      status: "Pending",
      date: "02 Jul 2026",
    },
    {
      id: "TXN003",
      wallet: "GDYX....44PK",
      amount: "15 XLM",
      status: "Success",
      date: "01 Jul 2026",
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
      <h2>Transaction History</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Wallet</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{tx.id}</td>
              <td>{tx.wallet}</td>
              <td>{tx.amount}</td>
              <td>{tx.status}</td>
              <td>{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;