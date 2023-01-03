const Footer = () => {
  return (
    <div className="wrapper lg:mt-[100px] pb-5 mt-[70px]">
      <footer className="contain lg:flex-row flex-col lg:gap-0 gap-6 justify-between items-center lg:items-start">
        <div className="flex justify-start items-center lg:text-left text-center lg:items-start flex-col gap-5">
          <img src="/logo3.png" alt="" />
          <p className="text-heading max-w-[350px] leading-[1.6]">
            Join our Newsletter and get the latest drops, news and promotions
            delivered right to your inbox.
          </p>
          <div className="flex justify-start items-center gap-2 sm:gap-3 h-[50px] w-full sm:w-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#E7E7E8] pl-3 placeholder:text-heading w-full sm:w-[251px] h-full text-heading text-sm border-none"
            />
            <button className="bg-heading min-w-[90px] sm:min-w-[111px] h-full border-none text-white font-normal text-base">
              Sign Up
            </button>
          </div>
        </div>
        <div className="lg:text-left text-center flex justify-start items-center lg:items-start flex-col gap-5">
          <h6 className="font-bold text-base text-heading ">Collectors</h6>
          <a href="#how" className="text-heading font-normal text-base">
            How it works
          </a>
          <a href="#" className="text-heading font-normal text-base">
            Benefits
          </a>
          <a href="#our" className="text-heading font-normal text-base">
            Our Artists
          </a>
          <a href="#drop" className="text-heading font-normal text-base">
            Current Drop
          </a>
          <a href="#drop" className="text-heading font-normal text-base">
            Drop Schedule
          </a>
        </div>
        <div className="lg:text-left text-center flex justify-start items-center lg:items-start flex-col gap-5">
          <h6 className="font-bold text-base text-heading ">Artists</h6>
          <a href="#" className="text-heading font-normal text-base">
            Join Musica
          </a>
        </div>
        <div className="lg:text-left text-center flex justify-start items-center lg:items-start flex-col gap-5">
          <h6 className="font-bold text-base text-heading ">Support</h6>
          <a href="#" className="text-heading font-normal text-base">
            FAQs
          </a>
          <a href="#" className="text-heading font-normal text-base">
            Help Center
          </a>
        </div>
        <div className="lg:text-left text-center flex justify-start items-center lg:items-start flex-col gap-5">
          <h6 className="font-bold text-base text-heading ">Collectors</h6>
          <a href="#what" className="text-heading font-normal text-base">
            About
          </a>
          <a href="#" className="text-heading font-normal text-base">
            Contact
          </a>
          <a href="#" className="text-heading font-normal text-base">
            Login
          </a>
          <a href="#" className="text-heading font-normal text-base">
            Sign Up
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
