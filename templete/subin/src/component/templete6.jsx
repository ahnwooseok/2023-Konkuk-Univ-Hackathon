import "../css/templete6.css";
import BarcodeItemScreen from "./Barcode";
import { useEffect, useState } from "react";
import { titleMaker } from "./TitleMaker";

export default function Templete6({ url, features, scrap_data }) {
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
        <div class="templete6">
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
            <h1 class="title6">{title}</h1>
          </div>
          <div class="left6">
            <p id="t6_content1">{data.music}</p>
            <p id="t6_content2">{data.movie}</p>
            <p id="t6_content3">{data.news[0]}</p>
            <p id="t6_content4">{data.news[1]}</p>
          </div>
          <div class="right6">
            <p id="t6_content5">{data.news[2]}</p>
            <p id="t6_content6">{data.news[3]}</p>
            <p id="t6_content7">{data.news[4]}</p>
            <p id="t6_content8">{data.news[5]}</p>
          </div>

          <BarcodeItemScreen />
        </div>
      </body>
    </html>
  );
}
