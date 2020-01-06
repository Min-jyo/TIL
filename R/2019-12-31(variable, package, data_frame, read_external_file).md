```R
# 변수 만들기

a <- 1
a

b <- 2
b

c <- 3
c

d <- 3.5
d

a+b

a+b+c

4/b

5*b
```

```R
# 여러 값으로 구성된 변수 만들기

var1 <- c(1, 2, 5, 7, 8) # 숫자 5개로 구성된 var1 생성
var1

var2 <- c(1:5) # 1~5까지 연속 값으로 var2 생성
var2

var3 <- seq(1, 5)
var3

var4 <- seq(1, 10, by = 2) # 1~10까지 2 간격 연속 값으로 var4 생성
var4

var5 <- seq(1, 10, by = 3) # 1~10까지 3 간격 연속 값으로 var5 생성
var5

var1
var1+2

var1
var2
var1+var2
```

```R
# 문자로 된 변수 만들기

str1 <- "a"
str1

str2 <- "text"
str2

str3 <- "Hello World!"
str3

str4 <- c("a", "b", "c")
str4

str5 <- c("Hello!", "World", "is", "good!")
str5
```

```r
# 문자로 된 변수로는 연산할 수 없다.

str1+2

## Error in str1 + 2 : non-numberic argument to binary operator
```

```R
# 숫자를 다루는 함수 이용하기

# 변수 만들기
x <- c(1, 2, 3)
x

# 함수 적용하기
mean(x)

max(x)

min(x)
```

```R
# 문자를 다루는 함수 이용하기

str5

paste(str5, collapse = ",") # 쉼표를 구분자로 str5의 단어들 하나로 합치기

# 함수의 옵션 설정하기 - 파라미터

paste(str5, collapse = " ")

# 함수의 결과물로 새 변수 만들기

x_mean <- mean(x)
x_mean

str5_paste <- paste(str5, collapse = " ")
str5_paste
```

```R
# ggplot2 패키지 설치
install.packages("ggplot2")

# ggplot2 패키지 로드
library(ggplot2)

# 함수 사용

# 여러 문자로 구성된 변수 생성
x <- c("a", "a", "b", "c")
x

# 빈도 막대 그래프 출력
qplot(x)

# 함수의 다양한 기능 이용하기

# data에 mpg, x축에 hwy 변수 지정해 그래프 생성
qplot(data = mpg, x = hwy)

# x축 cty
qplot(data = mpg, x = cty)

# x축 drv, y축 hwy
qplot(data = mpg, x = drv, y = hwy)

# x축 drv, y축 hwy, 선 그래프 형태
qplot(data = mpg, x = drv, y = hwy, geom = "line")

# x축 drv, y축 hwy, 상자 그림 형태
qplot(data = mpg, x = drv, y = hwy, geom = "boxplot")

# x축 drv, y축 hwy, 상자 그림 형태, drv별 색 표현
qplot(data = mpg, x = drv, y = hwy, geom = "boxplot", colour = drv)

# qplot 함수 메뉴얼 출력
?qplot
```

```R
# 데이터 입력해 데이터 프레임 만들기

# 1. 변수 만들기
english <- c(90, 80, 60, 70)
english

math <- c(50, 60, 100, 20)
math

# 2. 데이터 프레임 만들기
# english, math로 데이터 프레임 생성해서 df_midterm에 할당
df_midterm <- data.frame(english, math)
df_midterm

# 3. 학생의 반에 대한 정보가 추가된 데이터 프레임 만들기
class <- c(1, 1, 2, 2)
class

df_midterm <- data.frame(english, math, class)
df_midterm

# 4. 분석하기
mean(df_midterm$english) # df_midterm의 english로 평균 산출
mean(df_midterm$math)

# 5. 데이터 프레임 한 번에 만들기
df_midterm <- data.frame(english = c(90,80,60,70),
                        math = c(50,60,100,20),
                        class = c(1, 1, 2, 2))

df_midterm
```

```r
# 엑셀 파일 불러오기
# readxl 패키지 설치하고 로드하기
install.packages("readxl")
library(readxl)

# 엑셀 파일 불러오기
df_exam <- read_excel("excel_exam.xlsx")
df_exam

# 분석하기
mean(df_exam$english)
mean(df_exam$science)

# 엑셀 파일 첫 번째 행이 변수명이 아니라면?
df_exam_novar <- read_excel("excel_exam_novar.xlsx", col_names = F)
df_exam_novar
```

```r
# 엑셀 파일에 시트가 여러 개 있을때
# 1. 엑셀 파일의 세 번째 시트에 있는 데이터 불러오기
df_exam_sheet <- read_excel("excel_exam_sheet.xlsx", sheet = 3)
```

```R
# CSV 파일 불러오기
# 1. CSV 파일 불러오기
df_csv_exam <- read.csv("csv_exam.csv")
df_csv_exam

# tip 문자가 들어 있는 파일을 불러올때
df_csv_exam <- read.csv("csv_exam.csv", stringsAsFactors = F)
```

```R
# 데이터 프레임을 CSV파일로 저장하기
# 1. 데이터 프레임 만들기
df_midterm <- data.frame(english = c(90, 80, 60, 70),
                        math = c(50, 60, 100, 20), 
                        class = c(1, 1, 2, 2))
df_midterm

# CSV 파일로 저장하기
write.csv(df_midterm, file = "df_midterm.csv")
```

```R
# RData 파일 활용하기
# 1. 데이터 프레임을 RData 파일로 저장하기
save(df_midterm, file = "df_midterm.rda")

# 2. RData 파일 불러오기
load("df_midterm.rda")
df_midterm
```

```r
# 엑셀 파일 불러와 df_exam에 할당하기
df_exam <- read_excel("excel_exam.xlsx")

# csv 파일 불러와 df_csv_exam에 할당하기
df_csv_exam <- read.csv("csv_exam.csv")

# Rda 파일 불러오기
load("df_midterm.rda")
```

```r
# 정리하기
# 1. 변수 만들기, 데이터 프레임만들기
english <- c(90, 80, 60, 70) # 영어 점수 변수 생성
math <- c(50, 60, 100, 20) # 수학 점수 변수 생성
data.frame(english, math) # 데이터 프레임 생성

# 2. 외부 데이터 이용하기

# 엑셀 파일
library(readxl) # readxl 패키지 로드
df_exam <- read_excel("excel_exam.xlsx") # 엑셀 파일 불러오기

# CSV 파일
df_csv_exam <- read.csv("csv_exam.csv") # CSV 파일 불러오기
write.csv(df_midterm, file = "df_midterm.csv") # CSV 파일로 저장하기

# Rda 파일
load("df_midterm.rda") # Rda 파일 불러오기
save(df_midterm, file = "df_midterm.rda") # Rda 파일로 저장하기 


```

