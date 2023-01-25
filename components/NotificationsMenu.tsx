import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Icon from "../utils/topBarUtils";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import styles from "../styles/modules/topBar.module.scss";

const NotificationsMenu = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);

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
          <div
            className={`flex items-center justify-between border-b-[1px] border-dashed ${
              darkMode ? "border-white" : "border-black"
            }`}
          >
            <h1 className="text-lg ml-3 font-bold my-1">Notifications</h1>
            <Menu.Item>
              <button className="mr-2 h-max">
                <Icon
                  name="closeMenu"
                  className={`text-xl rounded-md ring-1  ${
                    darkMode
                      ? "text-neutral-300 ring-neutral-300"
                      : "text-light-sc-text ring-light-sc-text"
                  }`}
                />
              </button>
            </Menu.Item>
          </div>
          <div>testing</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NotificationsMenu;
