import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Drop = () => {
  return (
    <div id="drop" className="wrapper mt-[0px] lg:mt-[100px]">
      <div className="contain justify-start items-center sm:items-start flex-col gap-6">
        <h2 className="text-heading font-bold text-[42px]">Latest Drop</h2>
        <div className="mt-[30px] w-full">
          <Splide
            options={{
              arrows: false,
              pagination: false,
              autoWidth: true,
              type: "loop",
              perMove: 1,
              drag: true,
              width: "100%",
              gap: "2rem",
            }}
            className="album-slider"
          >
            <SplideSlide>
              <AlbumCard
                img={"/album-cover.png"}
                name="Ditto"
                desc="NewDitto"
              />
            </SplideSlide>
            <SplideSlide>
              <AlbumCard
                img={"/album-cover.png"}
                name="Ditto"
                desc="NewDitto"
              />
            </SplideSlide>
            <SplideSlide>
              <AlbumCard
                img={"/album-cover.png"}
                name="Ditto"
                desc="NewDitto"
              />
            </SplideSlide>
            <SplideSlide>
              <AlbumCard
                img={"/album-cover.png"}
                name="Ditto"
                desc="NewDitto"
              />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Drop;

const AlbumCard = ({ img, name, desc }) => {
  return (
    <div className="flex rounded-lg  justify-start relative bg-[rgba(255,255,255,0.1)] w-[300px] h-[300px] mix-blend-multiply isolate  items-start flex-col border-2 border-solid border-[#524d5a]">
      <img
        src="/texture.png"
        className="absolute -z-10 rounded-lg w-full h-full object-cover"
        alt=""
      />
      <div className="flex rounded-lg justify-start items-start flex-col bg-cream w-full h-full p-5 ">
        <img
          src={img}
          className="w-[170px] -translate-y-[30%]  h-[184px] object-cover"
          alt=""
        />
        <div className="flex -mt-[30px] w-full justify-start items-start flex-col gap-4">
          <h3 className="text-heading font-normal leading-[1] text-[21px]">
            {name}
          </h3>
          <p className="text-heading font-normal text-lg leading-[1]">{desc}</p>
          <div className="w-full flex justify-between items-center gap-3">
            <button className="bg-orange w-[201px] h-[36px] uppercase border-none flex justify-center items-center gap-2 text-heading text-base">
              Visit Trackpacs{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
            <p className="text-heading text-lg">20</p>
          </div>
        </div>
      </div>
    </div>
  );
};
