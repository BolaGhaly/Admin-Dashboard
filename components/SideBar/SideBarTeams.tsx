import { RootState } from "../../store/store";
import styles from "./sideBar.module.scss";
import Icon, {
  sideBarTeams,
  sideBarTeamsLinks,
  sideBarH2Variants,
  sideBarItemVariants,
} from "../../utils/sideBarUtils";
import { useSelector, useDispatch } from "react-redux";
import { closeSideBar } from "../../store/slices/sideBar";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBarTeams = () => {
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
    <div className={styles.sideBarTeams}>
      <motion.h2
        initial={false}
        variants={sideBarH2Variants}
        animate={openSideBar ? "open" : "closed"}
      >
        Teams
      </motion.h2>
      {sideBarTeams.map((item, idx) => (
        <Link
          key={idx}
          href={sideBarTeamsLinks[idx]}
          title={item.charAt(0).toUpperCase() + item.slice(1)}
          onClick={() => handleClick(sideBarTeamsLinks[idx])}
          className={`${
            activeItem === sideBarTeamsLinks[idx] ? styles.active : ""
          }`}
        >
          <button title={item.charAt(0).toUpperCase() + item.slice(1)}>
            <Icon name={item} />
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

export default SideBarTeams;
