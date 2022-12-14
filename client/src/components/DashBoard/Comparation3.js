import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import {DataTable} from "../DashBoard"


function Comparation3() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = echarts.init(chartRef.current);

    var xAxisData = ['Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022', 'Sep 2022', 'Oct 2022','Nov 2022','Dec 2022'];
    var legendData= ['Tensorflow Opened','Tensorflow Closed','Pytorch Opened','Pytorch Closed'];
var title = "";
var serieData = [];
var metaDate = [
    [32901,33096,33311,33497,33707,33892,34085,34333,34538,34737,34920,34990],
    [31920,32164,32428,32671,32932,33214,33386,33633,33854,34098,34320,34396],
    [22797,23243,23667,24103,24700,25184,25694,26280,26711,27384,27797,27999],
    [16494,16827,17134,17379,17668,18996,18279,18659,18900,19398,19694,19874],
    
]
for(var v=0; v < legendData.length ; v++){
    var serie = {
        name:legendData[v],
        type: 'line',
        symbol:"circle",
        symbolSize:10,
        data: metaDate[v]
    };
    serieData.push(serie)
}
var colors = ["#ff0000","#ef8170","#4A95FF","#2EF7F3","#FFFFFF"];
var option = {
    backgroundColor: '#ffffff',
    title : {text: title,textAlign:'left',textStyle:{color:"#212121",fontSize:"16",fontWeight:"normal"}},
    legend: {
    	show:true,left:"right",data:legendData,y:"5%",
        itemWidth:18,itemHeight:12,textStyle:{color:"#212121",fontSize:14},
    },
    color:colors,
    grid: {left: '2%',top:"12%",bottom: "5%",right:"5%",containLabel: true},
    tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
    xAxis: [
        {   
            type: 'category',
            axisLine: { show: true,lineStyle:{ color:'#6173R3' }},
            axisLabel:{interval:0,textStyle:{color:'#9ea7c4',fontSize:14} },
            axisTick : {show: false},
            data:xAxisData,
        },
    ],
    yAxis: [
        {   
            axisTick : {show: false},
            splitLine: {show:false},
            axisLabel:{textStyle:{color:'#9ea7c4',fontSize:14} },
            axisLine: { show: true,lineStyle:{ color:'#6173A3'}},
        },
    ],
    series:serieData
};
    chartInstance.setOption(option);
  }, []);

  return (
    <div style={{ textAlign: "center" }}> 
      <div><DataTable/></div> 
      
      <div ref={chartRef} style={{ height: "400px" }}></div>
         
    </div>
  );
}

export default Comparation3;