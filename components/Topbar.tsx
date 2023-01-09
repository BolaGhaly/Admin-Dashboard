import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggledarkMode } from "../store/darkMode";
import Icon from "../utils/topBarUtils";
import { openSideBarReverse } from "../store/sideBar";
import Image from "next/image";

const Topbar = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const dispatch = useDispatch();

  return (
    <nav
      className={`fixed top-0 left-0 px-4 mw-minus-sideBar z-40 ml-16 border-b-2 border-neutral-400 ${
        darkMode ? "bg-neutral-800" : "bg-neutral-200"
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
            className={`${darkMode ? "text-white" : "text-black"}`}
            title="Notifications"
          >
            <Icon name="notifications" className="text-2xl" />
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
          >
            <Icon name="fullscreen" className="text-2xl" />
          </button>
          <div className="flex items-center ml-2" title="User's Profile">
            <Image
              className="rounded-full w-12 h-12"
              src="/img5.jpg"
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
