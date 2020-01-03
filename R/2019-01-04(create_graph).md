```r
# 산점도 만들기

# 1. 배경 설정하기
# x축은 displ, y축은 hwy로 지정해 배경 생성
ggplot(data = mpg, aes(x = displ, y = hwy))

# 2. 그래프 추가하기
# 배경에 산점도 추가
ggplot(data = mpg, aes(x = displ, y = hwy)) + geom_point()

# 3. 축 범위를 조정하는 설정 추가하기
# x축 범위 3~6으로 지정
ggplot(data = mpg, aes(x = displ, y = hwy)) + geom_point() + xlim(3, 6)

# x축 범위 3~6, y축 범위 10~30으로 지정
ggplog(data = mpg, aes(x = displ, y = hwy)) +
	geom_point() + 
	xlim(3, 6) +
	ylim(10, 30)
```

```r
# 평균 막대 그래프 만들기

# 1. 집단별 평균표 만들기
library(dplyr)

df_mpg <- mpg %>%
	group_by(drv) %>%
	summarise(mean_hwy = mean(hwy))

df_mpg

# 2. 그래프 생성하기
ggplot(data = df_mpg, aes(x = drv, y = mean_hwy)) + geom_col()

# 3. 크기 순으로 정렬하기
ggplot(data = df_mpg, aes(x = reorder(drv, -mean_hwy), y = mean_hwy)) + geom_col()
```

```r
# 빈도 막대 그래프 만들기
ggplot(data = mpg, aes(x = drv)) + geom_bar()
ggplot(data = mpg, aes(x = hwy)) + geom_bar()
```

```r
# 시계열 그래프 만들기
ggplot(data = economics, aes(x = date, y = unemploy)) + geom_line()
```

```r
# 상자 그림 만들기
ggplot(data = mpg, aes(x = drv, y = hwy)) + geom_boxplot()
```

```r
# 정리하기

## 1. 산점도
ggplot(data = mpg, aes(x = displ, y = hwy)) + geom_point()

# 축 설정 추가
ggplot(data = mpg, aes(x = displ, y = hwy)) +
	geom_point() + 
	xlim(3, 6) + 
	ylim(10, 30)

## 2. 평균 막대 그래프

# 1단계. 평균표 만들기
df_mpg <- mpg %>%
	group_by(drv) %>%
	summarise(mean_hwy = mean(hwy))

# 2단계. 그래프 생성하기, 크기순 정렬하기
ggplot(data = df_mpg, aes(x = reorder(drv, -mean_hwy), y = mean_hwy)) + geom_col()

## 3. 빈도 막대 그래프
ggplot(data = mpg, aes(x = drv)) + geom_bar()

## 4. 선 그래프
ggplot(data = economics, aes(x = date, y = unemploy)) + geom_line()

## 5. 상자 그림
ggplot(data = mpg, aes(x = drv, y = hwy)) + geom_boxplot()
```

|       값       |         내용         |
| :------------: | :------------------: |
|  geom_point()  |        산점도        |
|   geom_col()   | 막대 그래프 - 요약표 |
|   geom_bar()   | 막대 그래프 - 원자료 |
|  geom_line()   |      선 그래프       |
| geom_boxplot() |      상자 그림       |

