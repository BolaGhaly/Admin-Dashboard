import Icon, {
  sideBarMenu,
  sideBarMenuLinks,
  sideBarH2Variants,
  sideBarItemVariants,
} from "../../utils/sideBarUtils";
import { useSelector, useDispatch } from "react-redux";
import { closeSideBar } from "../../store/slices/sideBar";
import { RootState } from "../../store/store";
import styles from "./sideBar.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const SideBarMenu = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
  const activeItem = useSelector(
    (state: RootState) => state.sideBarActiveItem.activeItem
  );

  const dispatch = useDispatch();
  const { asPath } = useRouter();
  const currURLEndpoint = asPath;

  const handleClick = (item: string) => {
    if (currURLEndpoint === item) {
      dispatch(closeSideBar());
    }
  };

  return (
    <div className={styles.sideBarMenu}>
      <motion.h2
        initial={false}
        variants={sideBarH2Variants}
        animate={openSideBar ? "open" : "closed"}
      >
        Menu
      </motion.h2>
      {sideBarMenu.map((item, idx) => (
        <Link
          key={idx}
          href={sideBarMenuLinks[idx]}
          title={item.charAt(0).toUpperCase() + item.slice(1)}
          onClick={() => handleClick(sideBarMenuLinks[idx])}
          className={`${
            activeItem === sideBarMenuLinks[idx] ? styles.active : ""
          }`}
        >
          <button title={item.charAt(0).toUpperCase() + item.slice(1)}>
            <Icon name={`${item}`} />
          </button>
          <motion.span
            initial={false}
            variants={sideBarItemVariants}
            animate={openSideBar ? "open" : "closed"}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </motion.span>
        </Link>
      ))}
    </div>
  );
};

export default SideBarMenu;
