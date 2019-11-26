# 02. 파이썬 사용해보기

### 1. 각종 용어



1. 리터럴

   변하지 않는 고정된 데이터 자체의 표현

   ex)

   	1. 5 ( 정수형 데이터)
    	2. “Min-jyo” (문자열 데이터)
    	3. 1.4937 (부동소수점 데이터)



2. 표현식

   값을 의미하는 표현 또는 값을 반환하는 표현



3. 구문(statement)

   값의 의미를 지니지 않으며, 어떠한 목적을 수행하는 코드

-------

# 03. 변수

파이썬은 모든것(정수, 문자열, 함수 등)이 객체(= 데이터의 형태를 결정해주는 타입, 타입 변경 불가능 x)로 이루어져 있다.



변수는 단지 이름일뿐이며, 그 자체가 어떠한 값을 갖는것은 아니다.

변수는 데이터를 참조하는 역할을 할뿐이다.



### 1. id내장함수 

```
문법
id(변수)
```

1. 설명 : 변수가 참조하고 있는 객체의 메모리상에서의 고유 주소를 반환함

2. 예제 :

```python
var1 = 101
id(var1) // 4520513920 
```



### 2. type내장함수

```
문법
type(변수)
```

1. 설명 : 변수의 타입을 반환함

2. 예제 : 

```python
var1 = 101
type(var1) // <class 'int'>
type('안녕하세요') // <class 'str'>
```



위의 출력에서 ‘class’는 객체의 타입을 나타낸다.



### 3. 변수의 이름 제한



1. 변수 명명규칙
   - 소, 대 문자  ,  숫자  ,  언더스코어(_)로 구성
   - 숫자로 시작할수 없음
   - 언더스코어로 시작하는 변수명은 특별한 처리방법을 따르므로 일반적으로 사용하지 않는다.
   - 예약어와 같은 이름은 변수이름으로 사용할수 없다. 



### 4. 변수의 입력과 출력

1. 내장함수 input

```python
<문법>
input()
```

ex1) 변수에 사용자로 부터 받은 값을 저장하는 예제

```python
var = input()
```

ex2) 입력받는 프롬프트를 띄우기 위해 input에 문자열을 인자로 전달해주는 예제

```python
var = input('숫자를 입력해주세요 : ')
```



2. 출력함수 print

```python
<문법>
print()
```

ex1) 변수  var를 출력하는 예제

```python
var = 'var변수입니다.'
print(var) // var변수입니다
```

--------

# 4. 변수

### 1. 수학 연산자

| 연산자 |    설명    |  예   | 결과 |
| :----: | :--------: | :---: | :--: |
|   +    |   더하기   | 32+7  |  39  |
|   -    |    빼기    | 82-2  |  80  |
|   *    |   곱하기   |  3*7  |  21  |
|   /    |   나누기   |  7/2  | 3.5  |
|   //   | 정수나누기 | 7//2  |  3   |
|   %    |   나머지   |  7%3  |  1   |
|   **   |    지수    | 2**10 | 1024 |



### 2. 산술 연산자 결합

ex) 

```python
a = 100
a -= 3
print(a) // 97
```



### 3. 진수

기본적으로 숫자형 데이터는 10진수로 간주되지만, 파이썬에서는 2진수, 8진수, 16진수를 표현할 수 있다.

- 2진수 : 0b또는 0B로 시작
- 8진수 : 0o또는 0O로 시작
- 16진수 : 0x또는 0X로 시작



ex)

```python
10 // 10
0b10 // 2
0o10 // 8
0x10 // 16
```



### 4. 형변환

내장함수 int, float를 사용

ex) 

```python
>>> a = int("35") // 35
>>> type(a) // <class 'int'>
```

------

# 5. 문자열

파이썬3에서는 문자열에서 기본적으로 유니코드를 사용하며, 불변하다.



### 1. 문자열 표현

1. 작은 따옴표, 큰 따옴표

```python
>>> 'Min-jyo'
'Min-jyo'
>>> "Min-jyo"
"Min-jyo"
```

작은따옴표, 큰 따옴표를 사용했을 때, 사용하지 않은 인용 부호는 문자열 내부에서 사용 가능하다.



2. 세 개의 작은 따옴표 또는 큰따옴표

```python
''' 이름 : Min-jyo
	나이 : secret '''
------------------------------------
""" 이름 : Min-jyo
	나이 : secret """
```



### 2. 문자열 더하기 

ex) 

```python
>>> notice = ''
>>> notice += '공지사항'
>>> notice += '(패치노트)'
>>> notice += ': 7.1 패치노트'
```



### 3. 문자열로 형변환 

내장함수 str을 사용

ex) 

```python
>>> str(147)
>>> type(str(147)) // <class 'str'>
```



### 4. 이스케이프 문자

특수문자, 또는 특별한 역할을 하는 의미를 나타내는 문자를 뜻한다.

| 이스케이프 문자 |        설명        |
| :-------------: | :----------------: |
|       \a        |    비프음 발생     |
|       \t        |      탭(tab)       |
|       \n        |       줄바꿈       |
|      \\\\       |  \\(역슬래시)입력  |
|       \\'       | 작은따옴표(‘) 입력 |
|      \\\''      | 큰따옴표(‘’) 입력  |



### 5. 인덱스 연산

문자열에서 문자를 추출하기 위해 대괄호와 오프셋을 지정할 수 있다.

가장 왼쪽은 0이며, 가장 오른쪽은 -1로 시작한다.



ex) 문자열에서 인덱스로 문자를 추출하는 예제

```python
>>> lux = '빛으로 강타해요!'
>>> lux[0] // '빛'
>>> lux[-1] // '!'
>>> lux[50] // Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: string index out of range
```



ex) 문자열은 불변이므로 인덱싱한 부분에 새 값을 대입할수 없다.

```python
>>> lux[0] = '손'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment
```



### 6.슬라이스 연산

1. [start : end : step] 형식을 사용한다.

   - [ : ] 

     처음부터 끝까지

   - [ start : ]

     start오프셋부터 마지막까지

   - [ : end ]

     처음부터 end 오프셋까지

   - [ start : end ]

     start오프셋부터 end 오프셋까지

   - [start : end : step ]

     start오프셋부터 end 오프셋까지  step만큼씩 뛰어넘은 부분



### 7. 길이

내장함수 len을 사용

```python
>>> len("python") // 6
>>> len([1,2,3]) // 3
>>> len((1, 'a')) // 2
```



### 8. 문자열 나누기(split)

내장함수 split을 사용



1. split 내장함수 설명

   split함수에 인자로 주어진 구분자를 기준으로 하나의 문자열을 리스트 형태로 반환해준다.\

   

   ex) 콤마 구분자를 기준으로 문자열을 리스트 형태로 반환하는 예제

   ```python
   >>> girlsday = "민아,유라,소진,혜리"
   >>> girlsday.split(',')
   	['민아','유라','소진','혜리']
   ```

   split 함수에 인자를 주지 않을 경우, 공백문자를 구분자로 사용한다.



### 9. 문자열 결합(join)

split 함수와 반대의 역할을 한다.

문자열 리스트를 하나의 문자열로 결합해주며, 각 문자열을 결합해줄 구분자 문자열을 지정한 후 join 함수를 사용해준다.

