import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { RiPieChart2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsFillMoonStarsFill } from "react-icons/bs";

const iconTypes = {
  rightArrow: RiMenuUnfoldLine,
  leftArrow: RiMenuFoldLine,
  dashboard: RiPieChart2Fill,
  profile: CgProfile,
  darkMode: BsFillMoonStarsFill,
};

export const navData = [
  {
    id: 0,
    icon: "dashboard",
    text: "Dashboard",
    link: "/",
  },
  {
    id: 1,
    icon: "profile",
    text: "Profile",
    link: "/profile",
  },
];

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
