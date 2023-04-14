import Icon from "../../utils/topBarUtils";
import styles from "./topBar.module.scss";
import Image from "next/image";
import notificationUser1Image from "/assets/notificationUsers/notificationUserImg1.webp";
import notificationUser2Image from "/assets/notificationUsers/notificationUserImg2.webp";
import notificationUser3Image from "/assets/notificationUsers/notificationUserImg3.webp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  closeNotificationsMenu,
  toggleNotificationsMenu,
} from "../../store/userNotificationsMenu";
import useOnclickOutside from "react-cool-onclickoutside";
import { motion, Variants } from "framer-motion";
import { poppinsFont } from "../../fonts";

const NotificationsMenu = () => {
  const userNotificationsMenu = useSelector(
    (state: RootState) => state.userNotificationsMenu.value
  );
  const dispatch = useDispatch();
  const userNotificationsMenuRef = useOnclickOutside(() => {
    dispatch(closeNotificationsMenu());
  });

  const userNotificationsMenuVariants: Variants = {
    open: {
      opacity: 1,
      display: "flex",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <div
      title="Notifications"
      className={styles.notificationsMenu}
      ref={userNotificationsMenuRef}
    >
      <button
        title="Notifications"
        onClick={() => dispatch(toggleNotificationsMenu())}
      >
        <Icon name="notifications" />
        <span className={styles.notificationCircle} />
      </button>
      <motion.div
        className={styles.notificationsMenuItems}
        initial={false}
        variants={userNotificationsMenuVariants}
        animate={userNotificationsMenu ? "open" : "closed"}
      >
        <motion.div>
          <motion.h1>Notifications</motion.h1>
          <motion.button
            onClick={() => dispatch(closeNotificationsMenu())}
            style={poppinsFont.style}
          >
            Clear All
          </motion.button>
        </motion.div>
        <motion.div>
          <motion.div
            title="Notification"
            onClick={() => dispatch(closeNotificationsMenu())}
          >
            <motion.div className={styles.notificationImgContainer}>
              <Image
                src={notificationUser1Image}
                width={100}
                height={100}
                alt="Bradley's Profile Image"
                priority
                unoptimized
              />
              <motion.span
                className={styles.notificationUserOnline}
                title="Online"
              />
            </motion.div>
            <motion.div>
              <motion.p>
                <motion.b>Bradley Cruz</motion.b> assigned you to{" "}
                <motion.b>Implement user endpoints</motion.b>
              </motion.p>
              <motion.small>10m ago &#8226; Engineering</motion.small>
            </motion.div>
          </motion.div>
          <motion.div
            title="Notification"
            onClick={() => dispatch(closeNotificationsMenu())}
          >
            <motion.div className={styles.notificationImgContainer}>
              <Image
                src={notificationUser2Image}
                width={100}
                height={100}
                alt="Jessica's Profile Image"
                priority
                unoptimized
              />
              <span className={styles.notificationUserAway} title="Away" />
            </motion.div>
            <motion.div>
              <motion.p>
                <motion.b>Jessica Brown</motion.b> requests access to{" "}
                <motion.b>Design</motion.b>
              </motion.p>
              <motion.small>2h ago &#8226; Design</motion.small>
              <motion.div className={styles.notificationBtnsContainer}>
                <motion.button style={poppinsFont.style}>Accept</motion.button>
                <motion.button style={poppinsFont.style}>Decline</motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            title="Notification"
            onClick={() => dispatch(closeNotificationsMenu())}
          >
            <motion.div className={styles.notificationImgContainer}>
              <Image
                src={notificationUser3Image}
                width={100}
                height={100}
                alt="Alex's Profile Image"
                priority
                unoptimized
              />
              <span
                className={styles.notificationUserOffline}
                title="Offline"
              />
            </motion.div>
            <motion.div>
              <motion.p>
                <motion.b>Alex Cooper</motion.b> mentioned you in{" "}
                <motion.b>Add search to home page</motion.b>
              </motion.p>
              <motion.small>1d ago &#8226; Engineering</motion.small>
              <motion.div className={styles.userTag}>
                <motion.span>&#64;Ryan</motion.span> Version 1.2 is ready to
                test!
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotificationsMenu;
