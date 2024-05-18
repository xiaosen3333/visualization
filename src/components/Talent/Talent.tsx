import { ResponsiveBar } from "@nivo/bar";
import Data from './data.json';
import { useState, useEffect } from "react";

export function MyResponsivePieTalent({country}:{country:string}) {
    const [data,setData] = useState(Data["USA"])
    useEffect(()=>{
        if(country in Data){
        setData(Data[country as keyof typeof Data])
        }
    },[country])
  return (
    <ResponsiveBar
      data={data}
      keys={[
        'count'
    ]}
    indexBy="id"
    enableLabel={true}
    margin={{ top: 50, right: 0, bottom: 50, left: 60 }}
    padding={0.3}
    layout="vertical"
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'pastel1' }}
    axisTop={null}
    axisRight={null}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: 32,
        truncateTickAt: 0,
        format: d => `${d}`,
        // tickValues:  [0, 10, 20, 30, 40, 50, 60],
    }}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: -40,
        truncateTickAt: 0
    }}
    enableGridX={true}
    enableGridY={true}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                1.6
            ]
        ]
    }}
    tooltip={(e) => {
        let additionalInfo;
        switch (e.id) {
            case 'would_use':
                additionalInfo = "已使用，效果良好：";
                break;
            case 'would_not_use':
                additionalInfo = "曾尝试，不再考虑：";
                break;
            case 'interested':
                additionalInfo = "听说过，想尝试：";
                break;
            case 'not_interested':
                additionalInfo = "了解过，暂无兴趣：";
                break;
            default:
                additionalInfo = "";
        }
        let value = e.value;
        if (e.value < 0) {
            value = -e.value;
        }
        return(
        <div style={{ background: 'white', padding: '10px', border: '1px solid #ccc', display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>  
            <div style={{ height: '10px', width: '10px', backgroundColor: e.color }} />
            <div>&nbsp;{e.indexValue}&nbsp;-&nbsp;</div>
            <div>{additionalInfo}</div>
            <div>{(value/297.26).toFixed(2)}%</div>
        </div>
    )}}
    />
  );
}
