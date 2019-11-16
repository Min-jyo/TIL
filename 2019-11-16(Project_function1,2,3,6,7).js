// DOM

$stopwatchDisplay = document.querySelector('.stopWatch > div'); // 스탑워치를 표시할 display
$oneOfButtons = document.querySelector('.btn'); // button 두개
$rangeSlider = document.querySelector('.range'); // slider 
$displayTimer = document.querySelector('.stopWatch > div');
$buttonStart = document.querySelector('.buttonStart');
$buttonStop = document.querySelector('.buttonStop');
// 변수
let timer; // setTimer
let secondNum;
let minuteStr;
let decidedsecond;
let fixedRangeValueNum;
let buttonstatus = "stop";

// 이벤트 핸들러의 함수 정의

function buttonClick(e) { // 버튼 클릭시 
  let button = e.target;
  let startButton = button.previousElementSibling;
  let stopButton = button.nextElementSibling;
  

  button.classList.add('displayNone');

  if(button.classList.contains('buttonStart')) {
    stopButton.classList.remove('displayNone');

    // 타이머
    buttonstatus = "start";
    timer = setInterval(timerFunc, 10); // timer 함수 실행
    // 타이머

  } else if(button.classList.contains('buttonStop')){
    startButton.classList.remove('displayNone');
    buttonstatus = "stop";
    // 타이머
    clearInterval(timer);
    // 타이머
  }
}

function setMinute(e){
  if(buttonstatus === "start") {
    $rangeSlider.value = `${fixedRangeValueNum}`;
    return;
  }
  
  minuteStr = e.target.value;
  fixedRangeValueNum = +minuteStr;
  secondNum = +minuteStr * 60;
  $displayTimer.textContent = minuteStr.length === 1 ? `0${minuteStr}:00` : `${minuteStr}:00`;
}

// 1초마다 실행되는 함수
function timerFunc() {
  secondNum = secondNum - 1;


  $displayTimer.textContent =  Math.floor(secondNum/60) > 10 ? `${Math.floor(secondNum/60)}:${secondNum%60}` : `0${Math.floor(secondNum/60)}:${secondNum%60}`;
  
  if(Math.floor(secondNum/60) >= 10 && Math.floor(secondNum%60) >= 10)
  {
    $displayTimer.textContent = `${Math.floor(secondNum/60)}:${secondNum%60}`;
  }
  else if(Math.floor(secondNum/60) >= 10 && Math.floor(secondNum%60) <= 10)
  {
    $displayTimer.textContent = `${Math.floor(secondNum/60)}:0${secondNum%60}`;
  }
  else if(Math.floor(secondNum/60) < 10 && Math.floor(secondNum%60) < 10)
  {
    $displayTimer.textContent = `0${Math.floor(secondNum/60)}:0${secondNum%60}`;
  }
  else if(Math.floor(secondNum/60) < 10 && Math.floor(secondNum%60) > 10)
  {
    $displayTimer.textContent = `0${Math.floor(secondNum/60)}:${secondNum%60}`;
  }


  if(Math.floor(secondNum/60) === 0 && secondNum%60 === 0){
    clearInterval(timer);
    $buttonStart.classList.remove('displayNone');
    $buttonStop.classList.add('displayNone');
    buttonstatus = "stop";
    secondNum = + fixedRangeValueNum * 60;

    $displayTimer.textContent = fixedRangeValueNum >= 10 ? `${fixedRangeValueNum}:00` : `0${fixedRangeValueNum}:00`;
  }
}


// 이벤트 핸들러
$oneOfButtons.onclick = buttonClick; // 버튼두개중 한개가 클릭되면
$rangeSlider.oninput = setMinute; // slider 입력이 들어오면
