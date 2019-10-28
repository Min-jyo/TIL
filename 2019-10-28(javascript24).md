## 28. 디스트럭처링 할당

디스트럭처링 할당은 구조화된 배열 또는 객체를 Destructuring하여 1개 이상의 변수에 개별적으로 할당하는 것을 말한다. 



### 1. 배열 디스트럭처링 할당

ES5에서 구조화된 배열을 디스트럭처링하여 1개 이상의 변수에 할당하기 위한 방법

```javascript
// ES5
var arr =[1, 2, 3];

var one = arr[0];
var two = arr[1];
var three = arr[2];

console.log(one, two, three); // 1 2 3 
```

```javascript
// ES6
const arr = [1, 2, 3];

const [one, two, three] = arr;

console.log(one, two, three); // 1 2 3
```

배열 디스트럭처링 할당을 위해서는 할당 연산자 왼쪽에 값을 할당 받을 변수를 선언해야 함

이때 여러 개의 변수를 배열 리터럴 형태로 선언함

```javascript
let x, y;
[x, y] = [1, 2];

const[x, y] = [1, 2];

const [x, y];
// -> SyntaxError: Missing initializer in destructuring declaration
```

배열 디스트럭처링 할당의 기준은 배열의 인덱스이다. 즉 순서대로 할당됨

변수의 개수와 배열 요소의 개수가 반드시 일치할 필요는 없다.

```javascript
let x, y, z;

[x, y] = [1, 2];
console.log(x, y); // 1 2

[x, y] = [1];
console.log(x, y); // 1 undefined

[x, y] = [1, 2, 3];
console.log(x, y); // 1 2

[x, , z] = [1, 2, 3];
console.log(x, z); // 1 3
```

배열 디스트럭처링 할당을 위한 변수에 기본값을 설정할 수 있다.

```javascript
let x, y, z;

// 기본값
[x, y, z = 3] = [1, 2];
console.log(x, y, z); // 1 2 3

[x, y = 10, z = 3] = [1, 2];
console.log(x, y, z); // 1 2 3
```

배열 디스트럭처링 할당은 배열에서 필요한 요소만 추출하여 변수에 할당하고 싶을때 유용하다.



### 2. 객체 디스트럭처링 할당

ES5에서 객체의 각 프로퍼티를 객체로부터 디스트럭처링하여 변수에 할당하기 위해서는 프로퍼티 키를 사용해야 한다.

```javascript
// ES5
var user = { firstName: 'minjyo', lastName: 'Lee'};

var firstName = user.firstName;
var lastName = user.lastName;

console.log(firstName, lastName);
```

ES6의 객체 디스트럭처링 할당은 객체의 각 프로퍼티를 객체로부터 추출하여 1개 이상의 변수에 할당한다. 

여러개의 변수를 객체 리터럴 형태로 선언한다. 이때 할당 기준은 프로퍼티 키이다. 즉 순서는 의미가 없으며 변수 이름과 프로퍼티 키가 일치하면 할당됨

```javascript
//ES6 객체 디스트럭처링 할당

const user = {firstName: 'Minjyo', lastName: 'Lee'};

const {lastName, firstName} = user;

console.log(firstName, lastName);
```

객체 디스트럭처링 할당을 위한 변수에 기본값을 설정할 수 있다.

```javascript
const { firstName = 'jyo', lastName } = {lastName: 'Min'};
console.log(firstName, lastName); // jyo Min

const { firstName: fn = 'jyo', lastName: ln } = {lastName: 'Min'};
console.log(fn, ln); // jyo Min
```

객체 디스트럭처링 할당은 프로퍼티 키로 객체에서 필요한 프로퍼티 값만을 추출할 수 있다.

```javascript
 const todo = {id: 1, content: 'HTML', completed: true};
 
 const { id } = todo;
 console.log(id); // 1
```

배열의 요소가 객체인 경우, 배열 디스트럭처링 할당과 객체 디스트럭처링 할당을 혼용할 수 있다.

```javascript
const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JS', completed: false }
];

const [, { id }] = todos;
console.log(id); // 2
```

중첩 객체의 경우는 아래와 같이 사용함

```javascript
const user = {
  name: 'Lee',
  address: {
    zipCode: '03068',
    city: 'Seoul'
  }
};

const { address: { city } } = user;
console.log(city); // 'Seoul'
```

