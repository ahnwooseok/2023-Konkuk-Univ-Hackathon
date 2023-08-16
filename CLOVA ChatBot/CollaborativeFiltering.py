import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

# 가상의 데이터셋 생성 (연령대, 성별, 음악 장르 선호도)
data = {
    'Age': [20, 30, 40, 20, 30, 40],
    'Gender': ['Female', 'Male', 'Male', 'Female', 'Male', 'Female'],
    'Pop': [5, 4, 3, 4, 2, 1],
    'Rock': [4, 5, 4, 3, 4, 5],
    'Jazz': [2, 1, 1, 3, 2, 1]
}

df = pd.DataFrame(data)

# 사용자 입력 받기
user_age = int(input("나이를 입력하세요: "))
user_gender = input("성별을 입력하세요 (Male 또는 Female): ")

# 사용자 정보와 가장 유사한 그룹 찾기
user_group = df[(df['Age'] == user_age) & (df['Gender'] == user_gender)]
other_groups = df[(df['Age'] != user_age) | (df['Gender'] != user_gender)]

# 코사인 유사도 계산
cosine_sim = cosine_similarity(user_group.iloc[:, 2:], other_groups.iloc[:, 2:])
similarity_scores = cosine_sim[0]

# 유사도가 가장 높은 그룹 선택
most_similar_group_index = similarity_scores.argmax()
recommended_group = other_groups.iloc[most_similar_group_index]

# 추천된 그룹의 음악 장르 출력
recommended_music_genres = recommended_group.iloc[:, 2:].idxmax(axis=1)
print("추천된 음악 장르:", recommended_music_genres.values[0])