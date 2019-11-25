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

   