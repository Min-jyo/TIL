## 5.31 동기식 처리 모델 vs 비동기식 처리 모델



### 1. 동기식 처리모델 

동기식 처리 모델은 직렬적으로 태스크(task)를 수행한다. 

즉, 태스크는 순차적으로 실행되며 어떤 작업이 수행중이면 다음 작업은 대기하게 된다.

### 2. 비동기식 처리모델

비동기식 처리 모델은 병렬적으로 태스크를 수행한다.

즉, 태스크가 종료되지 않은 상태라 하더라도 대기하지 않고 다음 태스크를 실행한다.

자바스크립트의 대부분의 DOM 이벤트 핸들러와 Timer 함수, Ajax 요청은 비동기식 처리 모델로 동작한다.



아래 코드는 비동기식으로 동작하는 코드이다.

```javascript
function func1() {
	console.log('func1');
	func2();
}

function func2() {
	setTimeout(function() {
		console.og('func2');
	}, 0);
	
	func3();
}

function func3() {
	console.log('func3');
}

func1();
```

함수 func1이 호출되면 함수 func1은 Call Stack에 쌓인다. 그리고 함수 func1은 함수 func2을 호출하므로 함수 func2가 Call Stack에 쌓이고 setTimeout가 호출된다. setTimeout의 콜백함수는 즉시 실행되지 않고 지정 대기 시간만큼 기다리다가 “tick” 이벤트가 발생하면 태스크 큐로 이동한 후 Call Stackㅣ 비어졌을 때 Call Stack으로 이동되어 실행된다.



