import { useState } from "react";

import { Button, ShoeCard } from "../components";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

// hero
const Hero = () => {
  // keep track of currently selected shoe img
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      {/* hero left */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        {/* tiny text */}
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        {/* heading */}
        <h1 className="mt-2 font-palanquin text-[78px] max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:whitespace-nowrap relative pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block">Nike</span> Shoes
        </h1>
        {/* description */}
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-4 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        {/* shop now btn */}
        <Button label="Shop Now" iconURL={arrowRight} />

        {/* brand stats */}
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="">
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* hero right */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        {/* lg shoe img */}
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative"
        />

        {/* sm shoes img */}
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, i) => (
            <div key={`heroshoe-${i}`}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
