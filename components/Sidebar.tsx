import Link from "next/link";
import useOnclickOutside from "react-cool-onclickoutside";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggledarkMode } from "../store/darkMode";
import { openSideBarOff, openSideBarReverse } from "../store/sideBar";
import Icon, { navData } from "../utils/sideNavBar";

const Sidebar = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
  const dispatch = useDispatch();
  const ref = useOnclickOutside(() => dispatch(openSideBarOff()));

  return (
    <nav
      className={`fixed min-h-full top-0 left-0 border-r-2 border-neutral-400 ${
        openSideBar ? "w-[200px]" : "w-[60px]"
      } ${darkMode ? "bg-neutral-700" : "bg-neutral-200"}`}
      ref={ref}
    >
      <div
        className={`flex flex-col ${
          openSideBar ? "pl-[17px]" : "items-center"
        }`}
      >
        <button
          className={`text-2xl ${darkMode ? "text-white" : "text-black"}`}
          onClick={() => dispatch(openSideBarReverse())}
        >
          {openSideBar ? <Icon name="leftArrow" /> : <Icon name="rightArrow" />}
        </button>

        <div className="flex flex-col">
          <button
            className={`flex items-center ${
              darkMode ? "text-white" : "text-black"
            }`}
            onClick={() => dispatch(toggledarkMode())}
          >
            <Icon name="darkMode" className="text-2xl" />
            <span className={`pl-2 ${openSideBar ? "" : "hidden"}`}>
              Dark Mode
            </span>
          </button>
          {navData.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.link}
                className={`flex items-center`}
              >
                <button
                  className={`text-2xl ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  <Icon name={`${item.icon}`} />
                </button>
                <span
                  className={`pl-2 ${openSideBar ? "" : "hidden"} ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {item.text}
                </span>
              </Link>
            );
          })}
          <button
            className={`flex items-center ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <Icon name="signOut" className="text-2xl" />
            <span className={`pl-2 ${openSideBar ? "" : "hidden"}`}>
              Sign Out
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
