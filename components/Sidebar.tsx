import Link from "next/link";
import useOnclickOutside from "react-cool-onclickoutside";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { openSideBarOff } from "../store/sideBar";
import Icon, { navData } from "../utils/sideBarUtils";
import styles from "../styles/modules/sideBar.module.scss";

const Sidebar = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
  const dispatch = useDispatch();
  const sideBarRef = useOnclickOutside(() => dispatch(openSideBarOff()));

  return (
    <nav
      className={`${styles.sideNavBar} ${openSideBar ? "w-52 shown" : "w-16"}`}
      ref={sideBarRef}
    >
      <div className={`${openSideBar ? "pl-18" : "items-center"}`}>
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
                  className={`pl-2 ${openSideBar ? null : "hidden"} ${
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
