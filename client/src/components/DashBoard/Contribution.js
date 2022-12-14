import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
import { fNumber } from "../../utils/formatNumber";
import { Card, CardHeader, Box } from "@mui/material";
//
import BaseOptionChart from "./BaseOptionChart";

// ----------------------------------------------------------------------

const Contribute = ({ labels, commits }) => {

  const CHART_DATA = [
    {
      data: commits,
    },
  ];
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: () => `#commit times`,
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: "28%", borderRadius: 2 },
    },
    xaxis: {
      categories: labels,
    },
    yaxis: {
      labels: {
        style: {
          color: "#ff0033",
          fontSize: '24px',
        }
      }
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0]
    },
  });

  return (
    <Card>
      <CardHeader title="Contribution Rank" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={CHART_DATA}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
};

export default Contribute;
