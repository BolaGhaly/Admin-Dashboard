import Icon, { sideBarProfile } from "../../utils/sideBarUtils";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./sideBar.module.scss";
import { closeSideBar } from "../../store/slices/sideBar";
import { motion, Variants } from "framer-motion";

const SideBarProfile = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
  const dispatch = useDispatch();
  const itemVariants: Variants = {
    open: {
      display: "block",
      opacity: 1,
      visibility: "visible",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    closed: {
      display: "none",
      opacity: 0,
      visibility: "hidden",
    },
  };

  return (
    <div className={styles.sideBarProfile}>
      <motion.h2
        initial={false}
        variants={sideBarH2Variants}
        animate={openSideBar ? "open" : "closed"}
      >
        Account
      </motion.h2>
      {sideBarProfile.map((item, idx) => (
        <div
          key={idx}
          onClick={() => dispatch(closeSideBar())}
          title={item.title}
        >
          <button title={item.title}>
            <Icon name={item.icon} />
          </button>
          <motion.span
            initial={false}
            variants={itemVariants}
            animate={openSideBar ? "open" : "closed"}
          >
            {item.title}
          </motion.span>
        </div>
      ))}
    </div>
  );
};

export default SideBarProfile;
