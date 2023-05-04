import { MdDashboard } from "react-icons/md";
import companyLogoLight from "../assets/sideBarIcons/companyLogoLight.svg";
import companyLogoDark from "../assets/sideBarIcons/companyLogoDark.svg";

const iconTypes = {
  companyLogoLight,
  companyLogoDark,
  dashboard: MdDashboard,
};

export const sideBarMenuData = [
  { icon: "dashboard", text: "Overview" },
  { icon: "dashboard", text: "Overview" },
];
//"projects"
//"tasks"
//"users"];

export const sideBarTeams = ["Design", "Engineering", "QA Testing"];

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
