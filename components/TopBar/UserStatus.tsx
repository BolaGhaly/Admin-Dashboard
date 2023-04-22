import styles from "./topBar.module.scss";
import Icon from "../../utils/topBarUtils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import useOnclickOutside from "react-cool-onclickoutside";
import { motion, Variants } from "framer-motion";
import {
  toggleProfileStatusMenu,
  closeProfileStatusMenu,
  changeStatusValue,
} from "../../store/slices/userProfileStatusMenu";
import { poppinsFont } from "../../fonts";

const UserStatus = () => {
  const statusMenuValue: string = useSelector(
    (state: RootState) => state.userProfileStatusMenu.value
  );
  const statusMenuOpen: boolean = useSelector(
    (state: RootState) => state.userProfileStatusMenu.open
  );

  const dispatch = useDispatch();
  const userStatusMenuRef = useOnclickOutside(() => {
    dispatch(closeProfileStatusMenu());
  });

  const handleClick = (status: string) => {
    dispatch(changeStatusValue({ value: status }));
    dispatch(closeProfileStatusMenu());
  };

  const userStatusMenuVariants: Variants = {
    open: {
      opacity: 1,
      display: "block",
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
      translateX: 0,
      translateY: 0,
    },
    closed: {
      opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
      translateX: -5,
      translateY: -5,
      transitionEnd: {
        display: "none",
      },
    },
  };

  const userStatusArrow: Variants = {
    up: {
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
      transform: "rotate(-180deg)",
    },
    down: {
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
      transform: "rotate(0deg)",
    },
  };

  return (
    <div className={styles.userStatus} ref={userStatusMenuRef}>
      <button
        aria-expanded={statusMenuOpen ? "true" : undefined}
        aria-haspopup="true"
        onClick={() => dispatch(toggleProfileStatusMenu())}
        title={statusMenuValue}
        style={poppinsFont.style}
      >
        {statusMenuValue === "Online" ? (
          <>
            <span className={styles.userStatusOnline} />
          </>
        ) : statusMenuValue === "Away" ? (
          <>
            <span className={styles.userStatusAway} />
          </>
        ) : statusMenuValue === "Offline" ? (
          <>
            <span className={styles.userStatusOffline} />
          </>
        ) : null}
        <p>{statusMenuValue}</p>
        <motion.div
          initial={false}
          variants={userStatusArrow}
          animate={statusMenuOpen ? "up" : "down"}
        >
          <Icon name="arrowDown" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        variants={userStatusMenuVariants}
        animate={statusMenuOpen ? "open" : "closed"}
        className={styles.userStatusMenu}
        title="User's Status Menu"
      >
        <ul>
          <li onClick={() => handleClick("Online")} title="Online">
            <span className={styles.userStatusOnline} />
            <p>Online</p>
          </li>
          <li onClick={() => handleClick("Away")} title="Away">
            <span className={styles.userStatusAway} />
            <p>Away</p>
          </li>
          <li onClick={() => handleClick("Offline")} title="Offline">
            <span className={styles.userStatusOffline} />
            <p>Offline</p>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default UserStatus;
