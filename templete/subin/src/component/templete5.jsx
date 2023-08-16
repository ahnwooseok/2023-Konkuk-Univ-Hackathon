import "../css/templete5.css";
import BarcodeItemScreen from "./Barcode";
import { useEffect, useState } from "react";
import { titleMaker } from "./TitleMaker.jsx";

export default function Templete5({ url, features, scrap_data }) {
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
        <div class="templete5">
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
            <h1 class="title5">{title}</h1>
          </div>
          <div class="t5_sec1">
            <p id="t5_content1">{data.music}</p>
          </div>
          <div class="t5_sec2">
            <p id="t5_content2">{data.movie}</p>
            <p id="t5_content3">{data.news[0]}</p>
            <p id="t5_content4">{data.news[1]}</p>
            <p id="t5_content5">{data.news[2]}</p>
          </div>
          <div class="t5_sec3">
            <p id="t5_content6">{data.news[3]}</p>
            <p id="t5_content7">{data.news[4]}</p>
            <p id="t5_content8">{data.news[5]}</p>
          </div>
          <BarcodeItemScreen />
        </div>
      </body>
    </html>
  );
}
