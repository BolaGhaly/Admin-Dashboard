// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";
import Head from "next/head";
import styles from "./dashboard.module.scss";
import TotalData from "./TotalData";

const Dashboard = () => {
  // const darkMode = useSelector((state: RootState) => state.darkMode.value);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className={styles.dashboardMain}>
        <h1>Dashboard</h1>
        <TotalData />
      </main>
    </>
  );
};

export default Dashboard;
