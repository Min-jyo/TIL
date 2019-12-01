

바벨이 다르게 컴파일한 파일을 실행해본 경과 잘 동작하는걸 확인할수 있음



![image-20191114152807522](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114152807522.png)



위 실행은 node.js에서 실행한거임

compile된 .main.js가보면 require가 있음

```
var _lib = require("./lib");
```

require는 node.js에서 잘알고있는 함수임

![image-20191114153137594](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114153137594.png)

위 코드를 실행하면 

![image-20191114153214762](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114153214762.png)

라고 뜬다.



export가 아니라 exports임

------------

node.js 백엔드 쪽에서는 충분한데 프론터ㅡ 엔드에서는 안된다.

뭐가? 인코딩 익스포트 가 안된다.

해결하려면 webpack을 써야된다.

---------

### 3. webpack

## 2.1 Webpack이란?

[Webpack](https://webpack.js.org/)은 의존 관계에 있는 모듈들을 하나의 자바스크립트 파일로 번들링하는 모듈 번들러이다. Webpack을 사용하면 의존 모듈이 하나의 파일로 번들링되므로 별도의 모듈 로더가 필요없다. 그리고 다수의 자바스크립트 파일을 하나의 파일로 번들링하므로 html 파일에서 script 태그로 다수의 자바스크립트 파일을 로드해야 하는 번거로움도 사라진다.



웹펙을 사용하면 하나의 파일을 만들수 있다

하나의 파일로 만들고 싶으면 하나 두개로 만들고 싶으면 두개 파일로 만들수 잇다.\

-------

### 웹 펙 설치법

```
npm install --save-dev webpack webpack-cli
```



![image-20191114153643209](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114153643209.png)



웹펙을 깔았고

![image-20191114153910040](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114153910040.png)



아까는 바벨을썼는데 

웹펙이 바벨을 하여 트랜스 컴파일링하여 웹팩이 번들링할꺼임

![image-20191114154010051](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114154010051.png)

![image-20191114154045866](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114154045866.png)

웹펙 설정파일 만들어야됨



웹펙 어렵다고 하는데 그게 설정파일만드는게 어려운거임 아래는 설정파일임



// 지호라고 주석처리되어있는게 

수업시간에 강사가 말해준거 메모한거임

|

v

```
const path = require('path');

module.exports = {
  // enntry file
  
  
  
  
  
  
  entry: './src/js/main.js',
  // 지호
  여러개의 자바스크립트가 없다면 웹펙을 사용할 이유가 없음
  여러개중에서 가장 먼저 실행될 자바스크립트가 뭐냐
 고알려줌 그걸 진입점이라고 함 
  
  
  
  
  
  
  
  
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },
  // 지호 
  여러개의 자바스크립트를 하나로 만들꺼잖아 이름을 어덯게 만들거냐 결과를 어디로 저장할꺼냐 지정하는것
  
  
  
  
  
  
  
  
  module: {
    rules: [
      {
        test: /\.js$/,
        
        지호 // 자바스크립트 파일은 src/js에 있는 모든 자바스크립트파일을 /node_modules/를 제외하고 바벨로드를 호출하는데 아래 옵션으로 호출하라
        
        
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development'
};
```



그럼 빌드를 해보자

![image-20191114154636003](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114154636003.png)

위와 같이 결과가남 



노드에서 말고 브라우저에서도 해보자

![image-20191114161129422](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114161129422.png)

![image-20191114161147382](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114161147382.png)

번들 js를 옛날브라우저가서 하면 안될꺼임

최신부라우저니까 되는거임



프로미스거나 스프레드 문법이나 객체의 스프레드 문법이나 그런것은

구형 브라우저는 모르니까 컴파일이 안됨



그러면 어떻게 할까? 



폴리필을 써줘야됨

![image-20191114161311544](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114161311544.png)

문제는 어레이 프롬

오브젝트 어사인도 있는데

프로미스

이런것은 

대체제가 없다. 



그래서 얘내들을 번들링한것을 보자



src에서 main.js를 바꿔줬었음

![image-20191114161443266](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114161443266.png)



object assign 함수가 있는지 없는지 확인한다

있으면 함수가 나올것이고 없으면 언디파인나온다고

이때 언디파인이면 누군가 만든 폴리필을 채워넣는다.



폴리필을 넣어야됨



그래서 폴리필을 어덯게 까냐

![image-20191114161646692](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114161646692.png)



깔았으니까 적용시켜야됨



우리의 진입점이 되는 가장 상단에다가  import해주는방법이 있고

바벨이 있다. 



우리는 바벨을 할꺼다

![image-20191114161759954](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114161759954.png)



하고 build 해보면

![image-20191114162002190](C:\Users\owner\AppData\Roaming\Typora\typora-user-images\image-20191114162002190.png)



번들 js로 가면

123~297 폴리필임 



2727번째줄 promise 추가된거임

