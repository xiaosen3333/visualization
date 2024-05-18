import { ResponsiveLine } from "@nivo/line";
import jsonData from "./data.json";
import React, { useState } from "react";

import type { SelectProps } from "antd";
import { Select } from "antd";
interface DataPoint {
    x: number;
    y: number;
  }
  
  interface CountryData {
    id: string;
    data: DataPoint[];
  }
  
  interface DataStructure {
    [key: string]: CountryData[];
  }
  const Data = jsonData as DataStructure;
const options: SelectProps["options"] = [
  {
    label: "Netherlands",
    value: "1",
  },
  {
    label: "Germany",
    value: "2",
  },
  {
    label: "South Africa",
    value: "3",
  },
  {
    label: "Philippines",
    value: "4",
  },
  {
    label: "Mexico",
    value: "5",
  },
  {
    label: "Canada",
    value: "6",
  },
  {
    label: "China",
    value: "7",
  },
  {
    label: "UK",
    value: "8",
  },
  {
    label: "USA",
    value: "9",
  },
  {
    label: "Australia",
    value: "10",
  },
];
export function Globalchoose() {
  const [data, setData] = useState(Data[1]);
  const handleChange = (value: string) => {
    if (value in Data) {
      setData(Data[value]);
      console.log(`selected ${value}`);
    } else {
      console.error(`Key "${value}" does not exist in Data`);
    }
  };
  
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "10%",
          width: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Select
            defaultValue="Netherlands"
            style={{ width: 150 }}
            options={options}
            onSelect={handleChange}
          />
        </div>
        &nbsp; 未来五年前端从业者薪资预测(年收入/RMB)
      </div>
      <div style={{ height: "90%", width: "90%" }}>
      
      </div>
    </div>
  );
}
