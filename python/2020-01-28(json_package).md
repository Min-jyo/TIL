예제코드의 재료)

```
# 프로젝트 구조

Instagram (ROOT_DIR)
│   secrets.json
```



## 파이썬 내 json패키지를 왜 쓸까?

이유1. json텍스트를 파이썬에서 불러서 파이썬에 맞는 데이터형을 만들기 위해



## 파이썬 내 `json` 패키지는 우리에게 2가지 메서드를 제공한다.



### 첫번째. load 메서드

예제) 

```python
import json

secrets_path = os.path.join(ROOT_DIR, 'secrets.json')
json_data = json.load(open(secrets_path))
```



언제쓸까)

​	이유1. 내가 json파일에 대한 경로를 알고 있을때



### 두번째. loads 메서드

예제)

```python
import json
secrets_path = os.path.join(ROOT_DIR, 'secrets.json')
json_data = json.loads(open(secrets_path).read())
```



언제쓸까)

​	이유1. 자신이 문자열 데이터를 가지고 있을때