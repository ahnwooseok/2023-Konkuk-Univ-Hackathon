import '../css/templete2.css'
import BarcodeItemScreen from './Barcode';
import { useEffect, useState } from 'react'



export default function Templete2() {
   
    return(
<html>
   
    <body>
        <div class="templete2">
           
            <div class="header">
                <h1 class="title2">
                    신사의휴일
                </h1>
            </div>
            <div class="left">
                <p id="t2_content1">본문내용1</p>
                <p id="t2_content2">본문내용2</p>
                <p id="t2_content3">본문내용3</p>
                <p id="t2_content4">본문내용4</p>
                <p id="t2_content5">본문내용5</p>
            </div>
            <div class="right2">
                <p id="t2_content6">본문내용6</p>
                <p id="t2_content7">본문내용7</p>
                <p id="t2_content8">본문내용8</p>
             
                
            </div>
            <BarcodeItemScreen/>
        </div>
    </body>
</html>
    );
}