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
                    나이스샷
                </h1>
                
            </div>
            <div class="t5_sec1">
                <p id="t5_content1">프레시지, 다이어트 도시락 3종 쿠팡 선런칭</p>
               
            </div>
            <div class="t5_sec2">
                <p id="t5_content2">뉴진스, 아이돌그룹 브랜드평판 1위</p>
                <p id="t5_content3">상온상압 초전도체가 뭐길래</p>
                <p id="t5_content4">하트시그널4, '마음 통하는 기적' 일어날까</p>
                <p id="t5_content5">넷플릭스 '19/20' (열아홉스물) 공개...</p>
               
            </div>
            <div class="t5_sec3">
                <p id="t5_content6">한강 모래사장에 선베드 깔린다… '뷰 맛집' 대변신</p>
                <p id="t5_content7">국민 10명 중 3명 “광복절에 일본 여행, 개인의 자유”</p>
                <p id="t5_content8">동대문엽기떡볶이 '엽포터즈', 복날히든메뉴' 엽기닭볶음탕'</p>
               
                
               
            </div>
            <BarcodeItemScreen/>
        </div>
        
    </body>
</html>
    );
}