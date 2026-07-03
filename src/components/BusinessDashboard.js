import { useEffect, useState } from "react";

function BusinessDashboard() {
  const [stats, setStats] = useState({
    totalReviews: 0,
    averageRating: 0,
    totalBusinesses: 0,
    rewards: 0,
  });

  useEffect(() => {
    const reviews =
      JSON.parse(localStorage.getItem("reviews")) || [];

    const business =
      JSON.parse(localStorage.getItem("businessProfile"));

    const totalReviews = reviews.length;

    const totalRating = reviews.reduce(
      (sum, item) => sum + Number(item.rating),
      0
    );

    const averageRating =
      totalReviews > 0
        ? (totalRating / totalReviews).toFixed(1)
        : 0;

    setStats({
      totalReviews,
      averageRating,
      totalBusinesses: business ? 1 : 0,
      rewards: totalReviews * 5,
    });
  }, []);

  const cards = [
    {
      title: "Total Reviews",
      value: stats.totalReviews,
    },
    {
      title: "Average Rating",
      value: stats.averageRating + " / 5",
    },
    {
      title: "Registered Businesses",
      value: stats.totalBusinesses,
    },
    {
      title: "Rewards Distributed",
      value: stats.rewards + " XLM",
    },
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h2>Business Analytics Dashboard</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {cards.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,.1)",
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