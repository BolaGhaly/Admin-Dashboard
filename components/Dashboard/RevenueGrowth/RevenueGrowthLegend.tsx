import styles from "../dashboard.module.scss";
import { numFormatter } from "../../../utils/mainUtils";
import { RevenueGrowthData } from "../../../utils/dashboardUtils";

const RevenueGrowthLegend = () => {
  return (
    <div className={styles.customLegend}>
      <div>
        <h2>This Week</h2>
        <div>
          <span style={{ backgroundColor: "var(--revenueGrowthLine1)" }} />
          <p>
            $
            {numFormatter(
              RevenueGrowthData.reduce(
                (accumulator, currentValue) =>
                  accumulator + currentValue["This Week"],
                0
              ),
              2
            )}
          </p>
        </div>
      </div>
      <div>
        <h2>Last Week</h2>
        <div>
          <span style={{ backgroundColor: "var(--revenueGrowthLine2)" }} />
          <p>
            $
            {numFormatter(
              RevenueGrowthData.reduce(
                (accumulator, currentValue) =>
                  accumulator + currentValue["Last Week"],
                0
              ),
              2
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevenueGrowthLegend;
