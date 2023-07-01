import styles from "./dashboard.module.scss";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "./RevenueByLocationMap/index";
import { poppinsFont } from "../../fonts";
import { useEffect } from "react";
import { markers } from "../../utils/dashboardUtils";

const CustomerGrowthChart = () => {
  useEffect(() => {
    const mapTipShow: any = document.querySelector(".jvectormap-tip");
    mapTipShow!.style.fontFamily = poppinsFont.style.fontFamily;
  }, []);

  return (
    <div className={styles.revenueByLocChartContainer}>
      <h2>Revenue By Location</h2>
      <div className={styles.revenueByLocChart}>
        <VectorMap
          map={worldMill}
          backgroundColor={"transparent"}
          zoomOnScroll={false}
          //zoomButtons={false}

          markers={markers}
          markerStyle={{
            initial: {
              fill: "var(--revenueGrowthLine1)",
            },
            hover: {
              //stroke: "blue",
            },
          }}
          regionStyle={{
            initial: {
              fill: "#DFDFDF",
            },
            hover: {
              fill: "#ff0000",
            },
          }}
          //onRegionTipShow={(event, label) => onTipShow(event, label)}
          //onMarkerTipShow={(event, label) => onTipShow(event, label)}
        />
      </div>
    </div>
  );
};

export default CustomerGrowthChart;
