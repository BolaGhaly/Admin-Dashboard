import arrowUp from "/assets/dashboardIcons/arrowUp.svg";
import arrowDown from "/assets/dashboardIcons/arrowDown.svg";
import {
  USA,
  Spain,
  Italy,
  Germany,
  Russia,
  Ecuador,
  Mexico,
  Egypt,
  Puerto_Rico,
  UK,
  South_Africa,
  Japan,
} from "../assets/flags";
import { BsAlarmFill } from "react-icons/bs";
import { IoChevronForwardOutline } from "react-icons/io5";
import { AiFillClockCircle, AiFillSchedule } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import profileImg from "/assets/userProfile/profileImg.webp";
import teamMember1 from "/assets/teamProfiles/teamMember1.webp";
import teamMember2 from "/assets/teamProfiles/teamMember2.webp";
import teamMember3 from "/assets/teamProfiles/teamMember3.webp";
import teamMember4 from "/assets/teamProfiles/teamMember4.webp";
import teamMember5 from "/assets/teamProfiles/teamMember5.webp";

import { StaticImageData } from "next/image";

const iconTypes = {
  arrowUp,
  arrowDown,
  usaFlag: USA,
  spainFlag: Spain,
  italyFlag: Italy,
  germanyFlag: Germany,
  russiaFlag: Russia,
  ecuadorFlag: Ecuador,
  mexicoFlag: Mexico,
  egyptFlag: Egypt,
  puertoRicoFlag: Puerto_Rico,
  ukFlag: UK,
  southAfricaFlag: South_Africa,
  japanFlag: Japan,
  alarm: BsAlarmFill,
  arrowRight: IoChevronForwardOutline,
  clock: AiFillClockCircle,
  calendar: FaCalendarAlt,
  schedule: AiFillSchedule,
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

interface revenueByLocMarkersInterface {
  latLng: [number, number];
  name: string;
}

export const markers: revenueByLocMarkersInterface[] = [
  {
    latLng: [38.78, -98.38],
    name: "United States of America",
  },
  {
    latLng: [53.23, -1.43],
    name: "United Kingdom",
  },
  {
    latLng: [22.23, -101.11],
    name: "Mexico",
  },
  {
    latLng: [18.22, -66.49],
    name: "Puerto Rico",
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
    latLng: [36.24, 138.95],
    name: "Japan",
  },
  {
    latLng: [26.96, 30.4],
    name: "Egypt",
  },
  {
    latLng: [-31.28, 23.24],
    name: "South Africa",
  },
];

interface revenueByLocPercentagesInterface {
  flag: string;
  country: string;
  percentage: number;
}

export const countriesPercentages: revenueByLocPercentagesInterface[] = [
  {
    flag: "usaFlag",
    country: "United States of America",
    percentage: 28.74,
  },
  {
    flag: "mexicoFlag",
    country: "Mexico",
    percentage: 8.41,
  },
  {
    flag: "puertoRicoFlag",
    country: "Puerto Rico",
    percentage: 4.83,
  },
  {
    flag: "ecuadorFlag",
    country: "Ecuador",
    percentage: 3.64,
  },
  {
    flag: "spainFlag",
    country: "Spain",
    percentage: 6.95,
  },
  {
    flag: "ukFlag",
    country: "United Kingdom",
    percentage: 14.06,
  },
  {
    flag: "germanyFlag",
    country: "Germany",
    percentage: 10.39,
  },
  {
    flag: "italyFlag",
    country: "Italy",
    percentage: 2.51,
  },
  {
    flag: "russiaFlag",
    country: "Russia",
    percentage: 4.92,
  },
  {
    flag: "egyptFlag",
    country: "Egypt",
    percentage: 1.89,
  },
  {
    flag: "southAfricaFlag",
    country: "South Africa",
    percentage: 1.14,
  },
  {
    flag: "japanFlag",
    country: "Japan",
    percentage: 12.52,
  },
];

interface upcomingScheduleDataInterface {
  date: string;
  time: string;
  title: string;
  attendance: StaticImageData[];
  moreAttendance: number;
}

export const upcomingScheduleData: upcomingScheduleDataInterface[] = [
  {
    date: "Wed, 13 Sep",
    time: "10:00 AM",
    title: "Daily standup meeting",
    attendance: [profileImg, teamMember2, teamMember3, teamMember4],
    moreAttendance: 6,
  },
  {
    date: "Fri, 15 Sep",
    time: "01:00 PM",
    title: "Office event",
    attendance: [profileImg, teamMember1, teamMember2, teamMember3],
    moreAttendance: 22,
  },
  {
    date: "Mon, 18 Sep",
    time: "12:30 PM",
    title: "Design team meeting",
    attendance: [teamMember3, teamMember4, teamMember5],
    moreAttendance: 0,
  },
];

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