```python
>>> girlsday = "민아,유라,소진,혜리"
>>> girlsday_list = girlsday.split(',')
>>> girlsday_str = ', '.join(girlsday_list)
>>> print(girlsday_str) // 민아, 유라, 소진, 혜리
```



### 10. 대소문자 다루기

```python
>>> lux = 'lux, the Lady of Luminosity
// 문장의 맨 앞만 대문자로 바꿈
>>> lux.capitalize() // 'Lux, the lady of luminosity'
// 단어의 앞글자만 대문자로 바꿈
>>> lux.title() // 'Lux, The Lady Of Luminosity' 
// 문장 모두 대문자로 바꿈
>>> lux.upper() // 'LUX, THE LADY OF LUMINOSITY'
// 문장 모두 소문자로 바꿈
>>> lux.lower() // 'lux, the lady of luminosity'
// 문장에서 소문자는 대문자로 , 대문자는 소문자로 바꿈
>>> lux.swapcase() // 'LUX, THE lADY OF lUMINOSITY'
```



### 11. 문자열 포맷

1. 옛 스타일(%)

| 변환타입 | 설명                                              |
| :------: | :------------------------------------------------ |
|    %s    | 문자열                                            |
|    %d    | 10진수                                            |
|    %x    | 16진수                                            |
|    %o    | 8진수                                             |
|    %f    | 10진 부동소수점수                                 |
|    %e    | 지수로 나타낸 부동소수점수                        |
|    %g    | 10진 부동소수점수 혹은 지수로 나타낸 부동소수점수 |
|    %%    | 리터럴 %                                          |



ex) 뒤에있는 값이 문자열 포맷대로 문자열로 들어가서 출력되는 예제 

```python
>>> '%s' % 42
'42'
>>> '%d x %d : %d' %(3, 4, 12)
'3 x 4 : 12'
```



2. 정렬

   ```perl6
   // 문법
   %[정렬기준(-,없음)][전체글자수].[문자길이 또는 소수점 이후 문자길이][변환타입]
   ```

   ex)

   ```
   >>> d = 37
   >>> f = 3.14
   >>> s = 'Minjyo'
   >>> '%d %f %s' %(d, f, s) // '37 3.140000 Minjyo'
   
   // 각 포맷마다 10자리 할당하고 오른쪽 정렬
   >>> '%10d %10f %10s' % (d, f, s) 
   // '        37   3.140000     Minjyo'
   
   
   각 포맷마다 14자리 할당하고 오른쪽 정렬
   >>> '%14d %14f %14s' %(d, f, s) 
   // '            37       3.140000         Minjyo'
   
   
   // 각 포맷마다 14자리 할당하고 왼쪽 정렬
   >>> '%-14d %-14f %-14s' %(d, f, s)
   // '37             3.140000       Minjyo        '
   
   // 각 포맷마다 14자리 할당하고 값의 3자리만 출력 부족하면 0을 채워서 출력
   >>> '%-14.3d %-14.3f %-14.3s' %(d,f,s)
   // '037            3.140          Min           '
   ```

   

3. 새 스타일

   ```python
   // 문법
   {}.format(변수)
   ```

   ex)

   ```python
   >>> d = 37
   >>> f = 3.14
   >>> s = 'Minjyo'
   --------------------------------------------------
   
   #기본 형태
   >>> '{} {} {}'.format(d,f,s)
   '37 3.14 Minjyo'
   
   #각 인자의 순서를 지정
   >>> '{1} {2} {0}'.format(d, f, s)
   '3.14 Fastcampus 37'
   
   #각 인자에 이름을 지정
   >>> '{d} {f} {s}'.format(d=50,f=1.432,s='WPS')
   '50 1.432 WPS'
   
   #딕셔너리로부터 변수 할당
   >>> dict = {'d': d, 'f': f, 's': s}
   >>> '{0[d]} {0[f]} {0[s]} {1}'.format(dict, 'WPS')
   //'37 3.14 Minjyo WPS'
   
   #타입 지정자 입력
   >>> '{:d} {:f} {:s}'.format(d, f, s)
   //'37 3.140000 Minjyo'
   
   #이름과 타입지정자를 모두 사용
   >>> '{digit:d} {float:f} {string:s}'.format(digit=700, float=1.4323, string='Welcome')
   // '700 1.432300 Welcome'
   
   #필드 길이 10, 우측정렬
   >>> '{:10d}.format(d)'
   // '        37'
   >>> '{:>10d}'.format(d)
   // '        37'
   
   #필드 길이 10, 좌측정렬
   >>> '{:<10d}'.format(d)
   // '37        '
   
   #필드 길이 10, 가운데 정렬, 빈 공간은 ~로 채움
   >>> '{:~^10d}'.format(d)
   // '~~~~37~~~~'
   ```



4. f 표현법

   ```
   f'{변수 또는 표현식}'
   ```

   ```
   # 기본 형태
   apple = '사과'
   banana = '바나나'
   train = '기차'
   
   # 옵션 지정
   f'''{apple:^10}
   {banana:^10}
   {train:^10}'''
   
   >>> f'{apple}는 맛있어 맛있으면 {banana} {banana}는 길어 길면 {train}'
   // '사과는 맛있어 맛있으면 바나나 바나나는 길어 길면 기차'
   
   
   ```

------------

# 6. 시퀸스

### 1. 파이썬에 내장된 시퀸스 타입 3가지

1. 문자열

   1. 표현법

      인용부호(작은 따옴표, 큰 따옴표)

2. 리스트

   1. 표현법 

      대괄호[]

3. 튜플

   1. 표현법

      괄호()



특징 : 시퀸스 타입의 객체는 인덱스 연산을 통해 내부 항목에 접근할수 있음.



### 2. 리스트

1. 특징 : 
   1. 리스트는 순차적인 데이터를 나타내는데 유용하다. 
   2. 내부 항목을 변경할 수 있다.



2. 리스트 생성방법 :

   ```python
   >>> empty_list1 = []
   >>> empty_list2 = list()
   >>> sample_list = ['a','b','c','d']
   >>> sample_list2 = ['Jan', 'Feb', 'Mar', 'Apr', 'May']
   ```

3. 다른 데이터를 리스트로 변환 : 

   1. list 함수를 사용

      

      ex) 문자열을 리스트로 변경하는 예시

      ```python
      >>> list('League of legends')
      // ['L', 'e', 'a', 'g', 'u', 'e', ' ', 'o', 'f', ' ', 'l', 'e', 'g', 'e', 'n', 'd', 's']
      ```

4. 인덱스 연산

   ```python
   >>> sample_list2 = ['Jan', 'Feb', 'Mar', 'Apr', 'May']
   >>> sample_list2[0] // 'Jan'
   ```



5. 내부항목 변경

   ```python
   >>> sample_list = ['a','b','c','d']
   
   // sample_list를 이용, 3번째 요소인 'c'를 대문자 'C'로 바꿔본다.
   >>> sample_list[2] = sample_list[2].upper()
   sample_list // ['a', 'b', 'C', 'd']
   ```



