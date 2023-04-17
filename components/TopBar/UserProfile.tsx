import Image from "next/image";
import Icon, { profileData } from "../../utils/topBarUtils";
import styles from "./topBar.module.scss";
import UserStatus from "./UserStatus";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import userProfileImage from "/assets/userProfile/profileImg.webp";
import { motion, Variants } from "framer-motion";
import useOnclickOutside from "react-cool-onclickoutside";
import {
  closeProfileMenu,
  toggleProfileMenu,
} from "../../store/userProfileMenu";
import { poppinsFont } from "../../fonts";

const UserProfile = () => {
  const userStatusValue = useSelector(
    (state: RootState) => state.userProfileStatusMenu.value
  );

  const userProfileMenu = useSelector(
    (state: RootState) => state.userProfileMenu.value
  );
  const dispatch = useDispatch();
  const userProfileMenuRef = useOnclickOutside(() => {
    dispatch(closeProfileMenu());
  });

  const userProfileMenuVariants: Variants = {
    open: {
      opacity: 1,
      display: "flex",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
      transform: "translateX(0)",
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
      transform: "translateX(20px)",
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <div
      className={styles.user}
      title="User's Profile"
      ref={userProfileMenuRef}
    >
      <button onClick={() => dispatch(toggleProfileMenu())}>
        <div>
          <Image
            src={userProfileImage}
            width={100}
            height={100}
            alt="Ryan's Profile Image"
            priority
            unoptimized
          />
          {userStatusValue === "Online" ? (
            <span className={styles.userImageOnline} title={userStatusValue} />
          ) : userStatusValue === "Away" ? (
            <span className={styles.userImageAway} title={userStatusValue} />
          ) : userStatusValue === "Offline" ? (
            <span className={styles.userImageOffline} title={userStatusValue} />
          ) : null}
        </div>
        <h1 style={poppinsFont.style}>Ryan Keller</h1>
      </button>
      <motion.div
        className={styles.userMenu}
        initial={false}
        variants={userProfileMenuVariants}
        animate={userProfileMenu ? "open" : "closed"}
        title="User's Profile Menu"
      >
        <h2>Welcome back, Ryan!</h2>
        <UserStatus />
        {profileData.map((item) => {
          return (
            <button
              title={item.title}
              key={item.id}
              onClick={() => dispatch(closeProfileMenu())}
            >
              <Icon name={item.icon} aria-hidden="true" />
              <p style={poppinsFont.style}>{item.text}</p>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default UserProfile;
