### dplyr 함수

| dplyr 함수  |       기능        |
| :---------: | :---------------: |
|  filter()   |      행 추출      |
|  select()   |   열(변수) 추출   |
|  arrange()  |       정렬        |
|  mutate()   |     변수 추가     |
| summarise() |    통계치 산출    |
| group_by()  |  집단별로 나누기  |
| left_join() | 데이터 합치기(열) |
| bind_rows() | 데이터 합치기(행) |

```r
# 조건에 맞는 데이터만 추출하기

library(dplyr)
exam <- read.csv("csv_exam.csv")
exam

# exam에서 class가 1인 경우만 추출해 출력
exam %>% filter(class == 1)

# 2반인 경우만 추출
exam %>% filter(class == 2)

# 1반이 아닌 경우
exam %>% filter(class != 1)

# 3반이 아닌 경우
exam %>% filter(class != 3)
```

```r
# 초과, 미만, 이상, 이하 조건 걸기

# 1. 수학 점수가 50점을 초과한 경우
exam %>% filter(math > 50)

# 2. 수학 점수가 50점 미만인 경우
exam %>% filter(math < 50)

# 3. 영어 점수가 80점 이상인 경우
exam %>% filter(english >= 80)

# 4. 영어 점수가 80점 이하인 경우
exam %>% filter(english <= 80)
```

```r
# 여러 조건을 충족하는 행 추출하기

# 1. 1반이면서 수학 점수가 50점 이상인 경우
exam %>% filter(class == 1 & math >= 50)

# 2. 2반이면서 영어 점수가 80점 이상인 경우
exam %>% filter(class == 2 & english >= 80)
```

```r
# 여러 조건 중 하나 이상 충족하는 행 추출하기

# 1. 수학 점수가 90점 이상이거나 영어 점수가 90점 이상인 경우
exam %>% filter(math >= 90 | english >= 90)

# 2. 영어 점수가 90점 미만이거나 과학 점수가 50점 미만인 경우
exam %>% filter(english < 90 | science < 50)
```

```r
# 목록에 해당하는 행 추출하기 

# 1. 1,3,5반에 해당하면 추출
exam %>% filter(class == 1 | class == 3 | class == 5)

# 2. 1,3,5반에 해당하면 추출
exam %>% filter(class %in% c(1, 3, 5))
```

```r
# 추출한 행으로 데이터 만들기

# 1. class가 1인 행 추출, class1에 할당
class1 <- exam %>% filter(class == 1)

# 2. class가 2인 행 추출, class2에 할당
class2 <- exam %>% filter(class == 2)

# 3. 1반 수학 점수 평균 구하기
mean(class1$math)

# 4. 2반 수학 점수 평균 구하기
mean(class2$math)
```

### R에서 사용하는 기호들 ( 논리 연산자, 산술 연산자 )

| 논리 연산자 |    기능     |
| :---------: | :---------: |
|      <      |    작다     |
|     <=      | 작거나 같다 |
|      >      |    크다     |
|     >=      | 크거나 같다 |
|     ==      |    같다     |
|     !=      |  같지 않다  |
|     \|      |    또는     |
|      &      |   그리고    |
|   %ㅑㅜ%    |  매칭 확인  |

| 산술 연산자 |      기능       |
| :---------: | :-------------: |
|      +      |     더하기      |
|      -      |      빼기       |
|      *      |     곱하기      |
|      /      |     나누기      |
|   ^ , **    |      제곱       |
|     %/%     |   나눗셈의 몫   |
|     %%      | 나눗셈의 나머지 |

```r
# 변수 추출하기

# math 추출
exam %>% select(math)

# english 추출
exam %>% select(english)

# class, math, english 변수 추출
exam %>% select(class, math, english)

# math 제외
exam %>% select(-math)

# math, english 제외
exam %>% select(-math, -english)
```

```r
# dplyr 함수 조합하기

# 1. class가 1인 행만 추출한 다음 english 추출
exam %>% filter(class == 1) %>% select(english)

# 2. 가독성 있게 줄 바꾸기
exam %>% 
	filter(class == 1) %>%
	select(english)

# 3. 일부만 출력하기
exam %>%
	select(id, math) %>% # id, math 추출
	head	# 앞부분 6행까지 추출

exam %>%
	select(id, math) %>%
	head(10)
```

```r
# 오름차순으로 정렬하기

# 1. math 오름차순 정렬
exam %>% arrange(math)

# 2. class 및 math 오름차순 정렬

exam %>% arrange(class, math)
```

```r
# 내림차순으로 정렬하기

# 2. math 내림차순 정렬
exam %>% arrange(desc(math))
```