6. 슬라이스 연산

   ```python
   // 슬라이스 연산
   [start : end : step] 
   
   >>> sample_list2 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   
   // sample_list2를 이용, 1월부터 3월씩 건너뛴 결과를 quarters에 할당
   >>> quarters = sample_list2[0:12:3]
   >>> quarters // ['Jan','Apr','Jul','Oct']
   
   // sample_list2를 이용, 끝에서부터 3번째 요소까지를 last_three에 할당
   >>> quauters = sample_list[-3:]
   >>> quauters // ['Oct','Nov','Dev']
   
   // sample_list2를 이용, 끝에서부터처음부터(거꾸로) 2월씩 건너뛴 결과를 reverse_two_steps에 할당
   >>> reverse_two_steps = sample_list2[::-1]
   >>> reverse_two_steps 
   // ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'Jul', 'Jun', 'May', 'Apr', 'Mar', 'Feb', 'Jan']
   ```

7. 리스트 항목 추가(append)

   ```python
   >>> sample_list = ['a','b','c','d']
   >>> sample_list.append('e')
   >>> sample_list
   ['a', 'b', 'c', 'd', 'e']
   ```

   

8. 리스트 병합(extend, +=)

   ```python
   >>> fruits = ['apple', 'banana', 'melon']
   >>> colors = ['red', 'green', 'blue']
   >>> fruits.extend(colors)
   >>> fruits 
   // ['apple', 'banana', 'melon', 'red', 'green', 'blue']
   
   >>> fruits = ['apple', 'banana', 'melon']
   >>> colors = ['red', 'green', 'blue']
   >>> fruits += colors
   >>> fruits 
   // ['apple', 'banana', 'melon', 'red', 'green', 'blue']
   ```

9. 특정 위치에 리스트 항목 추가(insert)

   1. insert 문법

      ```python
      list.insert(i,x)
      ```

      1. 주어진 위치에 항목을 삽입함
      2. 첫 번째 인자는 삽입되는 요소가 갖게 될 인덱스입니다.

   2. 예제

      ```
      >>> fruits = ['apple', 'banana', 'melon', 'red', 'green', 'blue']
      
      // 리스트의 처음에 삽입
      >>> fruits.insert(0, x)
      
      // 리스트의 마지막에 삽입
      >>> fruits.insert(len(fruits), x)
      
      // fruits 리스트의 1번째 위치에 'mango'를 추가해보자
      >>> fruits.insert(0, 'mango')
      >>> fruits 
      // ['mango', 'apple', 'banana', 'melon', 'red', 'green', 'blue']
      
      // fruits리스트의 100번째 위치에 'pineapple'을 추가해보자
      Error
      ```

10. 특정 위치 리스트 항목 삭제(del)

    파이썬 구문 del을 사용

    ```python
    // del 문법
    del <리스트>[오프셋] 
    ```

    ex)

    ```python
    >>> del fruits[0]
    ```

11. 값으로 리스트 항목 삭제(remove)

    ```python
    >>> fruits.remove('mango')
    ```

12. 리스트 항목 추출후 삭제(pop)

    ```python
    >>> fruits = ['mango', 'apple', 'banana', 'melon', 'red', 'green', 'blue', 'pineapple']
    >>> fruits.pop() // 'pineapple'
    >>> fruits.pop(-3) // 'red'
    ```

13. 값으로 리스트 항목 오프셋 찾기(index)

    ```python
    >>> fruits.index('apple')
    // 1
    ```

14. 존재 여부 확인 (in)

    ```python
    >>> fruits = ['mango', 'apple', 'banana', 'melon', 'green', 'blue']
    >>> 'red' in fruits 
    // False
    ```

15. 값 세기(count)

    ```python
    arragne = ['1','2','3','1']
    arrange.count('1')
    // 2
    ```

16. 정렬하기 (sort, sorted)

    ```python
    arrange = ['1','2','3','1']
    arrange.sort()
    arrange // ['1', '1', '2', '3']
    ```

    ```python
    arrange = ['1','2','3','1']
    sorted(arrange)
    // ['1', '1', '2', '3']
    ```

17. 리스트 복사

    1. copy

       ```python
       ㅣ=['1']
       ㅣ.copy()
       // ['1']
       ```

    2. list 함수

       ```python
       ㅣ=['1']
       list(l)
       // ['1']
       ```

    3. 슬라이스 연산

       ```python
       ㅣ=['1']
       ㅣ[:]
       // ['1']
       ```

       

### 3. 튜플

1. 특징 : 튜플은 내부 항목의 삭제나 수정이 불가

2. 튜플 생성방법 :

   ```python
   >>> empty_tuple = ()
   >>> colors = 'red',
   >>> fruits = 'apple', 'banana'
   ```

   1. 튜플을 정의할 때 괄호가 없어도 무관, but 괄호로 묶는것이 튜플임을 구분하기 좋음
   2. 튜플의 요소가 1개일 때는 요소의 뒤에 쉼표(,)를 붙여야 한다.

   

3. 튜플 언패킹

   ```python
   fruits = 'apple', 'banana'
   f1, f2 = fruits
   f1 // 'apple'
   f2 // 'banana'
   ```



4. 형 변환

   1. 리스트를 튜플로 변환하는 예제

      ```python
      list = ['1','2','3','4']
      tuple(list)
      ('1', '2', '3', '4')
      ```



5. 튜플을 사용하는 이유
   1. 리스트보다 적은 메모리 사용
   2. 정의후에는 변하지 않는 내부 값

-----------

# 7. 딕셔너리, 셋

### 1. 딕셔너리

정의 : Key-Value. 형태로 항목을 가지는 자료구조

1. 딕셔너리 생성

   ```python
   >>> empty_dict1 = {}
   >>> empty_dict2 = dict() 
   
   >>> champion_dict = {
       'Lux': 'the Lady of Luminosity',
       'Ahri': 'the Nine-Tailed Fox',
       'Ezreal': 'the Prodigal Explorer',
       'Teemo': 'the Swift Scout',
   }
   ```

   

2. 형 변환

   dict 함수를 사용, 두 값의 시퀀스(리스트 또는 튜플)을 딕셔너리로 변환

   ```
   >>> sample = [[1,2], [3,4], [5,6]]
   >>> dict(sample)
   {1: 2, 3: 4, 5: 6}
   ```



3. 항목 찾기/추가/변경 [key]

   ```python
   >>> champion_dict['Lux']
   'the Lady of Luminosity'
   
   >>> champion_dict['Sona'] = 'Maven of the Strings'
   >>> champion_dict['Lux'] = 'Demacia'
   ```



4. 항목이 없을 경우 기본값을 지정하고 찾기

   ```python
   champion_dict.get('Soraka') # 없을 경우 아무것도 출력하지 않음
   champion_dict.get('Soraka', 'Healer') # 없을 경우 'Healer' 문자열
   ```



5. 결합(update)

   ```python
   >>> item_dict = {
   	'Doran\'s Ring' : 400,
   	'Doran\'s Blade' : 450,
   	'Doran\'s Shield' : 450,
   }
   
   >>> com_dict = {}
   >>> com_dict.update(champion_dict)
   >>> com_dict.update(item_dict)
   >>> com_dict
   ```

   서로 같은 키가 있을 경우, update에 주어진 딕셔너리의 값이 할당된다.



