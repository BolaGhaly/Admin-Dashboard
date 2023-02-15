import Icon from "../utils/topBarUtils";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import styles from "../styles/modules/topBar.module.scss";

const NotificationsMenu = () => {
  return (
    <Menu as="div" title="Notifications" className={styles.notificationsMenu}>
      <Menu.Button>
        <Icon name="notifications" />
        <span />
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
            <h2>Today</h2>
            <Menu.Item as="div">
              <button>
                <Icon name="newUser" />
              </button>
              <div>
                <h1>
                  Admin<small>10 mins ago</small>
                </h1>
                <h2>New user registered!</h2>
              </div>
            </Menu.Item>
            <Menu.Item as="div">
              <Icon name="newUser" />
            </Menu.Item>
          </div>
          <div>
            <h2>Yesterday</h2>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NotificationsMenu;
