const Work = () => {
  return (
    <div className="wrapper py-[100px] ">
      <div className="contain gap-[100px] justify-start items-center flex-col">
        <h2 className="text-heading text-center font-bold text-[28px] sm:text-[42px]">
          How Does Musica Work?
        </h2>
        <div className="flex md:flex-row flex-col-reverse justify-between w-full gap-[50px] md:gap-[80px] max-w-[800px] items-center ">
          <div className="flex justify-start items-start flex-col gap-2">
            <img
              src="/work-ico1.png"
              className="w-[50px] object-contain"
              alt=""
            />
            <h3 className="text-heading mb-2 font-bold text-[28px]">
              We Drop a Collection of Songs
            </h3>{" "}
            <p className="mb-2 leading-[1.6] text-heading">
              Each week, we release (drop) a collection of songs in a pack, or
              as we refer to them, "Track Packs". Each Track pack contains
              randomly generated songs from one or more artists and has a
              limited number available for purchase.
            </p>
            <p className="flex text-base justify-start items-center text-orange gap-3">
              Learn more about track packs
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
            </p>
            <p className="flex text-base justify-start items-center text-orange gap-3">
              View the latest track pack
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
            </p>
          </div>
          <img
            src="/work1.png"
            className="w-full max-w-[350px] object-contain"
            alt=""
          />
        </div>
        <div className="flex md:flex-row flex-col justify-between w-full gap-[50px] md:gap-[80px] max-w-[800px] items-center ">
          <img
            src="/work2.png"
            className="w-full max-w-[350px] object-contain"
            alt=""
          />
          <div className="flex justify-start items-start flex-col gap-2">
            <img
              src="/work-ico2.png"
              className="w-[50px] object-contain"
              alt=""
            />
            <h3 className="text-heading mb-2 font-bold text-[28px]">
              You Earn Streaming Royalties
            </h3>{" "}
            <p className="mb-2 leading-[1.6] text-heading">
              You have the opportunity to purchase Track Packs and earn a
              portion of each songs streaming revenue from Spotify, Apple Music,
              Youtube and other platforms.
            </p>
            <p className="flex text-base justify-start items-center text-orange gap-3">
              Learn more about royalties
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
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse justify-between w-full gap-[50px] md:gap-[80px] max-w-[800px] items-center ">
          <div className="flex justify-start items-start flex-col gap-2">
            <img
              src="/work-ico3.png"
              className="w-[50px] object-contain"
              alt=""
            />
            <h3 className="text-heading mb-2 font-bold text-[28px]">
              You Get Private Access
            </h3>{" "}
            <p className="mb-2 leading-[1.6] text-heading">
              Each Track Pack you purchase unlocks access to each recording
              artists private community, where you can chat it up with other
              fans (and maybe even the artist!).
            </p>
            <p className="flex text-base justify-start items-center text-orange gap-3">
              Learn more about private access
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
            </p>
          </div>{" "}
          <img
            src="/work3.png"
            className="w-full max-w-[350px] object-contain"
            alt=""
          />
        </div>
        <div className="flex md:flex-row flex-col justify-between w-full gap-[50px] md:gap-[80px] max-w-[800px] items-center ">
          <img
            src="/work4.png"
            className="w-full max-w-[350px] object-contain"
            alt=""
          />
          <div className="flex justify-start items-start flex-col gap-2">
            <img
              src="/work-ico4.png"
              className="w-[50px] object-contain"
              alt=""
            />
            <h3 className="text-heading mb-2 font-bold text-[28px]">
              You Get Exclusive Perks
            </h3>{" "}
            <p className="mb-2 leading-[1.6] text-heading">
              Some artists will include exclusive perks and experiences such as
              meet-and-greets, listening parties, merch and more to fans that
              purchase a Track Pack and support their journey.
            </p>
            <p className="flex text-base justify-start items-center text-orange gap-3">
              Learn more about exclusive perks
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
            </p>
          </div>{" "}
        </div>
        <div className="flex md:flex-row flex-col-reverse justify-between w-full gap-[50px] md:gap-[80px] max-w-[800px] items-center ">
          <div className="flex justify-start items-start flex-col gap-2">
            <img
              src="/work-ico5.png"
              className="w-[50px] object-contain"
              alt=""
            />
            <h3 className="text-heading mb-2 font-bold text-[28px]">
              You Support Artists
            </h3>{" "}
            <p className="mb-2 leading-[1.6] text-heading">
              The artists on Musica enjoy more control over their work and
              career because of financial support from fans just like you. When
              you purchase a Track Pack you are directly supporting an artist
              financially!
            </p>
            <p className="flex text-base justify-start items-center text-orange gap-3">
              Check out our artists
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
            </p>
          </div>{" "}
          <img
            src="/work5.png"
            className="w-full max-w-[350px] object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
