import { ArrowRight } from "lucide-react";
import hero from "../../assets/hero.mp4";

const Hero = () => {
  return (
    <div className="bg-brown relative">
      <div className="container mx-auto p-4 lg:p-20 ">
        <div className="py-[200px] lg:py-0 lg:pt-[60px]">
          <div className="flex flex-col justify-center w-full lg:max-w-[600px] z-10 relative">
            <h2 className="text-[32px] leading-[40px] lg:text-[52px] lg:leading-[70px] font-bold mb-3">
              <span className="text-[#E59636] text-[34px] leading-[44px] lg:text-[72px] lg:leading-[86px]">
                The BTCFi Liquidity Hub
              </span>
            </h2>
            <span className="text-[16px] leading-[28px] lg:text-[26px] lg:leading-[38px]  text-[#FFFFFFCC] mb-[29px]">
              Swap XPRT, BTC-variants and BTCFi tokens on Persistence DEX
            </span>
            <div className="flex flex-col lg:flex-row text-center gap-6 text-white">
              <a
                href="/swap"
                target="_blank"
                className="bg-[#E59635] rounded-full p-3 px-6 "
              >
                <button
                  type="button"
                  className="flex items-center gap-2 bg-[#E59636]"
                >
                  Swap now{" "}
                  <span>
                    <ArrowRight className="size-4" />
                  </span>
                </button>
              </a>
              <button
                type="button"
                className="flex items-center gap-2 border bg-[#E596364D] border-[#E59636] rounded-full p-3 px-6"
              >
                Partner with us{" "}
                <span>
                  <ArrowRight className="size-4" />
                </span>
              </button>
            </div>
          </div>
          <div className="overflow-hidden  hidden lg:block absolute top-0 left-0 right-0 h-full">
            <video
              autoPlay={true}
              loop={true}
              preload="auto"
              src={hero}
              className="absolute top-[20px] -right-[80px] w-full h-full"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
