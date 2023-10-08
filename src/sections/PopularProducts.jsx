import { PopularProductCard } from "../components";
import { products } from "../constants";

// popular products
const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12 flex flex-col justify-center items-center"
    >
      {/* products top */}
      <div className="flex flex-col justify-start gap-5">
        {/* title */}
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        {/* description */}
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Explore top-notch quality and style with our sought-after selections.
          Discover a world of comfort, design, and value
        </p>
      </div>

      {/* products bottom */}
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 items-center">
        {/* map over each product */}
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
