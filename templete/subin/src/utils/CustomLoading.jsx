import Lottie from "lottie-react";
import loading from "./loading.json"
const CustomLoading = ({style={width: 160},wrapperStyle={width: "100%"},marginTop=null}) => {
    return <div className="flexRow" style={{position:"absolute", top:"50vh"}}>
        <div className="flexRow" style={wrapperStyle}><Lottie  style={style} animationData={loading} loop={true} /></div>
    </div>
}
export default CustomLoading;