6. 삭제

   ```python
   >>> del com_dict['Doran\'s Blade']
   >>> del com_dict['Doran\'s Ring]
   >>> del com_dict['Doran\'s Shield']
   ```



7. 전체 삭제

   ```python
   com_dict.clear()
   com_dict // {}
   ```

   

8. in으로 키 검색 (True / False를 반환)

   ```python
   >>> champion_dict = {
       'Lux': 'the Lady of Luminosity',
       'Ahri': 'the Nine-Tailed Fox',
       'Ezreal': 'the Prodigal Explorer',
       'Teemo': 'the Swift Scout',
   }
   
   >>> "Lux" in champion_dict
   // True
   ```

9. 모든 키얻기

   ```python
   >>> champion_dict.keys()
   // dict_keys(['Lux', 'Ahri', 'Ezreal', 'Teemo'])
   ```

10. 모든 값 얻기

    ```python
    >>> champion_dict.values()
    // dict_values(['the Lady of Luminosity', 'the Nine-Tailed Fox', 'the Prodigal Explorer', 'the Swift Scout'])
    ```

11. 모든 키 - 값 얻기 (튜플로 변환)

    ```python
    >>> champion_dict.items()
    // dict_items([('Lux', 'the Lady of Luminosity'), ('Ahri', 'the Nine-Tailed Fox'), ('Ezreal', 'the Prodigal Explorer'), ('Teemo', 'the Swift Scout')])
    ```

12.  복사

    ```python
    >>> champion_dict.copy()
    // {'Lux': 'the Lady of Luminosity', 'Ahri': 'the Nine-Tailed Fox', 'Ezreal': 'the Prodigal Explorer', 'Teemo': 'the Swift Scout'}
    ```



### 2. 셋(Set)

셋은 키만 있는 딕셔너리와 같으며, 중복된 값이 존재할 수 없다.



1. 셋 생성 ( set(), 딕셔너리에서 키만 표시)

   ```python
   >>> empty_set = set()
   >>> champions = {'lux', 'ahri', 'ezreal'}
   ```



2. 형 변환

   문자열, 리스트, 튜플, 딕셔너리를 셋으로 변환할 수 있으며, 중복된 값이 사라진다.

   ```python
   >>> set('ezreal')
   // {'l', 'a', 'r', 'e', 'z'}
   
   >>> champion_dict 
   // {'Lux': 'the Lady of Luminosity', 'Ahri': 'the Nine-Tailed Fox', 'Ezreal': 'the Prodigal Explorer', 'Teemo': 'the Swift Scout'}
   
   >>> set(champion_dict)
   // {'Ezreal', 'Lux', 'Teemo', 'Ahri'}
   ```

   딕셔너리는 키만 남는다.



3. 집합 연산

   | 연산자 | 설명                        |
   | ------ | --------------------------- |
   | \|     | 합집합(Union)               |
   | &      | 교집합(Intersection)        |
   | -      | 차집합(Difference)          |
   | ^      | 대칭차집합(Exclusive)       |
   | <=     | 부분집합(Subset)            |
   | >      | 진부분집합(Proper subset)   |
   | >=     | 상위집합(Superset)          |
   | >      | 진상위집합(Proper superset) |

   ex)

   ```python
   >>> A = {1,2,3,4,5}
   >>> B = {4,5,6,7,8,9}
   >>> C = {4,5,6}
   >>> A|B // {1, 2, 3, 4, 5, 6, 7, 8, 9}
   >>> A&B // {4,5}
   >>> A-B // {1,2,3}
   >>> B-A // {8,9,6,7}
   >>> A^B // {1, 2, 3, 6, 7, 8, 9}
   >>> A<=B // False
   >>> C <= B // True
   >>> C < B // True
   >>> B <= B // True
   >>> B < B // False
   ```

   --------

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

   

--------

# 9. 제어문

### 1. 함수

반복적인 작업을 하는 코드를 재사용이 가능하게 정의해 놓은 것.

```python
// 문법 
def 함수명(매개변수[parameters]):
	동작
```



### 2. 함수의 정의, 실행

```python
# 실행 시 'call function!'를 print하는 함수 정의
>>> def call_function():
		print('call function!')
        
# 함수 자체는 function객체를 참조하는 변수
>>> call_function
// <function call_function at 0x031807C8>

# 함수를 실행시키기 위해 () 사용
>>> call_function()
// call function!
```



### 3. 리턴값이 있는 함수 정의

```python
>>> def return_true():
		return True

>>> return_true()
// True
```

함수의 결과로 Bool값을 갖는 데이터를 리턴하여 if문이나 while문의 조건으로 사용 가능하다.



### 4. 매개변수를 사용하는 함수 정의

```python
>>> def print_arguments(something):
		print(something)

>>> print_arguments('ABC')
ABC
```



### 5. 매개변수(parameter)와 인자(argument)의 차이

함수 내부에서 함수에게 전달되어 온 변수는 매개변수

함수를 호출할 때 전달하는 변수는 인자

```python
# 함수 정의때는 매개변수
def func(매개변수1, 매개변수2):

# 함수 호출시에는 인자
>>> func(인자1, 인자2)
```



### 5. 리턴값이 없을 경우

함수에서 리턴해주는 값이 없을 경우, 아무것도 없다는 뜻을 가진 None 객체를 얻는다.



### 6. 위치 인자(Positional arguments)

매개변수의 순서대로 인자를 전달하여 사용하는 경우

```python
>>> def student(name, age, gender):
		return {'name': name, 'age':age, 'gender':gender}
    
>>> student('jyo-min', 25, 'male')
/// {'name' : 'jyo-min', 'age': 25, 'gender' : 'male'}
```



### 7. 키워드 인자(Keyword arguments)

매개변수의 이름을 지정하여 인자로 전달하여 사용하는 경우

```python
>>> student(age=25, name='jyo-min', gender='male')
{'name': 'jyo-min', 'age': 25, 'gender': 'male'}
```

Tip! 위치인자와 키워드 인자를 동시에 쓴다면, 위치인자가 먼저 와야한다.



### 8. 기본 매개변수값 지정

인자가 제공되지 않을 경우, 기본 매개변수로 사용할 값을 지정할 수 있다.

```python
>>> def student(name, age, gender, cls='WPS'):
		return {'name': name, 'age': age, 'gender': gender, 'class': cls}
		
>>> student('jyo-min', 25, 'male')
{'name': 'jyo-min', 'age': 25, 'gender': 'male', 'class': 'WPS'}
```



### 9. 기본 매개변수값의 정의 시점

기본 매개변수값은 함수가 실행될 때 마다 계산되지 않고, 함수가 정의되는 시점에 계산되어 계속해서 사용된다.

```python
>>> def return_list(value, result=[]):
		result.append(value)
		return result

>>> return_list('apple')
// ['apple']
>>> return_list('banana')
// ['apple','banana']
```

 

함수가 실행되는 시점에 기본 매개변수값을 계산하기 위해, 아래와 같이 바꿔준다.

```python
>>> def return_list(value, result=None):
		if result is None:
			result = []
		result.append(value)
		return result
		
>>> return_list('apple')
// ['apple']
>>> return_list('banana')
// ['banana']
```



### 10. 위치인자 묶음

함수에 위치인자로 주어진 변수들의 묶음은 `*매개변수명` 으로 사용할 수 있다.

