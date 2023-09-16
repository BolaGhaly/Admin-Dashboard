import styles from "../dashboard.module.scss";
import { sortArrOfObjsByKeyValue } from "../../../utils/mainUtils";
import Icon, { countriesPercentages } from "../../../utils/dashboardUtils";
//import { motion } from "framer-motion";

const CountriesPercentages = () => {
  return (
    <div className={styles.revenueByLocPercentages}>
      {sortArrOfObjsByKeyValue(countriesPercentages, "percentage", true).map(
        (country, idx) => (
          <div
            key={idx}
            title={country.country}
            // initial={{ opacity: 0, visibility: "hidden" }}
            // animate={{ opacity: 1, visibility: "visible" }}
            // transition={{
            //   duration: 0.1,
            //   ease: "easeOut",
            // }}
          >
            <div>
              <Icon name={country.flag} />
            </div>
            <div>
              <p>{country.country}</p>
              <div>
                <div>
                  <span
                    style={{
                      width: `${country.percentage}%`,
                      borderRadius:
                        country.percentage < 100
                          ? "0.25rem 0 0 0.25rem"
                          : "0.25rem",
                    }}
                  />
                  <span
                    style={{ width: `calc(100% - ${country.percentage}%)` }}
                  />
                </div>
                <p>{Number.parseFloat(country.percentage).toFixed(2)}%</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CountriesPercentages;
