### UX란?

경험

​	-> 경험이란?

​		-> 소프트웨어를 사용하는 사용자의 느낌 태도 행동을 말한다.

------

### (Desktop, stand alone) application 

### VS

### Web application

|      | desktop, stand alone app |      web app       |
| :--: | :----------------------: | :----------------: |
| 특징 |    인터넷 없이 돌아감    | 인터넷 없으면 안됨 |
|      |       install 필수       | install 필요 없음  |
|      |                          | 브라우저에서 열림  |
| 예시 |      크롬, 카카오톡      |        야후        |

------

### 프로그램이 돌아가는 환경이란?

​	-> 플랫폼

------

### 웹 페이지와 웹 애플리케이션의 차이점

웹 페이지 : 정적

웹 애플리케이션 : 동적

------

### 프런트엔드 개발에 필요한 기술

- HTML : tags & attributes, Semantic web
- CSS: Layout(float, flex, grid), transition/animation , 반응형 웹, Preprocessor(Sass, Less, Stylus, PostCSS), CSS 방법론, CSS 프레임워크
- 크로스 브라우징
- avaScript: ES5, ES6, ES Next, DOM/Event, Ajax, 동작 원리(브라우저, 자바스크립트 엔진), node.js
- HTTP
- Tools : Git, Webpack, Babel, ESLint, npm…
- Library / Framework : SPA(Angular, React, Vue.js), TypeScript, jQuery, Lodash, Axios…
- TDD(Test Driven Development) : karma / jasmine, mocha, chai
- 알고리즘 / 자료 구조

------

### Attribute 와 Property의 차이

attribute 특징 : HTML 요소에 추가적인 정보를 담음

​							변하지 못하고 항상 초기값을 가짐

property 특징 : HTML DOM tree에서 attribute를 대신하여 표현

​							변할수 잇음

------

### Sass란?

정의 : 

CSS의 상위에 있는 메타 언어

자바스크립트처럼 특정 속성의 값을 변수로 선언하여 필요한 곳에 적용할수 있음

재사용성을 높여주는 CSS 전처리기

------

### ESLint란?

코딩 스타일 가이드를 따르지 않거나 문제가 있는 코드나 안티 패턴을 찾기 위해 사용하는 Javascript linter이다.

------

### TDD(Test Driven Development)란?

정의 : 테스트 주도 개발 

------

### 프로그래밍이란?

정의 : 컴퓨터에게 실행을 요구하는 일종의 커뮤니케이션

------

### ASCII code , Uni code 특징 비교

|                 |                            ASCII                             |                             UNI                              |
| :-------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|      특징       |         영문 알파벳을 사용하는 대표적인 문자 인코딩          | 모든 문자를 컴퓨터에서 일관되게 표현하고 다룰 수 있도록 설계된 산업 표준 |
| 어디에 사용되나 | 컴퓨터와 통신 장비를 비롯한 문자를 사용하는 많은 장치에 사용 |                    XML 자바, 운영 체제 등                    |
|     몇비트      |                         7비트, 8비트                         |                            16비트                            |

------

### 컴파일러, 인터프리터 특징 비교



|      |              컴파일러              |           인터프리터            |
| :--: | :--------------------------------: | :-----------------------------: |
| 특징 |     원시코드를 실행파일로 만듬     | 한줄한줄 해석해서 기계어로 만듬 |
|      | 동작시키려면 실행파일을 실행해야됨 |         해석하며 실행함         |
| 속도 |       인터프리터보다 빠르다        |        컴파일러보다 느림        |

------

### Ajax란?

비동기적인 웹 애플리케이션의 제작을 위해 아래와 같은 조합을 이용하는 웹 개발 기법이다.

------

### JQuery란?

정의 : 자바스크립트 라이브러리

왜 만들어졌나 : Javascript를 좀 더 쉽게 사용하려고 만들어졌다

특징 : 크로스 부라우징을 지원한다.

------

### CBD란?

정의 : HTML 바뀌어도 Javascript 영향 안받는 방법론

------

### React, Angular, Vue.js 란?

React 정의 : 사용자 인터페이스 빌드를 위한 자바스크립트 라이브러리

Angular 정의 : 자바스크립트 기반의 오픈 소스 프론트엔드 웹 애플리케이션 프레임워크

