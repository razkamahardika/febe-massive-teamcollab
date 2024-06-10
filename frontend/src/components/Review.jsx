import "../assets/components/Review.css";

const reviews = [
  {
    name: "Kufra Kiboy",
    rating: 5,
    title: "Nyaman, tidak menerawang",
    text: "Baju bagus untuk dipakain untuk kekondangan",
  },
  {
    name: "Kadita Sanz",
    rating: 3,
    title: "Kurirnya Kurang Baik",
    text: "Pakaiannya bagus, cuman kurirnya aja kurang baik ",
}];

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
