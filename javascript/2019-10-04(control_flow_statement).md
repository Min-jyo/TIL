## 제어문

### 1. 블록문



- 정의 : 0개 이상의 문을 중괄호로 묶은 것으로 코드 블록 또는 블록이라고 부르기도 한다.

- Tip : 

  1. 자바스크립트는 블록문을 하나의 실행 단위로 취급
  2. 블록문 끝에 세미콜론 안 붙임

  

### 2. 조건문 

- 특징 :

  1. 조건식의 평가 결과에 따라 코드 블럭의 실행을 결정한다.
  2. 조건식은 불리언 값으로 평가될수 있는 표현식

  

- 자바스크립트에서의 조건문 2개 

  1. if...else 문
  2. switch 문



#### 2-1. if...else 문

- 특징:

  1. 조건식을 평가하여 실행할 코드 블록 결정
  2. 평가 결과가 불리언값이 아니면 불리언값으로 강제 변환
  3. 조건식 평가 결과가 참이면 if문 다음의 코드 블록 실행
  4. 조건식 평가 결과가 거짓이면 그 다음에 나오는 else if, else 문 실행
  5. 코드 블록 내의 문이 하나뿐이라면 중괄호를 생략할 수 있다.

  

- 삼항 조건 연산자 쓰는법 

  ```
  (조건식) ? (참일때 실행될문) : (거짓일때 실행될문);
  ```

  1. 특징 : 삼항 조건 연산자를 중첩해서 쓸수 있다. 



#### 2-2. switch문

- 특징 : 

  1. 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case문으로 실행 순서를 이동시킨다.

  2. 표현식과 일치하는 표현식을 갖는 case 문이 없다면 실행 순서는 default 문으로 이동\

     default 옵션으로 사용할 수도 있고 사용하지 않을 수도 있다.

     ```javascript
     switch (표현식) {
       case 표현식1:
         switch 문의 표현식과 표현식1이 일치하면 실행될 문;
         break;
       case 표현식2:
         switch 문의 표현식과 표현식2가 일치하면 실행될 문;
         break;
       default:
         switch 문의 표현식과 일치하는 표현식을 갖는 case 문이 없을 때 실행될 문;
     }
     ```

  3. switch 문의 표현식은 불리언 값보다는 문자열, 숫자 값인 경우가 많다.

  4. break; 문을 안넣으면 다음 case문도 실행됨



### 3. 반복문

- 실행 조건 : 주어진 조건식의 평가 결과가 참인 경우 코드 블럭 실행
- 종류 : 
  1. for 문
  2. while 문
  3. do...while 문
  4. for..in 문
  5. for...of 문

#### 3-1. for 문

- 실행 조건 : 조건식이 거짓으로 판별될 때가지 코드 블록을 반복 실행한다.

  예제)

  ```javscript
  for (변수 선언문 또는 할당문; 조건식; 증감식) {
    조건식이 참인 경우 반복 실행될 문;
  }
  ```

- for문 무한루프 설정법

  예제)

  ```
  // 무한루프
  for (;;) { ... }
  ```



#### 3-2 while 문

- 실행 조건 : 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행한다.
- 특징 : 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제 변환함
- Tip : 무한루프를 탈출하기 위해 if문에 break문을 넣는방법이 있음



#### 3-3 do ... while 문

- 실행 조건 : 코드 블록을 먼저 실행하고 조건식을 평가한다.



### 4. break 문

- 어디서 쓰이는가? : 레이블 문(식별자가 붙은 문) 반복문(for, for…in, for…of, while, do…while) , switch 문.
  - 정해진데에서 안쓰면 ? : SyntaxError(문법에러) 발생

- 왜 쓰는가? : 코드 블록을 탈출하기 위해서



### 5. continue 문

- 어떻게 동작해? : 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 이동

  