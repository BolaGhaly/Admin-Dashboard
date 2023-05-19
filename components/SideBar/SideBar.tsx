import useOnclickOutside from "react-cool-onclickoutside";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { closeSideBar } from "../../store/slices/sideBar";
import styles from "./sideBar.module.scss";
import CompanyLogo from "./CompanyLogo";
import SideBarMenu from "./SideBarMenu";
import SideBarTeams from "./SideBarTeams";
import SideBarProfile from "./SideBarProfile";
import { motion, Variants } from "framer-motion";

const SideBar = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
  const dispatch = useDispatch();
  const sideBarRef = useOnclickOutside(() => dispatch(closeSideBar()));

  const sideBarH2Variants: Variants = {
    open: {
      opacity: 1,
      visibility: "visible",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      visibility: "hidden",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const sideBarVariants: Variants = {
    open: {
      display: "flex",
      flexDirection: "column",
      width: "13.75rem",
      boxShadow: "0 2px 8px var(--boxShadow)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    closed: {
      display: "none",
      width: "4rem",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      className={`${styles.sideNavBar}`}
      ref={sideBarRef}
      initial={false}
      variants={sideBarVariants}
      animate={openSideBar ? "open" : "closed"}
    >
      <CompanyLogo />
      <motion.h2
        initial={false}
        variants={sideBarH2Variants}
        animate={openSideBar ? "open" : "closed"}
      >
        Menu
      </motion.h2>
      <SideBarMenu />
      <motion.h2
        initial={false}
        variants={sideBarH2Variants}
        animate={openSideBar ? "open" : "closed"}
      >
        Teams
      </motion.h2>
      <SideBarTeams />
      <SideBarProfile />
    </motion.nav>
  );
};

export default SideBar;
