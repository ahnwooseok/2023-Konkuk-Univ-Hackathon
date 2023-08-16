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

const AgeGroupAndGenderMake = (age, genders) => {
  let str = age;
  let gender = "";
  let sum = 0;
  switch (genders) {
    case "female":
      gender = "여성";
      break;
    case "male":
      gender = "남성";
      break;
  }
  let splited = str.split("~").map(d => parseInt(d));
  splited.map(data => (sum += data));
  let ages = 0;
  parseInt(sum / 2 / 10) * 10 >= 60
    ? (ages = 50)
    : (ages = parseInt(sum / 2 / 10) * 10);

  console.log(`${ages}대 ${gender}`);
  return `${ages}대 ${gender}`;
};

AgeGroupAndGenderMake("20~30", "female");
