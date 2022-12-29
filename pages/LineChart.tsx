import { ResponsiveLine } from "@nivo/line";

const LineChart = ({ data, darkMode }) => (
  <ResponsiveLine
    theme={{
      fontSize: 16,
      textColor: `${darkMode ? "#d1d5db" : "#1f2937"}`,
      fontFamily: "poppins",
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
        itemTextColor: `${darkMode ? "#d1d5db" : "#1f2937"}`,
        anchor: "top-right",
        direction: "row",
        justify: false,
        translateX: 2,
        translateY: -30,
        itemsSpacing: 60,
        itemDirection: "left-to-right",
        itemWidth: 100,
        itemHeight: 20,
        symbolSize: 10,
        symbolShape: "circle",
      },
    ]}
  />
);

export default LineChart;
