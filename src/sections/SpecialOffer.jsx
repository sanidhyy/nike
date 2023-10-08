import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

// special offer
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      {/* offer left */}
      <div className="flex-1">
        {/* offer img */}
        <img
          src={offer}
          alt="special offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      {/* offer right */}
      <div className="flex flex-1 flex-col">
        {/* title */}
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>

        {/* desc para 1 */}
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        {/* desc para 2 */}
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        {/* btn */}
        <div className="mt-11 flex flex-wrap gap-4">
          {/* shop now */}
          <Button label="Shop now" iconURL={arrowRight} />

          {/* learn more */}
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
