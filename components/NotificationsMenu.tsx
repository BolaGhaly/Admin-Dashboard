import Icon from "../utils/topBarUtils";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import styles from "../styles/modules/topBar.module.scss";
import Image from "next/image";

const NotificationsMenu = () => {
  return (
    <Menu as="div" title="Notifications" className={styles.notificationsMenu}>
      <Menu.Button>
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
                  src="/notificationUserImg1.jpeg"
                  width={100}
                  height={100}
                  alt="User's Profile Image"
                />
                <span
                  className={styles.notificationActiveUser}
                  title="Available"
                />
              </div>
              <div>
                <p>
                  <b>Emma Jones</b> assigned you to{" "}
                  <b>Implement User Endpoints</b>
                </p>
                <small>10m ago &#x2022; Engineering</small>
              </div>
            </Menu.Item>
            <Menu.Item as="div" title="Notification">
              <div className={styles.notificationImgContainer}>
                <Image
                  src="/notificationUserImg2.jpeg"
                  width={100}
                  height={100}
                  alt="User's Profile Image"
                />
                <span className={styles.notificationAwayUser} title="Away" />
              </div>
              <div>
                <p>
                  <b>Alex Cooper</b> requests access to <b>Design</b>
                </p>
                <small>2h ago &#x2022; Design</small>
                <div className={styles.notificationBtnsContainer}>
                  <button>Accept</button>
                  <button>Decline</button>
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
