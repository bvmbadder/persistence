import dex from "../../assets/dex.svg";
import fuel from "../../assets/fuel.svg";
import cross from "../../assets/cross-chain-swaps.svg";
const Two = () => {
  return (
    <div className="bg-[#1f1307] relative">
      <div className="container mx-auto py-20 px-4 lg:px-10">
        <div className="mb-10 bg-[#FFF8EE] rounded-2xl p-[26px] lg:p-[60px]">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col">
              <h2 className="text-[#350B00] font-bold text-xl lg:text-[40px] leading-[50px] mb-4">
                Persistence DEX
              </h2>
              <p className="text-[#350B00CC] pb-4 text-xs lg:text-base">
                Governed by $XPRT, Persistence DEX is a trading and liquidity
                venue for XPRT, BTC and its’ related assets and Stablecoins.
              </p>
              <div className="flex gap-4 lg:gap-12 mb-10">
                <div className="">
                  <p className="text-[#350B00] text-xs lg:text-base">
                    Total Value Locked
                  </p>
                  <p className="text-lg lg:text-2xl text-[#E59636] font-bold">
                    $1.05M
                  </p>
                </div>
                <div className="">
                  <p className="text-[#350B00] text-xs lg:text-base">
                    Total Volume
                  </p>
                  <p className="text-lg lg:text-2xl text-[#E59636] font-bold">
                    $34.925M
                  </p>
                </div>{" "}
                <div className="">
                  <p className="text-[#350B00] text-xs lg:text-base">
                    Total Users
                  </p>
                  <p className="text-lg lg:text-2xl text-[#E59636] font-bold">
                    5.601K
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <a
                  href="/swap"
                  target="_blank"
                  className="bg-[#E59635] rounded-full p-3 px-6  flex items-center justify-center"
                >
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-[#E59636] text-xs lg:text-base font-semibold text-[#FFF8EE]"
                  >
                    Enter the App
                  </button>
                </a>
                <a
                  href="/swap"
                  target="_blank"
                  className="bg-[#1D1306] rounded-full p-3 px-6 flex items-center justify-center "
                >
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-[#1D1306] text-xs lg:text-base font-semibold text-[#FFF8EE]"
                  >
                    Learn More
                  </button>
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                alt="Dex"
                loading="lazy"
                width="515"
                height="290"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={dex}
              ></img>
            </div>
          </div>
        </div>
        <div className="mb-10 bg-[#FFF8EE] rounded-2xl p-[26px] lg:p-[60px]">
          <div className="flex flex-row items-center justify-between">
            <div className="lg:flex items-center justify-between hidden w-1/2">
              <img
                alt="Fuel"
                loading="lazy"
                width="300"
                height="285"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={fuel}
              ></img>
            </div>
            <div className="flex flex-col lg:w-1/2">
              <h2 className="text-[#350B00] font-bold text-xl lg:text-[40px] leading-[50px] mb-4">
                Fueling on-chain activities on Persistence One
              </h2>
              <p className="text-[#350B00CC] pb-4 text-xs lg:text-base">
                XPRT powers on-chain activities on Persistence One, including
                decentralized governance, transaction fees, and future
                initiatives like whitelisting intent solvers, protocol fee
                discounts, and more.
              </p>

              <div className="flex flex-col lg:flex-row gap-4">
                <a
                  href="/swap"
                  target="_blank"
                  className="bg-[#E59635] rounded-full p-3 px-6  flex items-center justify-center"
                >
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-[#E59636] text-xs lg:text-base font-semibold text-[#FFF8EE]"
                  >
                    Get XPRT
                  </button>
                </a>
                <a
                  href="/swap"
                  target="_blank"
                  className="bg-[#1D1306] rounded-full p-3 px-6 flex items-center justify-center "
                >
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-[#1D1306] text-xs lg:text-base font-semibold text-[#FFF8EE]"
                  >
                    About XPRT
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 bg-[#FFF8EE] rounded-2xl p-[26px] lg:p-[60px]">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col lg:w-1/2">
              <h2 className="text-[#350B00] font-bold text-xl lg:text-[40px] leading-[50px] mb-4">
                Bitcoin <br /> Cross-Chain Swaps
              </h2>
              <p className="text-[#350B00CC] pb-4 text-xs lg:text-base">
                Fast, zero slippage swaps across Bitcoin L2s. Powered by
                Intents. Secured by Bitcoin.
              </p>

              <div className="flex flex-col lg:flex-row gap-4">
                <a
                  href="/swap"
                  target="_blank"
                  className="bg-[#E59635] rounded-full p-3 px-6  flex items-center justify-center"
                >
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-[#E59636] text-xs lg:text-base font-semibold text-[#FFF8EE]"
                  >
                    Try on Testnet
                  </button>
                </a>
                <a
                  href="/swap"
                  target="_blank"
                  className="bg-[#1D1306] rounded-full p-3 px-6 flex items-center justify-center "
                >
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-[#1D1306] text-xs lg:text-base font-semibold text-[#FFF8EE]"
                  >
                    Learn More
                  </button>
                </a>
              </div>
            </div>
            <div className="lg:flex items-center justify-end hidden w-1/2">
              <img
                alt="Cross"
                loading="lazy"
                width="400"
                height="205"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={cross}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;
