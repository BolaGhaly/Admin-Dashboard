import Icon, { sideBarMenuData } from "../../utils/sideBarUtils";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./sideBar.module.scss";

const SideBarMenu = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );

  return (
    <div className={styles.sideBarMenu}>
      {sideBarMenuData.map((item, idx) => {
        return (
          <div key={idx}>
            <a href="#">
              <Icon name={`${item}`} />
            </a>
            <span className={`${openSideBar ? null : "hidden"}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SideBarMenu;
