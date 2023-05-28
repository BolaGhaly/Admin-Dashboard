// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";
import Head from "next/head";
import styles from "./dashboard.module.scss";
import Icon, { totalData } from "../../utils/dashboardUtils";

const Dashboard = () => {
  // const darkMode = useSelector((state: RootState) => state.darkMode.value);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className={styles.dashboardMain}>
        <h1>Dashboard</h1>
        <div className={styles.totalDataContainer}>
          {totalData.map((item, idx) => (
            <div key={idx}>
              <h2>{item.title}</h2>
              <div>
                <p>{item.value.toLocaleString("en-US")}</p>
                <div
                  className={`${
                    item.arrowUp ? `${styles.arrowUp}` : `${styles.arrowDown}`
                  }`}
                >
                  <div>
                    {item.arrowUp ? (
                      <Icon name="arrowUp" />
                    ) : (
                      <Icon name="arrowDown" />
                    )}
                    <p>{item.percentage}%</p>
                  </div>
                  <small>vs last month</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
