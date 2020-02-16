## crontab 사용법

https://ko.wikipedia.org/wiki/Cron

### cron이란?

1. 정의 :

   유닉스 계열 컴퓨터 운영체제의 시간 기반 잡 스케줄러

   

2. 어떨때 사용하나 : 

   작업을 고정된 시간, 날짜, 간격에 주기적으로 실행할 수 있도록 

   스케줄링하기 위해 cron을 사용한다.



3. 사용방법

   1. 크론탭을 설정할 수 있는 장소

      ```shell
      $ crontab -e
      ```

      1. 주기 설정

         각 별 위치에 따라 주기를 다르게 설정함.

         순서대로 분-시간-일-월-요일 순

         괄호 안에 숫자 범위 내로 별 대신 입력 할 수 있습니다.

         요일에서 0과 7은 요일을 뜻함 (1부터 월요일이고 6이 토요일임)

      2. 주기별 예제

         1. 매분 실행

            ```shell
            # 매분 test.sh 실행
            * * * * * /home/script/test.sh
            ```

         2. 특정 시간 실행

            ```shell
            # 매주 금요일 오전 5시 45분에 test.sh를 실행
            45 5 * * 5 /home/script/test.sh
            ```

         3. 사용환경에 있는 파이썬으로 stats 명령어를 실행

            ```shell
            ~/.pyenv/versions/wps-instagram/bin/python ~/project/fastcampus/12th/instagram/app/manage.py stats
            ```

            

   2. 현재 크론탭에 들어가 있는 내용

      ```shell
      $ crontab -l
      ```

   3. 크롭탭 지우기

      ```shell
      $ crontab -r
      ```