관용적으로 `*arg `를 사용한다.

```python
def print_args(*args):
	print(args)
```



### 11. 키워드인자 묶음

함수에 키워드인자로 주어진 변수들의 묶음은 `**매개변수명` 으로 사용할 수 있다. 

관용적으로 `**kwargs`를 사용한다.

```python
def print_kwarg(**kwargs):
	print(kwargs)
```



### 12. docstring

함수를 정의한 문서 역할을 한다.

함수 정의 후, 몸체의 시작부분에 문자열로 작성하며, 여러줄로도 작성 가능하다.

```python
>>> def print_args(*args):
		'Print positional arguments'
		print(args)
		
>>> help(print_args)
// Help on function print_args in module __main__:

print_args(*args)
    Print positional arguments
```

위 코드에 대한 min-jyo의 생각!

​	docstring은 함수의 설명서이다!



### 13. 함수를 인자로 전달

파이썬에서는 함수 역시 다른 객체와 동등하게 취급됨

함수에서 인자로 함수를 전달, 실행, 리턴하는 형태로 프로그래밍이 가능하다.

```python
// 'call func'를 출력하는 함수를 정의하고, 함수를 인자로 받아 실행하는 함수를 정의하여 첫 번째에 정의한 함수를 인자로 전달해 실행해보자.

>>> def childFunc():
		print('call func')
        
>>> def parentFunc(func):
		func()
        
>>> parentFunc(childFunc)
// call func
```



### 14. 내부 함수

함수 안에서 또 다른 함수를 정의해 사용할 수 있다.

- 문자열 인자를 하나 전달받는 함수를 만들고
- 해당 함수 내부에 전달받은 문자열을 대문자화 해서 리턴해주는 내부 함수를 구현한다.
- 문자열을 전달받는 함수는 내부 함수를 실행한 결과를 리턴하도록 한다.

```python
>>> def getStringFunc(str1):
    	def changeStringtoCapital(str2):
        	return str2.upper()
    	return changeStringtoCapital(str1)

>>> getStringFunc('minjyo')
//'MINJYO'
```



### 15. 스코프(영역)

파이썬에서는 코드 작성 시, 각 함수마다 독립적인 스코프(영역)을 가진다.

 

1. 스코프의 종류
   1. 전역 영역 : 메인 프로그램(현재 동작하는 프로그램의 최상위 위치)의 영역
   2. 지역 영역 : 전역 스코프 내부에서 독립적인 영역



2. ex) 스코프 예시 (전역스코프의 변수와 지역스코프의 변수가 같으면 안됨)

   ```python
   champion = 'Lux'
   
   def show_global_champion():
   	print('show_global_champion : {}'.format(champion))
   
   show_global_champion() // show_global_champion:Lux
   print('print champion : {}'.format(champion)) // print champion : Lux
   ```

   ```python
   champion = 'Lux'
   
   def show_global_champion():
   	print('show_global_champion : {}'.format(champion))
   	
   def change_global_champion():
   	print('before change_global_champion : {}'.format(champion))
   	champion = 'Ahri'
   	print('after change_global_champion : {}'.format(champion))
       
   show_global_champion()
   change_global_champion()
   ```

   2번째 코드를 실행중 change_global_champion 함수에서 오류가 발생한다.

   그 이유는 첫번째 코드에서는 champion 변수가 함수의 로컬 스코프에 존재하지 않기 때문에 글로벌 스코프에서 해당 변수를 찾아 출력하였으나,  이번 코드에서는 내부에 또다른 champion 변수가 존재하기 때문에 할당하기 전인 변수를 사용한것으로 판단하여 프로그램에서 오류를 발생시킨다.

   

   Tip!

   1. globals() 함수 : 항상 모듈 네임 스페이스의 사전을 반환함
   2. locals()함수 : 항상 현재 네임 스페이스의 사전을 반환함
   3. vars()함수 : 현재 네임 스페이스의 사전 또는 인수 사전을 반환함



### 16. 스코핑 룰

1. 스코프 외곽에서 내부순

   내장(Built-in)영역 > 전역영역 > 지역영역

   

2. 정의

   분리된 영역에서, 외부 영역에서는 내부 영역의 데이터를 사용할 수 없지만

   내부 영역에서는 자신의 외부 영역에 있는 데이터를 참조 할수 있다.

   (반대의 경우에는 함수의 인자로 데이터를 전달한다.)



### 17. 내장 함수와 내장 영역

print, dict등 지정하지 않고 사용했던 내장 함수들은 위 스코핑 룰의 내장 스코프에 존재하는 함수들이다.

 

전역 스코프의 `__builtin__`변수에 할당되어 있으며, 전역 스코프에서는 해당 변수의 내부를 참조할수 있도록 파이썬이 시작될 때 자동으로 처리된다.



확인시 dir 함수를 사용하며,  dir 함수는 해당 객체가 사용 가능한 속성 및 함수들을 리스트 형태로 나타내준다.



```
>>> dir(print)
// ['__call__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__self__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__text_signature__']
```



### 18. 로컬 스코프에서 글로벌 스코프의 변수를 사용

```python
champion = 'Lux'

def change_global_champion():
	champion = 'Ahri'
	print('after change_global_champion : {}'.format(champion))
	
change_global_champion() // after change_global_champion : Ahri
print('print global champion : {}'.format(champion))
// print global champion : Lux
```

이 경우, 위의 show_global_champion 함수와는 다르게 change_global_champion 함수는 champion 변수에 새로운 값을 대입한다. 만약 로컬 스코프에서 글로벌 스코프의 변수를 변경해야 한다면, 해당 변수가 로컬 스코프에 생성되는 것이 아닌 글로벌 영역에 이미 존재하는 값을 사용함을 명시해주어야 한다.

```python
champion = 'Lux'

def change_global_champion():
    global champion // global이라는 키워드를 앞에 붙혀줬다.
    champion = 'Ahri'
    print('after change_global_champion :{}'.format(champion))
    
change_global_champion()
print('print global champion : {}'.format(champion))
```

파이썬에서는 한 스코프에서 동일한 이름을 가진 두 스코프의 변수를 사용할 수 없음을 기억해야 한다.



### 19. 내부 함수에서의 로컬 스코프(nonlocal)

```python
champion = 'Lux'

def local1():
    champion = 'Ahri'
    print('local1 locals() : {}'.format(locals()))
    
    def local2():
        champion = 'Ezreal'
        print('local2 locals() : {}'.format(locals()))
    locals()
    
print('global locals() : {}'.format(locals()))
// global locals() : {'__name__': '__main__', '__doc__': None, '__package__': None, '__loader__': <class '_frozen_importlib.BuiltinImporter'>, '__spec__': None, '__annotations__': {}, '__builtins__': <module 'builtins' (built-in)>, 'call_function': <function call_function at 0x031807C8>, 'return_true': <function return_true at 0x032C9420>, 'print_arguments': <function print_arguments at 0x032C9468>, 'student': <function student at 0x032C94F8>, 'return_list': <function return_list at 0x032C9588>, 'print_args': <function print_args at 0x032C9540>, 'childFunc': <function childFunc at 0x032C94B0>, 'parentFunc': <function parentFunc at 0x0114B588>, 'str': 'hello', 'getStringFunc': <function getStringFunc at 0x0118E660>, 'champion': 'Lux', 'show_global_champion': <function show_global_champion at 0x0118E5D0>, 'change_global_champion': <function change_global_champion at 0x0118E0C0>, 'local1': <function local1 at 0x0118E6A8>}
    
local1()
// local1 locals() : {'champion': 'Ahri'}
```

