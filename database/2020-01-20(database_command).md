### 서버 컴퓨터에 접속하는방법

```
ssh -i ~/.ssh/wps1234.pem ubuntu@퍼블릭IP
```



#### %주의%

서버 컴퓨터에 접속하기 전에

```
minjyo@min:~$ chmod 400 ~/.ssh/키페어
```

접근 권한 설정해줘야됨



### 서버 컴퓨터에 파일 보내는방법

```
scp -i ~/.ssh/키페어 ~/Downloads/wps_database/orm/requirements.txt ubuntu@퍼블릭키:~/
```

