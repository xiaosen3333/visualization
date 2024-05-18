import React, { useState } from "react";
import "./welcome.css";
interface WelcomeProps {
  handleClick:() => void
}
export function WelcomeSection({handleClick}:WelcomeProps) {
  const [info, setInfo] = useState("探索前端的无限可能");
  const [subInfo, setSubInfo] = useState("点击了解行业最新趋势");

  const handleMouseEnter = () => {
    setInfo("开始你的技术之旅");
    setSubInfo("探索框架们的故事");
  };

  const handleMouseLeave = () => {
    setInfo("探索前端的无限可能");
    setSubInfo("点击了解行业最新趋势");
  };


  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <h1>{info}</h1>
        <p>{subInfo}</p>
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
          探索更多
        </button>
      </div>
    </section>
  );
}
