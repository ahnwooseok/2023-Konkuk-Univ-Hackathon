from rembg import remove
from PIL import Image

input_path = "/Users/ahnwooseok/Downloads/github/2023-Konkuk-Univ-Hackathon/stable diffusion/wooseok/photo2.jpeg"
out_path = "output.png"

input = Image.open(input_path)
output = remove(input)
output.save(out_path)