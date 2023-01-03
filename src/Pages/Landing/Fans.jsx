const Fans = () => {
  return (
    <div className="wrapper bg-fan py-[60px] lg:py-[100px]">
      <div className="contain flex-col lg:flex-row justify-between items-center lg:items-start gap-[50px] sm:gap-[100px]">
        <img src="/fan-img.png" className="w-full max-w-[500px]" alt="" />
        <div className="flex  justify-start  items-start flex-col gap-5">
          <h2 className="text-heading font-bold text-[36px] leading-[1]">
            Muscia For Fans
          </h2>
          <p className=" leading-[1.6] text-heading">
            Musica offers you the opportunity to partner with popular and up and
            coming musicians by purchasing ownership in their songs.
          </p>
          <p className=" leading-[1.6] text-heading">
            For each song that you own, you will share in the artist’s success
            and get paid part of their streaming revenue for that song. Plus,
            receive bonus perks from some artists that may include fan
            experiences, virtual concerts, bonus song drops, exclusive merch,
            and more.
          </p>
          <div className="flex text-left justify-start items-start flex-col gap-6">
            <div className="w-full flex justify-start items-center gap-5">
              <img
                src="/check.png"
                className="w-[20px] object-contain"
                alt=""
              />
              <p className="text-heading">
                Earn a percentage of streaming royalties
              </p>
            </div>
            <div className="w-full flex justify-start items-center gap-5">
              <img
                src="/check.png"
                className="w-[20px] object-contain"
                alt=""
              />
              <p className="text-heading">
                Trade songs and build your collection
              </p>
            </div>
            <div className="w-full flex justify-start items-center gap-5">
              <img
                src="/check.png"
                className="w-[20px] object-contain"
                alt=""
              />
              <p className="text-heading">
                Access to our private community and exclusive perks from artists
              </p>
            </div>
          </div>
          <button className="flex mt-4 justify-center items-center gap-3 bg-heading text-white w-[280px] h-[50px] text-base font-normal border-2 duration-700 border-solid border-heading hover:bg-transparent hover:text-heading transition-all">
            More About Musica for Fans{" "}
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
      </div>
    </div>
  );
};

export default Fans;
