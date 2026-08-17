import { useEffect, useState } from "react";

function BusinessHome() {
  const [business, setBusiness] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const savedBusiness = localStorage.getItem("businessProfile");
    const savedReviews = localStorage.getItem("reviews");

    if (savedBusiness) {
      setBusiness(JSON.parse(savedBusiness));
    }

    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce(
            (total, review) => total + Number(review.rating),
            0
          ) / reviews.length
        ).toFixed(1)
      : "0.0";

  return (
    <div
      style={{
        padding: "30px",
        margin: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          padding: "30px",
          borderRadius: "16px",
          background: "#f5f7ff",
          border: "1px solid #ddd",
          marginBottom: "25px",
        }}
      >
        <h1>🛡️ Stellar Trust Network</h1>

        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          A Stellar-powered trust platform for business verification,
          customer reputation, reviews and transparent transactions.
        </p>

        <p>
          Build trust with customers through verifiable business information,
          reputation data and Stellar-based payment infrastructure.
        </p>
      </div>

      <h2>📊 Trust Overview</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <h3>🏢 Business</h3>
          <strong>
            {business ? business.businessName : "Not Registered"}
          </strong>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <h3>⭐ Reviews</h3>
          <strong>{reviews.length}</strong>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <h3>📈 Rating</h3>
          <strong>{averageRating}/5</strong>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <h3>🔗 Network</h3>
          <strong>Stellar</strong>
        </div>
      </div>

      <h2>🚀 Platform Capabilities</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "15px",
        }}
      >
        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <h3>🏢 Business Identity</h3>
          <p>
            Register and manage business information through a dedicated
            business profile.
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <h3>✅ Verification</h3>
          <p>
            Build a trusted business identity with verification information.
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <h3>⭐ Reputation</h3>
          <p>
            Monitor customer reviews and reputation signals in one place.
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <h3>🔐 Escrow</h3>
          <p>
            Support transparent transaction workflows using Stellar
            infrastructure.
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <h3>🤝 Business Discovery</h3>
          <p>
            Discover businesses through a searchable trust and business
            directory.
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <h3>💰 Stellar Payments</h3>
          <p>
            Connect business workflows with Stellar wallet and transaction
            infrastructure.
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          borderRadius: "12px",
          background: "#fafafa",
          border: "1px solid #ddd",
        }}
      >
        <h2>🎯 Product Vision</h2>

        <p style={{ lineHeight: "1.7" }}>
          Stellar Trust Network aims to provide a decentralized trust layer
          where businesses can establish verifiable identities, build
          reputation and conduct transparent transactions using Stellar.
        </p>
      </div>
    </div>
  );
}

export default BusinessHome;