# 14. 파일입출력

## 1. 파일 다루기

프로그램이 실행되는 동안 데이터는 휘발성 기억장치인 메모리(RAM)에 저장된다. 

작업중인 데이터를 저장하거나, 

이미 저장되어있는 데이터를 불러오기 위해서는 

하드디스크나 SSD에 파일을 쓰거나 읽는 과정이 필요하다.

### 1. 파일 열기

1. 문법 

   ```python
   변수 = open(파일명, 모드)
   ```

   내장함수`open()`을 사용하며, 파일명은 파일의 경로를 나타낸다.

#### 1. 모드의 첫 번째 글자

| 모드 | 설명                                          |
| ---- | --------------------------------------------- |
| r    | 읽기                                          |
| w    | 쓰기 (파일이 이미 존재할 경우 덮어쓴다)       |
| x    | 쓰기 (단, 파일이 존재하지 않을 경우에만)      |
| a    | 추가 (파일이 존재할 경우 파일의 끝부터 쓴다.) |



#### 2. 모드의 두 번째 글자

| 모드        | 설명            |
| ----------- | --------------- |
| t 또는 없음 | 텍스트타입      |
| b           | 이진데이터 타입 |

Tip! 이진 데이터란?

이진형식 (0 과 1)로 이루어진 텍스트를 제외한 데이터를 말함.

### 2. 파일 쓰기: write()

문법 

```python
write()
```

ex)

```python
iu = '아이유는아이가아니에유'
len(iu)
```

`iu.txt`파일에 내용을 쓴다.

```python
f = open('iu.txt', 'wt')
f.write(iu)
```

```
f.close()
```

`iu.txt`파일에 내용을 쓴다.

만약 문자열이 클 경우, 일정 단위로 나누어서 파일에 쓰는 방식을 사용한다.

```python
>>> f = open('iu.txt', 'wt')
>>> size = len(iu)
>>> offset = 0
>>> chunk = 30
>>> while True:
...   if offset > size:
...     break
...   f.write(iu[offset:offset+chunk])
...   offset += chunk
...
30
30
15
```

덮어쓰기를 방지하려면 `wt` 대신 `xt`를 사용해서 이미 존재하는 파일은 쓸 수 없도록 처리한다.

```
>>> try:
...   f = open('iu.txt', 'xt')
...   f.write('미국에서 비가 쏟아지면? USB')
... except FileExistsError:
...   print('iu.txt exists')
...
iu.txt exists
```

### 3. 텍스트파일 전체 읽기: read()

read() 함수는 전체 파일을 한 번에 가져오므로, 메모리 사용에 유의해야한다.

```python
>>> f = open('iu.txt', 'rt')
>>> iu = f.read()
>>> f.close()
>>> len(iu)
```

파일을 전부 읽으면 빈 문자열이 리턴되고, if문에서 False로 판단하여 루프가 끝난다.



### 4. 텍스트파일 줄 단위 읽기: readline()

```python
>>> iu = ''
>>> f = open('iu.txt', 'rt')
>>> while True:
...   line = f.readline()
...   if not line:
...     break
...   iu += line
...
>>> f.close()
>>> len(iu)
```

파일을 라인단위로 읽어 문자열에 저장한다.

빈 라인(\n)은 길이가 1이며, 파일의 끝에서만 완전히 빈 문자열(‘’)을 리턴한다.



### 5. 이터레이터를 사용한 텍스트 파일 읽기

```python
>>> iu = ''
>>> f = open('iu.txt', 'rt')
>>> for line in f:
...   iu += line
...
>>> f.close()
>>> len(iu)
75
```

readline() 을 호출한 것과 같은 결과를 보인다.



### 6. 텍스트파일을 줄 단위 문자열 리스트로 리턴: readlines()

```python
>>> f = open('iu.txt', 'rt')
>>> lines = f.readlines()
>>> f.close()
>>> for line in lines:
...   print(line)
```



### 7. 자동으로 파일 닫기: with

연 파일을 닫지 않을 경우, 파이썬에서는 해당 파일이 더 이상 사용되지 않을 때 파일을 자동으로 닫아줌



다만,

메인프로그램이나 오랫동안 동작하는 함수에서 파일을 열 경우, 

명시적으로 닫아주지 않을 경우 문제가 발생한다.

```python
with 표현식 as 변수
```

위의 구문을 사용하면, `with`문 내부에서 파일을 사용한 후 구문이 종료되면 자동으로 파일을 닫아주므로 프로그래밍 단계에서 일일이 파일을 닫아주는 부분에 신경쓰지 않아도 된다.

```python
>>> with open('iu.txt', 'wt') as f:
		f.write(iu)
```



### 8. 이진 데이터 다루기

쓰거나 읽을 때, t 대신 b 인자를 사용하면 된다.