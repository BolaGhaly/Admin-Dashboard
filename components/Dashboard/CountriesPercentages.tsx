import styles from "./dashboard.module.scss";
import { sortArrOfObjsByKeyValue } from "../../utils/mainUtils";
import Icon, { countriesPercentages } from "../../utils/dashboardUtils";
import { motion } from "framer-motion";

const CountriesPercentages = () => {
  return (
    <div className={styles.revenueByLocPercentages}>
      {sortArrOfObjsByKeyValue(countriesPercentages, "percentage", true).map(
        (country, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={{ opacity: 1, visibility: "visible" }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <Icon name={country.flag} />
            <div>
              <p>{country.country}</p>
              <span
                style={{
                  width: `${country.percentage}%`,
                  borderRadius:
                    country.percentage < 100
                      ? "0.25rem 0 0 0.25rem"
                      : "0.25rem",
                }}
              />
              <span style={{ width: `calc(100% - ${country.percentage}%)` }} />
            </div>
            <p>{Number.parseFloat(country.percentage).toFixed(2)}%</p>
          </motion.div>
        )
      )}
    </div>
  );
};

export default CountriesPercentages;
