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
        openSideBar ? "w-[180px]" : "w-[60px]"
      } ${darkMode ? "bg-neutral-700" : "bg-neutral-200"}`}
      ref={ref}
    >
      <div className={`flex flex-col ${openSideBar ? "" : "items-center"}`}>
        <button
          className="text-2xl"
          onClick={() => dispatch(openSideBarReverse())}
        >
          {openSideBar ? <Icon name="leftArrow" /> : <Icon name="rightArrow" />}
        </button>

        <div className="flex flex-col">
          <button>
            <Icon
              name="darkMode"
              className={`text-2xl ${darkMode ? "text-white" : "text-black"}`}
              onClick={() => dispatch(toggledarkMode())}
            />
            {openSideBar ? "Dark Mode" : ""}
          </button>
          {navData.map((item) => {
            return (
              <Link key={item.id} href={item.link}>
                <button
                  className={`text-2xl ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  <Icon name={`${item.icon}`} />
                </button>
                <span className={`${openSideBar ? "" : "hidden"}`}>
                  {item.text}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
