## 5.26 정규 표현식



### 1. 정규표현식

정규 표현식은 문자열에서 특정 내용을 찾거나 대체 또는 발췌하는데 사용됨.

```javascript
const tel = '0101234567팔';

// 정규 표현식 리터럴
const myRegExp = /^[0-9]+$/;

console.log(myRegExp.test(tel)); // false
```



- 장점 : 
  1. 복잡한 코드도 정규 표현식을 이용하면 매우 간단하게 표현할수 있음
- 단점 :
  1. 주석이나 공백을 허용하지 않고 여러가지 기호를 혼합하여 사용하기 때문에 가독성이 좋지 않음



- 정규 표현식 리터럴 구성

  ![regular_expression](./images/regular_expression.PNG)



- 정규 표현식을 사용하는 자바스크립트 메소드의 종류 : 
  1.  RegExp.prototype.exec
  2. RegExp.prototype.test
  3. String.prototype.match
  4. String.prototype.replace
  5. String.prototype.search
  6. String.prototype.split 



```javascript
const targetStr = 'This is a pen.';
const regexr = /is/ig;

// RegExp 객체의 메소드
console.log(regexr.exec(targetStr)); // [ 'is', index: 2, input: 'This is a pen.' ]
console.log(regexr.test(targetStr)); // true

// String 객체의 메소드
console.log(targetStr.match(regexr)); // [ 'is', 'is' ]
console.log(targetStr.replace(regexr, 'IS')); // ThIS IS a pen.
// String.prototype.search는 검색된 문자열의 첫번째 인덱스를 반환한다.
```



#### 1.1 플래그

플래그는 아래와 같은 종류가 있다.

| Flag | Meaning     | Description                               |
| ---- | ----------- | ----------------------------------------- |
| i    | Ignore Case | 대소문자를 구별하지 않고 검색한다.        |
| g    | Global      | 문자열 내의 몯느 패턴을 검색한다.         |
| m    | Multi Line  | 문자열의 행이 바뀌더라도 검색을 계속한다. |

플래그는 옵션이므로 선택적으로 사용한다.

플래그를 사용하지 않은 경우 문자열 내 검색 매칭 대상이 1개 이상이더라도 첫번재 매칭한 대상만을 검색하고 종료한다.



```javascript
const targetStr = 'Is this all there is?';

// 문자열 is를 대소문자를 구별하여 한번만 검색한다.
let regexr = /is/;

console.log(targetStr.match(regexr)); // ['is', index: 5, input: 'Is this all there is?']

// 문자열 is를 대소문자를 구별하지 않고 대상 문자열 끝까지 검색한다.

regexr = /is/ig;

console.log(targetStr.match(regexr)); // ['Is', 'is', 'is']
console.log(targetStr.match(regexr).length); // 3
```



#### 1.2 패턴

패턴에는 검색하고 싶은 문자열을 지정한다.

이때 문자열의 따옴표는 생략한다. / 따옴표를 포함하면 따옴표까지도 검색한다.

패턴은 특별한 의미를 가지는 메타문자 또는 기호로 표현할 수 있다. 

```javascript
const targetStr = 'AA BB Aa Bb';

// 임의의 문자 3개를 반복하여 검색
const regexr = / ... /g;

console.log(targetStr.match(regexr)); // ['AA ','BB ', 'Aa' ]
```

모든 문자를 선택하려면 .와 g를 동시에 지정한다.

```javascript
const targetStr = 'AA BB Aa Bb';

// 임의의 한문자를 반복 검색
const regexr = /./g;

console.log(targetStr.match(regexr));
// [ 'A', 'A', ' ', 'B', 'B', ' ', 'A', 'a', ' ', 'B', 'b' ]

```

패턴에 문자 또는 문자열을 지정하면 일치하는 문자 또는 문자열을 추출한다.

```javascript
const targetStr = 'AA BB Aa Bb';

// 'A'를 검색
const regexr = /A/;

console.log(targetStr.match(regexr)); // 'A'
```



앞선 패턴을 최소 한번 반복하려면 앞선 패턴 뒤에 +를 붙인다. 

```javascript
const targetStr = 'AA AAA BB Aa Bb';

// 'A'가 한번이상 반복되는 문자열 ('A', 'AA', 'AAA', ...)을 반복 검색
const regexr = /A+/g;

console.log(targetStr.match(regexr)); // ['AA', 'AAA', 'A']
```



|를 사용하면 or의 의미를 가지게됨

