import Template1 from '../component/templete1';
import Template2 from '../component/templete2';
import Template3 from '../component/templete3';
import Template4 from '../component/templete4';
import Template5 from '../component/templete5';
import BarcodeItemScreen from './Barcode';
import { useEffect, useState } from 'react'
import faceid from "../img/faceid.png"
import upload from "../img/upload.png"
import camera from "../img/camera.png"
import time from '../img/time.png'
import Header from './Header';
import Marquee from "react-fast-marquee";
import graybox from "../img/file.png"
import b1 from "../img/mupload.png"
import b2 from "../img/mcamera.png"
import b3 from "../img/msave.png"
import b4 from "../img/mshare.png"
import retry from "../img/retry.png"
import btn from "../img/create.png"
import logo from "../img/yangbong.png"
import github from "../img/git.png"
import useMobile from "../hooks/useMobile";
import Webcam from "react-webcam";
import {Dialog} from "@mui/material";
import CustomLoading from "../utils/CustomLoading";

export default function Index() {
    const templates = [Template1, Template2, Template3, Template4, Template5];
    const randomIndex = Math.floor(Math.random() * templates.length);
    const RandomTemplate = templates[randomIndex];
    const [selectedGender, setSelectedGender] = useState("");
    const [result, setResult] = useState(true)
    const isMobile = useMobile()

    const [isLoading, setIsLoading] = useState(false)
    const [isSecondFlow, setIsSecondFlow] = useState(false)

    const [ img, setImg ] = useState(null)
    const [ previewImg, setPreviewImg ] = useState(null);
    const [imageSrc, setImageSrc] = useState(null)
    const [cameraModalOpen, setCameraModalOpen] = useState(false)

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    const WebcamCapture = () => (
        <Webcam
            audio={false}
            width={400}
            height={600}
            screenshotFormat="image/jpeg"

            videoConstraints={videoConstraints}
        >
            {({ getScreenshot }) => (
                <button
                    onClick={() => {
                        const imageSrc = getScreenshot()
                        console.log(imageSrc)
                        setImageSrc(imageSrc)
                    }}
                >
                    Capture photo
                </button>
            )}
        </Webcam>
    );

    return (

    

        isMobile ?
            <div className='index mobile'>
                 <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between",borderBottom:"1px solid black"}}>
                    <div style={{display:"flex", flexDirection:"row"}}>
                    <img id="mlogo" src={logo}  style={{width:'280px'}}></img>

                    </div>
                    <div>
                        <img src={github} style={{width:"80px"}} onClick={()=>{window.open('https://github.com/ahnwooseok/2023-Konkuk-Univ-Hackathon')}}></img>

                    </div>
                    </div>
                    {result ? <h1 id="mtitle"></h1> : <h1 id="mtitle">레트로 잡지 표지 생성기</h1>}
                    {result ? <p></p>:<p>설명이 들어갑니다.설명이 들어갑니다.</p>}
                    <div className='result-template'>
                  {result ? <Template4/> :<img id="graybox" src={graybox} style={{width:'80%'}}></img>}
                  </div>
                  <img id="mbtn"  src={result ? b3 : b1} style={{width:'40%',marginRight:'5px',cursor:"pointer"}}></img>
                  <img id="mbtn" src={result ? b4 : b2} style={{width:'40%',cursor:"pointer"}}></img>
                  <img id="create" src={result ?  retry :btn} style={{width:'80%',cursor:"pointer"}}></img>
                </div>
              
          
            :

            <div className=''>
                <Header/>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center", height:"calc(100vh-65px)"}}>
                    <div className='main-left' style={{minWidth:"500px", boxSizing:"border-box"}}>
                        <h1 id="main-title">레트로 잡지 표지 생성기</h1>
                        <p id="main-subtitle">설명이 들어갑니다.설명이 들어갑니다. 설명이 들어갑니다.설명이 들어갑니다.</p>
                        <div className='file' style={{display:"flex", flexDirection:"row"}}>
                            <img src={imageSrc === null ? faceid : imageSrc} id="faceid"/>
                            <div style={{width:"20px"}}/>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <input
                                    style={{display:"none"}}
                                    type="file"
                                    id='file'
                                    accept='image/jpg, image/jpeg, image/png, image/bmp'
                                    onChange={(e) => {
                                        console.log(e)
                                        let reader = new FileReader()
                                        if(e.target.files[0]) {
                                            reader.readAsDataURL(e.target.files[0])
                                        }
                                        reader.onloadend = () => {
                                            const previewImgUrl = reader.result;

                                            if(previewImgUrl) {
                                                setImg(e.target.files[0]);
                                                setImageSrc(previewImgUrl);
                                            }
                                        }
                                    }}/>
                                <label
                                    className='upload'
                                    htmlFor="file"
                                >
                                    <img id="upload"src={upload}/>
                                    파일 업로드
                                </label>
                                <div
                                    className='camera'
                                    onClick={()=>{
                                        setCameraModalOpen(true)
                                    }}
                                >
                                    <img id="camera"src={camera}/>
                                    사진 촬영
                                </div>
                            </div>
                        </div>
                        <div
                            className={imageSrc === null ? "converbtn-before" : 'converbtn'}
                            onClick={()=>{
                                if(imageSrc == null) alert("이미지를 업로드 해주세요.")
                                else{
                                    setIsSecondFlow(true)
                                    setIsLoading(true)
                                    setTimeout(() => {
                                        setIsLoading(false)
                                        alert("convert complete")

                                    }, 3000);
                                }
                            }}

                        >생성하기</div>
                    </div>
                    <div style={{width:"40px"}}/>
                    {isSecondFlow ?
                        <div style={{backgroundColor:"gray", width:"100%"}}>
                            {
                                isLoading ?
                                    <CustomLoading/>
                                    :
                                    <div>
                                        <div>변환된 이미지</div>
                                        <div>이미지 저장</div>
                                        <div>공유하기</div>
                                    </div>
                            }
                        </div>
                        :
                        <Marquee>
                            <Template1 />
                            <Template2 />
                            <Template3 />
                            <Template4 />
                            <Template5 />
                        </Marquee>
                    }

                </div>

                <Dialog
                    open={cameraModalOpen}
                    onClose={()=>{setCameraModalOpen(false)}}
                    PaperProps={{
                        style:{borderRadius:"20px", width:"520px"}
                    }}
                    disableAutoFocus={true}
                >
                    <div className="flexColumn bg-White" style={{padding:"30px 20px 20px 20px"}}>
                        {WebcamCapture()}
                    </div>

                </Dialog>
            </div>
    );
}