import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Templete1 from "./component/templete1";
import Templete2 from "./component/templete2";
import Templete3 from "./component/templete3";
import Templete4 from "./component/templete4";
import Templete5 from "./component/templete5";
import Templete6 from "./component/templete6";
import Templete7 from "./component/templete7";
import Main from "./component/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FileUploadExample from "./utils/FileUploadExample";
import CameraUploadExample from "./utils/CameraUploadExample";
import titleMaker from "./component/TitleMaker";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/1" element={<Templete1 />}></Route>
      <Route path="/2" element={<Templete2 />}></Route>
      <Route path="/3" element={<Templete3 />}></Route>
      <Route path="/4" element={<Templete4 />}></Route>
      <Route path="/5" element={<Templete5 />}></Route>
      <Route path="/6" element={<Templete6 />}></Route>
      <Route path="/7" element={<Templete7 />}></Route>
      <Route path="/fileUpload" element={<FileUploadExample />}></Route>
      <Route path="/cameraUpload" element={<CameraUploadExample />}></Route>
      {/* <Route path="/titleMaker" element={<TitleMaker />}></Route> */}
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
