![image-20191114143917394](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114143917394.png)

크롬이나 사파리 파이어폭스는 에버그린 브라우저라고 한다.

에버 그린 브라우저의 es6지원 비율은 약 98%이다.



생산성에서 보자면

es6와 es5는 차이가 많이 난다.

es6가 더 좋다.

개발자의 사기진작도 도움이 된다.



![image-20191114144046116](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114144046116.png)



### 1. 바벨babel이란?

최신문법을 es3, es5로 떨구는것(es는 es4가 없다./ 왜 es4가 없을까? reject당했다.)

```javascript
// ES6 화살표 함수와 ES7 지수 연산자
[1, 2, 3].map(n => n ** n);
```

위코드를 바벨로 트랜스파일링(버전을 내리는작업) 하면 아래와 같이 된다.

```javascript
// ES5
"use strict";

[1, 2, 3].map(function (n) {
  return Math.pow(n, n);
});
```



### 2. 바벨 체험 (1, 2)

![image-20191114144442294](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114144442294.png)

![image-20191114144508329](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114144508329.png)



### 3. Typescript 체험

![image-20191114144741713](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114144741713.png)



### 4. 바벨 설치

1. 폴더 생성및 그 폴더 안

1. mkdir es6project
2. cd es6project
3. npm init - y
4. code .
5. npm init
6. history
7. npm install --save-dev @babel/core @babel/cli
8. history





package.json변경

```javascript
{
  "name": "es6project",
  "version": "1.0.0",
  
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "devDependencies": {
    "@babel/cli": "^7.7.0",
    "@babel/core": "^7.7.2"
  }
}

```



폴더에 .babelrc파일을 만듬



babel 프리셋중  [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) 을 깔꺼임



<명령어>

 npm install --save-dev @babel/core @babel/cli
    2  history
    3  npm install --save-dev @babel/preset-env
    4  history



위 추가된 명령어(npm install --save-dev @babel/preset-env)를 치면

![image-20191114151151825](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114151151825.png)

처럼 됨



바벨이 컴파일할때 이 프리셋을 써라라는뜻임 아래 그림은

![image-20191114151232784](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114151232784.png)

------------

바벨을 실행해라 타깃은 src/js뒤에 있는 모든 자바스크립트 파일들을 예네를 해라 src/js파일이 바뀌면 알아서 컴파일해라 컴파일한 결과를 dist/js폴더에 저장해라.

![image-20191114151455773](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114151455773.png)

----

테스트 하기위해 코드를 쳐보자

![image-20191114151551501](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114151551501.png)

![image-20191114151606688](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114151606688.png)

![image-20191114151703879](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114151703879.png)



  start는 특별한 경우고 명령어 앞에는 run 을 써줘야된다.

![image-20191114151951166](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114151951166.png)



위 에러는 왜 떴을까?

바벨은 제한레벨은 하지 못한다.



위에러에 의한 플러그인을 설치해줘야되는데 

어떻게 해야하냐

![image-20191114152212986](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114152212986.png)



![image-20191114152352093](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114152352093.png)



![image-20191114152413363](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114152413363.png)

![image-20191114152512038](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114152512038.png)

![image-20191114152534114](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114152534114.png)

결과파일은 dist폴더에 들어감  



