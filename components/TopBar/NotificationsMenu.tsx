import Icon from "../../utils/topBarUtils";
import styles from "./topBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  closeNotificationsMenu,
  toggleNotificationsMenu,
} from "../../store/slices/userNotificationsMenu";
import useOnclickOutside from "react-cool-onclickoutside";
import { motion, Variants } from "framer-motion";

const NotificationsMenu = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
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
        <h1>Notifications</h1>
        <div>
          {darkMode ? (
            <Icon name="emptyNotificationsDark" />
          ) : (
            <Icon name="emptyNotificationsLight" />
          )}
          <h2>No notifications</h2>
          <p>We'll notify you when something arrives.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default NotificationsMenu;
