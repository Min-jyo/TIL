

CSS background 속성



1. background CSS 단축 속성은 색상, 이미지, 원점, 크기, 반복 등 여러 배경 스타일을 한 번에 지정합니다.

   1. background는 단축 속성으로 

      1. background-clip

         1. 속성의 종류
            1. border-box : 테두리 영역과 그 안쪽 영역을 채웁니다.
            2. padding-box : 안쪽 여백 영역과 그 안쪽 영역을 채웁니다.
            3. content-box : 내용 영역과 그 안쪽 영역을 채웁니다.
            4. initial : 기본값을 설정합니다.
            5. inherit : 부모 요소의 속성값을 상속받습니다.
            6. text : 텍스트에 채웁니다.

      2. background-color

         1. 속성으로 올수 있는값

            1. 키워드값

               1. ```css
                  1. ex1) background-color : red;
                  2. ex2) background-color: indigo;
                  ```

                  

               

            2. 16진수값

               1. ```css
                  ex1) background-color: #bbff00;  /* 완전 불투명 */
                  ```

                  

               

            3. RGB값

               1. ```css
                  1. ex1) background-color : rgb(255, 255, 128);  /* 완전 불투명 */
                  2. ex2) background-color : rgba(117, 190, 218, 0.5);/* 50% 불투명도 */
                  
                  
                  ```

                  

            4. HSL 값

               1. ```css
                  1. ex1) background-color : hsl(50, 33%, 25%);  /* 완전 불투명 */
                  2. ex2) background-color: hsla(50, 33%, 25%, 0.75); /* 75% 불투명도 */
                  ```

                  

               

            5. 특별 키워드 값

               1. ```css
                  1. ex1) background-color: currentcolor;
                  2. ex2) background-color: transparent;
                  ```

                  

            6. 전역 값

               1. ```css
                  1. ex1) background-color: inherit;
                  2. ex2) background-color: initial;
                  3. ex3) background-color: unset;
                  ```

                  

      3. background-image

         1. CSS 속성은 요소의 배경 이미지를 한 개나 여러 개 지정합니다.

            1. 여러 개의 배경 이미지는 쌓임 맥락에 따라 서로의 위에 놓입니다. 맨 처음 지정한 이미지가 제일 위에 위치합니다.

            2. 테두리는 배경 이미지 위에, background-color는 밑에 그려집니다.

            3. 유효하지 않은 URL처럼 어떤 이유로 지정한 이미지를 그릴 수 없을 때는 none 키워드를 사용한것처럼 처리합니다.

            4. 여러 개의 배경 이미지를 지정하려면 쉼표로 구분한 값을 지정하세요.

               

      4. background-origin

         1. 배경 이미지를 어느 영역부터 채워나갈지를 정하는 속성

            1. 속성

               1. border-box : 테두리 영역 왼쪽 위부터 채웁니다.

               2. padding-box : 안쪽 여백 영역 왼쪽 위부터 채웁니다.

               3. content-box : 내용 영역 왼쪽 위부터 채웁니다.

               4. initial : 기본값으로 설정합니다.

               5. inherit : 부모 요소의 속성값을 상속받습니다.

                  

      5. background-position

         1. 배경 이미지의 초기 위치를 설정하는 속성

            1. 속성

               1. x-position, y-position : 가로 위치와 세로 위치를 정합니다.

                  1. 가로

                     1. left

                     2. center

                     3. right

                     4. 백분율

                     5. 길이

                        

                  2. 세로

                     1. top

                     2. center

                     3. bottom

                     4. 백분율

                     5. 길이

                        

               2. initial

                  1. 기본값으로 설정합니다.

                  2. 부모 요소의 속성값을 상속받습니다.

                     

               3. inherit

                  1. 부모 요소의 속성값을 상속받습니다.

                  

      6. background-repeat

         1. 배경 이미지의 반복 여부와 반복 방향을 정합니다.

            1. 속성

               1. repeat : 가로 방향, 세로 방향으로 반복합니다

               2. repeat-x : 가로 방향으로 반복합니다.

               3. repeat-y : 세로 방향으로 반복합니다.

               4. no-repeat : 반복하지 않습니다

               5. initial : 기본값으로 설정합니다

               6. inherit : 부모 요소의 속성값을 상속받습니다

                  

      7. background-size

         1. 배경 이미지의 가로 크기와 세로 크기를 정할 수 있습니다

            1. 속성 

               1. auto : 이미지 크기를 유지합니다

               2. length : 값을 두 개 넣으면 첫번째 값이 가로 크기, 두번째 값이 세로 크기입니다. 값을 한개 넣으면 가로 크기이며, 세로 크기는 원본 이미지의 가로 세로 비율에 맞게 자동으로 정해집니다. 백분율을 사용할 수도 있습니다.

               3. cover : 배경을 사용하는 요소를 다 채울 수 있게 이미지를 확대 또는 축소합니다. 가로 세로 비율을 유지합니다.

               4. contain : 배경을 사용하는 요소를 벗어나지 않는 최대 크기로 이미지를 확대 또는 축소합니다. 가로 세로 비율을 유지합니다.

               5. initial : 기본값으로 설정합니다.

               6. inherit : 부모 요소의 속성값을 상속받습니다.

                  

      8. background-attachment

         1. 배경 이미지의 스크롤 여부를 정합니다.
            1. 속성
               1. scroll : 선택한 요소와 같이 움직입니다. 내용을 스크롤하면 배경 이미지는 스크롤되지 			않습니다.
               2. fixed : 움직이지 않습니다
               3. local : 선택한 요소와 같이 움직입니다. 내용을 스크롤하면 배경 이미지도 스크롤 됩니다
               4. initial : 기본값으로 설정합니다.
               5. inherit : 부모 요소의 속성값을 상속받습니다. 
               6. 