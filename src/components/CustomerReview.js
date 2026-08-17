import { useState, useEffect } from "react";

function CustomerReview() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(data);
  }, []);

  const submitReview = () => {
    if (!name || !rating || !review) {
      alert("Please fill all fields");
      return;
    }

    const newReview = {
      name,
      rating,
      review,
    };

    const updated = [...reviews, newReview];

    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));

    setName("");
    setRating("");
    setReview("");

    alert("Review Submitted Successfully!");
  };

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Customer Reviews</h2>

      <input
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="">Select Rating</option>
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <br /><br />

      <textarea
        rows="4"
        cols="40"
        placeholder="Write your review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <br /><br />

      <button onClick={submitReview}>
        Submit Review
      </button>

      <hr />

      <h3>All Reviews</h3>

      {reviews.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <strong>{item.name}</strong>

          <p>{item.rating}/5</p>

          <p>{item.review}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomerReview;