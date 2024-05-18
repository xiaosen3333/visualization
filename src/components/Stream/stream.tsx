import { ResponsiveStream } from "@nivo/stream";
import rawData from "./data.json";
import { useEffect, useState } from "react";
import { Select, SelectProps } from "antd";

interface DataStructure {
  [key: string]: {
    data: {
      year: number;
      未来会使用: number;
      未来不会使用: number;
      感兴趣: number;
      不感兴趣: number;
      没听过: number;
    }[];
  };
}

const Data: DataStructure = rawData;
const options: SelectProps["options"] = [
  {
    label: "React",
    value: "1",
  },
  {
    label: "Vue.js",
    value: "2",
  },
  {
    label: "Angular",
    value: "3",
  },
  {
    label: "Preact",
    value: "4",
  },
  {
    label: "Ember",
    value: "5",
  },
  {
    label: "Svelte",
    value: "6",
  },
  {
    label: "Alpinejs",
    value: "7",
  },
  {
    label: "Litelement",
    value: "8",
  },
  {
    label: "Solid",
    value: "9",
  },
];
export function MyResponsiveStream({ frame }: { frame: string }) {
  const [key, setKey] = useState("react");
  const [label, setLabel] = useState("");
  const handleClick=(e:any) => {
    e.stopPropagation();
  }
  useEffect(() => {
    switch (key) {
      case "react":
        setLabel("React");
        break;
      case "vuejs":
        setLabel("Vue.js");
        break;
      case "angular":
        setLabel("Angular");
        break;
      case "preact":
        setLabel("Preact");
        break;
      case "ember":
        setLabel("Ember");
        break;
      case "svelte":
        setLabel("Svelte");
        break;
      case "alpinejs":
        setLabel("Alpinejs");
        break;
      case "litelement":
        setLabel("Litelement");
        break;
      case "solid":
        setLabel("Solid");
        break;
    }
  }, [key]);
  console.log(frame);
  useEffect(() => {
    if (frame&&frame!="qwik"&&frame!="stencil") {
      setKey(frame);
    }
  }, [frame]);
  const handleChange = (value: string) => {
    switch (value) {
      case "1":
        setKey("react");
        break;
      case "2":
        setKey("vuejs");
        break;
      case "3":
        setKey("angular");
        break;
      case "4":
        setKey("preact");
        break;
      case "5":
        setKey("ember");
        break;
      case "6":
        setKey("svelte");
        break;
      case "7":
        setKey("alpinejs");
        break;
      case "8":
        setKey("litelement");
        break;
      case "9":
        setKey("solid");
        break;
    }
  };
  return (
    <>
      {" "}
      <div
        style={{
          marginTop: "1rem",
          height: "10%",
          width: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div onClick={handleClick}>
          开发者对
          <Select
            value={label}
            style={{ width: 150 }}
            options={options}
            onSelect={handleChange}
          />
        </div>
        &nbsp; 框架的态度
      </div>
      <div style={{ width: "100%", height: "100%" }}>
        <ResponsiveStream
          data={Data[key].data}
          keys={["未来会使用", "未来不会使用", "感兴趣", "不感兴趣", "没听过"]}
          margin={{ top: 50, right: 110, bottom: 30, left: 60 }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: 36,
            format: (d) => {
              return Data[key].data[d] ? Data[key].data[d].year : "";
            },
          }}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          offsetType="expand"
          colors={{ scheme: "blues" }}
          fillOpacity={0.85}
          borderColor={{ theme: "background" }}
          dotSize={8}
          dotColor={{ from: "color" }}
          dotBorderWidth={2}
          dotBorderColor={{
            from: "color",
            modifiers: [["darker", 0.7]],
          }}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: "#999999",
              symbolSize: 12,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
