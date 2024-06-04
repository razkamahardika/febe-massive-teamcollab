import "../assets/components/Review.css";

const reviews = [
  {
    name: "Kufra Kiboy",
    rating: 5,
    title: "Review Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue vestibulum arcu in dignissim. Mauris convallis vitae urna quis mattis. Nam orci libero, pulvinar eu turpis nec, sagittis tempor felis. Nunc eget feugiat lorem. Donec tellus justo, porttitor eu cursus cursus, pellentesque ut quam.",
  },
  {
    name: "Kadita Sanz",
    rating: 3,
    title: "Review Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue vestibulum arcu in dignissim. Mauris convallis vitae urna quis mattis. Nam orci libero, pulvinar eu turpis nec, sagittis tempor felis. Nunc eget feugiat lorem. Donec tellus justo, porttitor eu cursus cursus, pellentesque ut quam.",
  },
];

const Review = () => {
  return (
    <>
      <div className="review-section">
        <h2>The Review</h2>
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <div className="review-header">
              <div className="review-name-rating">
                <h3>{review.name}</h3>
                <div className="rating">
                  {[...Array(5)].map((star, i) => (
                    <span
                      key={i}
                      className={
                        i < review.rating ? "filled-star" : "empty-star"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <h4>{review.title}</h4>
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Review;
