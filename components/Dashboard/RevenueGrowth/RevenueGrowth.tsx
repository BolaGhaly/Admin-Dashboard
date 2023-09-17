import styles from "../dashboard.module.scss";
import RevenueGrowthLegend from "./RevenueGrowthLegend";
import RevenueGrowthChart from "./RevenueGrowthChart";
import { motion } from "framer-motion";

const RevenueGrowth = () => {
  return (
    <div className={styles.revenueGrowthChart}>
      <h2>Revenue Growth</h2>
      <motion.div
        initial={{ opacity: 0, visibility: "hidden" }}
        animate={{ opacity: 1, visibility: "visible" }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <RevenueGrowthLegend />
        <RevenueGrowthChart />
      </motion.div>
    </div>
  );
};

export default RevenueGrowth;
