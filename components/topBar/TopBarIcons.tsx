import { openSideBarReverse } from "../../store/sideBar";
import { toggledarkMode } from "../../store/darkMode";
import Icon from "../../utils/topBarUtils";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import UserProfile from "./UserProfile";
import NotificationsMenu from "./NotificationsMenu";

const TopBarIcons = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const dispatch = useDispatch();

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
    <div className="flex min-h-[64px]">
      <button
        className={`${darkMode ? "text-white" : "text-black"}`}
        onClick={() => dispatch(openSideBarReverse())}
        title="Menu"
      >
        <Icon name="menu" className="text-2xl" />
      </button>
      <div className="w-full flex justify-end">
        <NotificationsMenu />
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
        <UserProfile />
      </div>
    </div>
  );
};

export default TopBarIcons;
