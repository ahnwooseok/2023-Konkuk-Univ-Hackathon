# Importing Required Modules
from rembg import remove
from PIL import Image
# 침식 연산 (morph_erode.py)
import cv2
import numpy as np
import traceback
import io

#morphology erode 함수
def remove_background_erode(input_path):
    try:
    # Processing the image
        input = Image.open(input_path)

        # Removing the background from the given Image
        output = remove(input)


        width, height = output.size

        for x in range(width):
            for y in range(height):
                r = output.getpixel((x, y))
                # 픽셀이 검정색(0, 0, 0)인 경우만 처리 (배경은 흰색이므로)
                if r == (0, 0, 0, 0):
                    output.putpixel((x, y), (0, 0, 0))
                else:
                    output.putpixel((x, y), (255, 255, 255))
        img = np.array(output)
        k = cv2.getStructuringElement(cv2.MORPH_RECT, (3,3))
        erosion = cv2.erode(img, k)
        print(type(erosion))
        erosion_bytes = erosion.tobytes()
        
        return {"code" : 200 , "data" : erosion_bytes}

    except:
        print(traceback.format_exc())
        return {"code" : 500, "message" : "Internal Error"}
    
    
#morphology dilate 함수
def remove_background_dilate(input_path):
    try:
    # Processing the image
        input = Image.open(input_path)

        # Removing the background from the given Image
        output = remove(input)


        width, height = output.size

        for x in range(width):
            for y in range(height):
                r = output.getpixel((x, y))
                # 픽셀이 검정색(0, 0, 0)인 경우만 처리 (배경은 흰색이므로)
                if r == (0, 0, 0, 0):
                    output.putpixel((x, y), (0, 0, 0))
                else:
                    output.putpixel((x, y), (255, 255, 255))
        img = np.array(output)
        k = cv2.getStructuringElement(cv2.MORPH_RECT, (3,3))
        dilation = cv2.dilate(img, k)
        pil_dilation = Image.fromarray(dilation)
        
        dilation_bytes = io.BytesIO()
        pil_dilation.save(dilation_bytes, format="PNG")
        dilation_bytes.seek(0)
        return {"code" : 200 , "data" : dilation_bytes}

    except:
        print(traceback.format_exc())
        return {"code" : 500, "message" : "Internal Error"}
    

