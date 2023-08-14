export default function TitleMaker(){
    const contentByAgeAndGender = {
        "10대": {
          "남성": ["새소년", "우주소년단", "보이스카우트", "주니어", "아람단"],
          "여성": ["하이틴", "여학생", "새소녀", "영시스터"]
        },
        "20대": {
          "남성": ["어깨동무", "리더스", "비트", "로드쇼", "학생중앙"],
          "여성": ["레이디경향", "우먼센스", "세계여성", "여대생", "영레이디"]
        },
        "30대": {
          "남성": ["남성리포트", "쿨가이", "타이타닉", "신사의 휴일"],
          "여성": ["FEEL", "서태지와아이들", "HOT", "여성자신"]
        },
        "40대": {
          "남성": ["BOSS", "모래시계", "올드보이", "신사의 미"],
          "여성": ["커리어우먼", "MOM", "우먼스", "SENSE"]
        },
        "50대": {
          "남성": ["야인시대", "TOP GUN", "RE-BORN", "나이스샷", "가정의벗", "보물섬"],
          "여성": ["건강생활", "주부9단", "선데이서울", "여성중앙", "일요건강"]
        }
      };
      function getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
      }
      
        const ageGroups = Object.keys(contentByAgeAndGender);
        const genderGroups = ["남성", "여성"];
      
        const [selectedAge, setSelectedAge] = useState("");
        const [selectedGender, setSelectedGender] = useState("");
        const [randomContent, setRandomContent] = useState("");
      
        const handleGenerateRandomContent = () => {
          const randomAge = getRandomItem(ageGroups);
          const randomGender = getRandomItem(genderGroups);
          const randomContent = getRandomItem(contentByAgeAndGender[randomAge][randomGender]);
      
          setSelectedAge(randomAge);
          setSelectedGender(randomGender);
          setRandomContent(randomContent);
        };
}