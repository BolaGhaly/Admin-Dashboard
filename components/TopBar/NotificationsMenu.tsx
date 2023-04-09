import Icon from "../../utils/topBarUtils";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import styles from "./topBar.module.scss";
import Image from "next/image";
import notificationUser1Image from "/assets/notificationUsers/notificationUserImg1.webp";
import notificationUser2Image from "/assets/notificationUsers/notificationUserImg2.webp";
import notificationUser3Image from "/assets/notificationUsers/notificationUserImg3.webp";

const NotificationsMenu = () => {
  return (
    <Menu as="div" title="Notifications" className={styles.notificationsMenu}>
      <Menu.Button title="Notifications">
        <Icon name="notifications" />
        <span className={styles.notificationCircle} />
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
        <Menu.Items className={styles.notificationsMenuItems}>
          <div>
            <h1>Notifications</h1>
            <Menu.Item>
              <button>Clear All</button>
            </Menu.Item>
          </div>
          <div>
            <Menu.Item as="div" title="Notification">
              <div className={styles.notificationImgContainer}>
                <Image
                  src={notificationUser1Image}
                  width={100}
                  height={100}
                  alt="Bradley's Profile Image"
                  unoptimized
                />
                <span
                  className={styles.notificationUserOnline}
                  title="Online"
                />
              </div>
              <div>
                <p>
                  <b>Bradley Cruz</b> assigned you to{" "}
                  <b>Implement user endpoints</b>
                </p>
                <small>10m ago &#x2022; Engineering</small>
              </div>
            </Menu.Item>
            <Menu.Item as="div" title="Notification">
              <div className={styles.notificationImgContainer}>
                <Image
                  src={notificationUser2Image}
                  width={100}
                  height={100}
                  alt="Jessica's Profile Image"
                  unoptimized
                />
                <span className={styles.notificationUserAway} title="Away" />
              </div>
              <div>
                <p>
                  <b>Jessica Brown</b> requests access to <b>Design</b>
                </p>
                <small>2h ago &#x2022; Design</small>
                <div className={styles.notificationBtnsContainer}>
                  <button>Accept</button>
                  <button>Decline</button>
                </div>
              </div>
            </Menu.Item>
            <Menu.Item as="div" title="Notification">
              <div className={styles.notificationImgContainer}>
                <Image
                  src={notificationUser3Image}
                  width={100}
                  height={100}
                  alt="Alex's Profile Image"
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
                <small>1d ago &#x2022; Engineering</small>
                <div className={styles.userTag}>
                  <span>&#64;Ryan</span> Version 1.2 is ready to test!
                </div>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NotificationsMenu;
