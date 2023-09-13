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

  const sideBarVariants: Variants = {
    open: {
      zIndex: 999999,
      display: "flex",
      flexDirection: "column",
      width: "13.25rem",
      boxShadow: "0 2px 8px var(--boxShadow)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    closed: {
      zIndex: 999999,
      display: "none",
      width: "4rem",
      boxShadow: "none",
      transition: {
        duration: 0.1,
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
      <SideBarMenu />
      <SideBarTeams />
      <SideBarProfile />
    </motion.nav>
  );
};

export default SideBar;
