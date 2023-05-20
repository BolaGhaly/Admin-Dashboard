import Icon, { sideBarMenu } from "../../utils/sideBarUtils";
import { useSelector, useDispatch } from "react-redux";
import { closeSideBar } from "../../store/slices/sideBar";
import { RootState } from "../../store/store";
import styles from "./sideBar.module.scss";
import Link from "next/link";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const SideBarMenu = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
  const [activeItem, setActiveItem] = useState(sideBarMenu[0]);
  const dispatch = useDispatch();

  const handleClick = (item: string) => {
    setActiveItem(item);
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
    }),
    closed: {
      display: "none",
      opacity: 0,
      visibility: "hidden",
    },
  };

  return (
    <div className={styles.sideBarMenu}>
      {sideBarMenu.map((item, idx) => (
        <Link
          title={item.charAt(0).toUpperCase() + item.slice(1)}
          href="#"
          key={idx}
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
