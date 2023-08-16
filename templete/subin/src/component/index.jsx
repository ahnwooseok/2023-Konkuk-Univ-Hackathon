import Template1 from "../component/templete1";
import Template2 from "../component/templete2";
import Template3 from "../component/templete3";
import Template4 from "../component/templete4";
import Template5 from "../component/templete5";
import Template6 from "../component/templete6";
import Template7 from "../component/templete7";

import BarcodeItemScreen from "./Barcode";
import { Fragment, createRef, useEffect, useState } from "react";
import team1 from "../img/1.png";
import team2 from "../img/2.png";
import team3 from "../img/3.png";
import team4 from "../img/4.png";
import team5 from "../img/5.png";
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
import { useScreenshot, createFileName } from "use-react-screenshot";
import useWindowSize from "../hooks/useWindowSize";

export default function Index() {
  const templates = [Template1, Template2, Template3, Template4, Template5];
  const size = useWindowSize();
  const [randomIndex, setRandomIndex] = useState(
    Math.ceil(Math.random() * templates.length)
  );
  const regenerateRandomIndex = () =>
    setRandomIndex(Math.ceil(Math.random() * templates.length));
  //   const RandomTemplate = templates[randomIndex];
  const [selectedGender, setSelectedGender] = useState("");
  const [result, setResult] = useState(false);
  const isMobile = useMobile();
  const [isFinish, setIsFinish] = useState(false);

  const [imgBase64, setImgBase64] = useState("");
  const [feature, setFeature] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [scrapping, setScrapping] = useState({});

  const [img, setImg] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [cameraModalOpen, setCameraModalOpen] = useState(false);

  const ref = createRef(null);
  const [screenShot, takeScreenShot] = useScreenshot({
    type: "image/png",
    quality: 1.0,
  });

  const videoConstraints = {
    width: 520,
    height: 800,
    facingMode: "user",
  };

  useEffect(() => {
    console.log(scrapping);
  }, [scrapping]);
  const RandomTemplate = (num, url, feature, scrapping) => {
    console.log(url);
    switch (num) {
      case 1:
        return (
          <Template1 url={url} features={feature} scrap_data={scrapping} />
        );
      case 2:
        return (
          <Template2 url={url} features={feature} scrap_data={scrapping} />
        );
      case 3:
        return (
          <Template3 url={url} features={feature} scrap_data={scrapping} />
        );
      case 4:
        return (
          <Template4 url={url} features={feature} scrap_data={scrapping} />
        );
      case 5:
        return (
          <Template5 url={url} features={feature} scrap_data={scrapping} />
        );
      case 6:
        return (
          <Template6 url={url} features={feature} scrap_data={scrapping} />
        );
      case 7:
        return (
          <Template7 url={url} features={feature} scrap_data={scrapping} />
        );
    }
  };

  const getTransferImage = async data => {
    regenerateRandomIndex();
    transferImg(data).then(res => {
      let { code, data } = res.data;
      if (code === 200) {
        console.log(res.data);
        setImgBase64(data.image[0]); //종합 이미지 결과
        setFeature(data.feature); //clova
        setScrapping(data.scrap_data); // 스크래핑 데이터
        setIsLoading(false);
        if (isMobile) {
          setTimeout(() => {
            const objDiv = document.getElementById("mobileWrapper");
            objDiv.scrollTop = objDiv.scrollHeight;
          }, 100);
        }
      } else {
        alert("이미지 변환 실패!!!!");
        console.log("데이터 가져오기 실패");
      }
    });
  };

  const download = (image, { name = "img", extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => {
    takeScreenShot(ref.current).then(download);
  };

  const handleSave = () => {
    downloadScreenshot();
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
            const imageSrc = getScreenshot(); //base64 image
            const binaryImageData = atob(imageSrc.split(",")[1]);
            const arrayBuffer = new ArrayBuffer(binaryImageData.length);
            const uint8Array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < binaryImageData.length; i++) {
              uint8Array[i] = binaryImageData.charCodeAt(i);
            }
            const blobImage = new Blob([arrayBuffer], { type: "image/png" });
            setImageSrc(imageSrc);
            setImg(blobImage);
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
            marginTop: "15px",
          }}
        >
          촬영
        </button>
      )}
    </Webcam>
  );

  const handleGenerate = () => {
    if (isLoading) return;
    if (imageSrc == null) alert("이미지를 업로드 해주세요.");
    else {
      const formData = new FormData();
      formData.append("file", img, "file.png");
      setIsLoading(true);
      getTransferImage(formData);
    }
  };

  const handleShare = () => {
    console.log(navigator.share);
    if (navigator.share) {
      navigator
        .share({
          title: "기록하며 성장하기",
          text: "Hello World",
          url: "https://shinsangeun.github.io",
        })
        .then(res => {
          console.log(res);
        });
    } else {
      alert("공유하기가 지원되지 않는 환경 입니다.");
    }
  };

  return isMobile ? (
    <div
      className="index mobile"
      style={{ overflowY: "scroll" }}
      id="mobileWrapper"
    >
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

      {}

      <img id="graybox" src={imageSrc === null ? faceid : imageSrc} />

      <div className="result-template" style={{ display: "none" }}></div>
      <input
        style={{ display: "none" }}
        type="file"
        id="file"
        accept="image/jpg, image/jpeg, image/png, image/bmp"
        onChange={e => {
          let reader = new FileReader();
          if (e.target.files[0]) {
            const uploadFile = e.target.files[0];
            reader.readAsDataURL(e.target.files[0]);
            setImg(uploadFile);
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
      {!isLoading && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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

          <label
            id="mbtn2"
            style={{
              width: "150px",
              height: "40px",
              cursor: "pointer",
              color: "transparent",
            }}
            onClick={() => {
              setCameraModalOpen(true);
            }}
          >
            사진촬영
          </label>
        </div>
      )}

      <div
        className={imageSrc === null ? "converbtn-before" : "converbtn"}
        style={{ backgroundColor: isLoading ? "gray" : "#07bc5d" }}
        onClick={handleGenerate}
      >
        {isLoading ? "생성중" : "생성하기"}
      </div>

      {isLoading ? (
        <CustomLoading />
      ) : imgBase64 == "" ? (
        <div>
          <div>12312312</div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div ref={ref} style={{ transform: `scale(${size.width / 440})` }}>
            {RandomTemplate(
              randomIndex,
              `data:image/png;base64,${imgBase64}`,
              feature,
              scrapping
            )}
          </div>
          <div style={{ display: "flex" }}>
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
              onClick={handleSave}
            >
              이미지 저장
            </a>
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
          </div>
        </div>
      )}

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
            사진은 본인이 상반신 또는 전신샷이 들어가도록 해주세요.
          </p>
          <div
            className="file"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <img src={imageSrc === null ? faceid : imageSrc} id="faceid" />
            <div style={{ width: "20px" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept="image/jpg, image/jpeg, image/png, image/bmp"
                onChange={e => {
                  let reader = new FileReader();
                  if (e.target.files[0]) {
                    const uploadFile = e.target.files[0];
                    reader.readAsDataURL(e.target.files[0]);
                    setImg(uploadFile);
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
            style={{ backgroundColor: isLoading ? "gray" : "#07bc5d" }}
            onClick={handleGenerate}
          >
            {isLoading ? "생성중" : "생성하기"}
          </div>
        </div>

        <div style={{ width: "40px" }} />

        <div className="main-left" style={{ minWidth: 780 }}>
          <div
            style={{
              height: "100%",
              width: "100%",
              padding: 28,
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
            }}
          >
            {isLoading ? (
              <CustomLoading />
            ) : (
              <div>
                {imgBase64 == "" ? (
                  <Marquee>
                    <div>
                      <img
                        style={{
                          width: "300px",
                          height: "400px",
                          marginRight: "35px",
                        }}
                        src={team1}
                      />
                      <img
                        style={{
                          width: "300px",
                          height: "400px",
                          marginRight: "35px",
                        }}
                        src={team2}
                      />
                      <img
                        style={{
                          width: "300px",
                          height: "400px",
                          marginRight: "35px",
                        }}
                        src={team3}
                      />
                      <img
                        style={{
                          width: "300px",
                          height: "400px",
                          marginRight: "35px",
                        }}
                        src={team4}
                      />
                      <img
                        style={{
                          width: "300px",
                          height: "400px",
                        }}
                        src={team5}
                      />
                    </div>
                  </Marquee>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      boxSizing: "border-box",
                      height: "100%",
                    }}
                  >
                    <div ref={ref}>
                      {RandomTemplate(
                        randomIndex,
                        `data:image/png;base64,${imgBase64}`,
                        feature,
                        scrapping
                      )}
                    </div>
                    <div
                      style={{
                        flexGrow: 1,
                        width: 280,
                        boxSizing: "border-box",
                        padding: 12,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
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
                        onClick={handleSave}
                      >
                        이미지 저장
                      </a>

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
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div style={{ width: "40px" }} />
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
