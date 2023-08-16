import "../css/templete1.css";
import BarcodeItemScreen from "./Barcode";
import { useEffect, useState } from "react";
import { titleMaker } from "./TitleMaker.jsx";
export default function Templete1({ url, features, scrap_data }) {
  let data = scrap_data;
  const [title, setTitle] = useState("");
  useEffect(() => {
    let result = titleMaker(features);
    setTitle(result);
  }, []);
  console.log(title);
  return (
    <div class="templete1">
      <img
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        src={url}
      />
      <div class="header">
        <h1 class="title">{title}</h1>
      </div>
      <div class="left">
        <p id="t1_content1">
          {data.movie}
          {/* 프레시지, 다이어트 <br />
          도시락 3종 쿠팡 선런칭 */}
        </p>
        <p id="t1_content2">{data.music}</p>
        <p id="t1_content3">{data.news[0]}</p>
      </div>
      <div class="right">
        <p id="t1_content4">{data.news[1]}</p>
        <p id="t1_content5">{data.news[2]}</p>
        <p id="t1_content6">{data.news[3]}</p>
        <p id="t1_content7">{data.news[4]}</p>
        <p id="t1_content8">{data.news[5]}</p>
      </div>
      <BarcodeItemScreen />
    </div>
  );
}
