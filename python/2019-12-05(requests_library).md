# Requests library  

### 1. Requests library란?

파이썬을 위한 HTTP library이다.



### 2. 설치방법

```bash
pip install requests
```



### 3. 사용방법

```python
import requests
url = '주소' #ex) 'https://comic.naver.com/webtoon/weekday.nhn'
response = requests.get(url)
response.status_code
```

