

### 데이터를 파악할 때 사용하는 함수들

|   함수    |          기능           |
| :-------: | :---------------------: |
|  head()   |   데이터 앞부분 출력    |
|  tail()   |   데이터 뒷부분 출력    |
|  View()   | 뷰어 창에서 데이터 확인 |
|   dim()   |    데이터 차원 출력     |
|   str()   |    데이터 속성 출력     |
| summary() |    요약 통계량 출력     |



```r
# exam 데이터 파악하기

exam <- read.csv("csv_exam.csv")
head(exam) # 앞에서부터 6행까지 출력
head(exam, 10) # 앞에서부터 10행까지 출력
tail(exam) # 뒤에서부터 6행까지 출력
tail(exam, 10) # 뒤에서부터 10행까지 출력
View(exam) # 데이터 뷰어 창에서 exam 데이터 확인
dim(exam) # 행, 열 출력
str(exam) # 데이터 속성 확인
summary(exam) # 요약 통계량 출력
```



### 요약 통계량 출력값의 의미

| 출력값 |         통계량          |                 설명                 |
| :----: | :---------------------: | :----------------------------------: |
|  Min   |     최솟값(Minimum)     |             가장 작은 값             |
| 1st Qu | 1사분위수(1st Quantile) | 하위 25%(4분의1) 지점에 위치하는 값  |
| Median |     중앙값(Median)      |          중앙에 위치하는 값          |
|  Mean  |       평균(Mean)        |  모든 값을 더해 값의 개수로 나눈 값  |
| 3rd Qu | 3사분위수(3rd Quantile) | 하위 75%(4분의 3) 지점에 위치하는 값 |
|  Max   |     최댓값(Maximum)     |              가장 큰 값              |



```r
# mpg 데이터 파악하기

install.packages("ggplot2")

#ggplo2의 mpg 데이터를 데이터 프레임 형태로 불러오기
mpg <- as.data.frame(ggplot2::mpg)

head(mpg) # Raw 데이터 앞부분 확인
tail(mpg) # Raw 데이터 뒷부분 확인
View(mpg) # Raw 데이터 뷰어 창에서 확인
dim(mpg) # 행, 열 출력
str(mpg) # 데이터 속성 확인
?mpg # 데이터에 대한 설명 (help) # mpg 설명 글 출력
summary(mpg) # 요약 통계량 출력
```



```r
# 변수명 바꾸기
df_raw <- data.frame(var1 = c(1, 2, 1),
                    var2 = c(2, 3, 2))
df_raw
```

```r
install.packages("dplyr") # dplyr 설치
library(dplyr) # dplyr 로드
df_new <- df_raw # 복사본 생성
df_new # 출력
df_new <- rename(df_new, v2 = var2) # var2를 v2로 수정
df_new
# 변수명 수정 확인
df_raw
df_new
```



```r
# 변수 조합해 파생변수 만들기
df <- data.frame(var1 = c(4, 3, 8), 
                var2 = c(2, 6, 1))
df

df$var_sum <- df$var1 + df$var2 # var_sum 파생변수 생성
df

df$var_mean <- (df$var1 + df$var2)/2 # var_mean 파생변수 생성
df
```



```r
# mpg 통합 연비 변수 만들기
mpg$total <- (mpg$cty + mpg$hwy)/2 # 통합 연비 변수 생성
head(mpg)
mean(mpg$total) # 통합 연비 변수 평균
```



```r
# 조건문을 활용해 파생변수 만들기
summary(mpg$total) # 요약 통계량 산출
hist(mpg$total) # 히스토그램 생성

# 20이상이면 pass, 그렇지 않으면 fail 부여
mpg$test <- ifelse(mpg$total >= 20, "pass", "fail") 

head(mpg, 20) # 데이터 확인

table(mpg$test) # 연비 합격 빈도표 생성
library(ggplot2) # ggplot2 로드
qplot(mpg$test) # 연비 합격 빈도 막대 그래프 생성
```



```r
# 중첩 조건문 활용하기 

# total을 기준으로 A, B, C, 등급 부여
mpg$grade <- ifelse(mpg$total >= 30, "A",
                   ifelse(mpg$total >= 20, "B", "C"))

head(mpg, 20) # 데이터 확인

table(mpg$grade) # 등급 빈도표 생성
qplot(mpg$grade) # 등급 빈도 막대 그래프 생성
```



```r
# 원하는 만큼 범주 만들기

# A, B, C, D 등급 만들기
mpg$grade2 <- ifelse(mpg$total >= 30, "A", 
                    ifelse(mpg$total >= 25, "B", 
                          ifelse(mpg$total >= 20, "C", "D")))
```



```R
# 정리하기 

# 1. 데이터 준비, 패키지 준비
mpg <- as.data.frame(ggplot2::mpg) # 데이터 불러오기
library(dplyr) 					   # dplyr 로드
library(ggplot2)				   # ggplot2 로드

# 2. 데이터 파악
head(mpg)	# Raw 데이터 앞부분
tail(mpg)	# Raw 데이터 뒷부분
View(mpg)	# Raw 데이터 뷰어 창에서 확인
dim(mpg)	# 차원
str(mpg)	# 속성
summary(mpg)	# 요약 통계량

# 3. 변수명 수정
mpg <- rename(mpg, company = manufacturer)

# 4. 파생변수 생성
mpg$total <- (mpg$cty + mpg$hwy)/2	# 변수 조합
mpg$test <- ifelse(mpg$total >= 20, "pass", "fail")	# 조건문 활용

# 5. 빈도 확인
table(mpg$test)	# 빈도표 출력
qplot(mpg$test) # 막대 그래프 생성
```