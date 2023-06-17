import arrowUp from "/assets/dashboardIcons/arrowUp.svg";
import arrowDown from "/assets/dashboardIcons/arrowDown.svg";

const iconTypes = {
  arrowUp,
  arrowDown,
};

interface totalDataInterface {
  title: string;
  value: string | number;
  percentage: string | number;
  arrowUp: boolean;
}

export const totalData: totalDataInterface[] = [
  {
    title: "Total Revenue",
    value: "$64,212.71",
    percentage: "+2.8",
    arrowUp: true,
  },
  {
    title: "Total Customers",
    value: 37214,
    percentage: "+1.5",
    arrowUp: true,
  },
  {
    title: "Total Orders",
    value: 6305,
    percentage: -0.4,
    arrowUp: false,
  },
  {
    title: "Total Refunds",
    value: 809,
    percentage: -0.6,
    arrowUp: true,
  },
];

interface RevenueGrowthDataInterface {
  day: string;
  "This Week": number;
  "Last Week": number;
}

export const RevenueGrowthData: RevenueGrowthDataInterface[] = [
  {
    day: "Mon",
    "This Week": 546.58,
    "Last Week": 806.72,
  },
  {
    day: "Tue",
    "This Week": 709.1,
    "Last Week": 681,
  },
  {
    day: "Wed",
    "This Week": 952,
    "Last Week": 767.78,
  },
  {
    day: "Thu",
    "This Week": 546,
    "Last Week": 803,
  },
  {
    day: "Fri",
    "This Week": 546,
    "Last Week": 803,
  },
  {
    day: "Sat",
    "This Week": 546,
    "Last Week": 803,
  },
  {
    day: "Sun",
    "This Week": 546,
    "Last Week": 803,
  },
];

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
