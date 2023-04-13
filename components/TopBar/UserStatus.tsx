import { useState } from "react";
import styles from "./topBar.module.scss";
import Icon from "../../utils/topBarUtils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { online, offline, away } from "../../store/userProfileStatus";
import useOnclickOutside from "react-cool-onclickoutside";
import { motion, Variants } from "framer-motion";
import {
  toggleProfileStatusMenu,
  closeProfileStatusMenu,
} from "../../store/userProfileStatusMenu";

const UserStatus = () => {
  const userStatus = useSelector(
    (state: RootState) => state.userProfileStatus.value
  );
  const userStatusMenu = useSelector(
    (state: RootState) => state.userProfileStatusMenu.value
  );
  const dispatch = useDispatch();
  const userStatusMenuRef = useOnclickOutside(() => {
    dispatch(closeProfileStatusMenu());
  });

  const handleClick = (status: String) => {
    if (status.toLowerCase() === "online") {
      dispatch(online());
    } else if (status.toLowerCase() === "away") {
      dispatch(away());
    } else if (status.toLowerCase() === "offline") {
      dispatch(offline());
    }
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
        aria-expanded={userStatusMenu ? "true" : undefined}
        aria-haspopup="true"
        onClick={() => dispatch(toggleProfileStatusMenu())}
        title={
          userStatus === "online"
            ? "Online"
            : userStatus === "away"
            ? "Away"
            : userStatus === "offline"
            ? "Offline"
            : ""
        }
      >
        {userStatus === "online" ? (
          <>
            <span className={styles.userStatusOnline} />
            <p>Online</p>
          </>
        ) : userStatus === "away" ? (
          <>
            <span className={styles.userStatusAway} />
            <p>Away</p>
          </>
        ) : userStatus === "offline" ? (
          <>
            <span className={styles.userStatusOffline} />
            <p>Offline</p>
          </>
        ) : null}
        <motion.div
          initial={false}
          variants={userStatusArrow}
          animate={userStatusMenu ? "up" : "down"}
        >
          <Icon name="arrowDown" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        variants={userStatusMenuVariants}
        animate={userStatusMenu ? "open" : "closed"}
        className={styles.userStatusMenu}
      >
        <motion.ul>
          <motion.li onClick={() => handleClick("Online")} title="Online">
            <span className={styles.userStatusOnline} />
            <p>Online</p>
          </motion.li>
          <motion.li onClick={() => handleClick("Away")} title="Away">
            <span className={styles.userStatusAway} />
            <p>Away</p>
          </motion.li>
          <motion.li onClick={() => handleClick("Offline")} title="Offline">
            <span className={styles.userStatusOffline} />
            <p>Offline</p>
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default UserStatus;
