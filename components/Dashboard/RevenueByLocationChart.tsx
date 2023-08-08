import styles from "./dashboard.module.scss";
import { worldMill } from "./RevenueByLocationMap/index";
import { poppinsFont } from "../../fonts";
import { useEffect } from "react";
import { markers } from "../../utils/dashboardUtils";
import { useDispatch } from "react-redux";
import { closeLanguagesMenu } from "../../store/slices/userLanguagesMenu";
import { closeNotificationsMenu } from "../../store/slices/userNotificationsMenu";
import { closeProfileStatusMenu } from "../../store/slices/userProfileStatusMenu";
import { closeProfileMenu } from "../../store/slices/userProfileMenu";
import { closeSideBar } from "../../store/slices/sideBar";
import CountriesPercentages from "./CountriesPercentages";
import dynamic from "next/dynamic";
const VectorMap = dynamic(
  () => import("@react-jvectormap/core").then((m) => m.VectorMap),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

const RevenueByLocationChart = () => {
  useEffect(() => {
    const mapLegendH: any = document.querySelector(".jvectormap-legend-cnt-h");
    const mapLegendV: any = document.querySelector(".jvectormap-legend-cnt-v");
    mapLegendH?.parentNode.removeChild(mapLegendH);
    mapLegendV?.parentNode.removeChild(mapLegendV);
  }, []);

  const dispatch = useDispatch();
  const closeAllOpenMenus = () => {
    dispatch(closeLanguagesMenu());
    dispatch(closeNotificationsMenu());
    dispatch(closeProfileStatusMenu());
    dispatch(closeProfileMenu());
    dispatch(closeSideBar());
  };

  return (
    <div className={styles.revenueByLocChartContainer}>
      <h2>Revenue By Location</h2>
      <div className={styles.revenueByLocChart} onClick={closeAllOpenMenus}>
        <VectorMap
          map={worldMill}
          backgroundColor={"transparent"}
          zoomOnScroll={false}
          zoomAnimate={false}
          zoomStep={1.7}
          markers={markers}
          onMarkerTipShow={() => {
            const mapTipShow: any = document.querySelector(".jvectormap-tip");
            mapTipShow.style.fontFamily = poppinsFont.style.fontFamily;
          }}
          onRegionTipShow={() => {
            const mapTipShow: any = document.querySelector(".jvectormap-tip");
            mapTipShow.style.fontFamily = poppinsFont.style.fontFamily;
          }}
        />
      </div>
      <CountriesPercentages />
    </div>
  );
};

export default RevenueByLocationChart;
