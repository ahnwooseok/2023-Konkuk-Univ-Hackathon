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

export default function Index() {
    const templates = [Template1, Template2, Template3, Template4, Template5];
    const randomIndex = Math.floor(Math.random() * templates.length);
    const RandomTemplate = templates[randomIndex];
    const [selectedGender, setSelectedGender] = useState("");
    const [result, setResult] = useState(false)
    const isMobile = useMobile()
    useEffect(()=>{
        console.log(isMobile)
    },[])
    return (

    

        isMobile ?
            <div className='index mobile'>
                 <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between",borderBottom:"1px solid black"}}>
                    <div style={{display:"flex", flexDirection:"row"}}>
                    <img id="mlogo" src={logo}  style={{width:'280px'}}></img>
                    
                    </div>
                    <div>
                        <img src={github} style={{width:"80px"}}></img>
                    
                    </div>
                    </div>
                    <h1 id="mtitle">레트로 잡지 표지 생성기</h1>
                    <p>설명이 들어갑니다.설명이 들어갑니다.</p>
                  <img id="graybox" src={graybox} style={{width:'80%'}}></img>
                  <img id="mbtn" src={result ? b3 : b1} style={{width:'40%',marginRight:'5px'}}></img>
                  <img id="mbtn" src={result ? b4 : b2} style={{width:'40%'}}></img>
                  <img id="create" src={result ?  retry :btn} style={{width:'80%'}}></img>
                </div>
              
          
            :

            <div className='index'>
            <div>
            <Header/>
            <div className='main-left'>
            <h1 id="main-title">레트로 잡지 표지 생성기</h1>
            <p id="main-subtitle">설명이 들어갑니다.설명이 들어갑니다. 설명이 들어갑니다.설명이 들어갑니다.</p>
                <div className='file'>
                    <img src={faceid} id="faceid"></img>
                    <div className='upload'><img id="upload"src={upload}></img>파일 업로드</div>
                    <div className='camera'><img id="camera"src={camera}></img>사진 촬영</div>
                </div>
                <div className='converbtn'>생성하기</div>
            </div>
            </div>
            <div className='main-right'>
            <Marquee>
                <Template1 />
                <Template2 />
                <Template3 />
                <Template4 />
                <Template5 />
            </Marquee>
            </div>
           
          </div>
    );
}