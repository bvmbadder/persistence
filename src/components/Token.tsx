/* eslint-disable @typescript-eslint/no-explicit-any */
import { tokens, TokenssDataType } from "@/utils";
import { useState } from "react";
import Modal from "./Modal";
import { Search } from "lucide-react";

const Token = () => {
  const [assetIn, setAssetIn] = useState(0);
  const [selectedAsset, setSelectedAsset] = useState<TokenssDataType>(
    tokens[0]
  );
  const [selectedAssetOut, setSelectedAssetOut] = useState<TokenssDataType>(
    tokens[1]
  );
  const [assetCLicked, setAssetClicked] = useState(0);

  const onAsetClicked = (asset: TokenssDataType) => {
    if (assetCLicked == 1) {
      setSelectedAsset(asset);
    } else {
      setSelectedAssetOut(asset);
    }
    closeFirstModal();
  };

  const [isFirstModalOpen, setFirstModalOpen] = useState<boolean>(false);
  const closeFirstModal = () => setFirstModalOpen(false);

  const [isSpillageOpen, setIsSpillageOpen] = useState<boolean>(false);
  const closeSpilageMOdal = () => setIsSpillageOpen(false);

  const [searchTerm, setSearchTerm] = useState("");
  const filteredTokens = tokens.filter((token) =>
    token.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [spillege, setSpillage] = useState(3);
  return (
    <>
      <Modal
        title="Spillage Tolerance"
        closeModal={closeSpilageMOdal}
        isOpen={isSpillageOpen}
        icon=""
        bg="bg-[#252731]"
        width="full"
      >
        <div className="flex flex-col p-4 gap-6 text-lg">
          <div className="w-full p-3 rounded-md border flex text-white ">
            <input
              type="text"
              name=""
              id=""
              value={spillege}
              onChange={(e: any) => setSpillage(e.target.value)}
              className="w-full text-end outline-none bg-transparent"
            />
            %
          </div>
          <div className="grid grid-cols-4 gap-4 w-full">
            {[0.5, 1, 3, 5].map((item) => (
              <div
                className={`${
                  spillege === item ? "bg-[#F7931A]/10" : "bg-transparent"
                } text-[#F7931A] border-2 font-semibold border-[#F7931A] rounded-[40px] p-2 px-5 h-[3rem] flex items-center justify-center`}
                key={item}
                onClick={() => {
                  setSpillage(item);
                }}
              >
                {item}%
              </div>
            ))}
          </div>

          <button
            className="text-white bg-[#F7931A]  h-[3rem] fles items-center justify-center rounded-lg"
            onClick={closeSpilageMOdal}
          >
            Save Settings
          </button>
        </div>
      </Modal>
      <Modal
        title="Select a Token"
        closeModal={closeFirstModal}
        isOpen={isFirstModalOpen}
        icon=""
        bg="bg-[#252731]"
        width="full"
      >
        <div className="p-4">
          <div className="flex items-center gap-2 border w-full p-2 rounded">
            <Search className="size-5 text-white" />
            <input
              type="search"
              placeholder="Search by token"
              value={searchTerm}
              className="outline-none bg-transparent text-white w-full"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="grid gap-5 overflow-auto  max-h-[400px] mt-5 ">
            {filteredTokens.map((item) => (
              <div
                className="flex items-center justify-between "
                key={item.name}
                onClick={() => {
                  onAsetClicked(item);
                }}
              >
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt={item.name} className="size-5" />
                  <div className="flex flex-col ">
                    <h1 className="text-white font-medium">{item.name}</h1>
                    <h1 className="text-sm text-white/40">Persistence</h1>
                  </div>
                </div>
                <div className="flx flex-col gap-1 text-end">
                  <p className="text-white font-semibold">0</p>
                  <h1 className="text-sm text-white/40">${item.value}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
      <div className="flex justify-between items-center mb-3 whitespace-nowrap">
        <p className="text-xl text-white font-semibold">Swap on Persistence</p>
        <button
          onClick={() => setIsSpillageOpen(true)}
          type="button"
          className="inline-flex items-center justify-center whitespace-nowrap text-[#f7931a] bg-[#252731] h-[34px] w-[70px] text-base font-semibold rounded-md"
        >
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 16 16"
              focusable="false"
              className="size-4 align-middle shrink-0"
            >
              <path
                d="M8.00307 5.82159C7.43856 5.82159 6.90992 6.02903 6.50966 6.40813C6.11129 6.78724 5.8904 7.28794 5.8904 7.82263C5.8904 8.35731 6.11129 8.85801 6.50966 9.23712C6.90992 9.61444 7.43856 9.82366 8.00307 9.82366C8.56758 9.82366 9.09622 9.61444 9.49648 9.23712C9.89485 8.85801 10.1157 8.35731 10.1157 7.82263C10.1157 7.28794 9.89485 6.78724 9.49648 6.40813C9.30098 6.22154 9.06829 6.07361 8.81192 5.97292C8.55555 5.87223 8.28061 5.82079 8.00307 5.82159ZM15.7873 10.0329L14.5525 9.03326C14.6111 8.69349 14.6413 8.34658 14.6413 8.00145C14.6413 7.65632 14.6111 7.30761 14.5525 6.96964L15.7873 5.97002C15.8806 5.89438 15.9473 5.79365 15.9787 5.68121C16.0101 5.56877 16.0045 5.44996 15.9629 5.34056L15.9459 5.29406C15.6061 4.39403 15.0969 3.55976 14.443 2.83167L14.4091 2.79411C14.3297 2.70569 14.2238 2.64213 14.1055 2.6118C13.9872 2.58147 13.862 2.58581 13.7464 2.62423L12.2133 3.14103C11.6469 2.70113 11.0163 2.35421 10.3329 2.1128L10.0364 0.594588C10.0141 0.480216 9.95551 0.374997 9.8685 0.292909C9.7815 0.21082 9.67018 0.155749 9.54934 0.135012L9.49837 0.12607C8.51661 -0.0420235 7.48198 -0.0420235 6.50022 0.12607L6.44924 0.135012C6.32841 0.155749 6.21709 0.21082 6.13008 0.292909C6.04308 0.374997 5.9845 0.480216 5.96214 0.594588L5.66384 2.11995C4.98685 2.36329 4.3562 2.70936 3.7966 3.14461L2.25222 2.62423C2.13661 2.5855 2.01129 2.58101 1.89292 2.61136C1.77455 2.6417 1.66873 2.70544 1.58953 2.79411L1.55555 2.83167C0.902849 3.56053 0.393804 4.3946 0.0526962 5.29406L0.0357041 5.34056C-0.0492559 5.56409 0.0206002 5.81444 0.211288 5.97002L1.46115 6.98037C1.40262 7.31656 1.3743 7.6599 1.3743 7.99966C1.3743 8.343 1.40262 8.68634 1.46115 9.01895L0.215064 10.0293C0.121789 10.1049 0.0550305 10.2057 0.0236662 10.3181C-0.00769818 10.4305 -0.00218246 10.5494 0.0394801 10.6588L0.0564721 10.7053C0.3982 11.6047 0.902297 12.4363 1.55932 13.1677L1.59331 13.2052C1.6727 13.2936 1.77853 13.3572 1.89682 13.3875C2.01512 13.4178 2.14035 13.4135 2.25599 13.3751L3.80038 12.8547C4.363 13.2928 4.98982 13.6397 5.66761 13.8794L5.96592 15.4047C5.98828 15.5191 6.04686 15.6243 6.13386 15.7064C6.22087 15.7885 6.33218 15.8436 6.45302 15.8643L6.504 15.8733C7.49542 16.0422 8.51073 16.0422 9.50214 15.8733L9.55312 15.8643C9.67396 15.8436 9.78527 15.7885 9.87228 15.7064C9.95928 15.6243 10.0179 15.5191 10.0402 15.4047L10.3366 13.8865C11.0201 13.6433 11.6507 13.2982 12.2171 12.8583L13.7501 13.3751C13.8658 13.4138 13.9911 13.4183 14.1094 13.388C14.2278 13.3576 14.3336 13.2939 14.4128 13.2052L14.4468 13.1677C15.1038 12.4327 15.6079 11.6047 15.9497 10.7053L15.9667 10.6588C16.0478 10.437 15.978 10.1885 15.7873 10.0329ZM8.00307 10.9663C6.16982 10.9663 4.68396 9.559 4.68396 7.82263C4.68396 6.08625 6.16982 4.67891 8.00307 4.67891C9.83632 4.67891 11.3222 6.08625 11.3222 7.82263C11.3222 9.559 9.83632 10.9663 8.00307 10.9663Z"
                fill="#f7931a"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_619_7657"
                  x1="12.0202"
                  y1="70.5185"
                  x2="-29.4403"
                  y2="59.8549"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00AFFA"></stop>
                  <stop offset="0.47403" stop-color="#F7931A"></stop>
                  <stop offset="1" stop-color="#24FFCA"></stop>
                </linearGradient>
              </defs>
            </svg>
            <p
              className="text-white text-xs
                  "
            >
              {spillege}%
            </p>
          </div>
        </button>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="bg-darkf bg-contain   mb-1 bg-no-repeat ">
          <div className="p-2 rounded-[12px] lg:p-[22px]">
            <p className="text-white font-semibold text-sm">Asset In</p>
            <div className="relative ">
              <hr
                aria-orientation="horizontal"
                className="border-[#44454E] border my-[10px] lg:my-[14px] opacity-[0.6]"
              />
              <div className="flex items-center justify-between mb-2 gap-4 lg:p-0 p-3">
                <div className="flex flex-col text-start">
                  <input
                    maxLength={12}
                    placeholder="0"
                    className="h-[32px] outline-none lg:h-[42px] w-full relative bg-transparent text-white text-2xl font-semibold leading-[1.5]"
                    value={assetIn}
                    onChange={(e: any) => setAssetIn(e.target.value)}
                  />
                  <p className="text-[#787878] absolute bottom-1  text-xs">
                    ${assetIn * selectedAsset.value}
                  </p>
                </div>
                <div
                  className="lg:h-[42px] h-[32px]"
                  onClick={() => {
                    setAssetClicked(1);
                    setFirstModalOpen(true);
                  }}
                >
                  <div className="">
                    <div className="lg:h-[42px] h-[32px] flex items-center gap-3">
                      <div className="flex border-[0.25px] gap-1 w-max p-1 items-center border-[#F7931A] rounded-[24px]">
                        <img src={selectedAsset.icon} className="size-4" />
                        <p className="text-white font-semibold">
                          {selectedAsset.name}
                        </p>
                        <svg
                          viewBox="0 0 18 18"
                          focusable="false"
                          className="size-4 text-white stroke-white"
                        >
                          <path
                            d="M4 7L9 12L14 7"
                            stroke="dark.nav.itemColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex px-3 justify-end text-[#787878]">0</div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="flex items-center justify-center w-[38px] h-[38px] cursor-pointer rounded-full bg-transparent absolute">
            <img
              alt="logo"
              src="https://app.persistence.one/icons/swap_dark.svg"
              className="size-[38px]"
            />
          </div>
        </div>
        <div className="bg-darkt  mt-[8px] bg-no-repeat bg-contain">
          <div className="p-2 rounded-[12px] lg:p-[22px] ">
            <p className="text-white font-semibold text-sm">Asset Out</p>
            <div className="relative">
              <hr
                aria-orientation="horizontal"
                className="border-[#44454E] border my-[10px] lg:my-[14px] opacity-[0.6]"
              />
              <div className="flex items-center justify-between mb-2 gap-4 lg:p-0 p-3">
                <div className="flex flex-col text-start">
                  <input
                    maxLength={12}
                    placeholder="0"
                    disabled
                    className="h-[32px] outline-none lg:h-[42px] w-full relative bg-transparent text-white/30 text-2xl font-semibold leading-[1.5]"
                    value={
                      selectedAssetOut.value *
                      (selectedAssetOut.value * assetIn)
                    }
                  />
                  <p className="text-[#787878] absolute bottom-1  text-xs">
                    ${selectedAssetOut.value * assetIn}
                  </p>
                </div>
                <div
                  className="lg:h-[42px] h-[32px]"
                  onClick={() => {
                    setAssetClicked(2);
                    setFirstModalOpen(true);
                  }}
                >
                  <div className="">
                    <div className="lg:h-[42px] h-[32px] flex items-center gap-3">
                      <div className="flex border-[0.25px] gap-1 w-max p-1 items-center border-[#F7931A] rounded-[24px]">
                        <img src={selectedAssetOut.icon} className="size-4" />
                        <p className="text-white font-semibold">
                          {selectedAssetOut.name}
                        </p>
                        <svg
                          viewBox="0 0 18 18"
                          focusable="false"
                          className="size-4 text-white stroke-white"
                        >
                          <path
                            d="M4 7L9 12L14 7"
                            stroke="dark.nav.itemColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex px-3 justify-end text-[#787878]">0</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;
