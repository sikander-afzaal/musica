const Artists = () => {
  return (
    <div className="wrapper bg-artist py-[60px] lg:py-[100px]">
      <div className="contain flex-col-reverse lg:flex-row justify-between items-center lg:items-start gap-[50px] sm:gap-[100px]">
        <div className="flex  justify-start  items-start flex-col gap-5">
          <h2 className="text-heading font-bold text-[36px] leading-[1]">
            Muscia For Artists
          </h2>
          <p className=" leading-[1.6] text-heading">
            We believe that Fans are the future of music. By partnering with
            Musica, you are able to leverage their loyalty by allowing them to
            invest in your music and share in your success.
          </p>
          <p className=" leading-[1.6] text-heading">
            Plus, we give you the opportunity to connect with them on a personal
            level and reward their support through exclusive offerings,
            experiences and perks that you create.
          </p>
          <div className="flex text-left justify-start items-start flex-col gap-6">
            <div className="w-full flex justify-start items-center gap-5">
              <img
                src="/check.png"
                className="w-[20px] object-contain"
                alt=""
              />
              <p className="text-heading">
                Earn upfront revenue from fans that invest in your music
              </p>
            </div>
            <div className="w-full flex justify-start items-center gap-5">
              <img
                src="/check.png"
                className="w-[20px] object-contain"
                alt=""
              />
              <p className="text-heading">
                Connect directly with your biggest supporters
              </p>
            </div>
            <div className="w-full flex justify-start items-center gap-5">
              <img
                src="/check.png"
                className="w-[20px] object-contain"
                alt=""
              />
              <p className="text-heading">Maintain control of your work</p>
            </div>
          </div>
          <button className="flex mt-4 justify-center items-center gap-3 bg-heading text-white w-[280px] h-[50px] text-base font-normal border-2 duration-700 border-solid border-heading hover:bg-transparent hover:text-heading transition-all">
            More About Musica for Artists{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <img src="/artist.png" className="w-full max-w-[500px]" alt="" />
      </div>
    </div>
  );
};

export default Artists;
