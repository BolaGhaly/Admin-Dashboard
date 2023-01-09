import Link from "next/link";
import useOnclickOutside from "react-cool-onclickoutside";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { openSideBarOff, openSideBarReverse } from "../store/sideBar";
import Icon, { navData } from "../utils/sideBarUtils";

const Sidebar = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
  const dispatch = useDispatch();
  const sideBarRef = useOnclickOutside(() => dispatch(openSideBarOff()));

  return (
    <nav
      className={`fixed min-h-full z-50 top-0 left-0 border-r-2 border-neutral-400 ${
        openSideBar ? "w-52" : "w-16"
      } ${darkMode ? "bg-neutral-800" : "bg-neutral-200"}`}
      ref={sideBarRef}
    >
      <div
        className={`flex flex-col ${
          openSideBar ? "pl-[17px]" : "items-center"
        }`}
      >
        <div className="flex flex-col">
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
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
