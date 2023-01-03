const Hero = () => {
  return (
    <div
      id="home"
      className="wrapper bg-center min-h-[700px] pb-[40px] h-auto lg:p-0 pt-[120px] lg:h-screen bg-hero bg-cover"
    >
      <div className="contain lg:flex-row flex-col justify-between items-center gap-10 lg:gap-6">
        <div className="flex justify-start max-w-full lg:max-w-[582px] items-center lg:text-left text-center lg:items-start flex-col gap-7">
          <h2 className="text-white font-bold leading-[1.2] text-[33px] sm:text-[42px]">
            Earn passive income from Music. Its Kinda{" "}
            <span className="text-orange">Genius</span>
          </h2>
          <p className="text-white text-base leading-[1.6] lg:max-w-[450px]">
            Discover the next big hit and earn revenue when it streams on
            popular platforms. Plus, get exclusive access, perks and benefits
            from the artists you love and invest in.
          </p>
          <div className="flex justify-start items-center gap-3">
            <button className="orange-btn h-[50px] w-[106px]">Sign Up</button>
            <button className="white-btn  w-[200px] h-[50px]">
              <img src="/play.png" alt="" /> How does it work
            </button>
          </div>
          <p className="text-white text-sm">
            Artists - Connect with fans in a revolutionary way. Let's talk!
          </p>
        </div>
        <img
          src="/hero-img.png"
          className="object-contain w-full max-w-[520px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
