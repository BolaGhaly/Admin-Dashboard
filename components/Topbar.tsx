import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggledarkMode } from "../store/darkMode";
import Icon from "../utils/topBarUtils";
import { openSideBarReverse } from "../store/sideBar";

const Topbar = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const dispatch = useDispatch();

  return (
    <nav
      className={`fixed top-0 left-0 mw-minus-sideBar ml-16 ${
        darkMode ? "bg-neutral-800" : "bg-neutral-200"
      }`}
    >
      <div className="flex items-center p-4">
        <button
          className={`${darkMode ? "text-white" : "text-black"}`}
          onClick={() => dispatch(openSideBarReverse())}
        >
          <Icon name="menu" className="text-2xl" />
        </button>
        <div className="w-full flex justify-end">
          <button className={`${darkMode ? "text-white" : "text-black"}`}>
            <Icon
              name="notifications"
              className="text-2xl"
              title="Notifications"
            />
          </button>
          <button
            className={`${darkMode ? "text-white" : "text-black"}`}
            onClick={() => dispatch(toggledarkMode())}
            title="Theme Mode"
          >
            {darkMode ? (
              <Icon name="darkModeOn" className="text-2xl" />
            ) : (
              <Icon name="darkModeOff" className="text-2xl" />
            )}
          </button>
          <button className={`${darkMode ? "text-white" : "text-black"}`}>
            <Icon name="fullscreen" className="text-2xl" title="Fullscreen" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
