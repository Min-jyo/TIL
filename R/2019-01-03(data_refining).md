```r
# 결측치 찾기
df <- data.frame(sex = c("M", "F", NA, "M", "F"),
                score = c(5, 4, 3, 4, NA))
df

# 결측치 확인
is.na(df)

# 결측치 빈도 출력
table(is.na(df))

# sex 결측치 빈도 출력
table(is.na(df$sex))

# score 결측치 빈도 출력
table(is.na(df$score))

# 평균 산출
mean(df$score)

# 합계 산출
sum(df$score)
```

```r
# 결측지 제거하기

library(dplyr)	# dplyr 패키지 로드
df %>% filter(is.na(score))	# score가 NA인 데이터만 출력

df %>% filter(!is.na(score)) # score 결측치 제거

df_nomiss <- df %>% filter(!is.na(score)) # score 결측치 제거
mean(df_nomiss$score) # score 평균 산출

sum(df_nomiss$score) # score 합계 산출

df_nomiss <- df %>% filter(!is.na(score) & !is.na(sex)) # score, sex 결측치 제거
df_nomiss # 출력

df_nomiss2 <- na.omit(df)	# 모든 변수에 결측치 없는 데이터 추출
df_nomiss2	# 출력
```

```r
# 함수의 결측치 제외 기능 이용하기 

mean(df$score, na.rm = T)	# 결측치 제외하고 평균 산출
sum(df$score, na.rm = T)	# 결측치 제외하고 합계 산출

exam <- read.csv("csv_exam.csv")	# 데이터 불러오기
exam[c(3, 8, 15), "math"] <- NA	# 3, 8, 15행의 math에 NA 할당
exam

exam %>% summarise(mean_math = mean(math)) # math 평균 산출

# math 결측치 제외하고 평균 산출
exam %>% summarise(mean_math = mean(math, na.rm = T))

exam %>% summarise(mean_math = mean(math, na.rm = T),	# 평균 산출
                   sum_math = sum(math, na.rm = T),	# 합계 산출
                   median_math = median(math, na.rm = T))	# 중앙값 산출
```

```R
# 평균값으로 결측치 대체하기
mean(exam$math, na.rm = T) # 결측치 제외하고 math 평균 산출

exam$math <- ifelse(is.na(exam$math), 55, exam$math) # math가 NA면 55로 대체
table(is.na(exam$math))	# 결측치 빈도표 생성

exam # 출력

mean(exam$math) # math 평균 산출
```

```r
# 이상치 제거하기 - 존재할 수 없는 값

# 1. 이상치 포함된 데이터 생성
outlier <- data.frame(sex = c(1, 2, 1, 3, 2, 1), 
                     score = c(5, 4, 3, 4, 2, 6,))
outlier

# 2. 이상치 확인하기
table(outlier$sex)
table(outlier$score)

# 3. 결측 처리하기
outlier$sex <- ifelse(outlier$sex == 3, NA, outlier$sex) # sex가 3이면 NA 할당
outlier

outlier$score <- ifelse(outlier$score > 5, NA, outlier$score) # score가 5보다 크면 NA할당
outlier

# 4. filter()를 이용한 결측치 제외후 성별에 따른 score평균을 구함
outlier %>%
	filter(!is.na(sex) & !is.na(score)) %>%
	group_by(sex) %>%
	summarise(mean_score = mean(score))
```



### boxplot에서 각각이 의미하는것

|      상자 그림      |      값       |              설명              |
| :-----------------: | :-----------: | :----------------------------: |
| 상자 아래 세로 점선 |   아랫수염    |  하위 0~25% 내에 해당하는 값   |
|      상자 밑면      | 1사분위수(Q1) |        하위 25% 위치 값        |
|   상자 내 굵은 선   | 2사분위수(Q2) |    하위 50% 위치 값(중앙값)    |
|      상자 윗면      | 3사분위수(Q3) |        하위 75% 위치 값        |
|  상자 위 세로 점선  |    윗 수염    | 하위 75%~100% 내에 해당하는 값 |
|   상자 밖 가로선    |  극단치 경계  |  Q1, Q3 밖 1.5 IQR 내 최댓값   |
|   상자 밖 점 표식   |    극단치     | Q1, Q3 밖 1.5 IQR을 벗어난 값  |



```R
# 상자 그림을 만들 때 사용하는 다섯 가지 통계치를 출력하는 기능
boxplot(mpg$hwy)$stats # 상자 그림 통계치 출력

# 결측 처리하기

# 1. 12~37 벗어나면 NA 할당
mpg$hwy <- ifelse(mpg$hwy < 12 | mpg$hwy > 37, NA, mpg$hwy)
table(is.na(mpg$hwy))

# 2. 결측치를 제외하고 간단한 분석
mpg %>%
	group_by(drv) %>%
	summarise(mean_hwy = mean(hwy, na.rm = T))
```

```R
# 정리하기

### 1. 결측치 정제하기

# 결측치 확인
table(is.na(df$score))

# 결측치 제거
df_nomiss <- df %>% filter(!is.na(score))

# 여러 변수 동시에 결측치 제거
df_nomiss <- df %>% filter(!is.na(score) & !is.na(sex))

# 함수의 결측치 제외 기능 이횽하기
mean(df$score, na.rm = T)
exam %>% summarise(mean_math = mean(math, na.rm = T))

### 2. 이상치 정제하기

# 이상치 확인
table(outlier$sex)

# 결측 처리
outlier$sex <- ifelse(outlier$sex == 3, NA, outlier$sex)

# boxplot으로 극단치 기준 찾기
boxplot(mpg$hwy)$stats

# 극단치 결측 처리
mpg$hwy <- ifelse(mpg$hwy < 12 | mpg$hwy > 37, NA, mpg$hwy)
```

