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
// import { poppinsFont } from "../../fonts";

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
        <h1>Notifications</h1>
        <div>
          <div
            title="Notification"
            onClick={() => dispatch(closeNotificationsMenu())}
          >
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
            <div>
              <p>
                <b>Jessica Brown</b> requests access to <b>Design</b>
              </p>
              <small>2h ago &#8226; Design</small>
            </div>
          </div>
          <div
            title="Notification"
            onClick={() => dispatch(closeNotificationsMenu())}
          >
            <div>
              <p>
                <b>Alex Cooper</b> mentioned you in{" "}
                <b>Add search to home page</b>
              </p>
              <small>1d ago &#8226; Engineering</small>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotificationsMenu;
