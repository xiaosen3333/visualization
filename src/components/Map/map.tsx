import {
  ChoroplethBoundFeature,
  ResponsiveChoropleth,
  ResponsiveChoroplethCanvas,
} from "@nivo/geo";
import Futures from "./world_countries.json";
import Data from "./data.json";
import exp from "constants";
import { useEffect, useState } from "react";
import { features } from "process";

const data = Data;
export function MyResponsiveChoropleth({choosecountry}:{choosecountry:(country:string)=>void}) {

  const onHover = (
    feature: ChoroplethBoundFeature,
    event: React.MouseEvent<any>
  ) => {

    if(feature && feature.label){
      choosecountry(feature.label);
    }
  };


  return (
    <ResponsiveChoroplethCanvas
      data={data}
      features={Futures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="blues"
      domain={[0, 5000]}
      unknownColor="white"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={150}
      projectionTranslation={[0.5, 0.65]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor="rgba(0, 0, 0, .2)"
      borderWidth={0.5}
      borderColor="#1d1c1c"
      onMouseMove={onHover}
      legends={[
        {
          anchor: "left",
          direction: "column",
          justify: true,
          translateX: 40,
          translateY: 110,
          itemsSpacing: 0,
          itemWidth: 92,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 18,
        },
      ]}
    />
  );
}
