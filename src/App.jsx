import Hero from "./components/Hero";
import About from "./components/About";
import IntakeForm from "./components/IntakeForm";
import Store from "./components/Store";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <IntakeForm />
      <Store />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
