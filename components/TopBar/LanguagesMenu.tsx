//import useOnclickOutside from "react-cool-onclickoutside";
import { motion, Variants } from "framer-motion";
import styles from "./topBar.module.scss";
//import { useState } from "react";
import Icon from "../../utils/topBarUtils";
//import usaFlag from "/assets/flags/USA_flag.svg";
//import Image from "next/image";
const LanguagesMenu = () => {
  //const [userLanguagesMenu, setUserLanguagesMenu] = useState(false);
  const userLanguagesMenuVariants: Variants = {
    open: {
      opacity: 1,
      display: "flex",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <div className={styles.languagesMenu}>
      <button>
      <Icon name="usaFlag"/>
      </button>
      <motion.div
        initial={false}
        variants={userLanguagesMenuVariants}
        //animate={userLanguagesMenu ? "open" : "closed"}
        //className={styles.userLanguagesMenu}
      >
        <motion.ul>
          <motion.li>
            <p>Online</p>
          </motion.li>
          <motion.li>
            <p>Online</p>
          </motion.li>
          <motion.li>
            <p>Online</p>
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default LanguagesMenu;
