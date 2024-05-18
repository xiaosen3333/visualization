import { ResponsiveBar } from "@nivo/bar";
import Data from "./data.json";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const data = Data;

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export function MyResponsiveBar({ frame,onclose }: { frame: string,onclose:()=>void }) {
  const [data, setData] = useState(Data.react);
  useEffect(()=>{
    setData(Data[frame as keyof typeof Data])
  },[frame])
  return (
    <div
      style={{
        padding: "5rem",
        width: "90%",
        height: "120%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "110%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{margin:'auto'}}>{frame}框架的忠诚度</div>
        <Button
          icon={<CloseOutlined />}
          style={{  marginRight: "2rem" }}
          onClick={onclose}
        ></Button>
      </div>

      <div
        style={{
          height: "20vh",
          width: "100%",
        }}
      >
        <ResponsiveBar
          data={data}
          keys={["would_use", "would_not_use", "interested", "not_interested"]}
          indexBy="id"
          enableLabel={false}
          margin={{ top: 20, right: 130, bottom: 25, left: 80 }}
          padding={0.3}
          layout="horizontal"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "set3" }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: "middle",
            legendOffset: 32,
            truncateTickAt: 0,
            format: (d) => `${d}%`,
            tickValues: [
              -70, -60, -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60,
            ],
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: "middle",
            legendOffset: -40,
            truncateTickAt: 0,
          }}
          enableGridX={true}
          enableGridY={false}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          tooltip={(e) => {
            let additionalInfo;
            switch (e.id) {
              case "would_use":
                additionalInfo = "已使用，效果良好：";
                break;
              case "would_not_use":
                additionalInfo = "曾尝试，不再考虑：";
                break;
              case "interested":
                additionalInfo = "听说过，想尝试：";
                break;
              case "not_interested":
                additionalInfo = "了解过，暂无兴趣：";
                break;
              default:
                additionalInfo = "";
            }
            let value = e.value;
            if (e.value < 0) {
              value = -e.value;
            }
            return (
              <div
                style={{
                  background: "white",
                  padding: "10px",
                  border: "1px solid #ccc",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    height: "10px",
                    width: "10px",
                    backgroundColor: e.color,
                  }}
                />
                <div>&nbsp;{e.indexValue}&nbsp;-&nbsp;</div>
                <div>{additionalInfo}</div>
                <div>{value}%</div>
              </div>
            );
          }}
        />
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <ResponsiveBar
          data={Data.serie}
          keys={["would_use", "would_not_use", "interested", "not_interested"]}
          indexBy="id"
          enableLabel={false}
          margin={{ top: 20, right: 130, bottom: 25, left: 80 }}
          padding={0.3}
          layout="horizontal"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "set3" }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: "middle",
            legendOffset: 32,
            truncateTickAt: 0,
            format: (d) => `${d}%`,
            tickValues: [
              -70, -60, -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60,
            ],
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: "middle",
            legendOffset: -40,
            truncateTickAt: 0,
          }}
          enableGridX={true}
          enableGridY={false}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          tooltip={(e) => {
            let additionalInfo;
            switch (e.id) {
              case "would_use":
                additionalInfo = "已使用，效果良好：";
                break;
              case "would_not_use":
                additionalInfo = "曾尝试，不再考虑：";
                break;
              case "interested":
                additionalInfo = "听说过，想尝试：";
                break;
              case "not_interested":
                additionalInfo = "了解过，暂无兴趣：";
                break;
              default:
                additionalInfo = "";
            }
            let value = e.value;
            if (e.value < 0) {
              value = -e.value;
            }
            return (
              <div
                style={{
                  background: "white",
                  padding: "10px",
                  border: "1px solid #ccc",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    height: "10px",
                    width: "10px",
                    backgroundColor: e.color,
                  }}
                />
                <div>&nbsp;{e.indexValue}&nbsp;-&nbsp;</div>
                <div>{additionalInfo}</div>
                <div>{value}%</div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
