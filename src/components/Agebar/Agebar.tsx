import { ResponsivePie } from "@nivo/pie";
import Data from "./data.json";
import { animated } from 'react-spring';
import { useState, useEffect } from "react";

const data = Data;
export function MyResponsiveAgeBar({country}:{country:string}) {
  const [data,setData] = useState(Data["USA"])
  useEffect(()=>{
    if(country in Data){
    setData(Data[country as keyof typeof Data])
    }
  },[country])
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.2}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      colors={{ scheme: 'nivo' }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      arcLabelsSkipAngle={20}
      arcLabelsRadiusOffset={0.55}
      arcLinkLabelsOffset={2}
      arcLabelsComponent={({ datum, label, style }) => (
        <animated.g
          transform={style.transform}
          style={{
            pointerEvents: "none",
          }}
        >
          <circle fill={style.textColor} cy={6} r={15} />
          <circle fill="#ffffff" stroke={datum.color} strokeWidth={2} r={16} />
          <text
            textAnchor="middle"
            dominantBaseline="central"
            fill={style.textColor}
            style={{
              fontSize: 10,
              fontWeight: 800,
            }}
          >
            {label}
          </text>
        </animated.g>
      )}
    />
  );
}
