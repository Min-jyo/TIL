## 오답노트

### 1. ECMAScript 와 JavaScript의 차이점

- JavaScript : 웹페이지를 동적으로 만들어주는 언어
- EcmaScript : JavaScript 설계서의 이름



### 2. var foo = 42 / -0; console.log(foo);의 결과를 기술하라.

- -Infinity



### 3. 0 에서 10 미만까지 3의 배수를 큰수부터 출력하는 코드를 while 문을 사용하여 작성하라. 단 0은 출력하지 않는다.

```javascript
var i = 10;

while (i > 0) {
	if(i % 3 === 0) {
	console.log(i);
	}
	i--;
}
```



### 4. 문자열을 값으로 갖는 name 프로퍼티를 출력하는 sayName 메소드를 갖는 obj를 생성하라. 단 객체 리터럴 방식을 사용한다.

```javascript
var obj = name () {
	name : 'Min';
	sayName : function () {
		console.log(this.name);
	}
}
```



### 5. var person = { ‘my-name’: ‘Lee’ }; 일때, my-name 프로퍼티의 값을 ‘Kim’으로 변경하고 console.log()를 사용하여 출력하는 코드를 작성하라. (6점)

```javascript
var person = {
	'my-name' : 'lee'
}

person['my-name'] = 'kim';
console.log(person['my-name']);
```

