import { Fragment } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import Icon, { profileData } from "../utils/topBarUtils";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import styles from "../styles/modules/topBar.module.scss";

const UserProfile = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);

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
        <div>
          <h1>Bradley Cruz</h1>
          <h2>CEO</h2>
        </div>
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
        <Menu.Items
          className={`absolute right-0 top-16 min-w-[13rem] origin-top-right rounded-bl-md ${
            darkMode
              ? "bg-neutral-900 text-white shadow-[-2px_2px_2px_rgba(220,220,220,0.3)]"
              : "bg-neutral-200 text-black shadow-[-2px_2px_2px_rgba(0,0,0,0.3)]"
          }`}
        >
          <div className="p-2 cursor-default">
            {profileData.map((item) => {
              return (
                <Menu.Item key={item.id}>
                  <button
                    className={`w-full flex items-center rounded-lg px-2 py-2 ${
                      darkMode
                        ? "text-white hover:bg-neutral-800"
                        : "text-black hover:bg-neutral-300"
                    }`}
                  >
                    <Icon
                      name={item.icon}
                      className="mr-2 text-xl"
                      aria-hidden="true"
                    />
                    <p className="font-light">{item.text}</p>
                  </button>
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserProfile;
