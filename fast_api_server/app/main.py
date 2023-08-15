from fastapi import FastAPI, Request, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from lib.age_detect import *
from lib.in_paint_image import *



app = FastAPI(title="YangBong Hackathon API",)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.post("/transferImage")
async def transfer_image(file : UploadFile):
    return file.filename
    


    


# @app.get("/items/")
# async def read_item(skip: int = 0, limit: int = 10):
#     return {"skip": skip, "limit": limit}