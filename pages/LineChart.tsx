import { ResponsiveLine } from "@nivo/line";

const LineChart = ({ data, darkMode }) => (
  <ResponsiveLine
    theme={{
      textColor: `${darkMode ? "#d1d5db" : "#FF0000"}`,
      fontSize: 16,
      fontFamily: "poppins",
      grid: {
        line: {
          stroke: `${darkMode ? "#d1d5db" : "#FF0000"}`,
        },
      },
      tooltip: {
        container: {
          background: "#872626",
          color: "#ff0000",
          fontSize: 12,
          borderRadius: 10,
        },
      },
      crosshair: {
        line: {
          strokeWidth: 0,
        },
      },
    }}
    data={data}
    margin={{ top: 50, right: 50, bottom: 50, left: 80 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "0",
      max: "20000",
      stacked: false,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="natural"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 0,
      tickPadding: 10,
      tickRotation: 0,
    }}
    axisLeft={{
      orient: "left",
      tickSize: 0,
      tickPadding: 10,
      tickRotation: 0,
      format: (value) => `$${value.toLocaleString("en-US")}`,
    }}
    enableGridX={false}
    colors={["#3b82f6", "#a855f7"]}
    lineWidth={3}
    pointSize={5}
    pointBorderWidth={2}
    pointColor={{ from: "color", modifiers: [] }}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="yFormatted"
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        itemTextColor: `${darkMode ? "#d1d5db" : "#FF0000"}`,
        anchor: "top-right",
        direction: "row",
        justify: false,
        translateX: -30,
        translateY: -30,
        itemsSpacing: 60,
        itemDirection: "left-to-right",
        itemWidth: 100,
        itemHeight: 20,
        symbolSize: 10,
        symbolShape: "circle",
      },
    ]}
    motionConfig="slow"
  />
);

export default LineChart;
