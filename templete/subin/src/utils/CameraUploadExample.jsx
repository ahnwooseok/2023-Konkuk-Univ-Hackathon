import {useState} from "react";
import Webcam from "react-webcam";
import {Dialog} from "@mui/material";

export default function CameraUploadExample() {


    const [imageSrc, setImageSrc] = useState(null)
    const [cameraModalOpen, setCameraModalOpen] = useState(false)

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    const WebcamCapture = () => (
        <Webcam
            audio={false}
            width={400}
            height={400}
            mirrored={true}
            screenshotFormat="image/jpeg"

            videoConstraints={videoConstraints}
        >
            {({ getScreenshot }) => (
                <button
                    onClick={() => {
                        const imageSrc = getScreenshot()
                        console.log(imageSrc)
                        setImageSrc(imageSrc)
                    }}
                    style={{width:"100px"}}
                >
                    Capture photo
                </button>
            )}
        </Webcam>
    );

    return (
        <div className='index'>
            <div style={{fontSize:"20px"}} id="main-title">카메라 업로드 test</div>
            <div style={{height:"40px"}}/>
            <div
                style={{border:"1px solid red", padding:"10px 20px", cursor:"pointer", width:"fit-content"}}
                onClick={()=>{
                    setCameraModalOpen(true)
                }}
            >
                모달열기
            </div>

            <div>
                <img src={imageSrc}/>
            </div>

            <Dialog
                open={cameraModalOpen}
                onClose={()=>{setCameraModalOpen(false)}}
                PaperProps={{
                    style:{borderRadius:"20px", width:"520px"}
                }}
                disableAutoFocus={true}
            >
                <div className="flexColumn bg-White" >
                    <p>치~즈</p>
                    {WebcamCapture()}

                </div>

            </Dialog>

        </div>
    );
}