```r
# 파생변수 추가하기

# 1. 총합 변수 추가
exam %>%
	mutate(total = math + english + science) %>%	# 총합 변수 추가
	head	# 일부 추출

# 2. 여러 파생변수 한 번에 추가하기
exam %>%
	mutate(total = math + english + science,	# 총합 변수 추가
           mean = (math + english + science)/3) %>%	# 총평균 변수 추가
	head	# 일부 추출

# 3. mutate()에 ifelse() 적용하기
exam %>%
	mutate(test = ifelse(science >= 60, "pass", "fail")) %>%
	head

# 4. 추가한 변수를 dplyr 코드에 바로 활용하기
exam %>%
	mutate(total = math + english + science) %>%
	arrange(total) %>%
	head
```

```r
# 집단별로 요약하기
exam %>% summarise(mean_math = mean(math)) # math 평균 산출

exam %>%
	group_by(class) %>%	# class별로 분리
	summarise(mean_math = mean(math))	# math 평균 산출

# 여러 요약 통계량 한 번에 산출하기
exam %>%
	group_by(class) %>%	# class별로 분리
	summarise(mean_math = mean(math),	# math 평균
              sum_math = sum(math),	# math 합계
              median_math = median(math),	# math 중앙값
              n = n())	# 학생 수

# 각 집단별로 다시 집단 나누기
mpg %>%
	group_by(manufacturer, drv) %>%	# 회사별, 구동 방식별 분리
	summarise(mean_cty = mean(cty)) %>%	# cty 평균 산출
	head(10)	# 일부 출력
```

```r
# dplyr 조합하기
mpg %>%
	group_by(manufacturer) %>%	# 회사별로 분리
	filter(class == "suv") %>%	# suv 추출
	mutate(tot = (cty+hwy)/2) %>%	# 통합 연비 변수 생성
	summarise(mean_tot = mean(tot)) %>%	# 통합 연비 평균 산출
	arrange(desc(mean_tot)) %>%	# 내림차순 정렬
	head(5)	# 1~5위까지 출력
```

```r
# 가로로 합치기

# 1. 중간고사 데이터 생성
test1 <- data.frame(id = c(1, 2, 3, 4, 5), 
                   midterm = c(60, 80, 70, 90, 85))

# 2. 기말고사 데이터 생성
test2 <- data.frame(id = c(1, 2, 3, 4, 5), 
                   final = c(70, 83, 65, 95, 80))

test1 # test1 출력
test2 # test2 출략
```

```r
# 다른 데이터를 활용해 변수 추가하기
name <- data.frame(class = c(1, 2, 3, 4, 5), 
                   teacher = c("kim", "lee", "park", "choi", "jung"))
name

exam_new <- left_join(exam, name, by = "class")
exam_new
```

```r
 # 세로로 합치기

# 1. 학생 1~5번 시험 데이터 생성
group_a <- data.frame(id = c(1, 2, 3, 4, 5),
                      test = c(60, 80, 70, 90, 85))

# 2. 학생 6~10번 시험 데이터 생성
group_b <- data.frame(id = c(6, 7, 8, 9, 10),
                      test = c(70, 83, 65, 95, 80))

# group_a 출력
group_a

# group_b 출력
group_b

group_all <- bind_rows(group_a, group_b) # 데이터 합쳐서 group_all에 할당
group_all	# group_all 출력
```

```r
# 정리하기

## 1. 조건에 맞는 데이터만 추출하기
exam %>% filter(english >= 80)

# 여러 조건 동시 충족
exam %>% filter(class == 1 & math >= 50)

# 여러 조건 중 하나 이상 충족
exam %>% filter(math >= 90 | english >= 90)
exam %>% filter(class %in% c(1, 3, 5))

## 2. 필요한 변수만 추출하기
exam %>% select(math)
exam %>% select(class, math, english)

## 3. 함수 조합하기, 일부만 출력하기
exam %>%
	select(id, math) %>%
	head(10)

## 4. 순서대로 정렬하기
exam %>% arrange(math)	# 오름차순 정렬
exam %>% arrange(desc(math))	# 내림차순 정렬
exam %>% arrange(class, math)	# 여러 변수 기준 오름차순 정렬

## 5. 파생변수 추가하기
exam %>% mutate(total = math + english _ science)

# 여러 파생변수 한 번에 추가하기
exam %>%
	mutate(total = math + english +_ science,
           mean = (math + english + science)/3)

# mutate()에 ifelse() 적용하기
exam %>% mutate(test = ifelse(science >= 60, "pass", "fail"))

# 추가한 변수를 dplyr 코드에 바로 활용하기
exam %>%
	mutate(total = math + english + science) %>%
	arrange(total)

## 6. 집단별로 요약하기
exam %>%
	group_by(class) %>%
	summarise(mean_math = mean(math))

# 각 집단별로 다시 집단 나누기
mpg %>%
	group_by(manufacturer, drv) %>%
	summarise(mean_cty = mean(cty))

### 7. 데이터 합치기
# 가로로 합치기
total <- left_join(test1, test2, by = "id")

# 세로로 합치기
group_all <- bind_rows(group_a, group_b)
```

