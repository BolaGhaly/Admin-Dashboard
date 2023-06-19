import RevenueGrowthTooltip from "./RevenueGrowthTooltip";
import RevenueGrowthLegend from "./RevenueGrowthLegend";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RevenueGrowthData } from "../../utils/dashboardUtils";
import styles from "./dashboard.module.scss";
import { useState, useEffect } from "react";

const RevenueGrowthChart = () => {
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

  return (
    <div className={styles.revenueGrowthChart}>
      <h2>Revenue Growth</h2>
      <RevenueGrowthLegend />
      <ResponsiveContainer>
        <LineChart data={RevenueGrowthData} margin={{ right: 20, top: 10 }}>
          <CartesianGrid
            strokeDasharray="5 15"
            stroke="var(--notifications-line)"
          />
          <XAxis
            dataKey="day"
            fontSize="0.875rem"
            interval={windowWidth >= 375 ? 0 : 1}
            tick={{ fill: "var(--text)" }}
            stroke="var(--text)"
            tickMargin={5}
          />
          <YAxis
            fontSize="0.875rem"
            tick={{ fill: "var(--text)" }}
            stroke="var(--text)"
            tickMargin={5}
          />
          <Tooltip
            content={<RevenueGrowthTooltip />}
            isAnimationActive={false}
            cursor={{ stroke: "var(--text)", strokeDasharray: "6 4" }}
          />
          <Line
            type="monotone"
            dataKey="This Week"
            stroke="var(--revenueGrowthLine1)"
            dot={{ r: 0 }}
            activeDot={{
              r: 6,
              strokeWidth: 2,
              stroke: "var(--dashboard-bg)",
            }}
            strokeWidth={2}
            animationEasing="ease-out"
            animationDuration={2000}
          />
          <Line
            type="monotone"
            dataKey="Last Week"
            stroke="var(--revenueGrowthLine2)"
            dot={{ r: 0 }}
            activeDot={{
              r: 6,
              strokeWidth: 2,
              stroke: "var(--dashboard-bg)",
            }}
            strokeWidth={2}
            animationEasing="ease-out"
            animationDuration={2000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueGrowthChart;
