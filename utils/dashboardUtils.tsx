import arrowUp from "/assets/dashboardIcons/arrowUp.svg"
import arrowDown from "/assets/dashboardIcons/arrowDown.svg";

const iconTypes = {
  arrowUp,
  arrowDown
};

interface totalInterface {
  title: string;
  value: string | number;
  percentage: string | number;
  arrowUp: boolean;
}

export const totalData: totalInterface[] = [
  {
    title: "Total Revenue",
    value: "$64,212",
    percentage: "+1.8",
    arrowUp: true,
  },
  {
    title: "Total Customers",
    value: 37214,
    percentage: "+2.1",
    arrowUp: true,
  },
  {
    title: "Total Orders",
    value: 6305,
    percentage: -0.2,
    arrowUp: false,
  },
  {
    title: "Total Refunds",
    value: 2801,
    percentage: -0.4,
    arrowUp: true,
  },
];

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
