import { star } from "../assets/icons";

// popular product card
const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      {/* product image */}
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      {/* product rating */}
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>

      {/* product name */}
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      {/* product price */}
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
