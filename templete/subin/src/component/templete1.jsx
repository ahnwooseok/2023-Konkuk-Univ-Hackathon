import '../css/templete1.css'
import BarcodeItemScreen from './Barcode';
import { useEffect, useState } from 'react'



export default function Templete1() {
   
    return(

   
        <div class="templete1">
           
            <div class="header">
                <h1 class="title">
                    선데이서울
                </h1>
            </div>
            <div class="left">
                <p id="t1_content1">본문내용1</p>
                <p id="t1_content2">본문내용2</p>
                <p id="t1_content3">본문내용3</p>
               
            </div>
            <div class="right">
                <p id="t1_content4">본문내용4</p>
                <p id="t1_content5">본문내용5</p>
                <p id="t1_content6">본문내용6</p>
                <p id="t1_content7">본문내용7</p>
                <p id="t1_content8">본문내용8</p>
               
            </div>
            <BarcodeItemScreen/>
        </div>
    
    );
}