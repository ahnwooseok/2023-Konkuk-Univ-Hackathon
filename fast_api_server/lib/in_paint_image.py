# Importing Required Modules
from rembg import remove
from PIL import Image

# Store path of the image in the variable input_path
input_path = "./datas/person1.png"
# Store path of the output image in the variable output_path
output_path = "./datas/detected_person.png"

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

