import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggledarkMode } from "../store/darkMode";
import Icon from "../utils/topBarUtils";

const Topbar = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const dispatch = useDispatch();

  return (
    <nav
      className={`fixed top-0 left-0 w-full ml-16 p-4 ${darkMode ? "bg-neutral-800" : "bg-neutral-200"}`}
    >
      <div className={`flex items-center`}>
        <button
          className={`flex items-center ${
            darkMode ? "text-white" : "text-black"
          }`}
          onClick={() => dispatch(toggledarkMode())}
        >
          {darkMode ? (
            <Icon name="darkModeOn" className="text-2xl" />
          ) : (
            <Icon name="darkModeOff" className="text-2xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Topbar;
