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
      <button
        className="cursor-pointer pl-5 border-none bg-transparent justify-self-end"
        onClick={() => dispatch(openSideBarReverse())}
      >
        {openSideBar ? <Icon name="leftArrow" /> : <Icon name="rightArrow" />}
      </button>

      <button className="px-5 ">
        <Icon
          name="darkMode"
          className="text-xl"
          onClick={() => dispatch(toggledarkMode())}
        />
      </button>
      {navData.map((item) => {
        return (
          <Link
            key={item.id}
            className="flex items-center py-[10px] px-5"
            href={item.link}
          >
            <div className="text-xl">
              <Icon name={`${item.icon}`} />
            </div>
            <span className={`${openSideBar ? "" : "invisible"}`}>
              {item.text}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Sidebar;
