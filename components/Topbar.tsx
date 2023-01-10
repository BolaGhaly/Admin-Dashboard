import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggledarkMode } from "../store/darkMode";
import Icon from "../utils/topBarUtils";
import { openSideBarReverse } from "../store/sideBar";
import Image from "next/image";
import { useState } from "react";

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
          ? "bg-neutral-800 shadow-[0_2px_10px_0px_rgba(255,255,255,0.4)]"
          : "bg-neutral-200 shadow-[0_2px_10px_0px_rgba(0,0,0,0.4)]"
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
            className={`relative ${
              darkMode
                ? "text-white"
                : "text-black"
            }`}
            title="Notifications"
          >
            <Icon name="notifications" className="text-2xl" />
            <span
              className={`absolute w-2 h-2 rounded-full top-[22px] -right-0 ring-2 ${
                darkMode
                  ? "bg-rose-400 ring-neutral-800"
                  : "bg-rose-500 ring-neutral-200"
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
          <div
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
            <div className="pl-1 leading-none hidden md:flex md:flex-col">
              <h1
                className={`text-lg font-medium ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Bradley Cruz
              </h1>
              <p
                className={`leading-none ${
                  darkMode ? "text-slate-200" : "text-slate-600"
                }`}
              >
                CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
