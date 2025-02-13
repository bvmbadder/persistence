import { ArrowRight } from "lucide-react";
import hand from "../../assets/bitcoin_hand.svg";
import building from "../../assets/building.svg";
import tech from "../../assets/tech.svg";
import values from "../../assets/values.svg";
const Why = () => {
  return (
    <div className="relative bg-[#FCF7F1]">
      <div className="container mx-auto py-20 px-4 lg:px-10">
        <h2 className="text-[#633C0D] lg:text-[48px] lg:leading-[72px] font-bold text-center mb-5">
          Why Persistence One?
        </h2>
        <div className="flex flex-col  gap-4 items-center">
          <div className="flex flex-col lg:flex-row relative gap-4 items-stretch">
            <div className="rounded-[20px] shadow p-6 lg:w-[70%] w-full bg-white">
              <div className="text-sm font-light text-[#918678]">Vision</div>
              <div className="flex flex-1">
                <div className="flex flex-col-reverse md:flex-row items-end gap-4">
                  <div className="">
                    <h2 className="text-[#633C0D] text-xl lg:text-[27px] lg:leading-[40px] pb-1 font-bold">
                      BTCFi will overtake ETH DeFi.
                    </h2>
                    <p className="text-[#633C0DCC] text-sm pb-6">
                      Learn about our vision and belief in the Bitcoinization of
                      modern-day finance.
                    </p>
                    <a href="/">
                      <button
                        type="button"
                        className="text-[#E59636] text-base flex gap-2 items-center font-semibold"
                      >
                        Learn More about Our Vision
                        <span className="">
                          <ArrowRight className="size-4" />
                        </span>
                      </button>
                    </a>
                  </div>
                  <img
                    alt="BTCFi will overtake ETH DeFi."
                    loading="lazy"
                    width="330"
                    height="240"
                    decoding="async"
                    data-nimg="1"
                    src={hand}
                    style={{ color: "transparent" }}
                  ></img>
                </div>
              </div>
            </div>
            <div className="rounded-[20px] shadow p-6 lg:w-[30%] w-full bg-white">
              <div className="text-sm font-light text-[#918678]">
                Experience
              </div>
              <div className="block flex-1">
                <div className="flex flex-col items-start gap-4">
                  <div className="self-center">
                    <img
                      alt="Building since 2019."
                      loading="lazy"
                      width="312"
                      height="161"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src={building}
                    />
                  </div>
                  <h2 className="text-[#633C0D] text-xl lg:text-[27px] lg:leading-[40px] pb-1 font-bold">
                    Building since 2019.
                  </h2>
                  <p className="text-[#633C0DCC] text-sm pb-6">
                    Since 2019, Persistence One has built expertise in DeFi, IBC
                    interoperability, and the Persistence Core-1 chain's
                    security. Now, it's time to enter the BTCfi space and tackle
                    Bitcoin interoperability challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row relative gap-4 items-stretch">
            <div className="rounded-[20px] shadow p-6 lg:w-[40%] w-full bg-white">
              <div className="text-sm font-light text-[#918678]">
                Technology
              </div>
              <div className="flex flex-col-reverse lg:flex-col flex-1">
                <div className="flex flex-col items-start gap-4">
                  <h2 className="text-[#633C0D] text-xl lg:text-[27px] lg:leading-[40px] pb-1 font-bold">
                    Advanced Technology. Streamlined User Journey.
                  </h2>
                  <p className="text-[#633C0DCC] text-sm pb-6">
                    Using cutting-edge technology like Cross-chain Intents,
                    Persistence One is set to revolutionize user experience in
                    BTCfi and remove the barriers to BTC movement.
                  </p>
                </div>
                <div className="self-center">
                  <img
                    alt="Advanced Technology. Streamlined User Journey."
                    loading="lazy"
                    width="205"
                    height="126"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={tech}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-between lg:w-[70%] w-full">
              <div className="rounded-[20px] shadow p-6  bg-white">
                <div className="text-sm font-light text-[#918678]">Values</div>
                <div className="flex flex-1">
                  <div className="flex flex-col-reverse md:flex-row items-end gap-4">
                    <div className="">
                      <h2 className="text-[#633C0D] text-xl lg:text-[27px] lg:leading-[40px] pb-1 font-bold">
                        Humility. Integrity. Patience. Persistence.
                      </h2>
                      <p className="text-[#633C0DCC] text-sm pb-6">
                        Persistence is more than just a name. It is our way of
                        being. Learn about our core values, the team, and how to
                        become a Persister.
                      </p>
                      <a href="/">
                        <button
                          type="button"
                          className="text-[#E59636] text-base flex gap-2 items-center font-semibold"
                        >
                          Learn More about Our Vision
                          <span className="">
                            <ArrowRight className="size-4" />
                          </span>
                        </button>
                      </a>
                    </div>
                    <img
                      alt="Humility. Integrity. Patience. Persistence. "
                      loading="lazy"
                      width="280"
                      height="240"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src={values}
                    />
                  </div>
                </div>
              </div>
              <div className="flex bg-[#E59636] rounded-[40px] p-4 pl-8 flex-col md:flex-row justify-center gap-5 lg:justify-between items-center">
                <p className="text-[#FCFCFC] text-left font-bold text-xl lg:text-[27px]">
                  Be a part of the Movement.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-[#1D1306] p-3 px-6 w-full lg:w-fit flex items-center justify-center"
                >
                  <button
                    type="button"
                    className="text-[#FFFFFF] bg-[#1D1306] text-base flex gap-2 items-center font-semibold"
                  >
                    Join the Community
                    <span className="">
                      <ArrowRight className="size-4" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
