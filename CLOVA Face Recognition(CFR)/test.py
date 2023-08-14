import os
import sys
import requests
# client_id = "YOUR_CLIENT_ID"
client_id = "xicwzp6vki"
# client_secret = "YOUR_CLIENT_SECRET"
client_secret = "tPFwYJatuOV77BYLaKGNuKHkWpJDpxEimNthSm6s"
url = "https://naveropenapi.apigw.ntruss.com/vision/v1/face"
# files = {'image': open('YOUR_FILE_NAME', 'rb')}
file_url = "/Users/ahnwooseok/Downloads/github/2023-Konkuk-Univ-Hackathon/CLOVA Face Recognition(CFR)/sample12.jpeg"


files = {'image': open(file_url, 'rb')}
headers = {'X-NCP-APIGW-API-KEY-ID': client_id, 'X-NCP-APIGW-API-KEY': client_secret }
response = requests.post(url,  files=files, headers=headers)
rescode = response.status_code
if(rescode==200):
    print (response.text)
else:
    print("Error Code:" + rescode)