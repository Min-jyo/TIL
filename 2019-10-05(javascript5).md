## 타입 변환과 단축 평가



### 1. 명시적 타입 변환 = 타입 캐스팅

정의 : 개발자가 의도적으로 값의 타입을 변환하는 것



### 2. 암묵적 타입 변환 = 타입 강제 변환



정의 : 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되는 것

Tip : 자신이 작성한 코드에서 암묵적 타입 변환이 발생하는지, 발생한다면 어떤 타입의 어떤 값으로 변환되는지, 그리고 타입 변환된 값으로 표현식은 어떻게 평가될 것인지 예측 가능해야된다. 

-> 안하면 오류 생산 가능성 높아짐



### 3. ( var str = x + ‘ ‘ ; ) 코드의 내부 동작 

```javascript
var x = 10;

// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.

var str = x + '';
console.log(typeof str, str); // string 10

// 변수 x의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10
```



- 순서 1 : 자바스크립트 엔진은 표현식 `x + ‘'`을 평가하기 위해 변수 x의 숫자 값을 바탕으로 새로운 문자열 값  ‘10’ 을 생성함

  

- 순서 2 : 생성된 문자열 값 ‘10’ 으로 표현식 `‘10’ + ‘ ' `를 평가한다.

  Tip 1 : 이때 자동 생성된 문자열 ‘10’ 은 변수 x에 할당되는 것이 아니다.

  Tip 2 : 자동 생성된 문자열 ‘10’ 은 표현식의 평가가 끝나면 아무도 참조하지 않으므로 가비지 컬렉터에 의해 메모리에서 해제된다.



### 4. 암묵적 타입 변환

- 자바스크립트 엔진이 암묵적 타입 변환을 할때 : 
  1. 표현식을 평가 할때



- 종류

  

  1. 문자열 타입으로 변환 (피연산자 중에서 문자열 타입이 아닌 피연산자를 문자열 타입으로 변환한다.)

     1. Symbol()타입은 문자열로 타입이 변환안됨

     

  2. 숫자 타입으로 변환 (

     1. 산술 연산자 , 비교 연산자 , + 단항 연산자

        중에서 피연산자가 숫자 타입이 아닌것은 숫자타입으로 타입 변환한다.

     2. Tip : 빈 문자열(‘’), 빈 배열([]), null, false는 0으로, true는 1로 변환된다. 

        ​		객체와 빈 배열이 아닌 배열 , undefined는 NaN으로 변환된다.

     

  3. 불리언 타입으로 변환 (조건식의 평가 결과를 불리언 타입으로 암묵적 타입 변환한다.)

     

     1. 자바스크립트 엔진은 불리언 타입이 아닌값을

        1. Truthy 값 (참으로 인식할 값) , Falsy 값 (거짓으로 인식할 값)으로 구분한다.

        

     2. Tip 1 : Falsy 값

        |   Falsy 값    |
        | :-----------: |
        |     false     |
        |   undefined   |
        |     null      |
        |    0 , -0     |
        |      NaN      |
        | “” (빈문자열) |

     3. Tip 2 : Truthy 값

        정의 : Falsy이외의 값은 모두 Truthy 값

        

     4. Truthy / Falsy 값을 판별하는 함수

        

        1. isFalsy 함수
           - 정의 : 인자가 Falsy 값이면 true / Truthy 값이면 false 반환
        2. .isTruthy 함수
           - 정의 : 인자가 Truthy 값이면 true / Falsy 값이면 false를 반환

### 5. 명시적 타입 변환



- 변환 방법의 종류 : 

  1. 표준 빌트인 생성자 함수 (String, Number, Boolean)를 new 연산자 없이 호출하는 방법
  2. 빌트인 메소드를 사용하는 방법
  3. 암묵적 타입 변환을 이용하는 방법

  

- 종류 : 

  

  1. 문자열 타입으로 변환

     

     - 변환 방법의 종류 : 
       1. String 생성자 함수를 new 연산자 없이 호출하는 방법
       2. Object.prototype.toString 메소드를 사용하는 방법
       3. 문자열 연결 연산자를 이용하는 방법

     

  2. 숫자 타입으로 변환

     

     - 변환 방법의 종류 : 
       1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
       2. parseInt, parseFloat 함수를 사용하는 방법 (문자열만 변환 가능)
       3. +단항 연결 연산자를 이용하는 방법
       4. *산술 연산자를 이용하는 방법

     

  3. 불리언 타입으로 변환

     

     - 변환 방법의 종류
       1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
       2. ! 부정 논리 연산자를 두번 사용하는 방법

### 6. 단축 평가



- 단축 평가의 규칙

|  단축 평가 표현식   | 평가 결과 |
| :-----------------: | :-------: |
| true \|\| anything  |   true    |
| false \|\| anything | anything  |
|  true && anything   | anything  |
|  false && anything  |   false   |



- 단축 평가의 유용한 패턴 2가지

  

  1. 객체가 null인지 확인하고 프로퍼티를 참조할때

  ```javascript
  var elem = null ;
  
  console.log(elem.value); // TypeError: Cannot read property 'value' of null
  console.log(elem && elem.value); // null
  ```

  

  2. 함수 매개 변수에 기본값을 설정할 때

  ```javascript
  
  // 단축 평가를 사용한 매개변수의 기본값 설정
  function getStringLength(str) {
  	str = str || '' ;
  	return str.length ;
  }
  
  getStringLength(); // 0
  getStringLength('hi') ; // 2
  
  // ES6의 매개변수의 기본값 설정
  function getStringLength(str = '') {
  return str.length ;
  }
  
  getStringLength(); // 0
  getStringLength('hi'); // 2
  ```