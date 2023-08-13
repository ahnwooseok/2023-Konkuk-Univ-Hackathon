import '../css/templete3.css'
import BarcodeItemScreen from './Barcode';
import { useEffect, useState } from 'react'



export default function Templete3() {
   
    return(
<html>
   
    <body>
        <div class="templete3">
           
            <div class="header">
                <h1 class="title3">
                    영브라더
                </h1>
                <p id="num">제 1호</p>
            </div>
            <div class="left3">
                <p id="t3_content1">본문내용1</p>
                <p id="t3_content2">본문내용2</p>
                <p id="t3_content3">본문내용3</p>
                <p id="t3_content4">본문내용4</p>
                <p id="t3_content5">본문내용5</p>
            </div>
            <div class="right3">
                <p id="t3_content6">본문내용6</p>
                <p id="t3_content7">본문내용7</p>
                <p id="t3_content8">본문내용8</p>
                
                
            </div>
            <BarcodeItemScreen/>
        </div>
    </body>
</html>
    );
}