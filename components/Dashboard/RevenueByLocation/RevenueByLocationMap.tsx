import styles from "../dashboard.module.scss";
import { poppinsFont } from "../../../fonts";
import { worldMill } from "./RevenueByLocationMap/index";
import { VectorMap } from "@react-jvectormap/core";
import { markers } from "../../../utils/dashboardUtils";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { closeLanguagesMenu } from "../../../store/slices/userLanguagesMenu";
import { closeNotificationsMenu } from "../../../store/slices/userNotificationsMenu";
import { closeProfileStatusMenu } from "../../../store/slices/userProfileStatusMenu";
import { closeProfileMenu } from "../../../store/slices/userProfileMenu";
import { closeSideBar } from "../../../store/slices/sideBar";

const RevenueByLocationMap = () => {
  const dispatch = useDispatch();
  const closeAllOpenMenus = () => {
    dispatch(closeLanguagesMenu());
    dispatch(closeNotificationsMenu());
    dispatch(closeProfileStatusMenu());
    dispatch(closeProfileMenu());
    dispatch(closeSideBar());
  };

  return (
    <motion.div
      className={styles.revenueByLocChart}
      onClick={closeAllOpenMenus}
      initial={{ opacity: 0, visibility: "hidden" }}
      animate={{ opacity: 1, visibility: "visible" }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    >
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
          // mapTipShow.style.zIndex = "1";
        }}
        onRegionTipShow={() => {
          const mapTipShow: any = document.querySelector(".jvectormap-tip");
          mapTipShow.style.fontFamily = poppinsFont.style.fontFamily;
          // mapTipShow.style.zIndex = "1";
        }}
      />
    </motion.div>
  );
};

export default RevenueByLocationMap;