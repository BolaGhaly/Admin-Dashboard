import arrowUp from "/assets/dashboardIcons/arrowUp.svg";
import arrowDown from "/assets/dashboardIcons/arrowDown.svg";

const iconTypes = {
  arrowUp,
  arrowDown,
};

interface totalDataInterface {
  title: string;
  value: string | number;
  percentage: number;
  arrowUp: boolean;
}

export const totalData: totalDataInterface[] = [
  {
    title: "Total Revenue",
    value: "$64,212.71",
    percentage: 1.5,
    arrowUp: true,
  },
  {
    title: "Total Customers",
    value: 37214,
    percentage: -0.4,
    arrowUp: false,
  },
  {
    title: "Total Orders",
    value: 6305,
    percentage: 2.8,
    arrowUp: true,
  },
  {
    title: "Total Refunds",
    value: 809,
    percentage: -6.3,
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
    "This Week": 349.76,
    "Last Week": 223.75,
  },
  {
    day: "Tue",
    "This Week": 562.12,
    "Last Week": 415.17,
  },
  {
    day: "Wed",
    "This Week": 778.43,
    "Last Week": 656.99,
  },
  {
    day: "Thu",
    "This Week": 681.5,
    "Last Week": 834.23,
  },
  {
    day: "Fri",
    "This Week": 915.11,
    "Last Week": 943.11,
  },
  {
    day: "Sat",
    "This Week": 1124,
    "Last Week": 607,
  },
  {
    day: "Sun",
    "This Week": 982.76,
    "Last Week": 903.57,
  },
];

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
