# Importing Required Modules
from rembg import remove
from PIL import Image
# 침식 연산 (morph_erode.py)

import cv2
import numpy as np



# Store path of the image in the variable input_path
input_path = "./datas/sohee.png"
# Store path of the output image in the variable output_path
output_path = "./datas/detected_sohee.png"

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


output.save(output_path)

img = cv2.imread(output_path)
# 구조화 요소 커널, 사각형 (3x3) 생성 ---①
k = cv2.getStructuringElement(cv2.MORPH_ERODE, (3,3))
# 침식 연산 적용 ---②
dilation = cv2.dilate(img, k)

cv2.imwrite(output_path, dilation)
