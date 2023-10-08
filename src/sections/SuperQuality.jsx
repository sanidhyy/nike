import { shoe8 } from "../assets/images";
import { Button } from "../components";

// super quality
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      {/* super quality left */}
      <div className="flex flex-1 flex-col">
        {/* title */}
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super</span>{" "}
          <span className="text-coral-red">Quality</span> Shoes
        </h2>

        {/* desc para 1 */}
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        {/* desc para 2 */}
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>

        {/* view details btn */}
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      {/* super quality right */}
      <div className="flex-1 flex justify-center items-center">
        {/* shoe collection img */}
        <img
          src={shoe8}
          alt="shoe collection"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
