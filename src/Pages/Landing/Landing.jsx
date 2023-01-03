import About from "./About";
import Artists from "./Artists";
import Drop from "./Drop";
import Fans from "./Fans";
import Hero from "./Hero";
import Passive from "./Passive";
import Tracks from "./Tracks";
import Work from "./Work";

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Fans />
      <Artists />
      <Work />
      <Drop />
      <Tracks />
      <Passive />
    </div>
  );
};

export default Landing;
