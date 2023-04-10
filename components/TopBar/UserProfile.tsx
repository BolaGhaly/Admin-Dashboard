import Image from "next/image";
import { Menu } from "@headlessui/react";
import Icon, { profileData } from "../../utils/topBarUtils";
import styles from "./topBar.module.scss";
import UserStatus from "./UserStatus";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import userProfileImage from "/assets/userProfile/profileImg.webp";

const UserProfile = () => {
  const userStatus = useSelector((state: RootState) => state.userStatus.value);

  return (
    <Menu as="div" className={styles.user} title="User's Profile">
      <Menu.Button>
        <div>
          <Image
            src={userProfileImage}
            width={100}
            height={100}
            alt="Ryan's Profile Image"
            priority
            unoptimized
          />
          {userStatus === "online" ? (
            <span className={styles.userImageOnline} />
          ) : userStatus === "away" ? (
            <span className={styles.userImageAway} />
          ) : userStatus === "offline" ? (
            <span className={styles.userImageOffline} />
          ) : null}
        </div>
        <h1>Ryan Keller</h1>
      </Menu.Button>
      <Menu.Items className={styles.userMenu}>
        <h2>Welcome back, Ryan!</h2>
        <UserStatus />
        {profileData.map((item) => {
          return (
            <Menu.Item key={item.id}>
              <button title={item.title}>
                <Icon name={item.icon} aria-hidden="true" />
                <p>{item.text}</p>
              </button>
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default UserProfile;
