import {useEffect, useState} from "react";


const useMobile = () => {
    const [isMobile,setIsMobile]=useState(window.innerWidth<=500 ? true : false);

    const setMobile = () => {
        var varUA = navigator.userAgent.toLowerCase();
        if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipod") > -1| varUA.indexOf('android') > -1 ) {
            // console.log("mobilePhone")
            setIsMobile(true);
        } else {
            // console.log(window.innerWidth)
            setIsMobile(window.innerWidth<=500 ? true : false)
        }

    }

    useEffect(()=>{
        window.addEventListener("resize",()=>{setMobile()});
        return ()=>window.removeEventListener("resize",()=>{setMobile()});
    },[])
    return isMobile;
}
export default useMobile;