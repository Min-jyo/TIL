## 5.23 Number 레퍼 객체



### 1. 원시 타입이 wrapper 객체의 메소드를 사용할 수 있는 이유?

원시 타입으로 프로퍼티나 메소드를 호출할 때 원시 타입과 연관된 wrapper 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 되기 때문이다.

```javascript
var num = 1.5;
console.log(num.toFixed()); // 2
```



### 2. Number Constructor



Number 객체는 Number() 생성자 함수를 통해 생성할 수 있다.

```javascript
new Number(value);
```



만약 인자가 숫자로 변환될 수 없다면  NaN을 반환한다.

```javascript
var z = new Number('str');
console.log(z); // NaN
```



Number()생성자 함수를 new 연산자를 붙이지 않아 생성자로 사용하지 않으면 Number 객체를 반환하지 않고 원시 타입 숫자를 반환함.

```javascript
var x = Number('123');
console.log(typeof x, x);
```



일반적으로 숫자를 사용할 때는 원시 타입 숫자를 사용한다.

```javascript
var x = 123;
var y = new Number(123);

console.log(x == y); // true
console.log(x === y); // false

console.log(typeof x); // number
console.log(typeof y); // object
```



### 3. Number Property

정적 프로퍼티로 Number 객체를 생성할 필요 없이 Number.propertyName 형태로 사용함.



#### 3.1 Number.EPSILON

Number/EPSILON은 JavaScript에서 표현할 수 있는 가장 작은 수 

 

부동소주점의 비교는 Number.EPSILON 을 사용하여 비교 기능을 갖는 함수를 작성함

```javascript
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

function isEqual(a, b) {
	// Math.abs는 절댓값을 반환한다.
	// 즉 a와 b의 차이가 JavaScript에서 표현할 수 있는 가장 작은 수인 Number.EPSILON보다 작으면 같은 		수로 인정할 수 있다.
	return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));
```



#### 3.2 Number.MAX_VALUE 



자바스크립트에서 사용 가능한 가장 큰 숫자를 반환한다. 

MAX_VALUE보다 큰 숫자는 Infinity이다.

```javascript
Number.MAX_VALUE;

var num = 10;
num.MAX_VALUE; // undefined

console.log(Infinity > Number.MAX_VALUE); //true
```



#### 3.3 Number.MIN_VALUE



자바스크립트에서 사용 가능한 가장 작은 숫자를 반환한다.

MIN_VALUE는 0에 가장 가까운 양수 값이다. MIN_VALUE보다 작은 숫자는 0으로 변환된다.

```javascript
Number.MIN_VALUE;

var num = 10;
num.MIN_VALUE; // undefined

console.log(Number.MIN_VALUE > 0); // true
console.log(Number.MIN_VALUE < Number.EPSILON); // true
```



#### 3.4 Number.POSITIVE_INFINITY

양의 무한대 Infinity를 반환한다.

```javascript
Number.POSITIVE_INIFINITY // Infinity

var num = 10;
num.POSITIVE_INFINITY; // undefined
```



#### 3.5 Number.NEGATIVE_INFINITY

음의 무한대 -Infinity를 반환한다.

```javascript
Number.NEGATIVE_INFINITY // -Infinity

var num = 10;
num.NEGATIVE_INFINITY; // undefined
```



#### 3.6 Number.NaN

숫자가 아님(Not-a-Number) 을 나타내는 숫자값이다.  Number.NaN 프로퍼티는 window.NaN 프로퍼티와 같다.

```javascript
console.log(Number('xyz'));
console.log(1 * 'string');
console.log(typeof NaN);
```



### 4. Number Method



#### 4.1 Number.isFinite(testValue: number) : boolean 

매개변수에 전달된 값이 정상적인 유한수인지를 검사하여 그 결과를 Boolean으로 반환함.

```javascript
Number.isFinite(testValue)
Number.isFinite(Infinity) // false
Number.isFinite(NaN) // false
Number.isFinite('Hello') // false
Number.isFinite('2005/12/12') // false

Number.isFinite(0) // true
Number.isFinite(2e64) // true
Number.isFinite(null) // false.
isFinite(null) // true
```



Number.isFinite()는 전역 함수 isFinite()와 차이가 있다. 전역 함수 isFinite()는 인수를 숫자로 변환하여 검사를 수행하지만  Number.isFinite()는 인수를 변환하지 않는다. 따라서 숫자가 아닌 인수가 주어졌을 때 반환값은 언제나 false이다.



