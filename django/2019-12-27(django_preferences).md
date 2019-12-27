### 1. Django 환경설정하는법



1. django프로젝트 폴더를 만든다.

2. django를 설치한다.

   ```python
   pip install 'django<3.0'
   ```

3. 파이썬 가상환경설정을 한다.

   ```bash
   # 가상환경 만들기
   $ pyenv virtualenv 파이썬버전 파이썬가상환경이름
   
   # 가상환경 적용
   $ pyenv local 파이썬가상환경이름
   ```

4. 장고 프로젝트 시작 및 어플리케이션 시작

   ```bash
   # 장고 프로젝트 시작
   장고프로젝트폴더$ django-admin startproject 파이썬프로젝트이름 . 
   
   # 장고 어플리케이션 시작
   장고프로젝트폴더$ ./manage.py startap 어플리케이션이름
   ```

