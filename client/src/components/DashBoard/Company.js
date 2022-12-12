import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
import { fNumber } from "../../utils/formatNumber";
import { Card, CardHeader, Box } from "@mui/material";
//
import BaseOptionChart from "./BaseOptionChart";

// ----------------------------------------------------------------------
function getRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}


const Company = (company) => {
    const company_info = [{ x: "Microsoft", y: 213 },
    { x: "Google", y: 164 },
    { x: "facebook", y: 139 },
    { x: "Tsinghua University", y: 121 },
    { x: "Alibaba", y: 108 },
    { x: "Tencent", y: 102 },
    { x: "Zhejiang University", y: 94 },
    { x: "ByteDance", y: 94 },
    { x: "NVIDIA", y: 79 },
    { x: "Peking University", y: 78 },
    { x: "baidu", y: 70 },
    { x: "Amazon", y: 64 },
    { x: "Shanghai Jiao Tong University", y: 54 },
    { x: "Carnegie Mellon University", y: 51 },
    { x: "Nanjing University", y: 51 },
    { x: "intel", y: 51 },
    { x: "AWS", y: 48 },
    { x: "USTC", y: 46 },
    { x: "Fudan University", y: 46 },
    { x: "University of Toronto", y: 39 },
    { x: "Stanford University", y: 37 },
    { x: "IBM", y: 36 },
    { x: "huawei", y: 33 },
    { x: "UESTC", y: 33 },
    { x: "Sun Yatsen University", y: 33 },
    { x: "Meta", y: 33 },
    { x: "bupt", y: 32 },
    { x: "ETH ", y: 32 },
    { x: "HUST", y: 31 },
    { x: "SJTU", y: 30 },
    { x: "National University of Singapore", y: 29 },
    { x: "MIT", y: 28 },
    { x: "Apple", y: 28 },
    { x: "Harbin Institute of Technology", y: 28 },
    { x: "Southeast University", y: 27 },
    { x: "freelancer", y: 26 },
    { x: "Beihang University", y: 26 },
    { x: "Xidian University", y: 26 },
    { x: "University of Washington", y: 25 },
    { x: "HKUST", y: 25 },
    { x: "Freelance", y: 25 },
    { x: "Amazon Web Services", y: 24 },
    { x: "National Taiwan University", y: 24 },
    { x: "University of Southern California", y: 24 },
    { x: "EPFL", y: 24 },
    { x: "Huazhong University of Science and Technology", y: 23 },
    { x: "The University of Tokyo", y: 23 },
    { x: "KAIST", y: 22 },
    { x: "UCAS", y: 22 },
    { x: "Netease", y: 22 }]
    const CHART_DATA = [
        {
            data: company_info,
        },
    ];
    let rand_colors = [];
    for (var i = 0; i < company_info.length; i++) {
        rand_colors[i] = getRGB();
    }
    console.log(company_info.length);

    const chartOptions = {
        legend: {
            show: false
        },
        colors: rand_colors,

        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: false
            }
        }
    };


    return (
        <Card>
            <CardHeader title="Company" />
            <Box sx={{ mx: 3 }} dir="ltr">
                <ReactApexChart
                    type="treemap"
                    series={CHART_DATA}
                    options={chartOptions}
                    height={364}
                />
            </Box>
        </Card>
    );
};

export default Company;
