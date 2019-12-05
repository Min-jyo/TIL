## get_webtoon_detail_code_review



### 1. 아래 코드는 무슨 뜻인가?

```python
html = open('episode_list.html', 'rt').read()
```

1. 파일 생성하기

   ```python
   ## 형태
   파일 객체 = open(파일 이름, 파일 열기 모드)
   ```

   1. 파일 열기 모드의 첫번째 글자

      | 모드 | 설명                                         |
      | ---- | -------------------------------------------- |
      | r    | 읽기                                         |
      | w    | 쓰기 (파일이 이미 존재할 경우 덮어쓴다       |
      | x    | 쓰기 (단, 파일이 존재하지 않을 경우에만)     |
      | a    | 추가 (파일이 존재할 경우 파일의 끝부터 쓴다) |

   2. 파일 열기 모드의 두번째 글자

      | 모드        | 설명            |
      | ----------- | --------------- |
      | t 또는 없음 | 텍스트 타입     |
      | b           | 이진데이터 타입 |

   

2. open() 함수

   '파일이름' 과 '파일 열기 모드'를 입력값으로 받고 결과값으로 파일 객체를 돌려준다. 



3. read() 함수

   파일의 내용 전체를 문자열로 리턴한다.

----------

### 2. 아래 코드는 무슨뜻인가?

```python
soup = BeautifulSoup(html)
```

문서를 중첩 된 데이터 구조로 나타내는 beautifulSoup 객체가 soup변수에 할당된다.

-----------

### 3. beautifulSoup library에서 데이터 구조를 탐색하는 간단한 방법들

```python
soup.title
# <title>The Dormouse's story</title>

soup.title.name
# u'title'

soup.title.string
# u'The Dormouse's story'

soup.title.parent.name
# u'head'

soup.p
# <p class="title"><b>The Dormouse's story</b></p>

soup.p['class']
# u'title'

soup.a
# <a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>

soup.find_all('a')
# [<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
#  <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>,
#  <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>]

soup.find(id="link3")
# <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>
```

----

### 4. 아래 코드는 무슨뜻인가?

```python
div_comicinfo = soup.select_one('div.comicinfo')
```

1. select_one 메서드

   뒤에 오는 ' css 선택자 ' 에 일치하는 첫번째 태그를 찾는다.

---------

### 5. css 속성 선택자 

```python
[attr]
attr이라는 이름의 속성을 가진 요소를 선택합니다.

[attr=value]
attr이라는 이름의 속성값이 정확히 value인 요소를 선택합니다.

## 이해안됨
[attr~=value]
attr이라는 이름의 속성값이 정확히 value인 요소를 선택합니다. 	attr 속성은 공백으로 구분한 여러 개의 값을 가지고 있을 수 있습니다.
    
## 이해안됨
[attr|=value]
attr이라는 속성값을 가지고 있으며, 그 속성값이 정확히 value이거나 value로 시작하면서 -(U+002D) 문자가 곧바로 뒤에 따라 붙으면 이 요소를 선택합니다. 보통 언어 서브코드(en-US, ko-KR 등)가 일치하는지 확인할 때 사용합니다.

## 이해안됨
[attr^=value]
attr이라는 속성값을 가지고 있으며, 접두사로 value가 값에 포함되어 있으면 이 요소를 선택합니다.

## 이해안됨
[attr$=value]
attr이라는 속성값을 가지고 있으며, 접미사로 value가 값에 포함되어 있으면 이 요소를 선택합니다.

## 이해안됨
[attr*=value]
attr이라는 속성값을 가지고 있으며, 값 안에 value라는 문자열이 적어도 하나 이상 존재한다면 이 요소를 선택합니다.

## 이해안됨
[attr operator value i]
괄호를 닫기 전에 i 혹은 I를 붙여주면 값의 대소문자를 구분하지 않습니다. (ASCII 범위 내에 존재하는 문자에 한해서 적용됩니다)

## 이해안됨
[attr operator value s]
괄호를 닫기 전에 s 혹은 S를 붙여주면 값의 대소문자를 구분합니다. (ASCII 범위 내에 존재하는 문자에 한해서 적용됩니다)
```

------

### 6. 아래 코드는 무슨뜻인가?

```python
title = div_detail.select_one('h2').contents[0]
```

1. beautifulSoup에서의 contents, children 속성

   1. 태그들의 직계 자식에 접근하는 속성들

   2. 문자열은 .contents 속성을 사용할수 없다.

   3. contents, children 속성을 사용하여 리스트로 가져오는것 대신에

      .for in 문으로 돌릴수 있다.

-------

### 7. 아래 코드는 무슨뜻인가?

```python
author = div_detail.select_one('span.wrt_nm').get_text(strip=True)
```

1. get_text() 메서드

   1. 태그또는 문서에서 text 파트만 원할때 사용하는 메서드

   2. 문서또는 태그 아래에 모든 문자를 반환한다.

   3. 택스트 비트를 결합할때 사용할 문자열을 지정할수 있다.

   4. `strip=True` 형식을 사용해서 양쪽 공백을 제거할수 있다.

      stripped_string로 처리할수도 있음

-----

### 8. 아래 코드는 무슨 뜻인가?

```python
return {
        'title': title,
        'description': description,
        'author': author,
        'genre': [g.strip() for g in genre.split(',')],
        'age': age,
    }
```

1. 문자열 관련 함수 

   1. strip 함수

      문자열 양쪽에 있는 한 칸 이상의 연속된 공백들을 모두 지운다.

   2. split 함수

      매개변수로 아무 값도 넣어주지 않으면 공백을 기준으로 문자열을 나누어 준다. 만약 괄호 안에 특정한 값이 있을 경우에는 괄호 안의 값을 구분자로 해서 문자열을 나누어준다. 나눠진 값들은 리스트에 하나씩 들어가게 된다. 

-----

