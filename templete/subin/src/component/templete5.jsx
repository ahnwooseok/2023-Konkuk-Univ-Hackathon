import '../css/templete5.css'
import BarcodeItemScreen from './Barcode';
import { useEffect, useState } from 'react'



export default function Templete5() {
   
    return(
<html>
   
    <body>
        <div class="templete5">
           
            <div class="header">
                <h1 class="title5">
                    잘생겼다이
                </h1>
                
            </div>
            <div class="t5_sec1">
                <p id="t5_content1">본문내용1</p>
               
            </div>
            <div class="t5_sec2">
                <p id="t5_content2">본문내용2</p>
                <p id="t5_content3">본문내용3</p>
                <p id="t5_content4">본문내용4</p>
                <p id="t5_content5">본문내용5</p>
               
            </div>
            <div class="t5_sec3">
                <p id="t5_content6">본문내용6</p>
                <p id="t5_content7">본문내용7</p>
                <p id="t5_content8">본문내용8</p>
               
                
               
            </div>
            <BarcodeItemScreen/>
        </div>
        
    </body>
</html>
    );
}