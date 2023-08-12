from fastapi import FastAPI, Request
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
async def transfer_image(body: Request):
    dict_body = await body.json()
    return {"code" : 200 , "data" : dict_body}


    


# @app.get("/items/")
# async def read_item(skip: int = 0, limit: int = 10):
#     return {"skip": skip, "limit": limit}
