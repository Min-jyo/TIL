# 8. 제어문

### 1. if, elif, else (조건문)

ex) 예제1

```python
if 조건 :
		조건이 참일 경우
else : 
		조건이 거짓일 경우
```

ex) 예제2

```python
if 조건1:
		조건1이 참일 경우
else : 
		조건1이 거짓일 경우
		if 조건2:
				조건1은 거짓이나, 조건2는 참일 경우
		else:
				조건1,2가 모두 거짓일 경우
```

ex) 예제3

```python
if 조건1:
		조건1이 참일 경우
elif 조건2:
		조건1은 거짓이나, 조건2가 참일 경우
else:
		조건1,2가 모두 거짓일 경우
```



### 2. 조건표현식

```python
is_holiday = True

if is_holiday:
    print("Good")
else:
    print("Bad")
// Good
```



### 3. 중첩 조건표현식

 vacation에 1에서 10중 아무 값이나 할당 후, if, elif, else문과 중첩 조건표현식을 사용해서 각각 vacation이 7이상이면 'Good', 5이상이면 'Normal', 그 이하면 'Bad'를 출력하는 코드를 짜본다. 

```python
// if elif else 문
if vacation >= 7:
	print('Good')
elif vacation >= 5:
	print('Normal')
else:
	print('Bad')
// Good
--------------------------
// 중첩 조건 표현식
if vacation >= 7:
    print('Good')
else:
    if vacation >=5 :
        print('Normal')
    else: 
    	print('Bad')
// Good
```



### 4. for문 (조건에 따른 순회)

1. 언제 사용하는가?

   시퀸스형 데이터를 순회하고자 할 때 사용한다.

   

2. 문법 : 

   ```python
   for 항목 in 순회가능(iterable)객체:
   	<항목을 사용한 코드>
   ```

   iterable한 객체에는 문자열, 튜플, 딕셔너리, 셋등이 있다.

   ```python
   >>> champion_list = ['lux','ahri','ezreal','zed']
   >>> for champion in champion_list:
   		print(champion)
   // lux
   ahri
   ezreal
   zed
   ```

   딕셔너리에서 키나 값을 순회할 때는, iterable한 객체의 위치에 dict.keys()나 dict.values()를 사용한다.

   키, 값을 모두 순회할 때에는 dict.items()를 사용한다.

   

3. 중첩

   ```python
   for 항목1 in iterable객체1:
   	iterable객체1을 순회하며 실행할 코드
   	for 항목2 in iterable객체2:
   		iterable객체1 내부에서 새로운 iterable객체2를 순회하며 실행할 코드
   ```

   

4. 중단하기(break)

   데이터를 순회하던 중, 특정 조건에서 순회를 멈추고 반복문을 빠져나갈 때 사용한다.

   ```python
   for 항목 in iterable 객체 :
   	(반복문을 중단하고 싶을때) break
   ```

   

5. 건너뛰기(continue)

   데이터를 순회하던 중, 반복문을 중단하지 않고 다음 반복으로 건너뛸 때 사용한다.

   ```python
   for 항목 in iterable객체:
   	(현재의 반복을 중간에 그만두고 다음 반복으로 건너뛰고 싶을 때) continue
   ```

   

6. break확인(else)

   for문으로 데이터를 순회하던 중, break문이 호출되지 않고 반복문이 종료되면 else문이 실행된다.

   ```python
   for 항목 in iterable 객체:
   	pass
   else:
       break가 한 번도 호출되지 않았을 경우의 코드
   ```

   

7. 여러 시퀸스 동시 순회(zip)

   ```python
   >>> fruits = ['apple','banana','melon']
   >>> colors = ['red','yellow','green','purple']
   >>> for fruit, color in zip(fruits, colors):
   		print('fruit:',fruit, ' color', color)
   
   fruit: apple color red
   fruit: banana color yellow
   fruit: melon color green
   ```

   zip으로 묶은 시퀸스들 중, 가장 짧은 시퀸스가 완료되면 순회가 종료된다. 

    

   zip을 사용하면 여러 시퀸스로부터 튜플을 만들 수 있다.

   zip으로 반환되는 것은 리스트가 아닌 zip클래스 형태의 iterable객체이기 때문에, 리스트 형태로 사용하려면 list()함수를 사용해준다.

    

8. 숫자 시퀸스 생성

   range()함수는 특정 범위의 숫자 스트림 데이터를 반환한다.

   ```python
   // 문법
   range(start, stop, step)
   
   >>> for x in range(0, 10):
       	print(x)
   0
   1
   2
   3
   4
   5
   6
   7
   8
   9
   ```



### 5. while문(반복문)

for문과 유사하나, while뒤의 조건이 참일 경우에 계속해서 반복한다.

```python
// 문법
while 조건 : 
	조건이 참일경우 실행
	조건이 거짓이 될 경우까지 계속해서 반복
    
>>> count = 0
>>> while count < 10:
    	print(count)
        count += 1
0
1
2
3
4
5
6
7
8
9
```



### 6. 컴프리헨션(Comprehension)

iterable한 객체로부터 파이썬의 자료구조를 만드는 방법.

가독성과 사용성에서 이득을 얻을 수 있을 경우 항상 사용해준다.



1. 리스트 컴프리헨션

   ```python
   [표현식 for 항목 in iterable객체]
   ```

   ex) 리스트 컴프리헨션을 사용하여 [1,2,3,4,5]를 만드는 방법

   ```python
   >>> [item for item in range(1, 6)]
   [1,2,3,4,5]
   ```

2. 리스트 컴프리헨션의 중첩

   ```python
   [(color, fruit) for color in olors for fruit in fruits]
   ```



3. 셋 컴프리헨션

   ```python
   {표현식 for 표현식 in iterable객체}
   ```

   