Vue.js 정의 : 웹 애플리케이션의 사용자 인터페이스를 만들기 위해 사용하는 오픈 소스 프로그레시브 자바스크립 						트 프레임워크

------

### Javascript , Ecmascript 특징 비교

|            |              Javascript              |                Ecmascript                 |
| :--------: | :----------------------------------: | :---------------------------------------: |
|    정의    | 객체 기반의 스크립트 프로그래밍 언어 |         Javascript 설계서의 이름          |
|    범위    |  Ecmascript는 Javascript의 부분집합  |                                           |
| 이름변천사 |  Mocha -> LiveScript -> Javascript   |                Ecmascript                 |
| 왜 생겼나  |                                      | 자바스크립트를 표준화하기 위해 만들어졌음 |

------

### 자바스크립트의 특징

웹 브라우저에서 동작하는 유일한 프로그래밍 언어

명령형, 함수형, 프로토타입 기반 객체지향 프로그래밍을 지원하는 멀티 패러다임 프로그래밍 언어

​	-> 프로토타입 기반 프로그래밍이란?

​		-> 정의 : 객체지향 프로그래밍의 한 형태로 갈래로 클래스가 없고, 클래스 기반 언어에서 상속을 사용하는것						과는 다르게, 객체를 원형으로 하여 복제의 과정을 통하여 객체의 동작 방식을 다시 사용할 수 있다. 						클래스리스, 프로토타입 지향, 인스턴스 기반 프로그래밍이라고도 함

------

### 어셈블리어

정의 : 기계어와 일대일 대응이 되는 컴퓨터 프로그래밍의 저급 언어

특징 : 컴퓨터 구조에 따라 사용하는 기계어가 달라지며, 따라서 기계어에 대응되어 만들어지는 어셈블리어도 각각 			다르게 된다.

------

#### Javascript 엔진

정의 : Javascript를 실행 시킬수 있는 환경

Tip : 브라우저별 Javascript 엔진 이름이 다 다르다

------

### CSS와 Script를 HTML에 어떻게 추가할까?

#### CSS : 

1. style 태그

2. link 태그
3. 태그 안에 style 속성

#### Script :

1. inline 방식

2. script 태그 방식
3. script 태그를 써서 외부 파일로 분리

------

### 로드 밸런싱

정의 : 부하 분산을 위해 가상(virtual) IP를 통해 여러 서버에 접속하도록 분배하			는 기능을 말한다.	

------

### 웹 브라우저는 어떻게 동작하는가?

![웹 브라우저의 동작](C:\Users\owner\Desktop\웹 브라우저의 동작.png)

​																					       <그림 1>

​	         ![Client,Sever](C:\Users\owner\Desktop\Client,Sever.PNG)																					       

​																					       <그림 2>																					

순서 1 : Client 가 Server로 Request를 보낸다.

순서 2 : Server는 Client로 Response를 보냄

​	Tip : 한번에 파일로 보내는게 아닌 패킷을 보낸다.

순서 3 : 패킷들을 받은 Client 는 패킷들을 다운로드 하고 합친다.

순서 4 : Client는 다운로드 받은 것 Memory에서 Read해서 parcing을 시작한다.



Case 1 : HTML 문서를 파싱하면서 Link 태그를 만났을때!

순서 5 - 1 : HTML 파싱 중지

순서 6 - 1 : Client가 Server에 css 파일 요청 , Server에서 Client로 파일 전송

순서 7 - 1 :  css 파일을 파싱하여 CSSOM 트리를 만듬

순서 8 - 1 : CSSOM 트리가 완성되면 순서 4로 이동하여 못다한 DOM tree 생성



Case 2 : HTML 문서를 파싱하면서 script 태그를 만났을때!

순서 5 - 2 : HTML 파싱 중지

순서 6 - 2 : Client가 Server에 script 파일 요청, Server에서 Client로 script 파일 전송

순서 7 - 2 :  script 파일을 파싱하여 syntax 트리를 만듬

순서 8 - 2 : syntax 트리가 완성 되면 순서 4로 이동하여 못다한 DOM tree 생성



순서 9 : Dom tree와 CSSOM tree가 합쳐져 Render tree가 만들어짐

순서 10 : 브라우저는 만들어진 Render tree를 기반으로 웹 페이지를 그림

