# Docker 명령어

특징)

1. 항상 root 권한으로 실행해야 함



1. ### search 명령어

   설명 : Docker Hub에서 이미지를 검색함

   형식 : `sudo docker search <이미지 이름>`

   예시 :

   ```bash
   $ sudo docker search ubuntu
   ```

   

2. pull 명령어

   설명 : 이미지 받는 명령어

   형식 : `docker pull <이미지 이름>:<태그>`

   예시 :

   ```bash
   $ sudo docker pull ubuntu:latest 
   ```

   특징 : 

   1. `latest` 를 설정하면 최신 버전을 받습니다.
   2. 이미지 이름에서 앞에 사용자명을 지정하면 Docker Hub에서 해당 사용자가 올린 이미지를 받습니다. 공식 이미지는 사용자 명이 붙지 않습니다.



3. image 명령어

   설명 : 받은 이미지의 목록을 출력하는 명령어

   형식 : `sudo docker images`

   예시 : 

   ```bash
   $ sudo docker images
   ```

   특징 : 

   1. `docker images ubuntu` 처럼 이미지 이름을 설정하면 이름은 같지만 태그가 다른 이미지가 출력됨.



4. run 명령어

   설명 : 이미지로 컨테이너를 생성하는 명령어

   형식 : `sudo docker run <옵션> <이미지 이름> <실행할 파일>`

   예시 : 

   ```bash
   $ sudo docker run -i -t --name hello ubuntu /bin/bash
   ```

   특징 : 

   1. 명령어 뒤에 /bin/bash를 붙히면 이미지 안의 /bin/bash를 실행
   2. 이미지 이름 대신 이미지 ID를 사용하여 같은 명령어 실행 가능

   옵션 : 

   1. --rm=false : 

      컨테이너 안의 프로세스가 종료되면 컨테이너를 자동으로 삭제

      -d 옵션과 함께 사용할 수 없음

      

   2. -i, --interactive=false : 

      표준 입력(stdin)을 활성화하며 컨테이너와 연결(attach)되어있지 않더라도 표준 입력을 유지합니다. 보통 이 옵션을 사용하여 Bash에 명령을 입력함

      

   3. -t, --tty=false : 

      TTY 모드를 사용함. 

      Bash를 사용하려면 이 옵션을 설정해야함

      이 옵션을 설정하지 않으면 명령을 입력할 수는 있지만 셸이 표시되지 않음

      

   4. -p, --publish=[]: 

      호스트에 연결된 컨테이너의 특정 포트를 외부에 노출함

      보통 웹 서버의 포트를 노출할 때 주로 사용함.

      

      - 사용형식 : 

        1. <호스트 포트>:<컨테이너 포트> 

           예) -p 80:80

           

        2. <IP 주소>:<호스트 포트>:<컨테이너 포트>

           설명 : 

           호스트에 네트워크 인터페이스가 여러 개이거나 IP 주소가 여러개 일때 사용합니다. 

           예) -p 192.168.0.10:80:80

           

        3. <IP 주소>::<컨테이너 포트>

           설명 : 호스트 포트를 설정하지 않으면 호스트의 포트 번호가 무작위로 설정됩니다.

           예) -p 192.168.0.10::80

           

        4. <컨테이너 포트> 

           설명 : 컨테이너 포트만 설정하면 호스트의 포트 번호가 무작위로 설정됩니다.

           예) -p 80

           

           

   5. --name="" :

      설명 : 컨테이너에 이름을 설정함.

      특징 : 이름을 지정하지 않으면 Docker가 자동으로 이름을 생성하여 지정함.



5. ps 명령어

   

   설명 : 모든 컨테이너 목록을 출력

   형식 : 

   1. `sudo docker ps` / 실행되고 있는 컨테이너만 출력

      

   예시 : 

   ```bash
   $ sudo docker ps
   ```

   옵션 : 

   1. `-a `: 

       -a 옵션을 사용하면 정지된 컨테이너까지 모두 출력



6. start 명령어

   설명 : 컨테이너를 시작

   형식 : 

   1. `sudo docker start <컨테이너 이름>`

   2. `sudo docker start <컨테이너 ID>`

   예시 :

   ```bash
   $ sudo docker start hello
   ```

   

7. restart 명령어

   설명 : 하나 또는 여러 컨테이너를 다시 시작

   형식 : `sudo docker restart [옵션] CONTAINER [CONTAINER...]`

   예시 : 

   ```bash
   $ sudo docker restart hello
   ```

   옵션 :

   1. `--time, -t` : 컨테이너를 끄기 전에 기다리는 시간 설정 / default는 10이다.



8. attach 명령어

   설명 : 실행되고 있는 컨테이너에 표준 입력(stdin) 과 표준 출력(stdout) 을 연결

   형식 : `sudo docker attach [OPTION] CONTAINER`

   예시 : 

   ```bash
   $ sudo docker attach hello
   ```



9. exec 명령어

   설명 : 실행중인 컨테이너에서 명령을 실행

   형식 : `sudo exec [OPTIONS] CONTAINER COMMAND [ARG...]`

   예시 : 

   ```bash
   $ sudo docker exec hello echo "Hello World"
   Hello World
   ```



10. stop 명령어

    설명 : 하나 이상의 컨테이너 실행 중지

    형식 : `sudo docker stop [OPTIONS] CONTAINER [CONTAINER...]`

    예시 : 

    ```bash
    $ sudo docker stop hello
    ```

    옵션 :

    1. `--time, -t` : 컨테이너를 끄기 전에 기다리는 시간 설정 / default는 10이다.



11. rm 명령어

    설명 : 하나 이상의 컨테이너를 제거

    형식 : `sudo docker rm [OPTION] CONTAINER [CONTAINER...]`

    예시 : 

    ```bash
    $ sudo docker rm hello
    ```

    

12. rmi 명령어

    설명 : 하나 이상의 이미지 제거

    형식 : `sudo docker rmi [OPTIONS] IMAGE [IMAGE...]`

    예시 :

    ```bash
    $ sudo docker rmi ubuntu:latest
    ```

    

13. push 명령어

    설명 : Docker Hub 공개 저장소에 이미지 올림

    형식 : `sudo docker [OPTION] NAME[:TAG]` 

    예시 : 

    ```bash
    $ sudo docker push minjo/wps-instagram
    ```

    