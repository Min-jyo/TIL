1. 외부 폰트 쓰는 방법

   1. 스포카 산스 홈페이지에 들어간다.

      1. HTML에 link코드를 넣기
      2. css에 import코드 넣기

   2.  css요소에 font-family: ‘spoqa Han Sans’, ‘Sans-serif’}; 추가

      

2.  a태그의 속성

   1. href

      1. 연결할 주소를 지정하는 속성 / 여기서 주소의 종류는?
         1. 절대 주소
         2. 상대 URL
         3. 다른 형식의 Url
            1. 예1) ftp://
            2. .예2) mailto:
         4. id를 이용한 URL
            1. A라는 요소에 id=top, a태그에 href=#top 이라고 지정하고 누르면 top 좌표로 감
         5. 스크립트

      

   2. title 속성

      1. 해당 링크에 마우스를 갖다 대면 link에 대한 설명이 나옴

      

   3. target 속성

      1. 링크를 클릭할때 창을 어떻게 열지 경접합니다.

         1. _self :  연결문서를 클릭한 창에서 엶

         2. _ black : 연결문서를 새창에서 엶

         3. _ parent : 부모 창에서 엶

         4. _top : 가장 상위차엥서 엶

         5. framename : 지정된 프레임 안에 엶

            

3.  html에서 a 태그와  botton 태그의 고찰

   1. Anchor태그와 Button 태그의 차이

      1. Anchor태그와 Button  태그란?

         1.  Anchor태그

            1. href 속성이 있다면 콘텐츠로 라벨링된 하이퍼링크
            2. href 속성이 없다면 링크가 있을수 있는 위치에 대한 자리 표시자

         2.  Button태그

            1. 콘텐츠로 라벨링된 사용자가 어떤 액션을 트리깅 할수 있는 컨트롤
            2. type 속성을 가질수 있음
               1. submit
               2. reset
               3. button

      2.  Anchor태그와  Button 태그를 언제 써야 될까?

         1. Anchor 태그

            1. 링크일때 
            2. Anchor 태그를 쓸땐 texture content가 있어야됨
            3. href 값이 없이 javascript를 통해서 이동시키는 것은 지양

         2. Button 태그

            1. 버튼일때 
            2. Button태그를 쓸땐 texture content가 있어야됨
            3. span,  img 등으로  button을 대체하는것은 지양

      
4. NVDA, Voiceover?

   1. screen reader기임

      
5. label 요소란?

   1. label 요소는 컨트롤 레이블을 표시함

      1. 여기서 레이블은 항목이나 파일을 식별하기 위해 사용되는 제목이나 이름을 말함

   2. label 의 for 속성이란?

      1. for 속성은 레이블과 관련된 컨트롤을 지정한다. 컨트롤에 레이블을 제공하는 방법은 크게 암시적 방법과 명시적 방법으로 나뉨 

         1. 암시적 방법 : 이 방법은 label 요소내에 컨트롤을 둔다. 즉 label  요소 내에 있는 콘트롤은 굳이 밝히지 않아도 관련 있다고 보는것
         
         2. 명시적 방법 : 이 방법은 for  속성을 이용하여 컨트롤의 id값을 정확하게 지정하는 방법 
            1. 명시적 방법의 장점 : 브라우저는 사용자가 레이블을 클릭하더라도 관련된 컨트롤이 선택되도록 처리 할수 있고 레이블과 컨트롤이 서로 떨어져 있더라도 둘 사이의 관계를 손쉽게 연결가능함