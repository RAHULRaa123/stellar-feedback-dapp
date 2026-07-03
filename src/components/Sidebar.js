function Sidebar({ setPage }) {
  const menus = [
    "Home",
    "Registration",
    "Profile",
    "Reviews",
    "Dashboard",
    "Rewards",
    "Transactions",
    "Reputation",
    "Verification",
    "Escrow",
    "Agents",
    "Settlement",
    "Forecast",
  ];

  return (
    <div
      style={{
        width: "220px",
        background: "#1e293b",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>Business Panel</h2>

      {menus.map((menu) => (
        <button
          key={menu}
          onClick={() => setPage(menu)}
          style={{
            display: "block",
            width: "100%",
            margin: "10px 0",
            padding: "10px",
            background: "#334155",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {menu}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;