import {useState} from "react";
import Webcam from "react-webcam";

export default function CameraUploadExample() {


    const [imageSrc, setImageSrc] = useState(null)

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    const WebcamCapture = () => (
        <Webcam
            audio={false}
            width={400}
            height={600}
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
            {WebcamCapture()}

            <div>
                <img src={imageSrc}/>
            </div>

        </div>
    );
}