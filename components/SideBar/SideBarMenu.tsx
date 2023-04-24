import Icon, { sideBarMenuData } from "../../utils/sideBarUtils";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
//import styles from "../styles/modules/sideBar.module.scss";

const SideBarMenu = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );

  return (
    <div className={`${openSideBar ? "pl-18" : "items-center"}`}>
      <div className="flex flex-col">
        {sideBarMenuData.map((item, idx) => {
          return (
            <a href="#" key={idx} className={`flex items-center`}>
              <button
                className={`text-2xl ${darkMode ? "text-white" : "text-black"}`}
              >
                <Icon name={`${item}`} />
              </button>
              <span
                className={`pl-2 ${openSideBar ? null : "hidden"} ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SideBarMenu;
