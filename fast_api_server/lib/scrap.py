import json
import requests
import traceback
from bs4 import BeautifulSoup as bs

station_no_dict = {
    "1020" : "20000001",
    "30" : "20000015",                
    "40" : "20000017",
    "else" : "20000019"
    }



def scrap_news_10_30():
    try:
        result_list = list()
        for keyword in ["entertainment" , "sports", "lifestyle"]:
            for i in range(1,3):
                url = f"https://www.yna.co.kr/{keyword}/all/{i}"
                response = requests.get(url)
                soup = bs(response.text, "html.parser")
                a_list = soup.select("#container > div > div > div.section01 > section > div.list-type038 > ul > li > div > div.news-con > a > .tit-news")
                pure_text_list = [x.get_text() for x in a_list]
                result_list += pure_text_list
        return {"code" : 200 , "data" : result_list}
    except:
        print(traceback.format_exc())
        return {"code" : 500 , "message" : "Internal Error"}
    
    
def scrap_news_else():
    try:
        result_list = list()
        for keyword in ["economy" , "society", "politics", "industry"]:
            for i in range(1,3):
                url = f"https://www.yna.co.kr/{keyword}/all/{i}"
                response = requests.get(url)
                soup = bs(response.text, "html.parser")
                a_list = soup.select("#container > div > div > div.section01 > section > div.list-type038 > ul > li > div > div.news-con > a > .tit-news")
                pure_text_list = [x.get_text() for x in a_list]
                result_list += pure_text_list
        return {"code" : 200 , "data" : result_list}
    except:
        print(traceback.format_exc())
        return {"code" : 500 , "message" : "Internal Error"}
        
    


def scrap_movie():
    try:
        url = "https://movie.daum.net/ranking/reservation"
        response = requests.get(url)
        soup = bs(response.text, "html.parser")
        raw_movie_list = soup.select("#mainContent > div > div.box_ranking > ol > li > div > div.thumb_cont > strong > a")
        pure_text_list = [x.get_text() for x in raw_movie_list]
        pure_text_list = pure_text_list[0:10]
        return {"code" : 200 , "data" : pure_text_list}
    except:
        print(traceback.format_exc())
        return {"code" : 500 , "message" : "Internal Error"}
        

def scrap_music(age):
    try:
        if age < 30:
            station_no = station_no_dict["1020"]
        elif age >=30 and age <40:
            station_no = station_no_dict["30"]
        elif age >=40 and age <50:
            station_no = station_no_dict["40"]
        else:
            station_no = station_no_dict["else"]
        headers = {
            'Host' : 'apis.naver.com',
            'Connection' : 'keep-alive',
            'sec-ch-ua' : '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
            'Accept' : 'application/json',
            'sec-ch-ua-mobile' : '?0',
            'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
            'sec-ch-ua-platform' : '"macOS"',
            'Origin' : 'https://vibe.naver.com',
            'Sec-Fetch-Site' : 'same-site',
            'Sec-Fetch-Mode' : 'cors',
            'Sec-Fetch-Dest' : 'empty',
            'Referer' : 'https://vibe.naver.com/dj-station',
            'Accept-Encoding' : 'gzip, deflate, br',
            'Accept-Language' : 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
        }
        url = f"https://apis.naver.com/vibeWeb/musicapiweb/v1/station/{station_no}/tracks?limit=10"
        response = requests.get(url, headers= headers)
        if response.status_code != 200:
            return {"code" : 500, "message" : "Internal Error"}
        
        raw_track_list = response.json()["response"]["result"]["stationList"][0]["tracks"]
        track_list = [f"{x['trackTitle']}  -  {x['artists'][0]['artistName']}" for x in raw_track_list]
        return {"code" : 200 , "data" : track_list}
    except:
        print(traceback.format_exc())
        return {"code" : 500 , "message" : "Internal Error"}

if __name__ == "__main__":
    print(scrap_movie())
    pass