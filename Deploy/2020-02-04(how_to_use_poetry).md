## poetry 다운로드

```
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python
```



## poetry 초기 설정

1. 

```
$ poetry init 
Package name [instagram]: wps-instagram // Package name이 instagram이 맞는지 확인하는 질문 / 
										   wps-instagram으로 바꾸겠다.
Version[0.1.0]: [Enter]
Description[]: [Enter]
Author [~~]: [Enter]
Licence [] : [Enter]
Compatible Python versions [^3.7]: [Enter]
Would you like to define your main dependencies interactively? (yes/no) [yes] // 패키지 설정을 할껀지에 대한 질문? no
Would you like to define your dev dependencies (require-dev) interactively (yes/no) [yes] // no 
Do you confirm generation? (yes/no) [yes] // Enter
```



2. Django에서 plugin 설치

   `toml` 플러그 설치





3. ```
   (wps-instagram-env) minjyo@min:~/Desktop/Instagram$ poetry add 'django<3' boto3 django-extensions django-secrets-manager django-storages Pillow psycopg2-binary requests
   
   # poetry는 poetry add 명령어에서 버전이 써있는 패키지에 맞춰서 버전이 안써진 패키지의 의존성을 알아서 맞춤
   ```



4. ```
   (wps-instagram-env) minjyo@min:~/Desktop/Instagram$ poetry add notebook --dev
   # 이러면 개발자 패키지가 된다.
   ```

   



5. ```
   (wps-instagram-env) minjyo@min:~/Desktop/Instagram$ poetry export -f requirements.txt > requirements.txt 
   poetry 패키지로 requirements.txt 생성
   ```

   