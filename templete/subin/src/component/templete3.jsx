import "../css/templete3.css";
import BarcodeItemScreen from "./Barcode";
import { useEffect, useState } from "react";
import { titleMaker } from "./TitleMaker.jsx";

export default function Templete3({ url, features, scrap_data }) {
  let data = scrap_data;

  const [title, setTitle] = useState("");
  useEffect(() => {
    let result = titleMaker(features);
    setTitle(result);
  }, []);
  console.log(title);
  return (
    <html>
      <body>
        <div class="templete3">
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
            <h1 class="title3">{title}</h1>
            <p id="num">제 1호</p>
          </div>
          <div class="left3">
            <p id="t3_content1">{data.music}</p>
            <p id="t3_content2">{data.movie}</p>
            <p id="t3_content3">{data.news[0]}</p>
            <p id="t3_content4">{data.news[1]}</p>
            <p id="t3_content5">{data.news[2]}</p>
          </div>
          <div class="right3">
            <p id="t3_content6">{data.news[3]}</p>
            <p id="t3_content7">{data.news[4]}</p>
            <p id="t3_content8">{data.news[5]}</p>
          </div>
          <BarcodeItemScreen />
        </div>
      </body>
    </html>
  );
}
