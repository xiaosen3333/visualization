import { ResponsiveLine } from "@nivo/line";
import jsonData from "./data.json";
import React, { useEffect, useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import type { DropdownProps, MenuProps, SelectProps } from "antd";
import { Button, Dropdown, Flex, Select, Space } from "antd";
interface DataPoint {
  x: number;
  y: number;
}

interface GlobalchooseProps {
  country: string;
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
  { label: "United States", value: "1" },
  { label: "Germany", value: "2" },
  { label: "France", value: "3" },
  { label: "United Kingdom", value: "4" },
  { label: "India", value: "5" },
  { label: "Canada", value: "6" },
  { label: "Poland", value: "7" },
  { label: "Brazil", value: "8" },
  { label: "Spain", value: "9" },
  { label: "Netherlands", value: "10" },
  { label: "Russia", value: "11" },
  { label: "Australia", value: "12" },
  { label: "Sweden", value: "13" },
  { label: "Italy", value: "14" },
  { label: "Ukraine", value: "15" },
  { label: "Czech Republic", value: "16" },
  { label: "Norway", value: "17" },
  { label: "China", value: "18" },
  { label: "Belgium", value: "19" },
  { label: "Mexico", value: "20" },
  { label: "null", value: "21" },
];
export function Globalchoose({ country }: GlobalchooseProps) {
  const [data, setData] = useState(Data[1]);
  const [currentcountry, setCurrentcountry] = useState("United States");
  const [data1, setData1] = useState<null | CountryData[]>([]);
  const [data2, setData2] = useState<null | CountryData[]>([]);
  useEffect(() => {
    const findValue = () => {
      const option = options?.find((option) => option.label === country);
      return option ? option.value : null;
    };
    const value = findValue();
    if (value) setData1(Data[value]);
    setCurrentcountry(country);
  }, [country]);
  const handleChange1 = (value: string) => {
    console.log(value);
    setCurrentcountry(value);
    if (value in Data) {
      console.log("!");
      setData1(Data[value]);
    } else {
      setData1(null);
    }
  };
  const handleChange2 = (value: string) => {
    if (value in Data) {
      setData2(Data[value]);
    } else {
      setData2(null);
    }
    console.log(data2);
  };
  useEffect(() => {
    if (data1 && data2) {
      if (data1 === data2) {
        setData([...data1]);
      } else {
        setData([...data1, ...data2]);
      }
    } else if (data1 === null && data2) {
      console.log("2");
      setData([...data2]);
    } else if (data2 === null && data1) {
      console.log("3");
      setData([...data1]);
    }
    console.log(data);
  }, [data1, data2]);
  return (
    <div
      style={{
        height: "80%",
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "5rem",
      }}
    >
      <div
        style={{
          marginTop: "1rem",
          height: "10%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Select
          value={currentcountry}
          style={{ width: 150, display: "flex" }}
          options={options}
          onSelect={handleChange1}
        />
        （与{" "}
        <Select
          defaultValue="null"
          style={{ width: 150, display: "flex" }}
          options={options}
          onSelect={handleChange2}
        />
        ） 未来五年前端从业者薪资预测(年收入/RMB)
      </div>
      <div style={{ height: "90%", width: "90%" }}>
        <ResponsiveLine
          data={data}
          lineWidth={3}
          margin={{ top: 20, right: 30, bottom: 50, left: 70 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          enableArea={true}
          areaOpacity={0.5}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "年份",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "年收入/RMB",
            legendOffset: -65,
            legendPosition: "middle",
          }}
          colors={{ scheme: "accent" }}
          pointSize={6}
          pointColor={{ theme: "background" }}
          pointBorderWidth={5}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
        />
      </div>
    </div>
  );
}
