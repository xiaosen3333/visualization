import { Bump, BumpComputedSerie, BumpSerie, ResponsiveBump } from "@nivo/bump";
import Data from "./data.json";
import { Fragment, useState,MouseEvent } from "react";
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';


var data: { id: string; data: { x: number; y: number | null; }[]; }[] = Data.awareness;



export function MyResponsiveBump({onHover,onClick}:{onHover:(serie: any, event: MouseEvent)=>void,onClick:(serie: any, event: MouseEvent)=>void}) {
  const [data1, setData1] = useState(data);
  const handleClick = (e:any) => {
    e.stopPropagation();
  }
  const onChange = (e: RadioChangeEvent) => {
    let newData: { id: string; data: { x: number; y: number | null; }[]; }[] = [];
    if(e.target.value === "a"){
      newData = Data.awareness;
    }
    else if(e.target.value === "b"){
      newData = Data.interest;
    }
    else if(e.target.value === "c"){
      newData = Data.satisfaction;
    }
    else if(e.target.value === "d"){
      newData = Data.usage;
    }
    setData1(newData);
  };

  return (
    <Fragment>
       <div style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-0.9rem',
        
      }} onClick={handleClick}>
      <Radio.Group onChange={onChange} defaultValue="a" style={{marginTop:"1rem"}}>
        <Radio.Button style={{backgroundColor: "white"}} value="a">认知度</Radio.Button>
        <Radio.Button style={{backgroundColor: 'white'}} value="b">关注度</Radio.Button>
        <Radio.Button style={{backgroundColor: 'white'}} value="c">满意度</Radio.Button>
        <Radio.Button style={{backgroundColor: 'white'}} value="d">使用度</Radio.Button>
      </Radio.Group>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" ,height:"100%",width:"100%"}}>
      <ResponsiveBump
        data={data1}
        colors={{ scheme: 'paired' }}
        lineWidth={7}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ from: 'serie.color', modifiers: []  }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        enableGridY={false}
        pointBorderColor={{ from: "serie.color" }}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -36,
        }}
        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: 14, // 调整字体大小的值
              },
            },
          },
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
        onMouseMove={onHover}
        onClick={onClick}
      />
     
      </div>
    </Fragment>
  )
   
}
      
