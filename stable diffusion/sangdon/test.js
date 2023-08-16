const textPixelChanger = str => {
  let strLen = str.length;
  switch (true) {
    case 1 <= strLen && strLen < 10:
      return "20px";
    case 10 <= strLen && strLen < 20:
      return "18px";
    case 20 <= strLen && strLen < 30:
      return "16px";
    default:
      return "20px";
  }
};

textPixelChanger("오늘의 날씨는 매우 맑음");
