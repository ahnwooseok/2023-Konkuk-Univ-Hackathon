import Lottie from "lottie-react";
import loading from "./loading.json"
import spinner from "../img/loading.gif"
const CustomLoading = () => {
    return   <div style={{backgroundColor:"transparent", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <img src={spinner} style={{width:"200px",display:"block",margin:"0 auto 0 atuo",textAlign:"center"}}/>
        </div>
  
}
export default CustomLoading;

