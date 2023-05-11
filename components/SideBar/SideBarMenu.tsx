import Icon, { sideBarMenuData } from "../../utils/sideBarUtils";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./sideBar.module.scss";
import Link from "next/link";

const SideBarMenu = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );

  return (
    <div className={styles.sideBarMenu}>
      {sideBarMenuData.map((item, idx) => {
        return (
          <Link href="#" key={idx}>
            <button>
              <Icon name={`${item}`} />
            </button>
            <span className={`${openSideBar ? "" : "hidden"}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBarMenu;
