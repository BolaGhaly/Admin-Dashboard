import styles from "../dashboard.module.scss";
import { TooltipProps } from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import { numFormatter } from "../../../utils/mainUtils";

const RevenueGrowthTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p>{`${label}`}</p>
        <div>
          {payload.map((item, idx) => (
            <div key={idx}>
              <span
                style={{
                  backgroundColor: `${item.stroke}`,
                }}
              />
              <p>
                {item.name}: ${numFormatter(item.value, 2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default RevenueGrowthTooltip;
