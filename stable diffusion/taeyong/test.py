import cv2
import numpy as np

# YOLO 모델 설정
yolo_net = cv2.dnn.readNet("./datas/yolov3.weights", "./datas/yolov3.cfg")
layer_names = yolo_net.getLayerNames()
output_layers = [layer_names[i[0] - 1] for i in yolo_net.getUnconnectedOutLayers()]

# 클래스 이름 설정 (COCO 데이터셋 기반)
classes = []
with open("./datas/coco.names", "r") as f:
    classes = [line.strip() for line in f.readlines()]

# 이미지 불러오기
img = cv2.imread("./datas/person1.png")
img = cv2.resize(img, None, fx=0.4, fy=0.4)
height, width, channels = img.shape

# 이미지를 YOLO 입력 형식으로 변환
blob = cv2.dnn.blobFromImage(img, 0.00392, (416, 416), (0, 0, 0), True, crop=False)

# YOLO 모델에 이미지 입력
yolo_net.setInput(blob)
outs = yolo_net.forward(output_layers)

# 감지된 객체 정보 추출
class_ids = []
confidences = []
boxes = []

for out in outs:
    for detection in out:
        scores = detection[5:]
        class_id = np.argmax(scores)
        confidence = scores[class_id]
        if confidence > 0.5:  # Confidence threshold 설정
            center_x = int(detection[0] * width)
            center_y = int(detection[1] * height)
            w = int(detection[2] * width)
            h = int(detection[3] * height)

            # 객체의 바운딩 박스 좌표 계산
            x = int(center_x - w / 2)
            y = int(center_y - h / 2)

            boxes.append([x, y, w, h])
            confidences.append(float(confidence))
            class_ids.append(class_id)

# NMS (비최대치 억제) 적용
indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)

# 감지된 객체에 사람이 포함되어 있는지 확인하여 그리기
font = cv2.FONT_HERSHEY_PLAIN
for i in range(len(boxes)):
    if i in indexes:
        label = str(classes[class_ids[i]])
        if label == "person":
            x, y, w, h = boxes[i]
            color = (255, 0, 0)  # 파란색
            cv2.rectangle(img, (x, y), (x + w, y + h), color, 2)
            cv2.putText(img, label, (x, y + 30), font, 3, color, 3)

# 결과 이미지 출력
cv2.imshow("Image", img)
cv2.waitKey(0)
cv2.destroyAllWindows()
