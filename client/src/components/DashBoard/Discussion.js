import { merge } from "lodash";
import moment from "moment";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box } from "@mui/material";
//
import BaseOptionChart from "./BaseOptionChart";

// ----------------------------------------------------------------------

const Discussion = (data) => {
    var labels = ['2021-11', '2021-12', '2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11'];
    var number = ['42395', '43315', '44389', '45305', '46255', '47286', '48470', '49827', '50952', '52129', '53282', '54607', '55535'];
    let per_month = ['1053', '866', '1025', '861', '909', '985', '1125', '1269', '1075', '1140', '1103', '1293', '1273'];


    // for (var interval in data) {
    //   labels.push(interval);
    //   number.push(data[interval]);
    // }
    let month = ['2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11', '2022-12']
    let code = [296, 341, 315, 388, 389, 539, 383, 370, 356, 450, 437, 163]
    let maintainability = [149, 151, 171, 177, 207, 229, 159, 155, 156, 186, 196, 72]
    let testing = [288, 303, 354, 371, 382, 492, 472, 390, 343, 409, 418, 159]
    let rubustness = [17, 19, 9, 11, 17, 11, 16, 16, 16, 24, 17, 5]
    let performance = [61, 72, 65, 58, 68, 92, 68, 73, 77, 98, 120, 26]
    let configuration = [94, 56, 82, 83, 86, 86, 81, 77, 99, 110, 128, 33]
    let documentation = [102, 119, 111, 116, 135, 155, 152, 136, 132, 183, 174, 68]
    let clarification = [8, 10, 13, 7, 6, 11, 6, 3, 5, 5, 12, 2]
    let open_source = [285, 295, 225, 278, 384, 404, 377, 384, 438, 406, 377, 139]



    const CHART_DATA = [
        {
            name: "code",
            // type: "line",
            data: code,
        }
        ,
        {
            name: "maintainability",
            // type: "line",
            data: maintainability
        },
        {
            name: "testing",
            // type: "line",
            data: testing
        },
        {
            name: "rubustness",
            // type: "line",
            data: rubustness
        },
        {
            name: "performance",
            // type: "line",
            data: performance
        }, {
            name: "rubustness",
            // type: "line",
            data: rubustness
        }, {
            name: "configuration",
            // type: "line",
            data: configuration
        }, {
            name: "documentation",
            // type: "line",
            data: documentation
        }, {
            name: "clarification",
            // type: "line",
            data: clarification
        }, {
            name: "open source",
            // type: "line",
            data: open_source
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
