import Icon, { totalData } from "../../utils/dashboardUtils";
import styles from "./dashboard.module.scss";

const TotalData = () => {
  return (
    <div className={styles.totalDataContainer}>
      {totalData.map((item, idx) => (
        <div key={idx}>
          <h2>{item.title}</h2>
          <div>
            <p>{item.value.toLocaleString("en-US")}</p>
            <div
              className={`${
                item.arrowUp ? `${styles.arrowUp}` : `${styles.arrowDown}`
              }`}
            >
              <div>
                {item.arrowUp ? (
                  <Icon name="arrowUp" />
                ) : (
                  <Icon name="arrowDown" />
                )}
                <p>{item.percentage}%</p>
              </div>
              <small>vs last month</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TotalData;
