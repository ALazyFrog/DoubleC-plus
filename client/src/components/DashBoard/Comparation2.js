import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import {DataTable} from "../DashBoard"


function Comparation2() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = echarts.init(chartRef.current);

    var xAxisData = ['Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022', 'Sep 2022', 'Oct 2022','Nov 2022','Dec 2022'];
    var legendData= ['Tensorflow','Pytorch         '];
var title = "";
var serieData = [];
var metaDate = [  
    [123511,124676,126211,127255,128692,129721,130802,132853,134488,136173,137833,138402],
    [163978,168993,175563,183088,190463,198594,206294,215014,222061,230862,238027,241821],
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
var colors = ["#e65100","#4A95FF","#5EBEFC","#2EF7F3","#FFFFFF"];
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

export default Comparation2;