```javascript
const targetStr = 'AA BB Aa Bb';

// 'A' 또는 'B'를 반복 검색
const regexr = /A|B/g;

console.log(targetStr.match(regexr)); // // [ 'A', 'A', 'B', 'B', 'A', 'B' ]
```



범위를 지정하려면 []내에 -를 사용한다. 

```javascript
const targetStr = 'AA BB ZZ Aa Bb';

// 'A' ~ 'Z'가 한번 이상 반복되는 문자열을 반복 검색
// 'A', 'AA', 'AAA', ... 또는 'B', 'BB', 'BBB', ... ~ 또는 'Z', 'ZZ', 'ZZZ', ...

const regexr = /[A-Z]+/g;

console.log(targetStr.match(regexr)); // [ 'AA', 'BB', 'ZZ', 'A', 'B' ]
```



대소문자를 구별하지 않고 알파벳을 추출하려면 아래와 같이 한다.

```javascript
const targetStr = 'AA BB Aa Bb';

// 'A' ~ 'Z' 또는 'a' ~ 'z'가 한번 이상 반복되는 문자열을 반복 검색
const regexr = /[A-Za-z]+/g;
// 아래와 동일하다.
// const regexr = /[A-Z]+/gi;

console.log(targetStr.match(regexr)); // [ 'AA', 'BB', 'Aa', 'Bb' ]
```



 숫자를 추출하는 방법

```javascript
const regexr = /[0-9]+/g;
```



 '0' ~ '9' 또는 ','가 한번 이상 반복되는 문자열을 반복 검색 

```javascript
const regexr = /[0-9,]+/g;
```



```javascript
// '0' ~ '9' 또는 ','가 한번 이상 반복되는 문자열을 반복 검색
let regexr = /[\d,]+/g;

// '0' ~ '9'가 아닌 문자(숫자가 아닌 문자) 또는 ','가 한번 이상 반복되는 문자열을 반복 검색
regexr = /[\D,]+/g;

// 알파벳과 숫자 또는 ','가 한번 이상 반복되는 문자열을 반복 검색
let regexr = /[\w,]+/g;

// 알파벳과 숫자가 아닌 문자 또는 ','가 한번 이상 반복되는 문자열을 반복 검색
regexr = /[\W,]+/g;
```



### 1.3 자주 사용하는 정규표현식

```javascript
특정 단어로 시작하는지 검사한다.
// 'http'로 시작하는지 검사
// ^ : 문자열의 처음을 의미한다.
const regexr = /^http/;

// 'html'로 끝나는지 검사
// $ : 문자열의 끝을 의미한다.
const regexr = /html$/;

// 모두 숫자인지 검사
const regexr = /^\d+$/;

// 1개 이상의 공백으로 시작하는지 검사
const regexr = /^[\s]+/;

// 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4 ~10자리인지 검사
const regexr = /^[A-Za-z0-9]{4,10}$/;

// 메일 주소 형식에 맞는지 검사
const regexr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

// 핸드폰 번호 형식에 맞는지 검사
const regexr = /^\d{3}-\d{3,4}-\d{4}$/;

// 특수 문자 포함 여부 검사
let regexr = /[^A-Za-z0-9]/gi;
console.log(regexr.test(targetStr)); // true

regexr = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
console.log(regexr.test(targetStr)); // true
```



### 2. JavaScript Regular Expression



#### 2.1 RegExp Constructor

자바스크립트는 정규표현식을 위해 RegExp 객체를 지원한다. 

RegExp 객체를 생성하기 위해서는 리터럴 방식과 RegExp 생성자 함수를 사용할 수 있다. 일반적인 방법은 리터럴 방식임.



- 종류 :

  1. ```javascript
     // 정규식 리터럴
     /ab+c/i;
     ```

  2. ```javascript
     new RegExp(pattern[, flags])
     ```



#### 2.2 RegExp Method 



##### 2.2.1 RegExp.prototype.exec(target: string): RegExpExecArray | null

문자열을 검색하여 매칭 결과를 반환한다. 반환값은 배열 또는 null이다.

```javascript
const target = 'Is this all there is?';
const regExp = /is/;

const res = resExp.exec(target);
console.log(res); // [ 'is', index: 5, input: 'Is this all there is?' ]
```

exec 메소드는 g 플래그를 지정해도 첫번재 매칭 결과만을 반환



##### 2.2.2 RegExp.prototype.test(target: string):boolean

문자열을 검색하여 매칭 결과를 반환한다. 반환값은 true 또는 false이다.

```javascript
const target = 'Is this all there is?';
const regExp = /is/;

const res = regExp.test(target);
console.log(res); // true
```

