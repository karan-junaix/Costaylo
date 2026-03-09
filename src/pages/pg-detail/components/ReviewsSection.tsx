import { useState, useEffect } from "react";
import axios from "axios";

interface Review {
  id: number;
  pg_id: number;
  name: string;
  rating: number;
  comment: string;
  helpful: number;
  created_at: string;
}

interface ReviewsSectionProps {
  pgId: number;
}

const ReviewsSection = ({ pgId }: ReviewsSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [sortBy, setSortBy] = useState("recent");
  const [loading, setLoading] = useState(true);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  // ✅ Fetch Reviews
  useEffect(() => {
    fetchReviews();
  }, [pgId]);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/reviews/${pgId}`);
      setReviews(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Submit Review
  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8000/reviews/", {
        ...newReview,
        pg_id: pgId,
      });

      setNewReview({ name: "", rating: 5, comment: "" });
      fetchReviews();
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Sorting Logic
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "recent")
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    if (sortBy === "helpful") return b.helpful - a.helpful;
    if (sortBy === "highest") return b.rating - a.rating;
    if (sortBy === "lowest") return a.rating - b.rating;
    return 0;
  });

  // ✅ Calculate Rating Summary
  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? (
          reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews
        ).toFixed(1)
      : "0";

  if (loading) return <p>Loading reviews...</p>;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Guest Reviews</h2>
        <div className="text-4xl font-bold">{averageRating}</div>
        <p>{totalReviews} reviews</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between mb-4">
          <h3 className="font-bold">All Reviews</h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="recent">Most Recent</option>
            <option value="helpful">Most Helpful</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
        </div>

        {sortedReviews.map((review) => (
          <div key={review.id} className="border-b pb-4 mb-4">
            <h4 className="font-semibold">{review.name}</h4>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
            <small>
              {new Date(review.created_at).toLocaleDateString()}
            </small>
          </div>
        ))}
      </div>

      {/* Write Review */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="font-bold mb-3">Write a Review</h3>

        <input
          type="text"
          placeholder="Your Name"
          value={newReview.name}
          onChange={(e) =>
            setNewReview({ ...newReview, name: e.target.value })
          }
          className="border p-2 w-full mb-2 rounded"
        />

        <select
          value={newReview.rating}
          onChange={(e) =>
            setNewReview({ ...newReview, rating: Number(e.target.value) })
          }
          className="border p-2 w-full mb-2 rounded"
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r} Star
            </option>
          ))}
        </select>

        <textarea
          placeholder="Write your review..."
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
          className="border p-2 w-full mb-3 rounded"
        />

        <button
          onClick={handleSubmit}
          className="bg-pink-600 text-white px-4 py-2 rounded"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ReviewsSection;