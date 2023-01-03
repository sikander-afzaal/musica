import About from "./About";
import Artists from "./Artists";
import Fans from "./Fans";
import Hero from "./Hero";
import Work from "./Work";

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Fans />
      <Artists />
      <Work />
    </div>
  );
};

export default Landing;
