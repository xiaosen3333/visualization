import { useState } from "react";
import { MyResponsiveAgeBar } from "../../components/Agebar/Agebar";
import { Globalchoose } from "../../components/Globalchoose/Globalchoose";
import { MyResponsiveChoropleth } from "../../components/Map/map";
import { MyResponsiveSizePie } from "../../components/Size/Size";
import { MyResponsivePieTalent } from "../../components/Talent/Talent";
import { MyResponsiveWageBar } from "../../components/Wage/Wage";
import "./Industry.css";

import { ArrowLeftOutlined } from "@ant-design/icons";

import { Button } from "antd";
export function Industry() {
  const [country, setCountry] = useState("");
  const [conclusions, setConclosions] = useState<boolean[]>([]);
  function toggleConclusion(index: number) {
    const newConclusions = [...conclusions];
    newConclusions[index] = !newConclusions[index];
    setConclosions(newConclusions);
  }
  function onHovermap(
    country:string
  ) {
      setCountry(country);
      console.log(country)
  }
  return (
    <div
    className="industryback"
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
      <div className="page first">
        <div
          className="industrycontainer"
        >
          <div className="industrybox">
            <div className="chart second-chart">
              <div className="chart-content">
                <h3>『开发者年龄分布图』</h3>
                <div className="real-chart" onClick={() => toggleConclusion(1)}>
                  {conclusions[1] ? (
                    <div className="industryconclusion">
                      <p>
                        <strong>主要年龄群体：</strong>
                        前端开发者主要集中在25至34岁之间，这一群体的人数最多，共有14404人，占总体的最大比例。这表明前端开发行业吸引了大量的年轻专业人士，这可能是由于前端技术的快速发展和对新技术的需求驱动。
                      </p>

                      <p>
                        <strong>青少年和青年开发者：</strong>
                        10至24岁的年轻开发者也占据了相当大的比例，尤其是18至24岁的群体，有5864人。这反映出前端开发领域对年轻人具有较强的吸引力，可能是由于前端开发相对易于入门和对创新技术的兴趣。
                      </p>

                      <p>
                        <strong>成熟开发者：</strong>
                        35至44岁的开发者数量也较多，共有6502人。这表明有相当一部分经验丰富的专业人士在前端行业中工作，他们可能拥有更深层次的技术知识和行业经验。
                      </p>

                      <p>
                        <strong>高龄开发者：</strong>
                        45岁以上的开发者数量逐渐减少，特别是65岁以上的开发者只有45人。这可能是因为更高年龄的专业人士更少参与到快速变化的前端技术领域，或者转向了管理、咨询等角色。
                      </p>
                    </div>
                  ) : (
                    <MyResponsiveAgeBar country={country}/>
                  )}
                </div>
              </div>
            </div>

            <div className="chart third-chart">
              <div className="chart-content">
                <h3>『有没有受过高等教育』</h3>
                <div
                  className="real-chart"
                  style={{
                    left: "0",
                  }}
                  onClick={() => toggleConclusion(3)}
                >
                  {conclusions[3] ? (
                    <div className="industryconclusion">
                      <p>
                        <strong>教育背景多样性：</strong>
                        前端开发领域吸引了不同教育背景的人才。数据显示，大约有21%的前端开发者没有接受过高等教育，这表明前端开发领域对于非传统教育背景的人士具有一定的吸引力和开放性。
                      </p>
                      <p>
                        <strong>科班出身占主导：</strong>
                        超过一半的前端开发者（大约40.2%）拥有相关领域的高等教育背景，这意味着传统的计算机科学或相关学科教育仍然是进入该行业的主流途径。
                      </p>
                      <p>
                        <strong>学习途径多元化：</strong>
                        另外约14.3%的前端开发者虽然接受过高等教育，但他们的专业背景并非计算机科学或相关专业。这反映了前端开发领域对跨学科人才的包容性，以及自学或转行成为前端开发者的可行性。
                      </p>
                    </div>
                  ) : (
                    <MyResponsivePieTalent country={country}/>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="industrybox2">
            <div className="chart first-chart">
              <div className="chart-content">
                <h3>『全球前端开发者分布』</h3>
                <div
                  className="real-chart"
                  style={{
                    height: "100%",
                  }}
                  onClick={() => toggleConclusion(0)}
                >
                  {conclusions[0] ? (
                    <div
                      className="industryconclusion"
                      style={{ padding: "2rem" }}
                    >
                      <p>
                        <strong>美国是全球前端开发者的主要聚集地：</strong>
                        美国拥有4666名前端开发者，是调查中报告的最大数量，显示了美国在全球前端开发领域的领导地位。
                      </p>
                      <p>
                        <strong>欧洲国家也有显著的前端开发者群体：</strong>
                        德国、法国、英国、波兰、荷兰、瑞典、意大利、比利时等国家均有超过几百名前端开发者，表明欧洲在前端开发方面也有很强的活跃度。
                      </p>
                      <p>
                        <strong>印度是亚洲前端开发者的主要代表：</strong>
                        印度有1255名前端开发者，是亚洲国家中数量最多的，这反映了印度在技术和软件开发领域的快速增长。
                      </p>
                      <p>
                        <strong>加拿大和澳大利亚的前端开发者社区活跃：</strong>
                        这两个国家的前端开发者数量接近1000，显示出它们在技术领域的重要性。
                      </p>
                      <p>
                        <strong>巴西代表了拉丁美洲的前端开发力量：</strong>
                        作为拉丁美洲最多的前端开发者国家，巴西有752名开发者，显示出拉美地区在这个领域的增长。
                      </p>
                      <p>
                        <strong>俄罗斯的前端开发者数量较少：</strong>
                        尽管这个国家在全球有重要的经济和技术影响力，但在前端开发者的数量上不如其他国家显著。
                      </p>
                    </div>
                  ) : (
                    <MyResponsiveChoropleth choosecountry={onHovermap} />
                  )}
                </div>
              </div>
            </div>
            <div className="sixth-chart">
                <div className="real-chart">
                  <Globalchoose country={country} />
                </div>
              </div>
          </div>
          <div className="industrybox">
            <div className="chart fifth-chart">
              <div className="chart-content">
                <h3>『所在公司规模』</h3>
                <div className="real-chart" onClick={() => toggleConclusion(2)}>
                  {conclusions[2] ? (
                    <div className="industryconclusion">
                      <p>
                        <strong>大型公司吸引力较高：</strong>
                        数据显示大型公司（100-1000个雇员）和超大型公司（1000个雇员以上）的前端从业者人数最多，分别为6560和6020。这表明大型公司对前端从业者有较高的吸引力，可能由于这些公司提供更好的发展机会、更高的薪酬和更丰富的项目经验。
                      </p>

                      <p>
                        <strong>独立开发者的重要性：</strong>
                        单人公司也有相对较高的前端从业者数（3529），显示了独立开发者或自由职业者在前端领域的重要性。这可能反映了前端开发的灵活性和远程工作的可行性。
                      </p>

                      <p>
                        <strong>中小企业中的稳定分布：</strong>
                        中小型公司（10-50个雇员）的前端从业者数量相对平均，介于1852至3467之间。这说明中小企业也是前端从业者的重要就业领域，可能因为这些公司提供更多的机会参与决策过程和更紧密的团队合作。
                      </p>

                      <p>
                        <strong>规模与就业机会的关系：</strong>
                        总体上，公司规模与前端从业者的数量呈现正相关。较大的公司往往有更多的就业机会，而小型公司虽然数量众多，但各自吸纳的前端从业者数量有限。
                      </p>
                    </div>
                  ) : (
                    <MyResponsiveSizePie country={country}/>
                  )}
                </div>
              </div>
            </div>
            <div className="chart fourth-chart">
              <div className="chart-content">
                <h3>『薪资水平(年收入)』</h3>
                <div className="real-chart" onClick={() => toggleConclusion(4)}>
                  {conclusions[4] ? (
                    <div className="indusrtconclusion">
                      <p>
                        <strong>较高收入者的比例：</strong>
                        相对较高的收入群体（年收入在50k-200k美元之间）占据了相当大的比例，其中50k-100k美元的群体占比最高，达到20.6%。
                      </p>
                      <p>
                        <strong>中低收入群体：</strong>
                        中低收入群体（年收入在0-50k美元之间）也占据了相当的比例，其中30k-50k美元的群体占比12.5%，0-10k美元和10k-30k美元的群体分别占比6.5%和10.3%。
                      </p>
                      <p>
                        <strong>没有收入的开发者：</strong>
                        有一部分前端开发者（6.4%）报告称他们没有收入。这可能包括学生、初学者或那些目前不在工作的人。
                      </p>
                      <p>
                        <strong>高收入者占少数：</strong>
                        年收入超过200k美元的高收入者只占3%，显示这一收入水平较为罕见。
                      </p>
                    </div>
                  ) : (
                    <MyResponsiveWageBar country={country}/>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
