import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/persistence-logo.svg";
import logoDaek from "../assets/persistence-logo-dark.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change color after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isActive && (
        <div className="bg-[#fcf7f1] lg:hidden fixed inset-0 z-[100]">
          <div className="py-5 w-full container mx-auto px-5">
            <nav className="flex items-center justify-between">
              <div className="">
                <Link to="/">
                  <img
                    src={logoDaek}
                    alt="Persistence logo"
                    className="h-[31px] w-[160px]"
                  />
                </Link>
              </div>
              <button
                onClick={() => setIsActive(false)}
                type="button"
                className="bg-[#E59636] rounded-full lg:hidden relative size-10 min-w-10 text-[#FFF8EE] flex items-center justify-center"
                aria-label="Open Menu"
              >
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
                  ></path>
                </svg>
              </button>
            </nav>
            <div className="flex flex-col gap-6 items-start mt-10 px-5  text-lg font-medium">
              <Link to="/functionalities">Functionalities</Link>
              <Link to="/swap" target="_blank">
                XPRT
              </Link>
              <Link to="/swap" target="_blank">
                Connect
              </Link>
              <Link to="/swap" target="_blank">
                Community
              </Link>
            </div>
          </div>
        </div>
      )}
      <header
        className={`sticky top-0 z-50 w-full py-2 transition-colors duration-300 ${
          isScrolled
            ? "bg-[#fff8ee] shadow-lg text-black"
            : "bg-brown text-white"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-20">
          <Link to="/">
            <img
              src={isScrolled ? logoDaek : logo}
              alt="Persistence logo"
              className="lg:h-[31px] lg:w-[236px] h-[31px] w-[160px]"
            />
          </Link>
          <div className="hidden lg:flex gap-6 items-center  text-lg font-medium">
            <Link to="/functionalities">Functionalities</Link>
            <Link to="/swap" target="_blank">
              XPRT
            </Link>
            <Link to="/swap" target="_blank">
              Connect
            </Link>
            <Link to="/swap" target="_blank">
              Community
            </Link>
          </div>
          <button
            onClick={() => setIsActive(true)}
            type="button"
            className="bg-[#E59636] rounded-full lg:hidden relative size-10 min-w-10 text-[#FFF8EE] flex items-center justify-center"
            aria-label="Open Menu"
          >
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              className="size-4"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
