import styles from "./topBar.module.scss";
import { motion, Variants } from "framer-motion";
import Icon from "../../utils/topBarUtils";
import { poppinsFont } from "../../fonts";
import useOnclickOutside from "react-cool-onclickoutside";
import {
  closeLanguagesMenu,
  toggleLanguagesMenu,
  changeLanguage,
} from "../../store/userLanguagesMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useState, useEffect } from "react";

const LanguagesMenu = () => {
  const languagesMenuOpen = useSelector(
    (state: RootState) => state.userLanguagesMenu.open
  );
  const languagesMenuValue = useSelector(
    (state: RootState) => state.userLanguagesMenu.value
  );
  const dispatch = useDispatch();
  const userLanguagesMenuRef = useOnclickOutside(() => {
    dispatch(closeLanguagesMenu());
  });

  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const userLanguagesMenuVariant1: Variants = {
    open: {
      opacity: 1,
      display: "flex",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
      transform: "translateX(0)",
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
      transform: "translateX(0)",

      transitionEnd: {
        display: "none",
      },
    },
  };

  const userLanguagesMenuVariant2: Variants = {
    open: {
      opacity: 1,
      display: "flex",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
      transform: "translateX(0)",
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
      transform: "translateX(20px)",
      transitionEnd: {
        display: "none",
      },
    },
  };

  const userLanguagesMenuVariants =
    windowWidth >= 474 ? userLanguagesMenuVariant1 : userLanguagesMenuVariant2;

  const flagsArr = [
    {
      value: "English",
      iconName: "usaFlag",
    },
    {
      value: "Spanish",
      iconName: "spainFlag",
    },
    {
      value: "Italian",
      iconName: "italyFlag",
    },
    {
      value: "German",
      iconName: "germanyFlag",
    },
    {
      value: "Russian",
      iconName: "russiaFlag",
    },
  ];

  const handleClick = (value: string) => {
    dispatch(changeLanguage({ language: value }));
    dispatch(closeLanguagesMenu());
  };

  return (
    <div className={styles.languagesMenu} ref={userLanguagesMenuRef}>
      <button onClick={() => dispatch(toggleLanguagesMenu())} title="Language">
        {languagesMenuValue === "English" ? (
          <Icon name="usaFlag" />
        ) : languagesMenuValue === "Spanish" ? (
          <Icon name="spainFlag" />
        ) : languagesMenuValue === "Italian" ? (
          <Icon name="italyFlag" />
        ) : languagesMenuValue === "German" ? (
          <Icon name="germanyFlag" />
        ) : languagesMenuValue === "Russian" ? (
          <Icon name="russiaFlag" />
        ) : null}
      </button>
      <motion.div
        initial={false}
        variants={userLanguagesMenuVariants}
        animate={languagesMenuOpen ? "open" : "closed"}
      >
        {flagsArr.map((flag, idx) => {
          return (
            <motion.button
              style={poppinsFont.style}
              key={idx}
              onClick={() => handleClick(flag.value)}
            >
              <Icon name={`${flag.iconName}`} />
              <p>{flag.value}</p>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default LanguagesMenu;
