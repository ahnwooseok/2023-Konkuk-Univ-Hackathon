from fastapi import FastAPI, Request, UploadFile, responses
from fastapi.middleware.cors import CORSMiddleware
from lib.in_paint_image import *
from lib.feature_detect import *
from lib.stable_diffusion import *
import base64
import cv2
import io



app = FastAPI(title="YangBong Hackathon API",)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/transferImage")
async def transfer_image(file : UploadFile):
    origin_file_data = await file.read()
    origin_file_bytes = io.BytesIO(origin_file_data)
    feature_response = feature_detect(origin_file_bytes)

    if feature_response["code"] != 200:
        return feature_response
    
    feature_data = feature_response["data"].get("faces")
    feature_dict = dict()
    
    for key in feature_data[0].keys():
        if feature_data[0][key]:
            if feature_data[0][key].get("value"):
                feature_dict[key] = feature_data[0][key]["value"]
    
    
    remove_bg_response = remove_background_dilate(origin_file_bytes)
    mask_file_bytes = remove_bg_response["data"]
    mask_base64 = base64.b64encode(mask_file_bytes.getvalue()).decode("utf-8")
    origin_base64 = base64.b64encode(origin_file_bytes.getvalue()).decode("utf-8")
    stable_diffusion_api_response = stable_diffusion_api(origin_base64, mask_base64, feature_dict)
    stable_diffusion_image_base64 = stable_diffusion_api_response.get("images")
    
    return {"code" : 200, "data" : {"image" : stable_diffusion_image_base64, "feature" : feature_dict}}