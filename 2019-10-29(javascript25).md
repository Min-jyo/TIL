## 29. 표준 빌트인 객체와 래퍼 객체

### 1. 객체의 분류

자바스크립트 객체는 아래와 같이 크게 3개의 객체로 분류할 수 있다.

| 구분             | 설명                                                         |
| ---------------- | ------------------------------------------------------------ |
| 표준 빌트인 객체 | Object, String, Number, Array, Function과 같이 ECMAScript 사양에 정의된 객체를 말하며 애플리케이션 전역의 공통 기능을 제공한다. |
| 호스트 객체      | 브라우저 환경에서 제공하는 window, XmlHttpRequest, HTMLElement 등의 DOM 노드 객체와 같이 호스트 환경에 정의된 객체를 말한다. 예를 들어 브라우저에서 동작하는 환경과 브라우저 외부에서 동작하는 환경의 자바스크립트는 다른 호스트 객체를 사용할 수 있다. |
| 사용자 정의 객체 | 표준 빌트인 객체와 호스트 객체처럼 외부에서 제공되는 객체가 아닌 사용자가 직접 정의한 객체를 말한다. |



### 2. 표준 빌트인 객체

- 정의 : ECMAScript 사양에 정의된 객체 
- 특징 : 
  1. 애플리케이션 전역의 공통 기능을 제공
  2. 표준 빌트인 객체는 ECMAScript에 정의된 객체이므로 자바스크립트 실행 환경과 관계없이 언제나 사용할 수 있다.
  3. 표준 빌트인 객체는 전역 객체의 프로퍼티이다. 따라서 언제나 참조가 가능하다.
- 종류 : 40여개가 넘음



### 3. 표준 빌트인 객체는 생성자 함수이다.

Math를 제외한 표준 빌트인 객체는 모두 생성자 함수 객체이다. 예를 들어 표준 빌트인 객체인 String은 생성자 함수로 호출할 수 있으며 String 객체를 반환한다.

```javascript
// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');
console.log(typeof strObj); // object
console.log(strObj);        // String {"Lee"}

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj); // object
console.log(numObj);        // Number {123}

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj= new Boolean(true);
console.log(typeof boolObj); // object
console.log(boolObj);        // Boolean {true}

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x');
console.log(typeof func); // function
console.dir(func);        // ƒ anonymous(x )

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr); // object
console.log(arr);        // (3) [1, 2, 3]

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); // object
console.log(regExp);        // /ab+c/i

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date); // object
console.log(date);        // Tue Mar 19 2019 02:38:26 GMT+0900 (한국 표준시)
```

표준 빌트인 객체가 생성자 함수로서 호출되어 생성한 인스턴스의 프로토타입은 표준 빌트인 객체의 prototype 프로퍼티에 바인딩된 객체이다. 



표준 빌트인 객체가 제공하는 다양한 기능의 메소드는 프로토타입 객체에 프로토타입 메소드로 존재한다. 표준 빌트인 객체의 메소드로 존재하여 인스턴스 없이 정적으로 호출될 수도 있다. 



### 4. 원시값과 래퍼 객체 

- 레퍼 객체의 정의 : 문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 객체

- 레퍼 객체의 특징 : prototype의 메소드를 상속받을 수 있으며 처리가 끝나면 내부 슬롯에 할당된 원시값을 되돌리고 레퍼 객체는 갑지 컬렉션의 대상이됨