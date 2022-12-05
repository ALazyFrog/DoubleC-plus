import { useEffect, useRef } from "react";
import * as echarts from "echarts";

function LineBarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = echarts.init(chartRef.current);

const option = {
    backgroundColor: 'white',
    "title": {
        
        "subtext": "Comparation",
        x: "2%",

        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#212121',
            fontSize: '25',

        },
    },
    tooltip: { //提示框组件
        trigger: 'axis',
        formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: '#6a7985'
            }
        },
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '10%',
        top: '30%',
        //	padding:'0 0 10 0',
        containLabel: true,
    },
    legend: { //图例组件，颜色和名字
        right: '10%',
        top: '20%',
        itemGap: 16,
        itemWidth: 18,
        itemHeight: 10,
        data: [{
                name: 'tensorflow',
            },
            {
                name: 'pytorch',
            }
        ],
        textStyle: {
            color: '#a8aab0',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    xAxis: [{
        type: 'category',
        data: [ 'Star', 'Committer', 'Issue'],
        axisLabel: { //坐标轴刻度标签的相关设置。
            textStyle: {
                color: 'black',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 16,
            },
            rotate: 0, // 文字倾斜显示
        },
        axisTick: { //坐标轴刻度相关设置。
            show: false,
        },
        axisLine: { //坐标轴轴线相关设置
            lineStyle: {
                color: '#97a5b2',
                opacity: 1
            }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: false,
        }
    }],
    yAxis: [{
            type: 'value',
            splitNumber: 5,
            max: 2000,//最大值
            min: 0,
            axisLabel: {
                textStyle: {
                    color: '#2cb1bc',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 16,
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['red'],
                    opacity: 0.06
                }
            }
        },
        {
            type: 'value',
            splitNumber: 4,
            min: 0,
            max: 2000,
            axisLabel: {
                textStyle: {
                    color: '#2e93fa',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 16,
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#fff'],
                    opacity: 0.06
                }
            }
        }
    ],
    series: [{
            name: 'tensorflow',
            type: 'bar',
            data: [260, 210, 210, 180, 550, 30, 22],
            barWidth: 12,
            barGap: 0.4, //柱间距离
            label: { //图形上的文本标签
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#2cb1bc',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 14,
                    },
                },
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#2cb1bc'
                    }, {
                        offset: 1,
                        color: '#2cb1bc'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
        },
        {
            name: 'pytorch',
            type: 'bar',
            data: [1100, 900, 900, 800, 35, 55, 62, 78, 65, 55, 60, 45, 42, 15, 12, 5],
            barWidth: 12,
            label: { //图形上的文本标签
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#2e93fa',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 14,
                    },
                },
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#2e93fa'
                    }, {
                        offset: 1,
                        color: '#2e93fa'
                    }]),

                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
        }
    ]
};
    chartInstance.setOption(option);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>     
      <div ref={chartRef} style={{ height: "400px" }}></div>
    </div>
  );
}

export default LineBarChart;