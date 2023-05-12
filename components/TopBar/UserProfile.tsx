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
} from "../../store/slices/userProfileMenu";
import { poppinsFont } from "../../fonts";

const UserProfile = () => {
  const userStatusMenuValue: string = useSelector(
    (state: RootState) => state.userProfileStatusMenu.value
  );
  const userProfileMenuOpen: boolean = useSelector(
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
          {userStatusMenuValue === "Online" ? (
            <span
              className={styles.userImageOnline}
              title={userStatusMenuValue}
            />
          ) : userStatusMenuValue === "Away" ? (
            <span
              className={styles.userImageAway}
              title={userStatusMenuValue}
            />
          ) : userStatusMenuValue === "Offline" ? (
            <span
              className={styles.userImageOffline}
              title={userStatusMenuValue}
            />
          ) : null}
        </div>
        <h1 style={poppinsFont.style}>Ryan Keller</h1>
      </button>
      <motion.div
        className={styles.userMenu}
        initial={false}
        variants={userProfileMenuVariants}
        animate={userProfileMenuOpen ? "open" : "closed"}
        title="User's Profile Menu"
      >
        <h2>Welcome back, Ryan!</h2>
        <UserStatus />
        {profileData.map((item, idx) => {
          return (
            <button
              title={item.title}
              key={idx}
              onClick={() => dispatch(closeProfileMenu())}
            >
              <Icon name={item.icon} aria-hidden="true" />
              <p style={poppinsFont.style}>{item.title}</p>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default UserProfile;
