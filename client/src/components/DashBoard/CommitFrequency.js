
import { merge } from "lodash";
import moment from "moment";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box } from "@mui/material";
//
import BaseOptionChart from "./BaseOptionChart";

// ----------------------------------------------------------------------

const CommitFrequency = (data) => {
  var labels = ['2021-11', '2021-12', '2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11'];
  var number = [5461, 6464, 6697, 5015, 6570, 7525, 7375, 8131, 7700, 8720, 7047, 8801, 7165];
  // for (var interval in data) {
  //   labels.push(interval);
  //   number.push(data[interval]);
  // }
  const CHART_DATA = [
    {
      name: "commit times",
      type: "area",
      data: number,
    },
  ];
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [3, 2] },
    plotOptions: { bar: { columnWidth: "11%", borderRadius: 4 } },
    fill: { type: ["gradient", "solid"] },
    labels: labels,
    xaxis: { type: "time" },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)}`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader title="Commit times" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={CHART_DATA}
          options={chartOptions}
          height={355}
        />
      </Box>
    </Card>
  );
};

export default CommitFrequency;
