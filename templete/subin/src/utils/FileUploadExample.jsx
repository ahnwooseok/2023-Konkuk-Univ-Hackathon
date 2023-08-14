import {useState} from "react";

export default function FileUploadExample() {

    const [ img, setImg ] = useState([])
    const [ previewImg, setPreviewImg ] = useState([]);


    const getPreviewImg = () => {
        if(img === null || img.length === 0) {
            return (
                <div style={{position:"relative", height:"0px"}}>
                    {/*<img  style={{position:"absolute", width:"100px", height:"100px"}}*/}
                    {/*    src="https://k-startup.go.kr/images/homepage/prototype/noimage.gif"*/}
                    {/*    alt="dd"/>*/}
                    {/*<div style={{position:"absolute",fontSize:"14px",height:"50px", top: `calc(100% - 40px)`}}>등록된 이미지가 없습니다.</div>*/}
                </div>

            )
        } else {
            return img.map((el, index) => {
                const { name } = el
                // console.log(name.length);

                return (
                    <div className="flex" style={{flexDirection: "column",flexWrap: "wrap",boxSizing: "border-box", justifyContent: "flex-start",alignContent: "flex-start"}} key={index}>
                        <div>
                            <div style={{position:"relative", width:"60px", height:"60px",borderRadius: 6}}>
                                <img className="font10small" style={{position:"absolute", width:"60px", height:"60px",left: 0,borderRadius: 8,textAlign: "center"}} src={previewImg[index]} alt="이미지가 제공되지 않습니다." />
                                <div
                                    onClick={()=>{
                                        const imgArr = img.filter((el, idx) => idx !== index)
                                        const imgNameArr = previewImg.filter((el, idx) => idx !== index )

                                        setImg([...imgArr])
                                        setPreviewImg([...imgNameArr])
                                        //file 태그 리셋 (안하면 중복파일 안올라감)
                                        document.getElementById("file").value="";
                                    }}
                                    style={{position:"absolute",zIndex:10, right:-4, top: -4, cursor:"pointer", width:"20px", height:"20px",display: "flex", justifyContent: "center", alignItems: "center",backgroundColor: "#3D3D3D",borderRadius: "50%"}}
                                >
                                    X
                                </div>
                            </div>
                            {/* <div style={{marginTop: 2,marginBottom: 4,fontSize:"12px",width:"60px", textOverflow: "ellipsis",overflow: "hidden",whiteSpace: "nowrap"}}>{name}</div> */}
                        </div>
                    </div>

                )
            })
        }
    }

    return (
        <div className='index'>
            <div style={{fontSize:"20px"}} id="main-title">파일 업로드 test</div>

            <div style={{height:"40px"}}/>
            <div className="flexRow">

                <input
                    style={{display:"none"}}
                    type="file"
                    id='file'
                    accept='image/jpg, image/jpeg, image/png, image/bmp'
                    onChange={(e) => {
                        if(img.length>=5){
                            alert(["파일 첨부는 최대 5개 까지 가능합니다.","error"]);
                            return;
                        }
                        let reader = new FileReader()
                        // console.log(e.target.files[0]);
                        if(e.target.files[0]) {
                            reader.readAsDataURL(e.target.files[0])
                        }
                        reader.onloadend = () => {
                            const previewImgUrl = reader.result;

                            if(previewImgUrl) {
                                setImg([...img, e.target.files[0]]);
                                setPreviewImg([...previewImg, previewImgUrl]);
                            }
                        }
                    }}/>
            </div>

            <div>
                {getPreviewImg()}
            </div>

            <div>
                <label
                    style={{cursor:"pointer", border:"1px solid blue", padding:"10px 20px"}}
                    className="mobile-inquiry-file"
                    htmlFor="file"
                >파일 첨부</label>
                <div style={{height:"20px"}}/>
                <div>첨부가능 용량은 10MB 미만입니다.<br/>(첨부가능 파일 확장자 : jpg, bmp, png)</div>
            </div>

        </div>
    );
}