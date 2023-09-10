import Head from "next/head";
import styles from "./dashboard.module.scss";
import TotalData from "./TotalData";
import RevenueGrowth from "./RevenueGrowth/RevenueGrowth";
import RevenueByLocationChart from "./RevenueByLocation/RevenueByLocation";
import PriorityProject from "./ExtraInfo/PriorityProject";
import UpcomingSchedule from "./ExtraInfo/UpcomingSchedule";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  changeActiveItem,
  initialState,
} from "../../store/slices/sideBarMenuActive";

const Dashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const currURLEndpoint = router.asPath.slice(1);

  useEffect(() => {
    if (currURLEndpoint === "")
      dispatch(changeActiveItem({ activeItem: initialState.activeItem }));
  }, [currURLEndpoint, dispatch]);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className={styles.dashboardMain}>
        <h1>Dashboard</h1>
        <TotalData />
        <div className={styles.revenueCharts}>
          <RevenueGrowth />
          <RevenueByLocationChart />
        </div>
        <div className={styles.extraInfo}>
          <PriorityProject />
          <UpcomingSchedule />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
