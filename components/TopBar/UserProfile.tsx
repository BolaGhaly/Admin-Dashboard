import { Fragment } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
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
          ) : (
            ""
          )}
        </div>
        <h1>Ryan Keller</h1>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={styles.userMenu} title="">
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
      </Transition>
    </Menu>
  );
};

export default UserProfile;