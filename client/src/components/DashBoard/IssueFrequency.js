import { merge } from "lodash";
import moment from "moment";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box } from "@mui/material";
//
import BaseOptionChart from "./BaseOptionChart";

// ----------------------------------------------------------------------

const IssueFrequency = (data) => {
  var labels = ['2021-11', '2021-12', '2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11'];
  var number = ['42395', '43315', '44389', '45305', '46255', '47286', '48470', '49827', '50952', '52129', '53282', '54607', '55535'];
  let per_month = ['1053', '866', '1025', '861', '909', '985', '1125', '1269', '1075', '1140', '1103', '1293', '1273'];
  // for (var interval in data) {
  //   labels.push(interval);
  //   number.push(data[interval]);
  // }
  const CHART_DATA = [
    {
      name: "Pull Request times",
      type: "column",
      data: per_month,

    }
    ,
    {
      name: "total",
      type: "line",
      data: number
    }
  ];
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 5] },
    plotOptions: { bar: { columnWidth: "11%", borderRadius: 4 } },
    fill: { type: ["gradient"] },
    labels: labels,
    xaxis: { type: "time" },
    yaxis: [{
      title: {
        text: 'PR HEAT',
        style: {
          color: "#ff0033",
        }
      },

    }, {
      opposite: true,
      title: {
        text: 'Total PR'
      }
    }],
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0]
    },
    // tooltip: {
    //   shared: true,
    //   intersect: false,
    //   y: {
    //     formatter: (y) => {
    //       if (typeof y !== "undefined") {
    //         return `${y.toFixed(0)}`;
    //       }
    //       return y;
    //     },
    //   },
    // },
  });

  return (
    <Card>
      <CardHeader title="Pull Requests in last year" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={CHART_DATA}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
};

export default IssueFrequency;
