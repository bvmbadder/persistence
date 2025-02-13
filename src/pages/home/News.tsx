import { ExternalLink } from "lucide-react";
import how from "../../assets/how.png";
import how2 from "../../assets/how2.png";
import how3 from "../../assets/how3.png";

const News = () => {
  return (
    <div className="bg-[#FCF7F1]">
      <div className="container mx-auto p-5 lg:p-14  w-full">
        <div className="">
          <div className="flex items-center justify-center mb-10">
            <h2 className="text-[#350B00] text-xl lg:text-5xl font-bold">
              Get started with Persistence
            </h2>
          </div>
          <div className="flex flex-col flex-wrap lg:flex-row gap-4">
            <div className="flex-1">
              <a href="#" className="text-black min-w-[300px] max-w-[400px]">
                <div className="">
                  <div className="rounded-2xl flex flex-col h-full w-full bg-white shadow-md overflow-hidden">
                    <div className="">
                      <img
                        alt="Persistence Logo"
                        className="w-full h-full border-t-[20px]"
                        loading="lazy"
                        src={how}
                      />
                    </div>
                    <div className="flex my-1">
                      <button
                        className="flex items-center gap-2 h-12 font-semibold text-base p-2"
                        type="button"
                      >
                        Read{" "}
                        <span>
                          <ExternalLink className="size-4" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex-1">
              <a href="#" className="text-black min-w-[300px] max-w-[400px]">
                <div className="">
                  <div className="rounded-2xl flex flex-col h-full w-full bg-white shadow-md overflow-hidden">
                    <div className="">
                      <img
                        alt="Persistence Logo"
                        className="w-full h-full border-t-[20px]"
                        loading="lazy"
                        src={how2}
                      />
                    </div>
                    <div className="flex my-1">
                      <button
                        className="flex items-center gap-2 h-12 font-semibold text-base p-2"
                        type="button"
                      >
                        Read{" "}
                        <span>
                          <ExternalLink className="size-4" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>{" "}
            <div className="flex-1">
              <a href="#" className="text-black min-w-[300px] max-w-[400px]">
                <div className="">
                  <div className="rounded-2xl flex flex-col h-full w-full bg-white shadow-md overflow-hidden">
                    <div className="">
                      <img
                        alt="Persistence Logo"
                        className="w-full h-full border-t-[20px]"
                        loading="lazy"
                        src={how3}
                      />
                    </div>
                    <div className="flex my-1">
                      <button
                        className="flex items-center gap-2 h-12 font-semibold text-base p-2"
                        type="button"
                      >
                        Read{" "}
                        <span>
                          <ExternalLink className="size-4" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
