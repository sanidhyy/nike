import {
  Hero,
  Services,
  SpecialOffer,
  Subscribe,
  PopularProducts,
  SuperQuality,
  CustomerReviews,
  Footer,
} from "./sections";
import { Nav } from "./components";

// app
const App = () => (
  <div className="relative">
    {/* header */}
    <Nav />

    {/* main section */}
    <main>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
    </main>

    {/* footer */}
    <footer className="bg-black padding-x padding-t pb-8">
      <Footer />
    </footer>
  </div>
);

export default App;
