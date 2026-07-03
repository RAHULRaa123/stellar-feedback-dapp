import { useEffect, useState } from "react";

function BusinessDashboard() {
  const [stats, setStats] = useState({
    totalFeedback: 0,
    averageRating: 0,
    rewards: "120 XLM",
    reputation: "0%",
  });

  useEffect(() => {
    const reviews =
      JSON.parse(localStorage.getItem("reviews")) || [];

    const totalFeedback = reviews.length;

    let averageRating = 0;

    if (totalFeedback > 0) {
      const total = reviews.reduce(
        (sum, item) => sum + Number(item.rating),
        0
      );

      averageRating = (total / totalFeedback).toFixed(1);
    }

    const reputation =
      totalFeedback === 0
        ? "0%"
        : Math.min(
            100,
            Math.round((averageRating / 5) * 100)
          ) + "%";

    setStats({
      totalFeedback,
      averageRating,
      rewards: "120 XLM",
      reputation,
    });
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <h2>Business Dashboard</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        <Card
          title="Total Feedback"
          value={stats.totalFeedback}
        />

        <Card
          title="Average Rating"
          value={stats.averageRating}
        />

        <Card
          title="Rewards Distributed"
          value={stats.rewards}
        />

        <Card
          title="Reputation Score"
          value={stats.reputation}
        />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        background: "#fff",
      }}
    >
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}

export default BusinessDashboard;