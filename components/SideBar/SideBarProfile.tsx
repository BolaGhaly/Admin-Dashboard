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
import Link from "next/link";
import { useRouter } from "next/router";

const SideBarProfile = () => {
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
    <div className={styles.sideBarProfile}>
      <motion.h2
        initial={false}
        variants={sideBarH2Variants}
        animate={openSideBar ? "open" : "closed"}
      >
        Account
      </motion.h2>
      {sideBarProfile.map((item, idx) => (
        <Link
          key={idx}
          href={sideBarProfileLinks[idx]}
          title={item.title}
          onClick={() => handleClick(sideBarProfileLinks[idx])}
          className={`${
            activeItem === sideBarProfileLinks[idx] ? styles.active : ""
          }`}
        >
          <button title={item.title}>
            <Icon name={item.icon} />
          </button>
          <motion.span
            initial={false}
            variants={sideBarItemVariants}
            animate={openSideBar ? "open" : "closed"}
          >
            {item.title}
          </motion.span>
        </Link>
      ))}
    </div>
  );
};

export default SideBarProfile;
