import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Icon from "../../utils/topBarUtils";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const NotificationsMenu = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);

  return (
    <Menu
      as="div"
      className={`relative ${darkMode ? "text-white" : "text-black"}`}
      title="Notifications"
    >
      <Menu.Button className={`flex items-center h-full relative`}>
        <Icon name="notifications" className="text-2xl" />
        <span
          className={`bg-[#FF3131] absolute w-2 h-2 rounded-full top-[20px] -right-0 ring-2 ${
            darkMode ? "ring-neutral-900" : "ring-neutral-200"
          }`}
        />
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
          className={`absolute right-0 top-[4.125rem] mw-minus-sideBar-vw origin-center rounded-bl-md ring-black ring-1 ring-opacity-5 ${
            darkMode ? "bg-neutral-900 text-white" : "bg-neutral-200 text-black"
          }`}
        >
          <div>
            <h1>Notifications</h1>
            <button>Mark all as read</button>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NotificationsMenu;
