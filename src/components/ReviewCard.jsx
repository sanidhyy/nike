import { star } from "../assets/icons";

// review card
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      {/* customer profile img */}
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />

      {/* customer feedback */}
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>

      {/* customer rating */}
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />

        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>

      {/* customer name */}
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
