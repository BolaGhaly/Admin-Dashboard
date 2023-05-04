import { MdDashboard } from "react-icons/md";
import companyLogo from "../assets/sideBarIcons/companyLogo.svg";

const iconTypes = {
  company: companyLogo,
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
