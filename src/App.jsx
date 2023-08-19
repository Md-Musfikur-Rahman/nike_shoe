import Nav from "./components/Nav";
import {
  CustomerReviews,
  Hero,
  PopularProduct,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Footer,
} from "./setions";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
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
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 p-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
