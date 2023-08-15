import requests
client_id = "xicwzp6vki"
client_secret = "tPFwYJatuOV77BYLaKGNuKHkWpJDpxEimNthSm6s"
url = "https://naveropenapi.apigw.ntruss.com/vision/v1/face"

def feature_detect(file_data):
    try:
        files = {'image': file_data}
        headers = {'X-NCP-APIGW-API-KEY-ID': client_id, 'X-NCP-APIGW-API-KEY': client_secret }
        response = requests.post(url,  files=files, headers=headers)
        if response.status_code != 200:
            return {"code" : 500, "message" : "Internal Error"}
        return {"code" : 200 , "data" : response.json()}
    except:
        return {"code" : 500, "message" : "Internal Error"}
    
    