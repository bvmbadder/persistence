import Modal from "@/components/Modal";
import logo from "../assets/persistence-logo.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { wallets, WalletsDataType } from "@/utils";
import q from "../assets/icon/q.png";
import back from "../assets/icon/back.png";
import { ChromeIcon } from "lucide-react";
import TabModal from "@/components/TabModal";
import Token from "@/components/Token";
const Swap = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change color after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [value, setValue] = useState("");
  const [formTab, setFormTab] = useState(false);
  const onSetFormTabClose = () => {
    setFormTab(false);
    openFirstModal();
  };

  const onSetFormTabOpen2 = (value: string) => {
    setValue(value);
    closeFirstModal();
    closeSecondModal();
    setFormTab(true);
  };
  const onSetFormTabClose2 = () => {
    setFormTab(false);
    openSecondModal();
  };
  const [items, setItems] = useState<WalletsDataType | null>();
  const [isFirstModalOpen, setFirstModalOpen] = useState<boolean>(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState<boolean>(false);

  const openFirstModal = () => setFirstModalOpen(true);
  const closeFirstModal = () => setFirstModalOpen(false);

  const openSecondModal = () => {
    closeFirstModal();
    setSecondModalOpen(true);
  };
  const closeSecondModal = () => setSecondModalOpen(false);

  const backToFirstModal = () => {
    closeSecondModal();
    setFirstModalOpen(true);
  };

  return (
    <div className="flex justify-between relative min-h-screen bg-dm bg-cover flex-col">
      {formTab && (
        <TabModal
          isOpen={formTab}
          onClose={isFirstModalOpen ? onSetFormTabClose : onSetFormTabClose2}
          value={value}
        />
      )}
      <Modal
        icon={q}
        title="Select your wallet"
        closeModal={closeFirstModal}
        isOpen={isFirstModalOpen}
      >
        <div className="grid gap-1 p-3">
          {wallets.map((item) => (
            <div
              className="rounded-lg p-3 flex items-center gap-5"
              style={{
                background: "rgba(0, 0, 0, 0.36)",
                color: "rgba(255, 255, 255, 0.80)",
              }}
              key={item.name}
              onClick={() => {
                setItems(item);
                setSecondModalOpen(true);
              }}
            >
              <img src={item.icon} alt="" className="size-8" />
              <p className="">{item.name}</p>
            </div>
          ))}
        </div>
      </Modal>
      {items && (
        <Modal
          title={items.name}
          icon={back}
          isOpen={isSecondModalOpen}
          closeModal={closeSecondModal}
          backToFirstModal={backToFirstModal}
        >
          <div className="flex flex-col items-center gap-3 p-4">
            <div className=" size-20 rounded-full border-2 border-[#E53E3E] flex items-center justify-center">
              <img src={items.icon} alt="" className="size-12" />
            </div>
            <p className="text-[#E53E3E] font-semibold">
              {items.name} is not detected
            </p>
            <p className="text-sm  pt-1 text-center text-gray-300 px-10">
              If {items.name} is detected on your device, please refresh this
              page or follow the browser instruction.
            </p>
            <button
              onClick={() => {
                onSetFormTabOpen2(items.name);
              }}
              type="button"
              className="flex items-center justify-center text-[#bec4ef] border-2 border-[#1A202C] rounded-lg  p-4 gap-2 w-full"
            >
              <ChromeIcon /> Add {items.name} manually
            </button>
          </div>
        </Modal>
      )}
      <header
        className={`sticky top-0 z-50 w-full py-2 transition-colors duration-300 text-white ${
          isScrolled ? "hidden" : "block"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-20">
          <Link to="#" className="hidden lg:block">
            <img
              src={logo}
              alt="Persistence logo"
              className="lg:h-[31px] lg:w-[236px] h-[31px] w-[160px]"
            />
          </Link>
          <div
            className="bg-[#252731] block lg:hidden p-2 rounded-[0.5rem] border border-[#FC9A2333]"
            onClick={() => setIsActive(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#787878"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </div>
          <div className="flex gap-6 items-center text-base font-light">
            <Link className="hidden lg:block" to="#">
              Swap
            </Link>
            <Link className="hidden lg:block" to="#">
              Pools
            </Link>
            <Link className="hidden lg:block" to="#">
              Assets
            </Link>
            <button
              onClick={() => setFirstModalOpen(true)}
              type="button"
              className="flex items-center gap-2 border text-[#E59636] font-semibold bg-[#252731] border-[#E59636] rounded-full p-2 px-4"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </header>
      <div className="w-full flex items-center justify-center flex-1 mx-auto relative z-[2] mt-40 p-6">
        <form className="mt-4 w-[370px]  lg:w-[420px] mx-auto px-0">
          <Token />
          <div className="flex flex-col items-center">
            <button
              onClick={() => setFirstModalOpen(true)}
              type="button"
              className="inline-flex items-center align-middle justify-center font-medium bg-[#F7931A] border border-[#F7931A] text-white w-full h-[36px] mt-3 rounded-[12px]"
            >
              Connect Wallet
            </button>
            <div className="bg-[#252731] border-[#252731] border-0 rounded-[1rem] mt-3 w-full p-4">
              <div className="">
                <div className="flex items-center justify-between">
                  <p className="text-white font-medium">
                    1 ATOM ≈ 41.248459 XPRT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <footer className="flex justify-center flex-col md:flex-row gap-2 py-4 items-center mt-[153px]">
        <div className="flex items-center flex-wrap gap-2 justify-center">
          <div className="chakra-stack css-eyeaxy">
            <a
              rel="noopener"
              className="chakra-link css-spn4bz"
              href="https://persistence.one/"
            >
              <p className="chakra-text css-b651xq">About</p>
            </a>
            <div className="css-1y16ewv"></div>
            <a
              rel="noopener"
              className="chakra-link css-spn4bz"
              href="https://persistence.one/termsofuse"
            >
              <p className="chakra-text css-1p7lvrt">Terms of Use</p>
            </a>
            <div className="css-1y16ewv"></div>
            <a
              rel="noopener"
              className="chakra-link css-spn4bz"
              href="https://persistence.one/privacy"
            >
              <p className="chakra-text css-1p7lvrt">Privacy Policy</p>
            </a>
            <div className="css-1y16ewv"></div>
          </div>
        </div>
        <div className="chakra-stack css-1igwmid">
          <a
            rel="noopener"
            className="chakra-link css-kmbn6"
            href="https://t.me/persistenceone"
          >
            <svg
              width="20"
              height="18"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4735 0C14.4272 0 14.381 8.79525e-08 14.3117 0.0231467L1.18371 5.02282C0.813905 5.1617 0.813907 5.69408 1.20682 5.80981L4.25769 6.82826L6.08358 10.5086C6.10669 10.578 6.17603 10.6243 6.26848 10.6243C6.31471 10.6243 6.36093 10.6012 6.38404 10.578L8.09438 9.11978L6.17603 7.66154L6.33782 9.58271L4.95106 6.71253L12.2778 2.29152L6.17603 7.63839L10.9372 11.2493C11.099 11.365 11.2839 11.4344 11.4688 11.4344C11.8386 11.4344 12.2084 11.1798 12.3009 10.7863L14.8664 0.48608C14.9588 0.254613 14.7508 0 14.4735 0Z"
                fill="#787878"
              ></path>
            </svg>
          </a>
          <a
            rel="noopener"
            className="chakra-link css-kmbn6"
            href="https://twitter.com/PersistenceOne?utm_source=persistence_dex&amp;utm_medium=persistence&amp;utm_campaign=persistence"
          >
            <svg
              width="20"
              height="18"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4252 2.83202C13.4338 2.95544 13.4338 3.07886 13.4338 3.20342C13.4338 6.99878 10.5487 11.376 5.27325 11.376V11.3737C3.71487 11.376 2.18886 10.9289 0.876953 10.086C1.10355 10.1133 1.33129 10.127 1.5596 10.1275C2.85106 10.1287 4.1056 9.69471 5.12162 8.8956C3.89433 8.87228 2.81812 8.07089 2.44215 6.90095C2.87207 6.98399 3.31505 6.96692 3.73702 6.85147C2.39899 6.58073 1.43636 5.4034 1.43636 4.03609C1.43636 4.02358 1.43636 4.01163 1.43636 3.99969C1.83504 4.22208 2.28143 4.3455 2.73804 4.35915C1.47782 3.51567 1.08936 1.83668 1.85038 0.52398C3.30653 2.31843 5.45499 3.40931 7.76133 3.52477C7.53019 2.52716 7.84595 1.48178 8.59107 0.780492C9.74623 -0.306983 11.563 -0.251244 12.6489 0.905051C13.2912 0.778217 13.9068 0.54218 14.4702 0.207748C14.2561 0.872631 13.808 1.43741 13.2094 1.7963C13.7779 1.72919 14.3333 1.57676 14.8564 1.34414C14.4714 1.922 13.9863 2.42535 13.4252 2.83202Z"
                fill="#787878"
              ></path>
            </svg>
          </a>
          <a
            rel="noopener"
            className="chakra-link css-kmbn6"
            href="https://discord.persistence.one/"
          >
            <svg
              width="22"
              height="18"
              viewBox="0 0 17 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3694 0.995235C13.351 0.535265 12.2593 0.195287 11.1177 0.00196665C11.1075 1.20538e-05 11.097 0.00127167 11.0875 0.0055713C11.0781 0.00987094 11.0703 0.0169979 11.0651 0.0259651C10.9253 0.271949 10.7695 0.592595 10.6603 0.845911C9.44955 0.664748 8.2186 0.664748 7.00781 0.845911C6.88622 0.56517 6.7491 0.29143 6.59709 0.0259651C6.59194 0.0168875 6.58415 0.00959932 6.57475 0.0050732C6.56535 0.000547074 6.5548 -0.00100181 6.54451 0.00063334C5.40355 0.193954 4.31185 0.533932 3.29271 0.994568C3.28394 0.998251 3.27651 1.00453 3.27141 1.01257C1.19985 4.06237 0.632032 7.03684 0.910948 9.97398C0.911724 9.98117 0.913954 9.98813 0.917501 9.99444C0.921049 10.0007 0.92584 10.0063 0.931583 10.0106C2.1407 10.8922 3.48931 11.5638 4.92094 11.9972C4.93092 12.0003 4.94159 12.0002 4.95157 11.9972C4.96154 11.9941 4.97036 11.988 4.97685 11.9798C5.28492 11.5673 5.55792 11.1295 5.79296 10.6713C5.79623 10.665 5.79811 10.6581 5.79848 10.651C5.79885 10.644 5.7977 10.6369 5.79511 10.6304C5.79253 10.6238 5.78856 10.6179 5.78348 10.6129C5.7784 10.608 5.77233 10.6043 5.76567 10.6019C5.33565 10.4398 4.919 10.2441 4.51954 10.0166C4.51236 10.0125 4.50631 10.0067 4.50194 9.99969C4.49756 9.99267 4.49499 9.98467 4.49447 9.97641C4.49394 9.96815 4.49547 9.95989 4.49891 9.95237C4.50236 9.94485 4.50762 9.9383 4.51421 9.93331C4.59809 9.87132 4.68196 9.80666 4.76184 9.74199C4.76903 9.73618 4.77769 9.73248 4.78686 9.7313C4.79603 9.73012 4.80534 9.73152 4.81377 9.73533C7.42785 10.9113 10.2589 10.9113 12.8424 9.73533C12.8508 9.73129 12.8603 9.72971 12.8696 9.73077C12.8789 9.73184 12.8877 9.73549 12.895 9.74133C12.9749 9.80665 13.0581 9.87132 13.1426 9.93331C13.1493 9.9382 13.1546 9.94466 13.1582 9.95211C13.1617 9.95957 13.1634 9.9678 13.163 9.97605C13.1626 9.98431 13.1602 9.99234 13.1559 9.99942C13.1517 10.0065 13.1457 10.0124 13.1386 10.0166C12.7406 10.246 12.3265 10.4399 11.8918 10.6013C11.8851 10.6037 11.8791 10.6075 11.874 10.6125C11.8689 10.6175 11.8649 10.6235 11.8624 10.6301C11.8598 10.6367 11.8586 10.6438 11.859 10.6509C11.8594 10.658 11.8613 10.665 11.8645 10.6713C12.1042 11.1292 12.3784 11.5652 12.68 11.9792C12.6862 11.9877 12.695 11.994 12.705 11.9974C12.715 12.0007 12.7258 12.0009 12.7359 11.9978C14.17 11.5656 15.5208 10.8938 16.7312 10.0106C16.7371 10.0065 16.7421 10.0012 16.7458 9.99495C16.7494 9.98874 16.7518 9.98182 16.7525 9.97464C17.0854 6.57887 16.1947 3.6284 14.3901 1.0139C14.3857 1.0054 14.3783 0.99878 14.3694 0.995235ZM6.18371 8.18543C5.39689 8.18543 4.74786 7.47281 4.74786 6.59887C4.74786 5.72426 5.38424 5.0123 6.18371 5.0123C6.98917 5.0123 7.63221 5.73026 7.61956 6.59887C7.61956 7.47348 6.98318 8.18543 6.18371 8.18543ZM11.4924 8.18543C10.7049 8.18543 10.0566 7.47281 10.0566 6.59887C10.0566 5.72426 10.6923 5.0123 11.4924 5.0123C12.2979 5.0123 12.9409 5.73026 12.9283 6.59887C12.9283 7.47348 12.2985 8.18543 11.4924 8.18543Z"
                fill="#787878"
              ></path>
            </svg>
          </a>
          <a
            rel="noopener"
            className="chakra-link css-kmbn6"
            href="https://github.com/dexter-zone"
          >
            <svg
              width="20"
              height="18"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.30003 0C3.71405 0 0.80957 2.98232 0.80957 6.66441C0.80957 9.61341 2.66746 12.1042 5.24742 12.9873C5.57195 13.0456 5.69364 12.8456 5.69364 12.6707C5.69364 12.5124 5.68553 11.9876 5.68553 11.4295C4.0548 11.7377 3.63292 11.0213 3.50311 10.6464C3.43009 10.4548 3.11368 9.86333 2.83784 9.70505C2.61067 9.58009 2.28615 9.27186 2.82973 9.26353C3.34085 9.2552 3.70594 9.7467 3.82763 9.94663C4.41178 10.9546 5.34478 10.6714 5.71798 10.4964C5.77477 10.0633 5.94515 9.77169 6.13175 9.60508C4.68762 9.43847 3.17859 8.86366 3.17859 6.31453C3.17859 5.58977 3.43009 4.98998 3.84386 4.52347C3.77896 4.35686 3.55179 3.67376 3.90877 2.7574C3.90877 2.7574 4.45234 2.58246 5.69364 3.4405C6.21288 3.29055 6.76457 3.21558 7.31626 3.21558C7.86795 3.21558 8.41964 3.29055 8.93887 3.4405C10.1802 2.57413 10.7237 2.7574 10.7237 2.7574C11.0807 3.67376 10.8536 4.35686 10.7887 4.52347C11.2024 4.98998 11.4539 5.58144 11.4539 6.31453C11.4539 8.87199 9.93678 9.43847 8.49265 9.60508C8.72793 9.81334 8.93076 10.2132 8.93076 10.838C8.93076 11.7294 8.92265 12.4458 8.92265 12.6707C8.92265 12.8456 9.04434 13.0539 9.36887 12.9873C10.6573 12.5406 11.7769 11.6903 12.5701 10.5561C13.3633 9.42184 13.7901 8.06076 13.7905 6.66441C13.7905 2.98232 10.886 0 7.30003 0Z"
                fill="#787878"
              ></path>
            </svg>
          </a>
          <a
            rel="noopener"
            className="chakra-link css-kmbn6"
            href="https://blog.persistence.one/"
          >
            <svg
              width="22"
              height="18"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6205 5.50009C11.6205 8.53762 9.19339 11 6.19952 11C3.20565 11 0.77832 8.53762 0.77832 5.50009C0.77832 2.46257 3.20547 0 6.19952 0C9.19358 0 11.6205 2.46257 11.6205 5.50009Z"
                fill="#787878"
              ></path>
              <path
                d="M17.5677 5.50018C17.5677 8.35935 16.3541 10.6781 14.8571 10.6781C13.3601 10.6781 12.1465 8.35935 12.1465 5.50018C12.1465 2.64101 13.3599 0.322266 14.8569 0.322266C16.3539 0.322266 17.5675 2.64026 17.5675 5.50018"
                fill="#787878"
              ></path>
              <path
                d="M20.0002 5.49992C20.0002 8.06104 19.5735 10.1385 19.0469 10.1385C18.5203 10.1385 18.0938 8.0616 18.0938 5.49992C18.0938 2.93825 18.5205 0.861328 19.0469 0.861328C19.5733 0.861328 20.0002 2.93806 20.0002 5.49992Z"
                fill="#787878"
              ></path>
            </svg>
          </a>
        </div>
      </footer>
      {isActive && (
        <div
          className="chakra-modal__overlay css-1i6v7mi"
          onClick={() => setIsActive(false)}
        >
          <div className="">
            <div className="modal__content-container css-17pwl6t">
              <div
                role="dialog"
                id="chakra-modal-:ra:"
                tabIndex={-1}
                aria-modal="true"
                className="chakra-slide chakra-modal__content css-1wmrxlh"
                aria-labelledby="chakra-modal--header-:ra:"
                aria-describedby="chakra-modal--body-:ra:"
                style={{
                  position: "fixed",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "100%",
                  transform: "translateX(0%) translateY(0px) translateZ(0px)",
                }}
              >
                <header
                  className="chakra-modal__header css-c4rtl6"
                  id="chakra-modal--header-:ra:"
                >
                  <a href="#">
                    <img
                      alt="logo"
                      src="https://app.persistence.one/images/logo_light.svg"
                      className="chakra-image css-1k716hv"
                    />
                  </a>
                </header>
                <div
                  className="chakra-modal__body css-1dl77l4"
                  id="chakra-modal--body-:ra:"
                >
                  <div className="css-1l4w6pd">
                    <div className="chakra-stack css-tl3ftk">
                      <div className="chakra-stack css-18s58is">
                        <img
                          src="https://app.persistence.one/icons/swap_icon.svg"
                          className="chakra-image css-9uy14h"
                        />
                        <a
                          className="chakra-button css-aepi14"
                          target="_self"
                          href="#"
                        >
                          Swap
                        </a>
                      </div>
                      <div className="chakra-stack css-4quhyf">
                        <img
                          src="https://app.persistence.one/icons/pools_icon.svg"
                          className="chakra-image css-0"
                        />
                        <a
                          className="chakra-button css-1q0r40p"
                          target="_self"
                          href="#"
                        >
                          Pools
                        </a>
                      </div>
                      <div className="chakra-stack css-4quhyf">
                        <img
                          src="https://app.persistence.one/icons/assets_icon.svg"
                          className="chakra-image css-0"
                        />
                        <a
                          className="chakra-button css-1q0r40p"
                          target="_self"
                          href="#"
                        >
                          Assets
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Swap;
