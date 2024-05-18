import { useState } from "react";
import { MyResponsiveBar } from "../../components/Bar/bar";
import { MyResponsivePie } from "../../components/Pie/pie";
import { MyResponsiveBump } from "../../components/Ranklist/linechart";
import { MyResponsiveStream } from "../../components/Stream/stream";
import "./Frame.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
export function Frame() {
  const [frame, setFrame] = useState("");
  const [conclusions, setConclosions] = useState<boolean[]>([]);
  const [newwindow, setNewwindow] = useState(false);
  const onHover = (serie: any, event: any) => {
    console.log(serie, event);
    setFrame(serie.id);
  };
  function toggleConclusion(index: number) {
    const newConclusions = [...conclusions];
    newConclusions[index] = !newConclusions[index];
    setConclosions(newConclusions);
  }
  function onclickmap(serie: any, event: any) {
    event.stopPropagation();
    console.log(serie);
    setFrame(serie.id);
    setNewwindow(true);
  }
  function onclose() {
    setNewwindow(false);
  }
  return (
    <div
    className="frameback"
      style={{
        backgroundSize: "100% 100%",
        minWidth: "100vw",
        minHeight: "99vh",


      }}
    >
      <Button
        href="/"
        type="link"
        style={{ position: "fixed" }}
        icon={
          <ArrowLeftOutlined style={{ fontSize: "1.5rem", color: "black" }} />
        }
      >
        {" "}
      </Button>
      <div className="framepage">
        <div
          className="container second-container"
          style={{
            opacity: newwindow ? 0.5 : 1,
            backgroundColor: newwindow ? "rgba(0, 0, 0, 0.5)" : "rgba(0,0,0,0)",
          }}
        >
          <div className="chart ninth-chart">
            <div className="chart-content">
              <h3>『前端框架热度排行』</h3>
              <div
                className="real-chart"
                style={{ height: "84vh" }}
                onClick={() => toggleConclusion(0)}
              >
                {conclusions[0] ? (
                  <div
                    className="frameconclusion"
                    style={{
                      padding: "5rem",
                    }}
                  >
                    {" "}
                    <p>
                      <strong>使用情况（Usage）：</strong>React
                      的使用情况保持稳定。Vue.js 和 Angular
                      的使用情况相对稳定，虽然 Vue.js 在2017年有所下降。Preact
                      和 Ember 从未记录数据的年份开始，逐渐增加。Svelte,
                      Alpine.js, LitElement, Solid, Qwik, 和 Stencil
                      在某些年份没有数据，但在数据出现的年份中，它们的使用情况显示上升趋势。
                    </p>
                    <p>
                      <strong>认知度（Awareness）：</strong>React、Vue.js 和
                      Angular 的认知度相对稳定。其他框架如 Preact, Ember,
                      Svelte, 等在数据出现的年份中认知度逐年增加。
                    </p>
                    <p>
                      <strong>兴趣度（Interest）：</strong>React, Vue.js, 和
                      Angular 显示出逐年增加的兴趣度。Ember 和 Preact
                      的兴趣度也有显著增长。Svelte, Alpine.js, LitElement,
                      等框架在数据显示的年份中兴趣度逐渐增加。
                    </p>
                    <p>
                      <strong>满意度（Satisfaction）：</strong>React, Vue.js, 和
                      Angular 的满意度逐年增加。Preact 和 Ember
                      的满意度也呈现增长趋势。对于其他框架，如 Svelte,
                      Alpine.js, 等，它们的满意度在数据出现的年份中也呈现增长。
                    </p>
                    <p>
                      综上所述，数据显示 React, Vue.js, 和 Angular
                      在使用、认知度、兴趣度和满意度方面相对稳定且逐年增长。其他一些较新的框架，如
                      Preact, Ember, Svelte,
                      等，虽然起步较晚，但在这些方面也显示出增长趋势。
                    </p>
                  </div>
                ) : (
                  <MyResponsiveBump onHover={onHover} onClick={onclickmap} />
                )}
              </div>
            </div>
          </div>
          <div className="container third-container">
            <div className="chart tenth-chart">
              <div className="chart-content">
                <div
                  className="real-chart"
                  style={{ width: "100%" }}
                  onClick={() => toggleConclusion(1)}
                >
                  {conclusions[1] ? (
                    <div className="frameconclusion">
                      <p>
                        <strong>React：</strong>
                        从2016年到2022年，表示“未来会使用”React的比例呈现上升趋势，最高达到71.7%，但在2021年后略有下降。对React“感兴趣”的比例逐年下降，从2016年的35.3%降至2022年的8.6%。知晓度极高，几乎没有“没听过”的情况。
                      </p>

                      <p>
                        <strong>Vue.js：</strong>
                        从2016年到2022年，“未来会使用”Vue.js的比例先上升后下降，2020年达到峰值41.8%。对Vue.js“感兴趣”的比例在2017年达到最高，之后逐渐下降。初期（2016年）有较高比例的人“没听过”，但随着时间推移，这一比例大幅下降。
                      </p>

                      <p>
                        <strong>Angular：</strong>
                        Angular的“未来会使用”比例在2016年至2021年缓慢上升，但在2022年有所下降。Angular的“不感兴趣”比例较高，且随着时间增加。对Angular“感兴趣”的比例逐年下降，表明可能逐渐失去市场吸引力。
                      </p>

                      <p>
                        <strong>Preact：</strong>
                        Preact的“未来会使用”比例相对较低，且在2021年后略有下降。大部分时间内，对Preact的兴趣度低于不感兴趣度。初期有相对较多的人“没听过”Preact，但这一比例随时间降低。
                      </p>

                      <p>
                        <strong>Ember：</strong>
                        Ember的“未来会使用”比例极低，且呈现持续下降趋势。对Ember“不感兴趣”的比例极高，且逐年增加。Ember的知名度相对较低，有一定比例的人“没听过”。
                      </p>

                      <p>
                        <strong>Svelte：</strong>
                        Svelte的“未来会使用”比例逐年上升，显示出一定的增长趋势。对Svelte“感兴趣”的比例较高，且保持稳定增长。Svelte的知晓度在提高，减少了“没听过”的比例。
                      </p>

                      <p>
                        <strong>Alpine.js：</strong>
                        Alpine.js的“未来会使用”比例虽然低，但逐年略有增长。Alpine.js的知名度较低，大多数人“没听过”。对Alpine.js“感兴趣”的比例逐年略有增长。
                      </p>

                      <p>
                        <strong>LitElement：</strong>
                        LitElement的“未来会使用”比例较低，且变化不大。LitElement的知名度相对较低，有较高比例的人“没听过”。对LitElement“感兴趣”的比例逐年略有增长。
                      </p>

                      <p>
                        <strong>Solid：</strong>
                        Solid在2021年和2022年的数据显示“未来会使用”的比例有显著增长。Solid的知晓度在提高，减少了“没听过”的比例。对Solid“感兴趣”的比例在2022年大幅增长。
                      </p>
                    </div>
                  ) : (
                    <MyResponsiveStream frame={frame} />
                  )}
                </div>
              </div>
            </div>
            <div className="chart seventh-chart">
              <div className="chart-content">
                <h3>『使用框架的心情』</h3>
                <div className="real-chart" onClick={() => toggleConclusion(2)}>
                  {conclusions[2] ? (
                    <div className="frameconclusion">
                      <p>
                        <strong>大多数开发者感到满意：</strong>
                        数据显示，有17883人表示“开心”和6164人表示“很开心”。这意味着大多数开发者对当前的前端框架感到满意。
                      </p>
                      <p>
                        <strong>中性态度也相当普遍：</strong>
                        有6965名开发者选择了“中立”，表明这部分人对前端框架持中性态度，可能表示他们既不特别满意也不特别不满意。
                      </p>
                      <p>
                        <strong>不满意的开发者较少：</strong>
                        “不开心”和“很不开心”的开发者相对较少，分别为1240人和678人。这表明相对于满意的开发者，不满意的开发者占比较小。
                      </p>
                      <p>
                        <strong>总体正面评价占主导：</strong>
                        将“开心”和“很开心”的开发者数量相加，我们可以看到绝大多数的开发者对前端框架持正面评价。
                      </p>
                      <p>
                        <strong>存在改进空间：</strong>
                        尽管大多数开发者感到满意，但仍有一部分表示不开心或很不开心，这提示前端框架开发者和社区存在改进和优化的空间。
                      </p>
                    </div>
                  ) : (
                    <MyResponsivePie />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {newwindow ? (
          <div className="chart eighth-chart">
            <div className="chart-content">
              <div
                className="real-chart"
                style={{ position: "relative", top: "4rem" }}
              >
                <MyResponsiveBar frame={frame} onclose={onclose} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
