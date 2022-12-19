import { merge } from "lodash";
import moment from "moment";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box } from "@mui/material";
//
import BaseOptionChart from "./BaseOptionChart";
import jsondata from "../../utils/pr-label.json"
// ----------------------------------------------------------------------

const Discussion = () => {
    let data = [[], [], [], [], [], [], [], [], [], []]
    let month = ["2022-1", '2022-2', '2022-3', '2022-4', '2022-5', '2022-6', '2022-7', '2022-8', '2022-9', '2022-10', '2022-11', '2022-12']
    for (var p in jsondata) {
        for (var i = 0; i < 12; i++) {
            data[p][i] = jsondata[p][month[i]]
        }
    }
    const CHART_DATA = [
        {
            name: "code",
            // type: "line",
            data: data[0],
        }
        ,
        {
            name: "maintainability",
            // type: "line",
            data: data[1]
        },
        {
            name: "testing",
            // type: "line",
            data: data[2]
        },
        {
            name: "rubustness",
            // type: "line",
            data: data[3]
        },
        {
            name: "performance",
            // type: "line",
            data: data[4]
        }, {
            name: "rubustness",
            // type: "line",
            data: data[5]
        }, {
            name: "configuration",
            // type: "line",
            data: data[6]
        }, {
            name: "documentation",
            // type: "line",
            data: data[7]
        }, {
            name: "clarification",
            // type: "line",
            data: data[8]
        }, {
            name: "open source",
            // type: "line",
            data: data[9]
        }
    ];

    var series = CHART_DATA
    var options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: true
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: month,
        }
    }



    return (
        <Card>
            <CardHeader title="Discussion about Design" />
            <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <ReactApexChart
                    series={series}
                    options={options}
                    height={500}
                />
            </Box>
        </Card>
    );
}

export default Discussion;
