우리가 개발 단계에서 필요한 패키지들을 requirements.txt를 통해 관리한다.

하지만 개발이 끝나고 배포단계에선 개발단계에서 썼던 패키지들이 필요로 하지 않는다.



그래서 requirements.txt를 분리해야 한다. 왜? 

개발단계에서의 필요한 패키지와 

배포단계에서의 필요한 패키지가 다르니까

개발단계에서 필요한 패키지가 배포단계에서 필요하지 않게 되며 개발단계에서 필요한 패키지를 제거해서 배포하면 배포 크기가 줄어드니까



## 프로젝트 폴더 구조

```python
Instagram
└── .requirements
    	├── base.txt
        ├── dev.txt
        └── production.txt
```



## 각 파일 코드

```txt
# base.txt

django<3
django-extensions
django-storages
Pillow
psycopg2-binary
requests
```

```txt
# dev.txt

-r ./base.txt // dev.txt와 같은 폴더에 있는 base.txt도 포함

notebook
```

```
# production.txt

-r ./base.txt
```



## 명령어

```bash
경로/Instagram$ pip install -r .requirements/dev.txt
```

