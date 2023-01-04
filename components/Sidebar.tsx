import { BiArrowToRight, BiArrowToLeft } from "react-icons/bi";
import { RiDashboardLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import useOnclickOutside from "react-cool-onclickoutside";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggledarkMode } from "../store/darkMode";
import { openSideBarOff, openSideBarReverse } from "../store/sideBar";

const Sidebar = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const openSideBar = useSelector((state: RootState) => state.openSideBar.value);
  const dispatch = useDispatch();
  const ref = useOnclickOutside(() => dispatch(openSideBarOff()));

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
      className={`sideNav absolute top-0 left-0 h-screen bg-neutral-500 pt-7 ${
        openSideBar ? "w-[200px]" : "w-[60px]"
      }`}
      ref={ref}
    >
      <button
        className="cursor-pointer pl-5 border-none bg-transparent justify-self-end"
        onClick={() => dispatch(openSideBarReverse())}
      >
        {openSideBar ? <BiArrowToLeft /> : <BiArrowToRight />}
      </button>

      <button className="px-5 ">
        <BsFillMoonStarsFill
          className="text-xl"
          onClick={() => dispatch(toggledarkMode())}
        />
      </button>
      {navData.map((item) => {
        return (
          <Link
            key={item.id}
            className="flex items-center py-[10px] px-5"
            href={item.link}
          >
            <div className="text-xl">{item.icon}</div>
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
