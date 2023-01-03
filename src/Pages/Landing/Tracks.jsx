const Tracks = () => {
  return (
    <div className="wrapper mt-[220px]">
      <div className="contain flex-col justify-start items-center bg-[#F1F0ED] p-[50px]">
        <div className="w-full flex justify-between items-center relative">
          <div className="flex justify-start items-start flex-col">
            <h6 className="text-[#7D7A84] text-xs font-normal">TRACKPAD</h6>
            <h3 className="text-heading font-bold text-[42px]">
              Upcoming Track Packs
            </h3>
          </div>
          <img
            src="/track-pack.png"
            className="w-full max-w-[286px] object-contain absolute top-0 right-0 -translate-y-1/2"
            alt=""
          />
        </div>
        <div className="flex justify-start items-center mt-[120px] flex-col w-full gap-5">
          <div className="flex justify-between items-center w-full p-10 bg-white">
            <div className="flex bg-[#100A19] w-[127px] h-[127px] justify-center items-center flex-col gap-2 ">
              <h3 className="text-[#e7e7e8] font-bold text-[22px] leading-[1]">
                Feb
              </h3>
              <h4 className="text-[#e7e7e8] font-bold text-[42px] leading-[1]">
                18
              </h4>
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-heading font-normal text-lg leading-[1]">
                Track Packs 01
              </p>
              <h3 className="text-heading font-bold  text-[32px] leading-[1]">
                Bad Apples
              </h3>
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
              <p className="text-heading font-normal text-lg leading-[1]">
                Track Packs 01
              </p>
              <div className="flex justify-start items-center gap-2 flex-wrap">
                <div className="bg-[#F5F5F5] px-1 py-[10px] h-[43px] leading-[1]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
