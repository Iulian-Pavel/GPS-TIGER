import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Slider from './Components/Slider/Slider';
import Hero from './Components/Hero/Hero';
import Showcase from "./Components/Showcase/Showcase";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import PriceCards from "./Components/PriceCards/PriceCards";
import Reviews from "./Components/ReviewSection/Reviews";
import Services from "./Components/Services/Services";
import YFooter from "./Components/YellowFooter/YFooter";
import Footer from "./Components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <>
      <Navbar />
      <Slider />
      <Hero />
      <Showcase />
      <Jumbotron />
      <PriceCards />
      <Reviews />
      <Services />
      <YFooter />
      <Footer />
      </>
    )
  }
}

export default App;