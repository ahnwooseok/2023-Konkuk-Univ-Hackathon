import '../css/templete4.css'
import BarcodeItemScreen from './Barcode';
import { useEffect, useState } from 'react'



export default function Templete4() {
   
    return(
<html>
   
    <body>
        <div class="templete4">
           
            <div class="header">
                <h1 class="title4">
                    QUEEN
                </h1>
                
            </div>
            <div class="sec1">
                <p id="t4_content1">본문내용1</p>
                <p id="t4_content2">본문내용2</p>
                <p id="t4_content3">본문내용3</p>
            </div>
            <div class="sec2">
                <p id="t4_content4">본문내용4</p>
                <p id="t4_content5">본문내용5</p>
                <p id="t4_content6">본문내용6</p>
               
            </div>
            <div class="sec3">
                <p id="t4_content7">본문내용7</p>
                <p id="t4_content8">본문내용8</p>
                
               
            </div>
            <BarcodeItemScreen/>
        </div>
        
    </body>
</html>
    );
}