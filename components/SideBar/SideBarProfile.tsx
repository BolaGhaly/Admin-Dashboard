import Icon, {
  sideBarProfile,
  sideBarProfileLinks,
  sideBarH2Variants,
  sideBarItemVariants,
} from "../../utils/sideBarUtils";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./sideBar.module.scss";
import { closeSideBar } from "../../store/slices/sideBar";
import { motion } from "framer-motion";

const SideBarProfile = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
  const dispatch = useDispatch();

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
            variants={sideBarItemVariants}
            animate={openSideBar ? "open" : "closed"}
            custom={idx === 0 ? 0.1 : idx === 1 ? 0.2 : null}
          >
            {item.title}
          </motion.span>
        </div>
      ))}
    </div>
  );
};

export default SideBarProfile;
