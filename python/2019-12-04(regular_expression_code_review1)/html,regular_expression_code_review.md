----------

### 1. 자동으로 파일 닫기 : with

연 파일을 닫지 않을 경우,

파일썬에서는 해당 파일이 더 이상 사용되지 않을 때 파일을 자동으로 닫아준다.



**but**

메인 프로그램이나 오랫동안 동작하는 함수에서 파일을 열때, 

명시적으로 파일을 닫아주지 않을 경우 문제가 발생한다.



```python
with 표현식 as 변수
```



위의 구문을 사용하면, 

`with`문 내부에서 파일을 사용한 후 `구문이 종료되면` 자동으로 파일을 닫아주므로 

프로그래밍 단계에서 일일이 파일을 닫아주는 부분에 신경쓰지 않아도 된다.

--------

### 2. 정규 표현식을 이용한 문자열 검색 메서드 종류

| 메서드     | 목적                                                         |
| ---------- | ------------------------------------------------------------ |
| match()    | 문자열의 처음부터 정규식과 매치되는지 조사한다.              |
| search()   | 문자열 전체를 검색하여 정규식과 매치되는지 조사한다.         |
| findall()_ | 정규식과 매치되는 모든 문자열을 리스트로 리턴한다.           |
| finditer() | 정규식과 매치되는 모든 문자열을 반복 가능한 객체로 리턴한다. |

1. match 메서드와 search 메서드

   정규식과 매치될 때 **match 객체**를 리턴

   정규식과 매치 안 될때 **None** 리턴



2. findall 예제

   ```python
   import re
   p = re.compile('[a-z]+')
   result = p.findall("life is too short")
   ['life', 'is', 'too', 'short']
   ```

   각각의 단어들이 정규식과 매치되어 **리스트**로 리턴된다.
   
   
   
3. finditer 예제

   ```python
   import re
   p = re.compile('[a-z]+')
   result = p.finditer("life is too short")
   print(result)
   결과 : <callable_iterator object at 0x7f90645f7320>
   for r in result: print(r)
   결과 : 
   <re.Match object; span=(0, 4), match='life'>
   <re.Match object; span=(5, 7), match='is'>
   <re.Match object; span=(8, 11), match='too'>
   <re.Match object; span=(12, 17), match='short'>
   ```

   finditer는 findall과 동일하지만, 

   그 결과로 반복 가능한 객체 즉 `iterator object`를 리턴한다.

-----------

### 3. 정규표현식 분해 예제1

```python
result_list = re.findall(r'<a.*?class="title".*?>(?P<name>[\w\s]+)</a>',html)

result_list = re.finditer(r'<a.*?class="title".*?>(?P<name>[\w\s]+)</a>',html)
```

1. 정규표현식 앞에 r은 왜 붙혀줄까?

   ```python
   r''
   ```

   파이썬에서 백슬래시 문제를 해결하기위해 만들어진 **Raw String 규칙**

   

2. `.*?`이 뭘까?

   1. Dot(`.`)

      정규 표현식의 Dot(`.`) 메타 문자는 줄바꿈 문자인 \n 를 제외한 모든 문자와 매치됨을 의미

      ```python
      a.b 
      # a와 b사이에 줄바꿈 문자를 제외한 어떤 문자가 들어가도 모두 매치
      ```

      

   2. 반복(`*`)

      `*`앞에 있는 문자가 0부터 무한대로 반복될 수 있다는 의미

      

   3. `?`

      `?`앞에 있는 문자가 0번 혹은 1번 사용되면 매치

    

   결론 : 줄바꿈 문자인 \n를 제외한 모든 문자가 0번부터 무한대로 반복될수 있다는걸 의미

   

3. `?P<name>`이 뭘까?

   그룹을 만들때 그룹명을 지정하는 방법

   

   1. 그룹에 이름을 지어 주기 위한 확장 구문

      ```Python
      (?P<그룹명>...)
      ```

       

   2. 그룹명을 지정하므로써 얻는 장점

      1. 그룹을 인덱스가 아닌 이름으로 참조할 수 있다.
      2. 정규식 내에서 재 참조할수 있다.

   

   3. 그룹에 이름을 지정하고 참조하는 예시

      ```python
      p = re.compile(r"(P<name>\w+)\s+((\d+)[-]\d+[-]\d+)")
      m = p.search("min 010-1234-5678")
      print(m.group("name"))
      결과 : min
      ```

   

4. 그룹에 `\w\s`는 뭘까?

   | 정규 표현식 |                             설명                             |
   | :---------: | :----------------------------------------------------------: |
   |     \d      |          숫자와 매치, `[0-9]`와 동일한 표현식이다.           |
   |     \D      |     숫자가 아닌 것과 매치, `[^0-9]`와 동일한 표현식이다.     |
   |     \s      | whitespace 문자와 매치, `[\t\n\r\f\v]`와 동일한 표현식이다. 맨 앞의 빈칸은 공백 문자를 의미한다. |
   |     \S      | whitespace 문자가 아닌 것과 매치, `[^\t\n\r\f\v]`와 동일한 표현식이다. |
   |     \w      |     문자+숫자와 매치, `[a-zA-Z0-9]`와 동일한 표현식이다.     |
   |     \W      | 문자+숫자가 아닌 문자와 매치, `[a-zA-Z0-9]`와 동일한 표현식이다. |

-------------

### 4. 정규표현식 분해 예제1

```python
p = re.compile(r'''
                <a.*?
                href="(?P<href>.*?)".*?
                class="title".*?>
                (?P<name>[\w\s]+)
                <a>
                ''', re.X)

m_list = re.finditer(p, html)
for m in m_list:
    print(m.group('href'))
    print(m.group('name'))
```

1. `re.X`가 뭘까?

   어려운 정규식에 주석 , 또는 라인 단위로 구분할수 있게하는 컴파일 옵션중 하나

   `re.VERBOSE` 또는 `re.X`로 사용가능

   

   1. 형태

      ```Python
      p = re.compile(r'''
       				
       				
       				
       			   ''', re.X)
      ```

------

### 5. 그룹 인덱스가 가지는 의미

| group(인덱스) |              설명              |
| :-----------: | :----------------------------: |
|   group(0)    |       매치된 전체 문자열       |
|   group(1)    | 첫 번째 그룹에 해당되는 문자열 |
|   group(2)    | 두 번째 그룹에 해당되는 문자열 |
|   group(3)    | n 번째 그룹에 해당되는 문자열  |

