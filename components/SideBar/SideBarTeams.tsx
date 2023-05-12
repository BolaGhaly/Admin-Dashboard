import { RootState } from "../../store/store";
import Link from "next/link";
import styles from "./sideBar.module.scss";
import Icon, { sideBarTeams } from "../../utils/sideBarUtils";
import { useSelector, useDispatch } from "react-redux";
import { closeSideBar } from "../../store/slices/sideBar";
import { useState } from "react";

const SideBarTeams = () => {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState(sideBarTeams[3].title);

  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );

  const handleClick = (item: string) => {
    setActiveItem(item);
    dispatch(closeSideBar());
  };

  return (
    <div className={styles.sideBarTeams}>
      {sideBarTeams.map((item, idx) => {
        return (
          <Link
            href="#"
            key={idx}
            onClick={() => handleClick(item.title)}
            className={`${activeItem === item.title ? styles.active : null}`}
          >
            <button>
              <Icon name={item.icon} />
            </button>
            <span className={`${openSideBar ? null : "hidden"}`}>
              {item.title}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBarTeams;
