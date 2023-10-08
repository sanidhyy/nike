import { ReviewCard } from "../components";
import { reviews } from "../constants";

// customer reviews
const CustomerReviews = () => {
  return (
    <section className="max-container">
      {/* heading */}
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      {/* subheading */}
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      {/* reviews */}
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
