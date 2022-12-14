import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
import { fNumber } from "../../utils/formatNumber";
import { Card, CardHeader, Box } from "@mui/material";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BaseOptionChart from "./BaseOptionChart";
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------
function getRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Company = () => {
    const stargazer_info = [{ x: "Microsoft", y: 213 },
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
    { x: "Netease", y: 22 }];
    const issue_info = [{ x: "Facebook", y: 85 },
    { x: "Microsoft", y: 82 },
    { x: "NVIDIA", y: 64 },
    { x: "google", y: 45 },
    { x: "Tsinghua University", y: 29 },
    { x: "intel", y: 27 },
    { x: "Zhejiang University", y: 20 },
    { x: "Carnegie Mellon University", y: 17 },
    { x: "Meta", y: 17 },
    { x: "Peking University", y: 16 },
    { x: "Amazon", y: 15 },
    { x: "Tencent", y: 15 },
    { x: "Baidu", y: 14 },
    { x: "Shanghai Jiao Tong University", y: 14 },
    { x: "Stanford University", y: 13 },
    { x: "MIT", y: 13 },
    { x: "Apple", y: 12 },
    { x: "Facebook AI Research", y: 12 },
    { x: "ETH Zurich", y: 12 },
    { x: "University of Michigan", y: 11 },
    { x: "Alibaba", y: 11 },
    { x: "UC Berkeley", y: 11 },
    { x: "University of Toronto", y: 10 },
    { x: "Johns Hopkins University", y: 10 },
    { x: "UESTC", y: 9 },
    { x: "National University of Singapore", y: 9 },
    { x: "USTC", y: 9 },
    { x: "Microsoft Research", y: 9 },
    { x: "University of Washington", y: 9 },
    { x: "IBM", y: 9 },
    { x: "bytedance", y: 9 },
    { x: "University of Oxford", y: 8 },
    { x: "pytorch", y: 8 },
    { x: "Quansight", y: 8 },
    { x: "University of Cambridge", y: 8 },
    { x: "Preton University", y: 7 },
    { x: "University of Pennsylvania", y: 7 },
    { x: "Tongji University", y: 7 },
    { x: "EPFL", y: 7 },
    { x: "University of Edinburgh", y: 7 },
    { x: "Harvard University", y: 6 },
    { x: "AWS", y: 6 },
    { x: "University of California Berkeley", y: 6 },
    { x: "Cornell University", y: 6 },
    { x: "INRIA", y: 6 },
    { x: "facebookresearch", y: 6 },
    { x: "Columbia University", y: 6 },
    { x: "University of Maryland", y: 6 },
    { x: "New York University", y: 6 },
    { x: "freelancer", y: 6 }];
    const commit_info = [{ x: " Facebook", y: 38607 },
    { x: " Alibaba Inc", y: 354 },
    { x: " ONNX", y: 325 },
    { x: " Nvidia", y: 91 },
    { x: " Google", y: 79 },
    { x: " MadbitsAI", y: 72 },
    { x: " @deepmind", y: 58 },
    { x: " @NVIDIA", y: 49 },
    { x: " PROVISIO GmbH", y: 48 },
    { x: " DeepMind", y: 36 },
    { x: " Expedia Group", y: 35 },
    { x: " @twitter ", y: 28 },
    { x: " University College London", y: 24 },
    { x: " MIT", y: 16 },
    { x: " @asappinc", y: 11 },
    { x: " @facebook @caffe2 @pytorch", y: 11 },
    { x: " @pytorch", y: 7 },
    { x: " Anduril", y: 7 },
    { x: " MTS AI", y: 7 },
    { x: " International Institute of Information Technology", y: 5 },
    { x: " www.biomind.ai", y: 5 },
    { x: " Johns Hopkins University", y: 4 },
    { x: " UC Berkeley / BAIR", y: 4 },
    { x: " NEC", y: 3 },
    { x: " NYU", y: 3 },
    { x: " @SYSTRAN", y: 2 },
    { x: " Imperial College of London", y: 2 },
    { x: " Rust Foundation", y: 2 },
    { x: " Toyota Technological Institute at Chicago", y: 2 },
    { x: " University of California - Berkeley", y: 2 },
    { x: " University of Maryland", y: 2 },
    { x: " @deepomatic", y: 1 },
    { x: " @liftoffio", y: 1 },
    { x: " @rockset ", y: 1 },
    { x: " Anastasiy", y: 1 },
    { x: " California Institute of Technology", y: 1 },
    { x: " Cornell University - Cornell NYC Tech", y: 1 },
    { x: " McGill University", y: 1 },
    { x: " NAVER AI Lab", y: 1 },
    { x: " University of Nottingham", y: 1 }]

    let rand_colors = [];
    for (var i = 0; i < 50; i++) {
        rand_colors[i] = getRGB();
    }

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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card>
            <CardHeader title="Company" />
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Stargazers" {...a11yProps(0)} />
                        <Tab label="Issue creators" {...a11yProps(1)} />
                        <Tab label="Committers" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Box sx={{ mx: 3 }} dir="ltr">
                        <ReactApexChart
                            type="treemap"
                            series={[
                                {
                                    data: stargazer_info,
                                }
                            ]}
                            options={chartOptions}
                            height={1000}
                            width={1400}
                        />
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box sx={{ mx: 3 }} dir="ltr">
                        <ReactApexChart
                            type="treemap"
                            series={[
                                {
                                    data: issue_info,
                                }
                            ]}
                            options={chartOptions}
                            height={1000}
                            width={1400}
                        />
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Box sx={{ mx: 3 }} dir="ltr">
                        <ReactApexChart
                            type="treemap"
                            series={[
                                {
                                    data: commit_info,
                                }
                            ]}
                            options={chartOptions}
                            height={1000}
                            width={1400}
                        />
                    </Box>
                </TabPanel>
            </Box>
        </Card>
    );
};

export default Company;
