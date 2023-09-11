import Icon, { sideBarMenu, sideBarMenuLinks } from "../../utils/sideBarUtils";
import { useSelector, useDispatch } from "react-redux";
import { closeSideBar } from "../../store/slices/sideBar";
import { changeActiveItem } from "../../store/slices/sideBarMenuActive";
import { RootState } from "../../store/store";
import styles from "./sideBar.module.scss";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const SideBarMenu = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
  const activeItem = useSelector(
    (state: RootState) => state.sideBarMenuActiveItem.activeItem
  );
  const dispatch = useDispatch();
  const handleClick = (item: string) => {
    dispatch(changeActiveItem({ activeItem: item }));
    dispatch(closeSideBar());
  };

  const itemVariants: Variants = {
    open: (index: number) => ({
      display: "block",
      opacity: 1,
      visibility: "visible",
      transition: {
        duration: 0.1,
        delay: index,
        ease: "easeOut",
      },
      translateX: 0,
    }),
    closed: {
      translateX: -10,
      display: "none",
      opacity: 0,
      visibility: "hidden",
    },
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
          onClick={() => handleClick(item)}
          className={`${activeItem === item ? styles.active : null}`}
        >
          <button title={item.charAt(0).toUpperCase() + item.slice(1)}>
            <Icon name={`${item}`} />
          </button>
          <motion.span
            initial={false}
            variants={itemVariants}
            animate={openSideBar ? "open" : "closed"}
            custom={
              idx === 0
                ? 0.1
                : idx === 1
                ? 0.2
                : idx === 2
                ? 0.3
                : idx === 3
                ? 0.4
                : null
            }
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </motion.span>
        </Link>
      ))}
    </div>
  );
};

export default SideBarMenu;
