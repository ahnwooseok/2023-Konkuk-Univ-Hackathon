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
export default function index() {
    const templates = [Template1, Template2, Template3, Template4, Template5];
    const randomIndex = Math.floor(Math.random() * templates.length);
    const RandomTemplate = templates[randomIndex];
  
    return (
      <div className='index'>
        <h1 id="main-title">Retro Magazine Converter</h1>
        <div id="converbtn"><img id="time"src={time}></img></div>
        <div>
        <div className='main-left'>
            <div className='file'>
                <img src={faceid} id="faceid"></img>
                <div className='upload'><img id="upload"src={upload}></img>파일 업로드하기</div>
                <div className='camera'><img id="camera"src={camera}></img>사진 촬영하기</div>
            </div>
        </div>
        </div>
        <div className='main-right'>
        <RandomTemplate />
        </div>
       
      </div>
    );
  }