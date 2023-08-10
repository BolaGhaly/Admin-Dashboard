import styles from "../dashboard.module.scss";
import RevenueGrowthLegend from "./RevenueGrowthLegend";
import RevenueGrowthChart from "./RevenueGrowthChart";

const RevenueGrowth = () => {
  return (
    <div className={styles.revenueGrowthChart}>
      <h2>Revenue Growth</h2>
      <RevenueGrowthLegend />
      <RevenueGrowthChart />
    </div>
  );
};

export default RevenueGrowth;
