const Passive = () => {
  return (
    <div className="wrapper mt-[80px] lg:mt-[100px] ">
      <div className="contain bg-passive flex-col lg:flex-row py-[80px] lg:py-[100px] bg-cover justify-center gap-[100px] items-center">
        <div className="flex justify-start items-center lg:text-left text-center lg:items-start flex-col gap-9">
          <img
            src="/logo2.png"
            alt=""
            className="object-contain sm:max-w-full max-w-[200px]"
          />
          <h2 className="text-[#FEEDE9] font-bold max-w-[400px] text-[30px] sm:text-[42px] leading-[1.1]">
            Earn passive income from Music.
          </h2>
          <button className="orange-btn w-full sm:w-[106px] h-[50px]">
            Sign Up
          </button>
        </div>
        <img
          src="/passive-img.png"
          className="object-contain lg:block hidden max-w-[420px] w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Passive;
