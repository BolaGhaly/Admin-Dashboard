import React from "react";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { closeSideBar } from "../../store/slices/sideBar";
import Icon from "../../utils/sideBarUtils";
import { lobsterFont } from "../../fonts";
import Link from "next/link";
import styles from "./sideBar.module.scss";
import { motion, Variants } from "framer-motion";

const CompanyLogo = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
  const dispatch = useDispatch();

  const closeSideBarBtnVariants: Variants = {
    open: {
      display: "block",
    },
    closed: {
      display: "none",
    },
  };

  return (
    <div
      className={styles.companyLogoDiv}
      onClick={() => dispatch(closeSideBar())}
      title="FinFiesta"
    >
      <Link href="/" title="FinFiesta">
        <Icon name="companyLogo" />
      </Link>
      {openSideBar ? (
        <Link href="/" title="FinFiesta" style={lobsterFont.style}>
          FinFiesta
        </Link>
      ) : null}
      <motion.span
        initial={false}
        variants={closeSideBarBtnVariants}
        animate={openSideBar ? "open" : "closed"}
        title="Close Sidebar"
      >
        <Icon name="closeSideBar" />
      </motion.span>
      {/* {openSideBar ? <Icon name="closeSideBar" /> : null} */}
    </div>
  );
};

export default CompanyLogo;
