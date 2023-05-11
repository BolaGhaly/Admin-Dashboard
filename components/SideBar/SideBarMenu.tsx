import Icon, { sideBarMenuData } from "../../utils/sideBarUtils";
import { useSelector, useDispatch } from "react-redux";
import { closeSideBar } from "../../store/slices/sideBar";
import { RootState } from "../../store/store";
import styles from "./sideBar.module.scss";
import Link from "next/link";
import { useState } from "react";

const SideBarMenu = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
  const [activeItem, setActiveItem] = useState(sideBarMenuData[0]);
  const dispatch = useDispatch();

  const handleClick = (item: string) => {
    setActiveItem(item);
    dispatch(closeSideBar());
  };

  return (
    <div className={styles.sideBarMenu}>
      {sideBarMenuData.map((item, idx) => {
        return (
          <Link
            href="#"
            key={idx}
            onClick={() => handleClick(item)}
            className={`${activeItem === item ? styles.active : null}`}
          >
            <button>
              <Icon name={`${item}`} />
            </button>
            <span className={`${openSideBar ? null : "hidden"}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBarMenu;