로컬 스코프 내부에는 또 다른 로컬 스코프가 존재할 수 있다.

전역 스코프가 아닌, 자신의 바로 바깥 영역의 로컬 스코프의 데이터를 참조하고자 한다면, nonlocal 키워드를 사용한다.

 

```python
champion = 'Lux'

def local1():
    champion = 'Ahri'
    print('local1 locals() : {}'.format(locals()))
    
    def local2():
        nonlocal champion
        champion = 'Ezreal'
        print('local2 locals() : {}'.format(locals()))
    local2()
    print('local1 locals() : {}'.format(locals()))

print('global locals() : {}'.format(locals()))
local1()
```



### 20. global키워드와 인자(argument)전달의 차이

1. 인자로 전달한 경우

   ```python
   global_level = 100
   def level_add(value):
   	value += 30
       print(value)
   
   level_add(global_level) // 130
   print(global_level) // 100
   ```

2. global키워드를 사용한 경우

   ```python
   global_level = 100
   def level_add():
       global global_level
       global_level += 30
       print(global_level)
       
   level_add() // 130
   print(global_level) // 130
   ```

   예제로 보여주고 싶은게 무엇이냐면

   인자로 전달해주면 기존 전역변수값이 변하지 않지만

   global 키워드를 사용하면 기존 전역 변수값이 변할 가능성 잇음



### 21. 람다 함수

한줄 짜리 표현식으로 이루어지며, 반복문이나 조건문 등의 제어문은 포함될 수 없다.

또한, 함수이지만 정의/호출이 나누어져 있지 않으며 표현식 자체가 바로 호출된다.

```python
// 문법
lambda <매개변수> : <표현식>
```

```python
# 함수의 정의
>>> def multi(x):
		return x*x

# 함수의 호출
>>> multi(5)
25

# 람다함수의 사용
>>> (lambda x : x*x)(5)
25

# 람다함수를 사용해 함수 정의
>>> f = lambda x : x*x
>>> f(5)
25
```



### 22. 람다함수의 사용

```python
import string
>>> for char in string.ascii_lowercase:
		if char > 'i':
			print(char.upper())
		else:
			print(char)
// a
b
c
d
e
f
g
h
i
J
K
L
M
N
O
P
Q
R
S
T
U
V
W
X
Y
Z
```

위  함수블록문을 람다함수로 줄이면

```python
>>> for char in string.ascii_lowercase:
		print((lambda x : x.upper() if x > 'i' else x)(char))
// a
b
c
d
e
f
g
h
i
J
K
L
M
N
O
P
Q
R
S
T
U
V
W
X
Y
Z
```



### 23. 클로져(Closure)

1. 정의 : 

   1. 함수가 정의된 환경을 말함
   2. 파이썬 파일이 여러개일 경우 각 파일은 하나의 모듈 역할을 하고, 각 모듈은 독립적인 환경을 가진다.
   3. 독립된 환경은 각자의 영역을 전역 영역으로 사용한다.

   

2. 예제 :

   closure/module_a.py

   ```python
   level = 100
   def print_level():
   	print(level)
   ```

   

   closure/module_b.py

   ```python
   import module_a
   level = 50
   def print_level():
   	print(level)
   
   module_a.print_level() // 100
   print_level() // 50
   ```

   함수의 전역 영역은 해당 함수가 정의된 모듈의 전역 영역으로, 전역변수는 모듈의 영역에 영향을 받는다.



### 24. 내부 함수의 클로져

```python
>>> level = 0
>>> def outer():
    	level = 50
        def inner():
            nonlocal level
            level += 3
            print(level)
        return inner
>>> f = outer()
```

위의 경우,  outer 함수는 inner 함수를 반환하여 결과를 f 전역변수에 할당한다.

inner 한수의 호출 결과가 아닌 함수 자체를 반환하기 때문에, f변수는 실행할 수 있는 함수 객체이다. 이때 .inner 함수가 사용하는 level 변수는 nonlocal 키워드를 사용했기 때문에 outer에 새로 정의된 지역변수 level을 사용한다.

반복적으로 f 함수를 실행하면 inner의 외부(outer)에 존재하는 level  변수의 값을 증가시키고 print 시키기 때문에, 값은 계속해서 증가한다.



### 25. 데코레이터(decorator)

함수를 받아 다른 함수를 반환하는 함수. 예를 들면, 기존에 존재하던 함수를 바꾸지 않고 전달된 인자를 보기위한 디버깅 print 함수를 추가한다던가 하는 기능을 할 수 있다.

1. 기능을 추가할 함수를 인자로 받음
2. 데코레이터 자체에 추가할 기능을 함수로 정의
3. 인자로 받은 함수를 데코레이터 내부에서 적절히 호출
4. 위 2가지를 행하는 내부 함수를 반환

여러 함수에 대해 같은 기능을 추가할 경우, 데코레이터를 사용한다.

```python
>>> def print_debug(f):
    	def inner_function(*args, **kwargs):
            print('args :',args)
            print('kwargs :',kwargs)
            result = f(*args, **kwargs)
            return result
        return inner_function
```

데코레이터함수(인자로 전달할 함수) 형태로도 사용이 가능하지만, 데코레이터를 사용할 경우에는 함수 위에 데코레이터를 추가해서 사용가능하다.

```python
@print_debug
def any_function():
	pass
```

또한 데코레이터는 여러개를 가질 수 있으며, 함수에서 가장 가까운 것부터 실행한다.

- print_debug이후 결과를 제곱하고 print해주는 데코레이터를 실행, 반대로 실행



### 26. 제너레이터(genderator)

함수는 파이썬의 시퀸스 데이터를 생성하는데 사용된다.

실제 시퀸스 데이터와 다른 점은, 시퀸스 전체를 가지고 있는 것이 아니라

시퀸스 데이터를 생성하기 위한 어떠한 루틴만을 가지고 있는 것이다.

 

이 방법을 택했을 때의 장점은, 전체 크기만큼의 메모리를 가지고 있는 시퀸스 데이터와는 달리 

메모리를 적게 사용할 수 있다.

 

제너레이터는 마지막으로 호출한 위치(항목)를 기억하고 있으며, 한번 순회할 때마다 그 다음 값을 반환한다.

 

제너레이터는 함수를 통해서 만들어지며, 함수 내부의 반복문에서 yield 키워드를 사용하면 제너레이터가 된다.

```python
>>> def range_gen(num):
		i = 0
		while i < num:
			yield i
			i += 1
>>> gen = range_gen(10)
>>> gen
// <generator object range_gen at 0x031B8BB0>
>>> gen.__next__()
// 0
>>> gen.__next__()
// 1
>>> gen.__next__()
// 2
>>> gen.__next__()
// 3
>>> gen.__next__()
// 4
>>> gen.__next__()
// 5
>>> gen.__next__()
// 6
>>> gen.__next__()
// 7
>>> gen.__next__()
// 8
>>> gen.__next__()
// 9
>>> gen.__next__()
// Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
StopIteration


```

