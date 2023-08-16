import React, { useState } from "react";
const titles = {
  "10대 남성": ["새소년", "우주소년", "보이즈", "주니어", "아람단"],
  "10대 여성": ["하이틴", "여학생", "새소녀", "영시스터"],
  "20대 남성": ["어깨동무", "리더스", "브라더", "로드쇼", "학생중앙"],
  "20대 여성": ["우먼센스", "세계여성", "여대생", "영레이디", "QUEEN"],
  "30대 남성": ["남성리포트", "쿨가이", "타이타닉", "신사의휴일"],
  "30대 여성": ["FEEL", "레이디경향", "HOT", "여성자신"],
  "40대 남성": ["BOSS", "모래시계", "올드보이", "신사의 미"],
  "40대 여성": ["커리어우먼", "MOM", "우먼스", "SENSE"],
  "50대 남성": ["야인시대", "탑-건", "나이스샷", "가정의 벗", "보물섬"],
  "50대 여성": ["건강생활", "주부9단", "선데이서울", "여성중앙", "일요건강"],
};

export const titleMaker = features => {
  let gender = features.gender;
  let age = features.age;
  const AgeGroupAndGenderMake = () => {
    let str = age;
    let sum = 0;
    switch (gender) {
      case "female":
        gender = "여성";
        break;
      case "male":
        gender = "남성";
        break;
      default:
        gender = "남성";
        break;
    }
    let splited = str.split("~").map(d => parseInt(d));
    splited.map(data => (sum += data));
    let mok = parseInt(sum / 2 / 10);
    console.log(`${mok * 10}대 ${gender}`);
    return `${mok * 10}대 ${gender}`;
  };
  const generateTitle = () => {
    const key = AgeGroupAndGenderMake();
    if (titles.hasOwnProperty(key)) {
      const titleArray = titles[key];
      const randomIndex = Math.floor(Math.random() * titleArray.length);
      return titleArray[randomIndex];
    } else {
      return "해당하는 제목이 없습니다.";
    }
  };
  let res = generateTitle();
  return res;
};
