import { useState, useEffect } from "react";
import { BiArrowToRight, BiArrowToLeft } from "react-icons/bi";
import { RiDashboardLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import useOnclickOutside from "react-cool-onclickoutside";

const Sidebar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleOpen = () => {
    setOpenSideBar(!openSideBar);
  };

  const ref = useOnclickOutside(() => setOpenSideBar(false));

  const navData = [
    {
      id: 0,
      icon: <RiDashboardLine />,
      text: "Dashboard",
      link: "/",
    },
    {
      id: 1,
      icon: <CgProfile />,
      text: "Profile",
      link: "/profile",
    },
  ];

  return (
    <nav
      className={`sideNav fixed top-0 left-0 h-screen bg-neutral-500 pt-7 ${
        openSideBar ? "w-[200px]" : "w-[60px]"
      }`}
      ref={ref}
    >
      <button
        className="cursor-pointer pl-5 border-none bg-transparent justify-self-end"
        onClick={toggleOpen}
      >
        {openSideBar ? <BiArrowToLeft /> : <BiArrowToRight />}
      </button>
      {navData.map((item) => {
        return (
          <Link
            key={item.id}
            className="flex items-center py-[10px] px-5"
            href={item.link}
          >
            <div className="text-xl">{item.icon}   </div>
                 
            <span className={`${openSideBar ? "" : "invisible"}`}>
              {item.text}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Sidebar;
