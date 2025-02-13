import plane from "../../assets/plane.svg";
const NewsLetter = () => {
  return (
    <div className="bg-sub bg-cover bg-no-repeat">
      <div className="container mx-auto p-8 lg:p-10 ">
        <div className="flex flex-col lg:flex-row items-center">
          <div className=" flex-1">
            <h1 className="text-[#ECECEC] text-left font-bold text-xl lg:text-3xl mb-4">
              Subscribe To Newsletter
            </h1>
            <p className="text-[#F6F7F9] mb-5 lg:mb-10 lg:text-lg font-light text-base">
              Receive the latest announcements and product updates.
            </p>
            <div className="flex lg:flex-row flex-col items-center relative max-w-[500px] gap-4">
              <input
                type="text"
                placeholder="Email address"
                className="w-full border border-[#633C0D] rounded-[34px] h-[52px] p-4"
              />
              <button
                type="button"
                className="lg:absolute lg:-right-5 min-w-[136px] bg-[#1D1306] text-white h-[52px] rounded-[36px] w-full lg:w-fit"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              alt="team-work"
              loading="lazy"
              width="305"
              height="200"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src={plane}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
