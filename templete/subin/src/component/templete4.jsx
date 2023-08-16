import "../css/templete4.css";
import BarcodeItemScreen from "./Barcode";
import { useEffect, useState } from "react";
import { titleMaker } from "./TitleMaker.jsx";

const textPixelChanger = str => {
  let strLen = str.length;
  switch (true) {
    case 1 <= strLen && strLen < 10:
      return "28px";
    case 10 <= strLen && strLen < 25:
      return "20px";
    case 25 <= strLen && strLen < 40:
      return "16px";
    default:
      return "20px";
  }
};

export default function Templete4({ url, features, scrap_data }) {
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
        <div class="templete4">
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
            <h1 class="title4">{title}</h1>
          </div>
          <div class="sec1">
            <p
              id="t4_content1"
              style={{
                fontSize: textPixelChanger(
                  "프레시지, 다이어트 도시락 3종 쿠팡 선런칭"
                ),
              }}
            >
              {data.movie}
            </p>
            <p id="t4_content2">{data.music}</p>
            <p id="t4_content3">{data.news[0]}</p>
          </div>
          <div class="sec2">
            <p id="t4_content4">{data.news[1]}</p>
            <p id="t4_content5">{data.news[2]}</p>
            <p id="t4_content6">{data.news[3]}</p>
          </div>
          <div class="sec3">
            <p id="t4_content7">{data.news[4]}</p>
            <p id="t4_content8">{data.news[5]}</p>
          </div>
          <BarcodeItemScreen />
        </div>
      </body>
    </html>
  );
}
