import { RootState } from "../../store/store";
import styles from "./sideBar.module.scss";
import Icon, { sideBarTeams, sideBarTeamsLinks } from "../../utils/sideBarUtils";
import { useSelector } from "react-redux";
//import { closeSideBar } from "../../store/slices/sideBar";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const SideBarTeams = () => {
  //const dispatch = useDispatch();
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
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
    <div className={styles.sideBarTeams}>
      {sideBarTeams.map((item, idx) => (
        <Link
          key={idx}
          href={sideBarTeamsLinks[idx]}
          title={item.charAt(0).toUpperCase() + item.slice(1)}
          //onClick={() => dispatch(closeSideBar())}
        >
          <button title={item.charAt(0).toUpperCase() + item.slice(1)}>
            <Icon name={item} />
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

export default SideBarTeams;
