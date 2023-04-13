import { useState } from "react";
import styles from "./topBar.module.scss";
import Icon from "../../utils/topBarUtils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { online, offline, away } from "../../store/userProfileStatus";
import useOnclickOutside from "react-cool-onclickoutside";
import { motion, Variants } from "framer-motion";

const UserStatus = () => {
  const [userStatusOpen, setUserStatusOpen] = useState(false);
  const userStatus = useSelector(
    (state: RootState) => state.userProfileStatus.value
  );
  const dispatch = useDispatch();
  const userStatusMenuRef = useOnclickOutside(() => {
    handleClose();
  });

  const userStatusMenu: Variants = {
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

  const handleToggle = () => {
    setUserStatusOpen(!userStatusOpen);
  };

  const handleClose = () => {
    setUserStatusOpen(false);
  };

  return (
    <div className={styles.userStatus} ref={userStatusMenuRef}>
      <button
        aria-expanded={userStatusOpen ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
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
          animate={userStatusOpen ? "up" : "down"}
        >
          <Icon name="arrowDown" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        variants={userStatusMenu}
        animate={userStatusOpen ? "open" : "closed"}
        className={styles.userStatusMenu}
      >
        <motion.ul>
          <motion.li
            onClick={() => {
              dispatch(online());
              handleClose();
            }}
            title="Online"
          >
            <span className={styles.userStatusOnline} />
            <p>Online</p>
          </motion.li>
          <motion.li
            onClick={() => {
              dispatch(away());
              handleClose();
            }}
            title="Away"
          >
            <span className={styles.userStatusAway} />
            <p>Away</p>
          </motion.li>
          <motion.li
            onClick={() => {
              dispatch(offline());
              handleClose();
            }}
            title="Offline"
          >
            <span className={styles.userStatusOffline} />
            <p>Offline</p>
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default UserStatus;
