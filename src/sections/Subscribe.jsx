import { Button } from "../components";

// subscribe
const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      {/* title */}
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red">Updates</span> &amp;
        Newsletter
      </h3>

      {/* newsletter form */}
      <form
        action="/"
        onSubmit={(e) => {
          e.preventDefault(); // prevent page reload
          alert("Thanks for Subscribing!"); // alert user
          e.currentTarget.reset(); // reset form
        }}
        autoCapitalize="off"
        autoComplete="off"
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
      >
        {/* email */}
        <input
          type="email"
          placeholder="subscribe@nike.com"
          className="input"
          required
        />

        {/* sign up btn */}
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" type="submit" fullWidth />
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
