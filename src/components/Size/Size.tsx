import { ResponsivePie } from "@nivo/pie";
import Data from "./data.json";
import { useState, useEffect } from "react";

export function MyResponsiveSizePie({country}:{country:string}) {
  const [data, setData] = useState(Data["USA"]);
  useEffect(() => {
    if (country in Data) {
      setData(Data[country as keyof typeof Data]);
    }
  },[country])
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.8}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      enableArcLabels={false}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      colors={{ scheme: 'category10' }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsStraightLength={10}
      arcLinkLabelsDiagonalLength={10}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      arcLabelsSkipAngle={20}
      arcLabelsRadiusOffset={0.55}
      arcLinkLabelsOffset={2}
    />
  );
}
