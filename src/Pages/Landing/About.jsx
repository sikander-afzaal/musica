const About = () => {
  return (
    <div id="what" className="wrapper">
      <div className="contain lg:flex-row flex-col py-[60px] lg:py-[100px] justify-between items-center gap-[50px] lg:gap-[80px]">
        <img
          src="/about-img.png"
          className="object-contain lg:block hidden w-full max-w-[225px]"
          alt=""
        />
        <div className="flex justify-start items-center  relative flex-col ">
          <div className="absolute bg-[#d1f8fa] rounded-full w-5 h-5 left-0 bottom-[100%] border-[3px] border-solid border-[#76e9f0]"></div>
          <div className="absolute bg-[#FDA587] rounded-full w-5 h-5 right-0 sm:right-[10%] bottom-full sm:top-0 border-[3px] border-solid border-[#FC8860]"></div>
          <h3 className="text-heading font-normal leading-[1] text-center text-[35px] sm:text-[50px]">
            What is <span className="text-orange">Musica</span>
            <p className=" text-lg sm:text-[22px] text-heading max-w-[520px]  leading-[1.6] mt-3 mb-6">
              Musica is an innovative online platform that gives artists control
              over their work and a way to share song ownership, streaming
              revenue and experiences with you -{" "}
              <span className="text-orange">their biggest fan.</span>
            </p>
            <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-5">
              <button className="orange-btn w-full sm:w-[114px] h-[50px]">
                For Fans
              </button>
              <button className="border-solid bg-heading text-white font-base text-base border-heading border-[1px] transition-all hover:bg-transparent hover:text-heading  w-full sm:w-[117px] h-[50px] ">
                For Artists
              </button>
            </div>
          </h3>
        </div>
        <img
          src="/about-img.png"
          className="object-contain lg:block hidden w-full max-w-[225px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
