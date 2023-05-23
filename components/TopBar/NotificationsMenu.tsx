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
} from "../../store/slices/userNotificationsMenu";
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
      </button>
      <motion.div
        className={styles.notificationsMenuItems}
        initial={false}
        variants={userNotificationsMenuVariants}
        animate={userNotificationsMenu ? "open" : "closed"}
      >
        <div>
          <h1>Notifications</h1>
        </div>
        <div>
          <div
            title="Notification"
            onClick={() => dispatch(closeNotificationsMenu())}
          >
            <div className={styles.notificationImgContainer}>
              <Image
                src={notificationUser1Image}
                width={100}
                height={100}
                alt="Bradley's Profile Image"
                priority
                unoptimized
              />
              <span className={styles.notificationUserOnline} title="Online" />
            </div>
            <div>
              <p>
                <b>Bradley Cruz</b> assigned you to{" "}
                <b>Implement user endpoints</b>
              </p>
              <small>10m ago &#8226; Engineering</small>
            </div>
          </div>
          <div
            title="Notification"
            onClick={() => dispatch(closeNotificationsMenu())}
          >
            <div className={styles.notificationImgContainer}>
              <Image
                src={notificationUser2Image}
                width={100}
                height={100}
                alt="Jessica's Profile Image"
                priority
                unoptimized
              />
              <span className={styles.notificationUserAway} title="Away" />
            </div>
            <div>
              <p>
                <b>Jessica Brown</b> requests access to <b>Design</b>
              </p>
              <small>2h ago &#8226; Design</small>
              <div className={styles.notificationBtnsContainer}>
                <button style={poppinsFont.style} title="Accept">
                  Accept
                </button>
                <button style={poppinsFont.style} title="Decline">
                  Decline
                </button>
              </div>
            </div>
          </div>
          <div
            title="Notification"
            onClick={() => dispatch(closeNotificationsMenu())}
          >
            <div className={styles.notificationImgContainer}>
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
            </div>
            <div>
              <p>
                <b>Alex Cooper</b> mentioned you in{" "}
                <b>Add search to home page</b>
              </p>
              <small>1d ago &#8226; Engineering</small>
              <div className={styles.userTag}>
                <span>&#64;Ryan</span> Version 1.2 is ready to test!
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotificationsMenu;