함수 내부에 yield 키워드가 사용되어 제너레이터 함수가 되었으며, 함수를 실행하면 제너레이터 객체를 반환한다. yield 부분에서 멈춘 제너레이터 객체를 순회하기 위해서는 `__next__()` 함수를 실행해준다.

------------

# 10. 모듈과 패키지

### 1. 모듈 

파이썬 파일은 각각 하나의 모듈로 취급됨

1. 역할 : 함수의 정의, 단순 변수의 모음 등등 여러 역할을 함



2. 모듈 불러오기(import)

   기본 게임모듈에서, 부가적인 기능들을 불러와서 사용하는 형태로 코드를 작성해본다.

   ```python
   // module/shop.py
   def buy_item():
       print('Buy item!')
   
   buy_item()
   ---------------------------------
   // module/game.py
   def play_game():
       print('Play game!')
   
   play_game()
   ---------------------------------
   // module/lol.py
   import game
   import shop
   
   print('= Turn on game =')
   game.play_game()
   shop.buy_item()
   
   //
   Play game!
   Buy item!
   = Turn on game =
   Play game!
   Buy item!
   //
   ```

   lol.py가 실행될 때, game 과 shop이 import되는 순간 해당 코드가 실행되어 버리는 문제가 있다.

   이때, 파이썬 인터프리터를 이용해 실행한 코드인지를 확인하여 단순히 import  한 모듈의 경우 실행을 막는 방식을 사용할 수 있다.

   

   각 모듈은 자신의 이름을 가지며, 모듈 이름은 모듈의 전역변수 `__name__`에서 확인할수 있다.

   ```python
   print(__name__)
   ```

   파이썬 인터프리터가 실행한 모듈의 경우, `__main__`이라는 이름을 가진다. 따라서 `python <파일명>`으로 실행한 경우에만 동작할 부분은 if문으로 감싸준다.

   ```python
   ------module/shop.py------
   def buy_item():
       print('Buy item!')
   
   if __name__ == '__main__':
       buy_item()
       
   ------module/game.py------
   def play_game():
       print('Play game!')
   
   if __name__ == '__main__':
       play_game()
   
   ------module/lol.py------
   import game
   import shop
   
   def turn_on():
       print('= Turn on game = ')
       
       while True:
           choice = input('what would you like to do?\n 1: Go to Shop, 2: Play  Game, 0: Exit\n    Input : ')
           if choice == '0':
               break
           elif choice == '1':
               shop.buy_item()
           elif choice == '2':
               game.play_game()
           else:
               print('Choice not exist')
           print('-----------------------')
           
       print('= Turn off game =')
   if __name__ == '__main__':
       turn_on()
   ```

   

3. 네임스페이스

   각 모듈은 독립된 네임스페이스를 가진다. 메인으로 사용되고 있는 모듈이 아닌 import된 모듈의 경우, 해당 모듈의 네임스페이스를 사용해 모듈 내부의 데이터에 접근한다.

    

4. from을 사용해 모듈의 함수를 직접 import

   `import 모듈명`의 경우, 모듈의 이름이 전역 네임스페이스에 등록되어 `모듈명.함수`로 사용가능하다.

   모듈명을 생략하고 모듈 내부의 함수를 쓰고 싶다면, `from 모듈명 import  함수명`으로 불러들일 수 있다. 

   

5. from 모듈명 * 을 사용해 모듈 내 모든 식별자 (변수, 함수) import 할수 있음



6. as로 별칭 할당

   `from 모듈명 import`또는 `import 모듈명`에서, 같은 모듈명이 존재하거나 혼동 될 수 있을 경우, 뒤에 as를 붙여 사용할 모듈명을 변경할 수 있다.

   

7. 커맨드라인에서 인자 전달

   프로그램 실행시 인자를 전달 할 수 있다. 파이썬의 내장 sys 모듈의 argv 리스트에서 확인 할수 있다. 리스트의 첫 번째 항목은 모듈명이 전달되므로, 2번째 항목부터 전달 된 값을 확인 할수 있다.



### 2. 패키지

패키지는 모듈들을 모아 둔 특별한 폴더를 뜻한다. (일반 폴더와 다름)

폴더를 패키지로 만들면 계층 구조를 가질 수 있으며, 모듈들을 해당 패키지에 모을 수 잇는 역할을 한다.

패키지를 만들 때는 패키지로 사용할 폴더에 `__init__.py`파일을 넣어주면, 해당 폴더는 패키지로 취급된다. (비어있어도 무관하다)

```python
├── functions
│   ├── __init__.py
│   ├── game.py
│   └── shop.py
└── lol.py
```

패키지는 모듈과 동일하게 import할 수 있으며, 위와 같이 functions패키지에 모듈들을 넣은 경우에는 `from functions import game, shop`으로 기존 코드의 변경 없이 패키지에서 모듈을 가져오는 방식을 사용할 수 있다.

단순히 import functions 후 functions.game, functions.shop을 사용하는 방식도 가능하다.



Tip!  `*,__all__`

패키지에 포함된 하위 패키지 및 모듈을 불러올 때, `*`을 사용하면 해당 모듈의 모든 식별자들을 불러온다. 

이때, 각 모듈에서 자신이 import될 때 불러와질 목록을 지정하고자 한다면 `__all__`을 정의하면된다.

패키지 자체를 import시에 자동으로 가져오고 싶은 목록이 잇다면, 패키지의 `__init__.py`파일에 해당 항목을 import해주면 된다.

-------------------

# 11. 클래스 (class)

### 1. 객체지향 프로그래밍

1. 용어 정리 
   1. 속성 : 객체가 가진 변수
   2. 메서드 : 객체가 가진 함수
   3. 객체 : 클래스의 형태를 가진 인스턴스



### 2. 클래스

1. 클래스란? 

   객체를 만들기 위한 틀

   ex) 

   ```python
   class Shop:
       def __init__(self, name):
           self.name = name
   ```

   위코드에서

   `__init__` : 

   1. 클래스를 사용한 객체의 초기화 메서드
   2. 인자를 어떻게 전달받고, 받은 인자를 이용해 어떤 객체를 생성할 지 정의할수 있음

    

   위 클래스를 사용해서 객체를 생성하는 코드는 아래와 같다.

   ```python
   from class_sample import Shop
   lotteria = Shop('Lotteria')
   ```

   위 코드는 아래 순서로 동작한다.

   1. Shop 클래스가 정의되었는지 찾는다.
   2. Shop 클래스형 객체를 메모리에 생성한다.
   3. 생성한 객체의 초기화 메서드 `__init__()` 을 호출한다.
   4. name값을 저장하고, 만들어진 객체를 반환한다.
   5. `lotteria` 변수에 반환된 객체를 할당한다.

     

   /==

   객체의 메서드를 정의할때,

   첫 번째 인수는 항상 `self`이다 /  `self`에는 메서드를 호출하는 객체 자신이 자동으로 전달된다.

   이렇게 `self`가 자동으로 호출되는 이유는 

   클래스의 메서드를 사용할 때 어떤 객체가 해당 메서드를 사용하고 있는지 알 수 있도록 하기 위해서이다.

   또한 이렇게 하나의 메서드를 여러 객체가 공유할 수 있다.

   ==/ 

   /

   속성이나 메서드에 접근할 때는 `객체.속성명` 또는 `객체.메서드명`을 사용한다.

   /

   

   /

   클래스 속성

   어떤 하나의 클래스로부터 생성된 객체들이 같은 값을 가지게 하고 싶을 경우, 클래스 속성을 사용한다.

   ```python
   class Shop:
   	description = 'Python Shop Class'
   	def __init__(self, name):
   		self.name = name
   ```

   마찬가지로, 객체들에게서 각각의 인스턴스와는 별개의 공통된 메서드를 사용하게 하고 싶을 경우 클래스 메서드를 사용한다.

   /

   

