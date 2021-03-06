## let, const 와 블록 레벨 스코프



### 1. var 키워드로 선언한 변수의 문제점

- 종류 : 

  1. 변수 중복 선언 허용

  2. 함수 레벨 스코프

  3. 변수 호이스팅

     

#### 1-1. 변수 중복 선언 허용

- 왜 var 키워드의 문제점일까? : 변수의 중복 선언을 하며 할당을했다면 의도치 않게 이전 변수 값													 이 변경되는 부작용이 발생한다.

#### 1-2. 함수 레벨 스코프

- 왜 함수 레벨 스코프가 문제점일까? : 함수 코드 블록만! 지역스코프로 인정한다는게 문제다. for문이나 if문, while문안에서 선언을해도 전역 변수로 동작한다는것이 문제



#### 1-3. 변수 호이스팅

- 왜 변수 호이스팅이 문제점일까 ? : var 키워드로 선언을 하면 전역변수한해서 말해보면 런타임 전에 선언과 초기화단계가 진행된다. 즉 참조문아래 선언문이 있어도 참조를 할수 있다는것을 의미한다. 이러한 동작은 코드의 가독성을 떨어뜨린다.



### 2. let 키워드

- 특징 : 

  1. 변수 중복 선언 금지 : 변수 중복 선언하면 문법 에러를 발생시킴

  2. 블록 레벨 스코프 : var키워드와 달리 모든 코드블록을 지역 스코프로 인정함

  3. 변수호이스팅 : 자신의 스코프 범위의 코드가 실행 되기 이전에 변수의 선언단계 (초기화 x)까지만 동작함 

     Tip : 선언단계에서 초기화단계까지의 구간을 일시적 사각지대라고 함



### 3. 전역객체와 var, let

- var 

  특징 : 

  1. 전역변수(var 키워드의 암묵적 전역 변수,  var키워드 선언한 전역변수, var 키워드 전역 함수)를 선언하면 전역객체(웹 브라우저에선 window / Node.js에선 global)의 프로퍼티가 된다.
  2. var 키워드로 선언한 전역 객체의 프로퍼티들을 참조할 때 window를 생략해도 됨

  용어 설명 :

  1. 전역 객체 : 어떤 객체보다도 먼저 생성되며 어떤 객체에도 속하지 않은 최상위 객체



- let

  특징 : 

  1. let으로 선언한 전역 변수는 전역 객체의 프로퍼티가 아님
  2. 전역 객체가 아닌 개념적인 블록내에 존재함



### 4. const 키워드

- 왜쓸까? : 상수(변하지 않는 고정된 값)을 선언하기 위해 사용



- 특징 : 
  1. const 키워드로 선언한 변수는 재할당이 금지됨
  2. const 키워드로 선언한 변수는 반드시 선언과 동시에 할당이 이루어져야 됨.
  3. let 키워드와 같이 블록 레벨 스코프를 갖음.
  4. const키워드를 사용해서 객체를 할당했을때 재할당(객체를 바꾸는것)은 허용하지 않지만 그 객체의 프로퍼티의 추가, 삭제, 변경은 가능하다.



### 5. 상수 

- 왜 쓸까? : 

  1. 가독성을 좋게 하기위해 

     추가 설명) 코드를 읽을때 숫자로 써져 있는 값을 읽으면 이게 숫자가 뭔뜻인지 모른다. 만약 변하지 않는 값이라면 그 숫자의 의미를 나타낼수 있는 변수에 할당에 나타내는게 가독성을 좋게 만든다.

  2. 유지 보수의 편위를 위해

     추가 설명) 재할당이 금지 되어있다. 따라서 const 선언문은 코드에 하나만 있을거라고 생각됨. 따라서 그 변수의 값만 바꿔주면 그 변수가 들어가 있는 모든 값이 바뀌기 때문에 유지 보수의 편의가 증가됨.



### 6. var , let, const 키워드를 언제 적절하게 써야될까?

- ES6를 사용한다면 var 키워드는 사용 x
- 재할당이 필요한 경우에 let 키워드 사용하되 그 변수의 스코프는 최대한 좁게 만든다.
- 변경이 발생하지 않는 원시 값과 객체에는 const사용, 