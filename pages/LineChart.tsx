import { ResponsiveLine } from "@nivo/line";

const LineChart = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
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
      tickPadding: 8,
      tickRotation: 0,
    }}
    axisLeft={{
      orient: "left",
      tickSize: 0,
      tickPadding: 8,
      tickRotation: 0,
    }}
    colors={{ datum: "color" }}
    lineWidth={3}
    pointColor={{ theme: "labels.text.fill" }}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="yFormatted"
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "top-right",
        direction: "row",
        justify: false,
        translateX: 6,
        translateY: -30,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 100,
        itemHeight: 20,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
      },
    ]}
  />
);

export default LineChart;
