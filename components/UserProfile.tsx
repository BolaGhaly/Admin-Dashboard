import { Fragment } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import Icon, { profileData } from "../utils/topBarUtils";
import styles from "../styles/modules/topBar.module.scss";

const UserProfile = () => {
  return (
    <Menu as="div" className={styles.user} title="User's Profile">
      <Menu.Button>
        <Image
          src="/profileImg.jpg"
          width={100}
          height={100}
          alt="Profile Image"
          loading="eager"
        />
        <h1>Brian Griffin</h1>
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
          <Menu.Item>
            <h1>Welcome back, Brian!</h1>
          </Menu.Item>
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
