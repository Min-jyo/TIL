## 27. 스프레드 문법



ES6에서 새롭게 도입된 스프레드 문법은 하나로 뭉쳐 있는 여러 값들의 집합을 펼쳐서 개별적인 값들의 목록으로 만든다.



### 2. 스프레드 문법을 사용할수 있는 대상

1. Array
2. String
3. Map
4. Dom data structoure
5. Arguments



### 3. 용어 정리

1. 이터러블
   - 정의 : 이터러블 프로토콜을 준수한 객체를 이터러블 이라 함
   - Well-known Symbol.iterator을 프로퍼티키로 갖는 메소드를 직접 구현하거나 프로토타입에 의해 상속한 객체 



### 4. 스프레드 문법이 사용되는곳

1. 함수 호출문의 인수 목록
2. 배열 리털러의 요소 목록
3. 객체 리터럴의 프로퍼티 목록



### 5. 함수 호출문의 인수 목록에서 사용하는 경우

```JAVASCRIPT
const arr = [1, 2, 3];

const maxValue = Math.max(arr);

console.log(maxValue); // NaN
```

Math.max메소드는 여러 개의 숫자를 인수로 전달받아 인수중에서 최대값을 반환한다.

스프레드 문법이 제공되기 이전에는 배열을 펼쳐서 요소값의 함수의 인수로 전달하고 싶은경우, Function.prototype.apply를 사용하였다.



```javascript
var arr = [1, 2, 3];

var maxValue = Math.max.apply(null, arr);

conosole.log(maxValue); // 3
```

```javascript
const arr = [1, 2, 3];

const maxValue = Math.max(...arr);

console.log(maxValue);
```



### 6. 배열 리터럴 내부에서 사용하는 경우



#### 6.1 concat

```javascript
var arr = [1, 2].concat([3, 4]);
console.log(arr); 
```

스프레드 문법을 사용하면 별도의 메소드를 사용하지 않고 배열 리터럴 만으로 기존의 배열 요소들을 새로운 배열의 일부로 만들수 있다.



```javascript
const arr = [...[1, 2], 3, 4];
console.log(arr);
```



#### 6.2 push

ES5에서 기존의 배열에서 다른 배열의 요소들을 push하려면 아래와 같은 방법을 사용한다.



```javascript
var arr1 = [1, 2];

var arr2 = [3, 4];



Array.prototype.push.apply(arr1, arr2);

console.log(arr1);


```

스프레드 문법을 사용하면 아래와 같이 보다 간편하게 표현할수 있다.

```
const arr1 = [1, 2];
const arr2 = [3, 4];

arr1.push(...arr);
console.log(arr1); //[1, 2, 3, 4]
```



#### 6.3 splice

es5에서 기존의 배열에 다른 배열의 요소들을 삽입하려면 splice 메소드를 사용한다.

```javascript
var arr1 = [1, 4];
var arr2 = [2, 3];

Array.prototype.splice.apply(arr1, [1, 0].concat(arr2));

console.log(arr1); 
```

스프레드 문법을 사용하면 아래와 같이 보다 간편하게 표현할 수 있다.

```javascript
const arr1 = [1, 4];
const arr2 = [2, 3];

arr1.splice(1, 0, ...arr2);
console.log(arr1); // [1, 2, 3, 4]
```



#### 6.4 배열 복사

es5에서 기존의 배열을 복사하기 위해서는 slice 메소드를 사용한다.

```javascript
var origin = [1, 2];
var coply = origin.slice();

console.log(copy);
console.log(copy === origin);
```

스프레드 문법을 사용하면 보다 간편하게 배열을 복사할 수 있다.

```javascript
const origin = [1, 2];
const copy = [...origin];

console.log(copy);
console.log(copy === origin);
```



#### 6.5 유사 배열 객체를 배열로 변환

유사 배열 객체를 배열로 변환하려면 slice 메소드를 apply 함수로 호출하는 것이 일반적이다.

```javascript
function sum() {
	var args = Array.prototype.slice.apply(arguments);
	
	return arg.reduce(function (pre, cur) {
		return pre + cur;
	}, 0);
}

console.log(sum(1, 2, 3));
```

스프레드 문법을 사용하면 보다 간편하게 유사 배열 객체를 배열로 변환할 수 있다.

```javascript
function sum() {
const args = [...arguments];

return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3)); // 6
```



### 7. 객체 리터럴 내부에서 사용하는 경우

스프레드 문법의 대상은 이터러블이어야 하지만 스프레드 프로퍼티 제안은 일반 객체를 대상으로도 스프레드 문법의 사용을 허용한다.

```javascript
const n = {x : 1, y : 2, ...{ a : 3, b : 4}};
console.log(n);
```

```javascript
// 객체의 병합
// 프로퍼ㅣ가 중복되는 경우, 뒤에 위치한 프로퍼티가 우선권을 갖는다.
const merged = Object.assign({}, { x : 1, y : 2}, {y : 10, z : 3});
console.log(merged); // {x : 1, y : 2, z : 3}

// 특정 프로퍼티 변경
const changed = Object.assign({}, { x : 1, y : 2}, {y : 100});
console.oog(changed); // { x : 1, y : 100} 

// 프로퍼티 추가
const added = Object.assign({}, { x : 1, y : 2}, { z : 0});
console.log(added); // {x : 1, y : 2, z : 0}
```

```javascript
// 객체의 병합
// 프로퍼티가 중복되는 경우, 뒤에 위치한 프로퍼티가 우선권을 갖는다.
const merged = {...{x : 1, y : 2, ...{y : 10, z : 3}};
console.log(merged); // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = { ...{x : 1, y : 2}, y : 100};
// changed = { ...{ x: 1, y: 2 }, ...{ y: 100 }}
console.log(changed);

// 프로퍼티 추가
const added = { ...{ x: 1, y: 2 }, z: 0 };
// added = { ...{ x: 1, y: 2 }, ...{ z: 0 } }
console.log(added); // { x: 1, y: 2, z: 0 }
```