#### 4.2 Number.isIniteger(testValue: number) : boolean 

매개변수에 전달된 값이 정수인지 검사하여 그 결과를 Boolean으로 반환한다. 검사전에 인수를 숫자로 변환하지 않는다.

```javascript
Number.isInteger(testValue)

Number.isInteger(123) // true
Number.isInteger(-123) // true
Number.isInteger(5-2) // true
Number.isInteger(0) // true
Number.isInteger(0.5) // false
Number.isInteger('123') // false
Number.isInteger(false) // false
Number.isInteger(Infinity) // false
Number.isInteger(-Infinity) // false
Number.isInteger(0 / 0) // false
```



#### 4.3 Number.isNaN(testValue: number): boolean

매개변수에 전달된 값이 NaN인지를 검사하여 그 결과를 Boolean으로 반환한다.

```javascript
Number.isNaN(testValue)
Number.isNaN(NaN) // true
Number.isNaN(undefined) // false
Number.isNaN({}) // false 
Number.isNaN('blabla') // false 

Number.isNaN(true) // false
Number.isNaN(null) // false
Number.isNaN(37) // false
Number.isNaN('37') // false
Number.isNaN('37.37'); // false
Number.isNaN(''); // false
Number.isNaN(' '); // false
Number.isNaN(new Date()) // false
Number.isNaN(new Date().toString()) // false
```

Number.isNaN()는 전역 함수 isNan()와 차이가 있다.

isNaN()는 인수를 숫자로 변환하여 검사를 수행 / Number.isNaN()는 인수를 변환하지 않는다.



#### 4.4 Number.isSafeInteger(testValue: number): boolean

매개변수에 전달된 값이 안전한 정수값인지 검사하여 그 결과를 Boolean으로 반환한다. 

```javascript
Number.isSafeInteger(testValue)
Number.isSafeInteger(123) // true
Number.isSafeInteger(-123) // true
Number.isSafeInteger(5-2) // true
Number.isSafeInteger(0) // true
Number.isSafeInteger(1000000000000000) // true
Number.isSafeInteger(10000000000000001) // false
Number.isSafeInteger(0.5) // false
Number.isSafeInteger('123') // false
Number.isSafeInteger(false) //false
Number.isSafeInteger(Infinity) //false
Number.isSafeInteger(-Infinity) //false
Number.isSafeInteger(0 / 0) //false
```



#### 4.5 Number.prototype.toExponential(fractionDigits?: number): string

대상을 지수 표기법으로 변환하여 문자열로 반환한다.

지수 표기법이란 매우 큰 숫자를 표기할 때 주로 사용하며 e 앞에 있는 숫자에 10의 n승을 곱하는 형식으로 수를 나타내는 방식임.



```javascript
numObj = toExponential([fractionDigits])
var numObj = 77.1234;

console.log(numObj.toExponential()); // logs 7.71234e+1
console.log(numObj.toExponential(4)); //logs 7.7123e+1
```



#### 4.6 정수 리터럴과 함께 메소드를 사용하는 경우

숫자 뒤에 .은 의미가 모호함. 소숫점일수도 있고 객체 프로퍼티에 접근하기 위한 마침표 표기법일수도 있음.

따라서 자바스크립트 엔진은 숫자 뒤의 .을 부동 소수점 숫자의 일부로 해석한다.

```javascript
1.23.toString(); // '1.23' // 첫번째 .은 소수점 숫자의 일부, 두번째 .은 객체 프로퍼티표기법
(77).toString(); // '77' // 정수 리터럴과 함께 메소드를 사용하는 경우 ()권장
77 .toString(); // '77' // 정수 리터럴 뒤에 스페이스다음 .가 온다면 .을 마침표 표기법으로 해석함
```



#### 4.7 Number.prototype.toFixed(fractionDigits?: number): string

매개변수로 지정된 소숫점자리를 반올림하여 문자열로 반환한다.

```javascript
numObj.toFixed([fractionDigits])

var numObj = 12345.6789;

// 소숫점 이하 반올림
console.log(numObj.toFixed()); // '12346'

// 소숫점 이하 1자리수 유효, 나머지 반올림
console.log(numObj.toFixed(1)); // '12345.7'
```