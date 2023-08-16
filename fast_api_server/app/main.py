from fastapi import FastAPI, Request, UploadFile, responses
from fastapi.middleware.cors import CORSMiddleware
from lib.in_paint_image import *
from lib.feature_detect import *
from lib.stable_diffusion import *
from lib.scrap import *
import random
import base64
import io



app = FastAPI(title="YangBong Hackathon API",)
with open("./datas/difussion.json", "r") as json_file:
    prompt_dict = json.load(json_file) 

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
    
    age_range = feature_dict.get("age")
    age_min, age_max = age_range.split("~")
    mean_age = (int(age_max) + int(age_min))//2
    prompt = random.choice(prompt_dict.get(f"{mean_age}"))
    remove_bg_response = remove_background_dilate(origin_file_bytes)
    mask_file_bytes = remove_bg_response["data"]
    mask_base64 = base64.b64encode(mask_file_bytes.getvalue()).decode("utf-8")
    origin_base64 = base64.b64encode(origin_file_bytes.getvalue()).decode("utf-8")
    stable_diffusion_api_response = stable_diffusion_api(origin_base64, mask_base64, prompt)
    stable_diffusion_image_base64 = stable_diffusion_api_response.get("images")
    scrap_movie_response = scrap_movie()
    if scrap_movie_response["code"] != 200:
        return {"code" : 500, "message" : "Internal Error"}
    movie_list = scrap_movie_response["data"]
    
    scrap_music_response = scrap_music(mean_age)
    
    if scrap_music_response["code"] != 200:
        return {"code" : 500, "message" : "Internal Error"}
    music_list = scrap_music_response["data"]
    
    if mean_age < 40:
        scrap_news_response = scrap_news_10_30()
    else:
        scrap_news_response = scrap_news_else()
    news_list = scrap_news_response["data"]
    
    selected_movie = random.choice(movie_list)
    selected_music = random.choice(music_list)
    selected_news_list = random.sample(news_list,6)

    scrap_dict = {
        "movie" : selected_movie,
        "music" : selected_music,
        "news" : selected_news_list
    }
    
    
    return {"code" : 200, "data" : {"image" : stable_diffusion_image_base64, "feature" : feature_dict, "prompt" : prompt, "scrap_data" : scrap_dict}}