------

### 자바스크립트 엔진의 소스 코드 실행 과정



![자바스크립트 엔진의 소스 코드 실행 과정](C:\Users\owner\Desktop\자바스크립트 엔진의 소스 코드 실행 과정.png)

제어 권한을 넘겨 받은 자바스크립트 엔진은 자바스크립트 파일을 로드하고 파싱하여 실행한다. 

렌더링 엔진이 HTML과 CSS를 파싱하여 DOM tree와 CSSOM tree를 생성하듯 

자바스크립트 엔진은 자바스크립트를 파싱하여 AST(Abstract Syntax Tree 추상적 구문 트리) 생성

AST를 통해 바이트 코드 생성하여 실행



#### 실행과정을 순서로 설명 

- 순서 1 ( 자바스크립트 소스코드 - > 토큰 ) : 

  -> 자바스크립트 엔진이 소스코드를 토큰으로 나눔

  ​		->토큰을 어떻게 구별 할까? / 스페이스로 구변

  ​			-> 위 그림을 보면 type : “keyword” 처럼 type을 구별했던데 어떻게 했어? / 

  ​				-> 예약어는 문맥파악하여 type : “keyword”라는걸 알아냄

  

- 순서 2 (토큰 -> AST ) : 

  -> 토큰들의 집합을 구문 분석(Syntactic analysis)하여 AST(Abstract Syntax        Tree, 추상적 	구문 트리)를 생성함AST는 토큰에 문법적 의미와 구조를 반영한 트리 구조의 자료 구조이다.

  -> 자바스크립트가 문법을 이해할수 있음

  

- 순서 3 : 

- 

- 

- 

  

- 순서 3 (AST -> 바이트 코드) :

  -> 완성된 문법을 어셈블리어로 변환함.

------

### 명령 프롬프트

정의 : 컴퓨터 터미널의 CLI(커맨드 라인 인터페이스)의 명령줄 대기모드를 가리킨다.

------

### 명령 줄 인터페이스 (CLI , Command line interface)

정의 : 명령어 인터페이스 또는 명령어 인터페이스는 가상 터미널또는 터미널을 통해 사용자와 컴퓨터가 상호 작용하는 방식을 뜻한다.

------

### 개발자 도구의 Console(콘솔)

왜쓸까 : 자바스크립트 코드에서 에러가 발생하여 애플리케이션이 정상적으로 동작하지 않을 때 가장 우선적으로 살펴보아야 할 곳이다.

------

### 디버깅 또는 디버그

컴퓨터 프로그램이나 시스템의 정확성 또는 논리적인 오류(버그)를 검출하여 제거하는 과정을 뜻한다. 일반적으로 디버깅하는 방법으로 테스트 상의 체크, 기계를 사용하는 테스트, 실제 데이터를 사용해 테스트하는 법이 있다.

------

### ESLINT 까는방법 

순서 1 : 설치하고 싶은 프로젝트 폴더를 선택하고 터미널로 현재 작업디렉터리로 만들어놓는다.

순서 2 : 아래 코드를 입력한다.

```
$ npm init -y
$ npm install eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-html --save-dev
```

순서 3 : 메뉴 Code > 기본 설정 > 설정으로 이동하여 아래의 설정을 추가한다. 

```
// ESLINT
"eslint.validate": [
    "javascript",
    "html"
  ]
```

주의점 : 위 구문을 추가할때 전체 중괄호 안에 넣어야 되며 위 구문위에는 ‘,’ 콤파 표시가 위 구문 아래는 ,표시가 없어야함.



순서 4 : 프로젝트 루트에 .eslintrc.js를 생성하고 룰셋을 필요에 따라 아래와 같이 변경한다. 

```
module.exports = {
  "parserOptions": {
    "ecmaVersion": 9
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "jquery": true
  },
  "extends": "airbnb-base",
  "plugins": [ "import", "html" ],
  "rules": {
    // "off" or 0 - turn the rule off
    // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
    // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
    "no-console": "warn",
    "quotes": [ "error", "single" ],
    "no-underscore-dangle": "warn",
    "no-plusplus": [ "error", { "allowForLoopAfterthoughts": true }],
    "comma-dangle": [ "error", "never"]
  }
};
```

