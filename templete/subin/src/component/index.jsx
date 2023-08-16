import Template1 from "../component/templete1";
import Template2 from "../component/templete2";
import Template3 from "../component/templete3";
import Template4 from "../component/templete4";
import Template5 from "../component/templete5";
import Template6 from "../component/templete6";

import BarcodeItemScreen from "./Barcode";
import { useEffect, useState } from "react";
import faceid from "../img/faceid.png";
import upload from "../img/upload.png";
import camera from "../img/camera.png";
import time from "../img/time.png";
import Header from "./Header";
import Marquee from "react-fast-marquee";
import graybox from "../img/file.png";
import b1 from "../img/mupload.png";
import b2 from "../img/mcamera.png";
import b3 from "../img/msave.png";
import b4 from "../img/mshare.png";
import retry from "../img/retry.png";
import btn from "../img/create.png";
import logo from "../img/yangbong.png";
import github from "../img/git.png";
import useMobile from "../hooks/useMobile";
import Webcam from "react-webcam";
import { Dialog } from "@mui/material";
import msave from "../img/msave.png";
import CustomLoading from "../utils/CustomLoading";
import { transferImg } from "../controller/api.jsx";

export default function Index() {
  const templates = [Template1, Template2, Template3, Template4, Template5];
  const randomIndex = Math.floor(Math.random() * templates.length);
  //   const RandomTemplate = templates[randomIndex];
  const [selectedGender, setSelectedGender] = useState("");
  const [result, setResult] = useState(false);
  const isMobile = useMobile();
  const [file, setFile] = useState();
  const [imgBase64, setImgBase64] = useState("");
  const [feature, setFeature] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSecondFlow, setIsSecondFlow] = useState(false);

  const [img, setImg] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [cameraModalOpen, setCameraModalOpen] = useState(false);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const RandomTemplate = (num, url, feature) => {
    switch (num) {
      case 1:
        return <Template1 url={url} features={feature} />;
      case 2:
        return <Template2 url={url} features={feature} />;
      case 3:
        return <Template3 url={url} features={feature} />;
      case 4:
        return <Template4 url={url} features={feature} />;
      case 5:
        return <Template5 url={url} features={feature} />;
      case 6:
        return <Template6 url={url} features={feature} />;
    }
  };
  const getTransferImage = async data => {
    transferImg(data).then(res => {
      let { code, data } = res.data;
      if (code === 200) {
        setImgBase64(data.image[0]);
        setFeature(data.feature);
        setIsLoading(false);
      } else {
        alert("이미지 변환 실패!!!!");
        console.log("데이터 가져오기 실패");
      }
    });
  };

  const WebcamCapture = () => (
    <Webcam
      audio={false}
      width={400}
      height={300}
      mirrored={true}
      screenshotFormat="image/jpeg"
      style={{ display: "block", textAlign: "center", margin: "0 auto 0 auto" }}
      videoConstraints={videoConstraints}
    >
      {({ getScreenshot }) => (
        <button
          onClick={() => {
            const imageSrc = getScreenshot();
            console.log(imageSrc);
            setImageSrc(imageSrc);
            setCameraModalOpen(false);
          }}
          style={{
            display: "block",
            textAlign: "center",
            margin: "0 auto 0 auto",
            width: "100px",
            height: "40px",
            backgroundColor: "#666666",
            border: "none",
            borderRadius: "5px",
            color: "white",
          }}
        >
          촬영
        </button>
      )}
    </Webcam>
  );

  const handleShare = () => {
    console.log(navigator.share);
    if (navigator.share) {
      navigator
        .share({
          title: "기록하며 성장하기",
          text: "Hello World",
          url: "https://shinsangeun.github.io",
          // files:[],
        })
        .then(res => {
          console.log(res);
        });
    } else {
      alert("공유하기가 지원되지 않는 환경 입니다.");
    }
  };

  return isMobile ? (
    <div className="index mobile">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottom: "1px solid black",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            id="mlogo"
            src={logo}
            style={{ width: "260px", height: "30px" }}
          ></img>
        </div>
        <div>
          <img
            src={github}
            style={{ width: "80px" }}
            onClick={() => {
              window.open(
                "https://github.com/ahnwooseok/2023-Konkuk-Univ-Hackathon"
              );
            }}
          ></img>
        </div>
      </div>
      {result ? (
        <h1 id="mtitle"></h1>
      ) : (
        <h1 id="mtitle">
          Retronize - <br />
          레트로 잡지 표지 생성기
        </h1>
      )}
      {result ? <p></p> : <p>설명이 들어갑니다.설명이 들어갑니다.</p>}
      <div className="result-template">
        {isSecondFlow ? (
          <div>
            {!imgBase64 ? (
              <CustomLoading />
            ) : (
              <div>
                {" "}
                {/* <img
                  style={{ width: "300px", height: "400px" }}
                  src={url}
                ></img> */}
                {/* <Template1 url={url} features={feature} /> */}
                {RandomTemplate(
                  randomIndex,
                  `data:image/png;base64,${imgBase64}`,
                  feature
                )}
              </div>
            )}
          </div>
        ) : (
          <img id="graybox" src={imageSrc === null ? faceid : imageSrc} />
        )}
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        id="file"
        accept="image/jpg, image/jpeg, image/png, image/bmp"
        onChange={e => {
          console.log(e);
          let reader = new FileReader();
          if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            const uploadFile = e.target.files[0];
            setFile(uploadFile);
          }
          reader.onloadend = () => {
            const previewImgUrl = reader.result;

            if (previewImgUrl) {
              setImg(e.target.files[0]);
              setImageSrc(previewImgUrl);
            }
          };
        }}
      />
      <input
        style={{ display: "none" }}
        type="file"
        id="file2"
        accept="image/jpg, image/jpeg, image/png, image/bmp"
        onChange={e => {
          console.log(e);
          let reader = new FileReader();
          if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
          }
          reader.onloadend = () => {
            const previewImgUrl = reader.result;

            if (previewImgUrl) {
              setImg(e.target.files[0]);
              setImageSrc(previewImgUrl);
            }
          };
        }}
        capture={"user"}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isSecondFlow ? (
          <a
            id="image-save"
            style={{
              border: "none",
              width: "150px",
              height: "40px",
              color: "transparent",
              display: "inline-block",
            }}
            download="karina.jpg"
            href={imageSrc}
          >
            이미지 저장
          </a>
        ) : (
          <label
            id="mbtn1"
            style={{
              width: "150px",
              height: "40px",
              cursor: "pointer",
              color: "transparent",
            }}
            htmlFor="file"
          >
            파일업로드
          </label>
        )}
        <div style={{ width: "20px" }} />
        {isSecondFlow ? (
          <a
            id="mbtn"
            style={{
              border: "none",
              width: "150px",
              height: "40px",
              color: "transparent",
              display: "inline-block",
            }}
            onClick={() => {
              handleShare();
            }}
          />
        ) : (
          <label
            id="mbtn2"
            style={{
              width: "150px",
              height: "40px",
              cursor: "pointer",
              color: "transparent",
            }}
            htmlFor="file2"
          >
            사진촬영
          </label>
        )}
      </div>

      <img
        id="create"
        src={isSecondFlow ? retry : btn}
        style={{ width: "80%", cursor: "pointer" }}
        onClick={() => {
          if (isSecondFlow) {
            setIsSecondFlow(false);
            setImg(null);
            setImageSrc(null);
            setIsLoading(false);
          } else {
            if (imageSrc == null) alert("이미지를 업로드 해주세요.");
            else {
              setIsSecondFlow(true);
              setIsLoading(true);
              const formData = new FormData();
              formData.append("file", file);
              getTransferImage(formData);
            }
          }
        }}
      />
    </div>
  ) : (
    <div className="">
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "calc(100vh-65px)",
        }}
      >
        <div
          className="main-left"
          style={{ minWidth: "500px", boxSizing: "border-box" }}
        >
          <h1 id="main-title">
            Retronize - <br />
            레트로 잡지 표지 생성기
          </h1>
          <p id="main-subtitle">
            설명이 들어갑니다.설명이 들어갑니다. 설명이 들어갑니다.설명이
            들어갑니다.
          </p>
          <div
            className="file"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <img src={imageSrc === null ? faceid : imageSrc} id="faceid" />
            <div style={{ width: "20px" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept="image/jpg, image/jpeg, image/png, image/bmp"
                onChange={e => {
                  console.log(e);
                  console.log(e.target.files[0]);
                  let reader = new FileReader();
                  if (e.target.files[0]) {
                    const uploadFile = e.target.files[0];
                    reader.readAsDataURL(e.target.files[0]);

                    setFile(uploadFile);
                  }
                  reader.onloadend = () => {
                    const previewImgUrl = reader.result;

                    if (previewImgUrl) {
                      setImg(e.target.files[0]);
                      setImageSrc(previewImgUrl);
                    }
                  };
                }}
              />
              <label className="upload" htmlFor="file">
                <img id="upload" src={upload} />
                파일 업로드
              </label>
              <div
                className="camera"
                onClick={() => {
                  setCameraModalOpen(true);
                }}
              >
                <img id="camera" src={camera} />
                사진 촬영
              </div>
            </div>
          </div>
          <div
            className={imageSrc === null ? "converbtn-before" : "converbtn"}
            onClick={() => {
              if (imageSrc == null) alert("이미지를 업로드 해주세요.");
              else {
                setIsSecondFlow(true);
                setIsLoading(true);
                // console.log(file);
                const formData = new FormData();
                formData.append("file", file);
                getTransferImage(formData);
                // setTimeout(() => {
                //   setIsLoading(false);
                //   alert("convert complete");
                // }, 3000);
              }
            }}
          >
            생성하기
          </div>
        </div>
        <div style={{ width: "40px" }} />
        {isSecondFlow ? (
          <div style={{ backgroundColor: "transparent", width: "100%" }}>
            {!imgBase64 ? (
              <>
                <CustomLoading />
              </>
            ) : (
              <div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    marginBottom: "50px",
                  }}
                >
                  {/* <img
                    style={{ width: "300px", height: "400px" }}
                    src={`data:image/png;base64,${imgBase64}`}
                  ></img> */}
                  {RandomTemplate(
                    randomIndex,
                    `data:image/png;base64,${imgBase64}`,
                    feature
                  )}
                  {/* <Template1
                    url={`data:image/png;base64,${imgBase64}`}
                    features={feature}
                  /> */}
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "20px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a
                    style={{
                      backgroundColor: "#666666",
                      color: "white",
                      width: "150px",
                      display: "inline-block",
                      height: "40px",
                      textAlign: "center",
                      lineHeight: "40px",
                      textDecoration: "none",
                      borderRadius: "10px",
                      marginRight: "10px",
                    }}
                    download="karina.jpg"
                    href={imageSrc}
                  >
                    이미지 저장
                  </a>

                  <div
                    style={{
                      backgroundColor: "#666666",
                      color: "white",
                      width: "150px",
                      display: "inline-block",
                      height: "40px",
                      textAlign: "center",
                      lineHeight: "40px",
                      textDecoration: "none",
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      handleShare();
                    }}
                  >
                    공유하기
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Marquee>
            {/* <Template1 />
            <Template2 />
            <Template3 />
            <Template4 />
            <Template5 /> */}
            {/* <RandomTemplate /> */}
          </Marquee>
        )}
      </div>

      <Dialog
        open={cameraModalOpen}
        onClose={() => {
          setCameraModalOpen(false);
        }}
        PaperProps={{
          style: { borderRadius: "20px", width: "520px" },
        }}
        disableAutoFocus={true}
      >
        <div
          className="flexColumn bg-White"
          style={{ padding: "30px 20px 20px 20px" }}
        >
          {WebcamCapture()}
        </div>
      </Dialog>
    </div>
  );
}
