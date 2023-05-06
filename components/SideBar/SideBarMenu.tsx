import Icon, { sideBarMenuData } from "../../utils/sideBarUtils";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
//import styles from "../styles/modules/sideBar.module.scss";

const SideBarMenu = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );

  return (
    <div>
      <h2 className={`${openSideBar ? null : "hidden"}`}>Main Menu</h2>
      {sideBarMenuData.map((item, idx) => {
        return (
          <a href="#" key={idx}>
            <button>
              <Icon name={`${item}`} />
            </button>
            <span className={`${openSideBar ? null : "hidden"}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SideBarMenu;