2. 메서드 

   1. 인스턴스 메서드

      특징 :

      1. 첫 번째 인수로 `self`를 가진다.
      2. 인스턴스를 이용해 메서드를 호출할 때 호출한 인스턴스가 자동으로 전달됨
      3. 전달받은 인스턴스는 상태를 확인하거나 조작하는데에 사용된다.

   

3. 속성 접근 지정자(attribute access modifier)

   1. 캡슐화

      1. 정의 :

         외부로 공개하고 싶지 않은 데이터, 메서드 를 은닉시켜 정해진 방법을 통해서만 객체를 조작할 수 있도록 하는 방식

      

   2. 왜쓸까?

      객체의 데이터나 메서드의 은닉 정도를 결정할때

      

   3. private 지정자

      속성 이름을 `__` 로 시작하면 외부에서의 접근을 제한한다.

      이경우를 `private 지정자 `  라고 한다.

      

4. 파이썬에서의 getter, setter 구현

   ```python
   @property
   def name(self):
   	return self.__name
   	
   @name.setter
   def name(self, new_name):
   	self.__name = new_name
   	print('Set new name ({})'.format(self.__name))
   ```

   setter 프로퍼티를 명시하지 않으면 읽기전용이 되어 외부에서 조작할 수 없게 된다.

   

5. 상속(inheritance)

   1. 용어 정리 : 

      1. 부모(상위)클래스 : 상속되는 클래스
      2. 자식(하위)클래스 : 상속을 받는 클래스

      

   2. 상속되는것을 어떻게 표현하나

      ```python
      class Restuarant(Shop):
      	pass
      ```

      상속받은 클래스는 부모 클래스의 모든 속성과 메서드를 사용할 수 있다.

   

6. 메서드 오버라이드

   1. 정의 : 

      상속받은 클래스에서, 부모 클래스의 메서드와는 다른 동작을 하도록 할 수 있다.

      부모 클래스의 메서드를 덮어씌워서 사용하도록 하며, 이 방법을 메서드 오버라이드라고 함

      

7. 부모 클래스의 메서드를 호출(super)

   1. 어떻게 호출하나

      `super()`메서드를 사용해서 부모 클래스의 메서드를 직접 호출한다.

   2. 언제 쓰나

      자식클래스의 메서드에서 부모 클래스에서 사용하는 메서드의 전체를 새로 쓰는것이 아닌, 부모 클래스의 메서드를 호출 후 해당 내용으로 새로운 작업을 해야 할경우 씀

   3. ex) super()메서드를 사용해서 부모의 `__init__` 메서드를 호출하는 예

      ```python
      class Restaurant(Shop):
      	def __init__(self, name, shop_type, address, rating):
              super().__init__(name, shop_type, address)
              self.rating = rating
      ```



8. 정적(스태틱) 메서드

   1. 정의 : 클래스 내부에 정의된 일반 함수

   2. 특징 : 
      1. 클래스나 인스턴스를 통해서 접근 할수 있을뿐
      2. 해당 클래스나 인스턴스에 영향을 주는 것은 불가능함
      3. 스태틱메서드는 `@staticmethod` 데코레이터를 붙여 선언함

      

   3. 언제 쓰이나:

      1. 다양한 방식으로 인스턴스를 생성하는 클래스를 작성할 때 자주 사용된다.

      

   4. ex) 정적(스태틱) 메서드 예제

      ```python
      import random
      
      class Pokemon:
      	def __init__(self, name, type):
              self.name = name
              self.type = type
          
          @staticmethod
          def electric():
              pokemons = ('피카츄', '라이츄', '붐볼')
              selected_pokemon = random.choice(pokemons)
              return Pokemon(selected_pokemon, '전기')
          
          @staticmethod
          def water():
              pokemons = ('꼬부기', '아쿠스타', '라프가스')
              selected_pokemon = random.choice(pokemons)
              return Champion(selected_pokemon, '물')
      ```

   

9. 클래스 메서드

   1. 정의 : 클래스 속성에 대해 동작하는 메서드

   2. 특징 : 

      1. 인스턴스 메서드와 달리 호출주체가 클래스
      2. 첫번째 인자도 클래스
      3. 만약 인스턴스가 첫 번째 인자로 주어지더라도 해당 인자의 클래스로 자동으로 바뀌어 전달

   3. 어떻게 선언하나?

      `@classmethod`데코레이터를 붙여 선언함

      첫 번째 인자의 이름은 관용적으로 `cls`를 사용한다.



10. 다형적 동적 바인딩

    1. 다형성 : 일반적으로 하나의 코드가 여러 역할을 한다는 의미이다.

       ex) `str()`이라는 내장 함수는 인수로 전달되는 객체의 타입에 관계 없이 해당 객체를 문자열 		형으로 형변환시켜줌

    2. 동적 바인딩

       `obj.attr`을 통해 속성에 접근하면, 인스턴스에서 `attr`을, 다음엔 클래스에서, 그 다음에는 상속받은 클래스에서 해당 속성을 검색하며 가장 먼저 검색한 속성을 반환한다.

       동적으로 속성을 바인딩하는 과정은 obj 객체의 타입에 영향받지 않으며, 오로지 해당 객체가 attr에 해당하는 속성을 가졌는지만 검사한다. 

------------

# 12. 정규표현식

1. 정규표현식이란?  : 특정한 패턴에 일치하는 복잡한 문자열을 처리할 때 사용하는 기법

2. 어떻게 사용하는가?

   파이썬 표준 모듈 `re`를 사용해서 정규표현식을 사용할 수 있다.

   ex)

   ```python
   import re
   result = re.match('Lux', 'Lux, the Lady of Luminosity')
   ```

   위 코드에서 `match`의 

   첫번째 인자에는 패턴이

   두번째 인자에는 문자열 소스 가 들어간다.

    

   `match()`는 소스와 패턴의 일치 여부를 확인하고, 일치할 경우 `Match object`를 반환한다.

    

   복잡하거나 자주 사용되는 패턴은 미리 컴파일하여 속도를 향상시킬 수 있다.

   ```python
   pattern1 = re.compile('Lux')
   ```

   컴파일된 패턴객체를 문자열 대신 첫 번째 인자로 사용 가능하다.

   

3. match : 시작부터 일치하는 패턴 찾기

   ```python
   >>> import re
   >>> source = 'Lux, the Lady of Luminosity'
   >>> m = re.match('Lux', source)
   >>> if m:
       	print(m.group())
   // Lux
   ```

