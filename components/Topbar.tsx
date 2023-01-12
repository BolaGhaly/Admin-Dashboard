import { useDispatch, useSelector } from "react-redux";
import { useState, Fragment } from "react";
import { RootState } from "../store/store";
import { openSideBarReverse } from "../store/sideBar";
import { toggledarkMode } from "../store/darkMode";
import Icon from "../utils/topBarUtils";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";

const Topbar = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const dispatch = useDispatch();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    const element = document.documentElement as HTMLElement & {
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
    };

    const htmlDoc = document as Document & {
      mozCancelFullScreen(): Promise<void>;
      webkitExitFullscreen(): Promise<void>;
      msExitFullscreen(): Promise<void>;
    };

    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (htmlDoc.mozCancelFullScreen) {
        htmlDoc.mozCancelFullScreen();
      } else if (htmlDoc.webkitExitFullscreen) {
        htmlDoc.webkitExitFullscreen();
      } else if (htmlDoc.msExitFullscreen) {
        htmlDoc.msExitFullscreen();
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }

    setIsFullScreen(!isFullScreen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 px-4 mw-minus-sideBar z-40 ml-16 ${
        darkMode
          ? "bg-dark-sc shadow-[0_2px_4px_0px_rgba(220,220,220,0.4)]"
          : "bg-light-sc shadow-[0_2px_4px_0px_rgba(0,0,0,0.4)]"
      }`}
    >
      <div className="flex min-h-[64px]">
        <button
          className={`${darkMode ? "text-white" : "text-black"}`}
          onClick={() => dispatch(openSideBarReverse())}
          title="Menu"
        >
          <Icon name="menu" className="text-2xl" />
        </button>
        <div className="w-full flex justify-end">
          <button
            className={`relative ${darkMode ? "text-white" : "text-black"}`}
            title="Notifications"
          >
            <Icon name="notifications" className="text-2xl" />
            <span
              className={`bg-red-500 absolute w-2 h-2 rounded-full top-[22px] -right-0 ring-2 ${
                darkMode ? "ring-dark-sc" : "ring-light-sc"
              }`}
            />
          </button>
          <button
            className={`ml-2 ${darkMode ? "text-white" : "text-black"}`}
            onClick={() => dispatch(toggledarkMode())}
            title="Theme Mode"
          >
            {darkMode ? (
              <Icon name="darkModeOn" className="text-2xl" />
            ) : (
              <Icon name="darkModeOff" className="text-2xl" />
            )}
          </button>
          <button
            className={`ml-2 ${darkMode ? "text-white" : "text-black"}`}
            title="Fullscreen"
            onClick={handleFullScreen}
          >
            {isFullScreen ? (
              <Icon name="fullscreenOff" className="text-2xl" />
            ) : (
              <Icon name="fullscreenOn" className="text-2xl" />
            )}
          </button>
          <Menu
            as="div"
            className="flex items-center ml-2 cursor-pointer relative"
            title="User's Profile"
          >
            <Menu.Button className="flex">
              <Image
                className="rounded-full w-12 h-12"
                src="/profileImg.jpg"
                width={100}
                height={100}
                alt="Profile Image"
                loading="eager"
              />
              <div className="pl-1 hidden md:flex md:flex-col md:items-start">
                <p
                  className={`text-lg ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  Bradley Cruz
                </p>
                <p
                  className={`leading-none font-medium ${
                    darkMode ? "text-dark-sc-text" : "text-light-sc-text"
                  }`}
                >
                  CEO
                </p>
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className={`absolute right-0 top-[56px] mt-2 w-56 origin-top-right rounded-md  shadow-lg ring-black ring-1 ring-opacity-5 focus:outline-none ${
                  darkMode ? "" : "bg-light-sc-ct"
                }`}
              >
                <div className="px-1 py-1">
                  <Menu.Item>
                    <button className="hover:bg-light-pr-text hover:text-white text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                      <Icon
                        name="profileSettings"
                        className="mr-2 text-xl"
                        aria-hidden="true"
                      />
                      <span>Settings</span>
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button className="hover:bg-violet-500 hover:text-white text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                      <Icon
                        name="support"
                        className="mr-2 text-xl"
                        aria-hidden="true"
                      />
                      <span>Support</span>
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button className="hover:bg-violet-500 hover:text-white text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                      <Icon
                        name="signOut"
                        className="mr-2 text-xl"
                        aria-hidden="true"
                      />
                      <span>Sign Out</span>
                    </button>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* <div
            className="flex items-center ml-2 cursor-pointer"
            title="User's Profile"
          >
            <Image
              className="rounded-full w-12 h-12"
              src="/profileImg.jpg"
              width={100}
              height={100}
              alt="Profile Image"
            />
            <div className="pl-1 hidden md:flex md:flex-col">
              <p
                className={`text-lg ${darkMode ? "text-white" : "text-black"}`}
              >
                Bradley Cruz
              </p>
              <p
                className={`leading-none font-medium ${
                  darkMode ? "text-dark-sc-text" : "text-light-sc-text"
                }`}
              >
                CEO
              </p>
            </div>
          </div> */}
      </div>
    </nav>
  );
};

export default Topbar;
