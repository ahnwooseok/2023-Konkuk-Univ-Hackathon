import "../css/templete1.css";
import BarcodeItemScreen from "./Barcode";
import { useEffect, useState } from "react";
export default function Templete1({ url, features }) {
  
  return (
    <div class="templete1" >
      <img
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        src={url}
      />
      <div class="header"  >
        <h1 class="title">영레이디</h1>
      </div>
      <div class="left">
        <p id="t1_content1">
          프레시지, 다이어트 <br />
          도시락 3종 쿠팡 선런칭
        </p>
        <p id="t1_content2">뉴진스, 아이돌그룹 브랜드평판 1위</p>
        <p id="t1_content3">상온상압 초전도체가 뭐길래</p>
      </div>
      <div class="right">
        <p id="t1_content4">
          하트시그널4, '마음 <br />
          통하는 기적' 일어날까
        </p>
        <p id="t1_content5">
          넷플릭스 '19/20'
          <br />
          (열아홉스물) 공개...{" "}
        </p>
        <p id="t1_content6">
          한강 모래사장에
          <br />
          선베드 깔린다…
          <br />
          '뷰 맛집' 대변신
        </p>
        <p id="t1_content7">
          국민 10명 중 3명 “광복절에 일본 여행, <br />
          개인의 자유”
        </p>
        <p id="t1_content8">
          동대문엽기떡볶이 '엽포터즈', 복날히든메뉴 <br />
          '엽기닭볶음탕' 소개
        </p>
      </div>
      <BarcodeItemScreen />
    </div>
  );
}
