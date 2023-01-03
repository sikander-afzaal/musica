const Tracks = () => {
  return (
    <div id="our" className="wrapper mt-[100px] md:mt-[220px]">
      <div className="contain flex-col justify-start items-center bg-[#F1F0ED] p-[50px]">
        <div className="w-full flex justify-between items-center relative">
          <div className="flex md:w-auto w-full justify-start items-center md:items-start flex-col">
            <h6 className="text-[#7D7A84] text-xs font-normal">TRACKPAD</h6>
            <h3 className="text-heading font-bold text-[30px] sm:text-[42px]">
              Upcoming Track Packs
            </h3>
          </div>
          <img
            src="/track-pack.png"
            className="w-full md:block hidden max-w-[286px] object-contain absolute top-0 right-0 -translate-y-1/2"
            alt=""
          />
        </div>
        <div className="flex justify-start items-center mt-[50px] md:mt-[120px] flex-col w-full gap-5">
          <TrackRow
            date={{ month: "Feb", day: 18 }}
            name="Track Packs 01"
            desc="Bad Apples"
            tags={[
              "Beyonce",
              "Nas",
              "Elton",
              "John",
              "Chris Stapleton",
              "more",
            ]}
            songs={20}
          />
          <TrackRow
            date={{ month: "Feb", day: 18 }}
            name="Track Packs 01"
            desc="Bad Apples"
            tags={[
              "Beyonce",
              "Nas",
              "Elton",
              "John",
              "Chris Stapleton",
              "more",
            ]}
            songs={20}
          />
          <TrackRow
            date={{ month: "Feb", day: 18 }}
            name="Track Packs 01"
            desc="Bad Apples"
            tags={[
              "Beyonce",
              "Nas",
              "Elton",
              "John",
              "Chris Stapleton",
              "more",
            ]}
            songs={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Tracks;

const TrackRow = ({ name, date: { month, day }, desc, tags, songs }) => {
  return (
    <div className="grid grid-cols-[auto__auto] sm:gap-[20px] grid-rows-[auto__auto__auto] sm:grid-rows-2 md:flex justify-between  items-center gap-y-[40px] lg:gap-[40px] w-full py-6 sm:py-10 px-5 lg:p-10 bg-white">
      <div className="flex bg-[#100A19] w-[90px] lg:w-[127px] h-[90px] lg:h-[127px] justify-center items-center flex-col gap-2 ">
        <h3 className="text-[#e7e7e8] font-bold text-lg lg:text-[22px] leading-[1]">
          {month}
        </h3>
        <h4 className="text-[#e7e7e8] font-bold text-[32px] lg:text-[42px] leading-[1]">
          {day}
        </h4>
      </div>
      <div className="flex flex-col justify-self-end gap-2 justify-start items-start">
        <p className="text-heading font-normal text-lg leading-[1]">{name}</p>
        <h3 className="text-heading font-bold text-[25px] lg:text-[32px] leading-[1]">
          {desc}
        </h3>
      </div>
      <div className="flex sm:col-auto col-span-2 max-w-full sm:max-w-[300px] lg:max-w-[360px] flex-col gap-5 sm:gap-2 justify-start items-center sm:items-start">
        <p className="text-heading font-normal text-lg leading-[1]">
          Featuring
        </p>
        <div className="flex justify-center sm:justify-start items-center gap-2 flex-wrap">
          {tags.map((elem, idx) => {
            return (
              <p
                key={idx + "tag" + new Date()}
                className="bg-[#F5F5F5] text-heading font-bold text-xl flex justify-center  items-center px-2 py-[10px] h-[43px] leading-[1]"
              >
                {elem}
              </p>
            );
          })}
        </div>
      </div>
      <div className="flex  flex-col gap-2 justify-start sm:row-auto row-start-3 sm:col-auto col-span-2 row-end-4 justify-self-center sm:justify-self-end items-center">
        <p className="text-heading font-normal text-lg leading-[1]">Songs</p>
        <h3 className="text-heading font-bold  text-[42px] leading-[1]">
          {songs}
        </h3>
        <button className="orange-btn w-[122px] h-[36px]">View Songs</button>
      </div>
    </div>
  );
};
