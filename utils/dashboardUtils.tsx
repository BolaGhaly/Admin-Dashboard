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
    "This Week": 249.76,
    "Last Week": 383.75,
  },
  {
    day: "Tue",
    "This Week": 562.12,
    "Last Week": 445.17,
  },
  {
    day: "Wed",
    "This Week": 738.43,
    "Last Week": 816.99,
  },
  {
    day: "Thu",
    "This Week": 981.5,
    "Last Week": 834.23,
  },
  {
    day: "Fri",
    "This Week": 1050.94,
    "Last Week": 943.11,
  },
  {
    day: "Sat",
    "This Week": 994.53,
    "Last Week": 1124,
  },
  {
    day: "Sun",
    "This Week": 1165.73,
    "Last Week": 1010.52,
  },
];

interface revenueByLocationMarkers {
  latLng: [number, number];
  name: string;
}

export const markers: revenueByLocationMarkers[] = [
  {
    latLng: [38.78, -98.38],
    name: "United States of America",
  },
  {
    latLng: [59.35, -107.43],
    name: "Canada",
  },
  {
    latLng: [53.23, -1.43],
    name: "United Kingdom",
  },
  {
    latLng: [-26.07, 134.28],
    name: "Australia",
  },
  {
    latLng: [22.23, -101.11],
    name: "Mexico",
  },
  {
    latLng: [-1.64, -78.52],
    name: "Ecuador",
  },
  {
    latLng: [39.56, -2.77],
    name: "Spain",
  },
  {
    latLng: [42.97, 12.48],
    name: "Italy",
  },
  {
    latLng: [51.41, 11.52],
    name: "Germany",
  },
  {
    latLng: [61.46, 93.62],
    name: "Russia",
  },
  {
    latLng: [26.96, 30.40],
    name: "Egypt"
  },
  {
    latLng: [-31.28, 23.24],
    name: "South Africa",
  },
];

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
