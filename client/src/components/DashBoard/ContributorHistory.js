import jsondata from "../../utils/Commiter-Size.json"
import { merge } from "lodash";
import moment from "moment";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box } from "@mui/material";
//
import BaseOptionChart from "./BaseOptionChart";

// ----------------------------------------------------------------------

const ContributorHistory = (data) => {
    var time = [];
    var total = [];
    var per_month = []
    for (var p in jsondata) {
        time.push(jsondata[p].time.substring(0, 7));
        total.push(jsondata[p].number);
        per_month.push(jsondata[p].more)
    }
    const CHART_DATA = [
        {
            name: "total contributor",
            type: "line",
            data: total,

        }
        ,
        {
            name: "new contributor",
            type: "line",
            data: per_month
        }
    ];
    const chartOptions = merge(BaseOptionChart(), {
        stroke: { width: [5, 2] },
        plotOptions: { bar: { columnWidth: "11%", borderRadius: 4 } },
        // fill: { type: ["gradient"] },
        colors: ["#7c8920", "#0968F7"],
        labels: time,
        xaxis: { type: "time" },
        yaxis: [{
            title: {
                text: 'Total',
                style: {
                    color: "#7c8920",
                    fontSize: '20px',
                }
            },

        }, {
            opposite: true,
            title: {
                text: 'New',
                style: {
                    color: "#0968F7",
                    fontSize: '20px',
                }
            }
        }],
        legend: {
            show: true
        }
    });

    return (
        <Card>
            <CardHeader title="Contributor History" />
            <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <ReactApexChart
                    type="line"
                    series={CHART_DATA}
                    options={chartOptions}
                    height={500}
                />
            </Box>
        </Card>
    );
};

export default ContributorHistory;
