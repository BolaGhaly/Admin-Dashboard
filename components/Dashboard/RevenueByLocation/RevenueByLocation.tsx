import styles from "../dashboard.module.scss";
import { useEffect } from "react";
import dynamic from "next/dynamic";
const RevenueByLocationChart = dynamic(
  () => import("./RevenueByLocationChart"),
  {
    ssr: false,
  }
);
import { motion } from "framer-motion";

const RevenueByLocation = () => {
  useEffect(() => {
    const mapLegendH: any = document.querySelector(".jvectormap-legend-cnt-h");
    const mapLegendV: any = document.querySelector(".jvectormap-legend-cnt-v");
    mapLegendH?.parentNode.removeChild(mapLegendH);
    mapLegendV?.parentNode.removeChild(mapLegendV);
  }, []);

  return (
    <div className={styles.revenueByLocChartContainer}>
      <h2>Revenue By Location</h2>
      <motion.div
        initial={{ opacity: 0, visibility: "hidden" }}
        animate={{ opacity: 1, visibility: "visible" }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <RevenueByLocationChart />
      </motion.div>
    </div>
  );
};

export default RevenueByLocation;
