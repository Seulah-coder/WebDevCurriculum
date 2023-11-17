# Quest 02. CSS의 기초와 응용

## Introduction
* CSS는 Cascading StyleSheet의 약자입니다. 웹브라우저에 표시되는 HTML 문서의 스타일을 지정하는 (거의) 유일하지만 다루기 쉽지 않은 언어입니다. 이번 퀘스트를 통해 CSS의 기초적인 레이아웃 작성법을 알아볼 예정입니다.

## Topics
* CSS의 기초 문법과 적용 방법
  * Inline, `<style>`, `<link rel="stylesheet" href="...">`
* CSS 규칙의 우선순위
* 박스 모델과 레이아웃 요소
  * 박스 모델: `width`, `height`, `margin`, `padding`, `border`, `box-sizing`
  * `position`, `left`, `top`, `display`
  * CSS Flexbox와 Grid
* CSS 표준의 역사
* 브라우저별 Developer tools

## Resources
* [MDN - CSS](https://developer.mozilla.org/ko/docs/Web/CSS)
* [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [그리드 레이아웃과 다른 레이아웃 방법과의 관계](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/%EA%B7%B8%EB%A6%AC%EB%93%9C_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83%EA%B3%BC_%EB%8B%A4%EB%A5%B8_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83_%EB%B0%A9%EB%B2%95%EA%B3%BC%EC%9D%98_%EA%B4%80%EA%B3%84)

## Checklist
* CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요? 
    - Inline Style Sheet : HTML 태그의 style 속성에 CSS 코드를 넣는 방법
    - Internal Style Sheet : HTML 문서 안에 '<style>'과 '</style>'안에 css 코드를 넣는 방법
    - Linking Style Sheet : 별도의 CSS 파일을 만들고 HTML 문서와 연결하는 방법
  * 세 가지 방법 각각의 장단점은 무엇일까요?
    - Inline Style Sheet : 해당 요소에 간편하게 적용할 수 있지만 재사용이 불가함
    - Internal Style Sheet : 문서 안에 여러 요소를 한번에 꾸밀 수 있으나 또 다른 HTML 문서에는 적용할 수 없음 
    - Linking Style Sheet : 여러 HTML 문서에 사용 가능 
* CSS 규칙의 우선순위는 어떻게 결정될까요?
    1. 속성 값 뒤에 !important 를 붙인 속성
    2. HTML에서 inline으로 style을 직접 지정한 속성
    3. #id 로 지정한 속성
    4. .클래스, :추상클래스로 지정한 속성
    5. 태그이름으로 지정한 속성
    6. 상위 객체에 의해 상속된 속성
    = 같은 우선 순위에 있는 경우, 부모 - 자식 관계가 많은 경우가 우선 되며, 모든 설정이 같은 경우 나중에 선언한 것이 우선되어 적용됨
* CSS의 박스모델은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요? 
    - 모든 HTML 요소는 박스 모양으로 구성되며,박스 모델이라고 부름. 박스 모델은 HTML 요소를 padding, border, margin, content로 구분함
    - 표준 박스 모델에서 width와 height을 부여하면 content box의 너비와 높이가 정의됨 -> 패딩과 테두리는 박스의 너비와 높이에 추가되어 박스가 점유하는 전체 크기가 정해짐 
  * `float` 속성은 왜 좋지 않을까요?
    - `float`는 요소의 배치를 제어하기 위해 사용하는 속성으로 모든 자식 요소에 float속성을 적용 하면, 부모 요소는 해당 자식 요소가 존재하지 않는 것으로 판단하여, 높이를 인식하지 못하는 문제가 발생함
  * Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?
    - Flex는 1차원으로 수평, 수직 영역 중 하나의 방향으로만 레이아웃을 나눔 : 요소를 부모 요소 내에서 유연하게 배치하기 위해 사용. 네비게이션 바, 버튼, 입력 폼 등과 같은 작은 요소를 다룰때 유용
    - grid는 2차원으로 수평, 수직을 동시에 영역을 나눔 : 대시보드, 웹 어플리케이션 인터페이스 뉴스 기사 페이지 등 복잡한 레이아웃을 다룰때 유용함
* CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요? - 다중 선택자 (복합 셀렉터라고도 함). 공통으로  css가 적용되어야 할 부분을 선택자로 지정하여 해당 그룹에 대해 한꺼번에 css 적용 시킴

## Quest
* Quest 01에서 만들었던 HTML을 바탕으로, [이 그림](screen.png)의 레이아웃과 CSS를 최대한 비슷하게 흉내내 보세요. 꼭 완벽히 정확할 필요는 없으나 align 등의 속성은 일치해야 합니다.
* **주의사항: 되도록이면 원래 페이지의 CSS를 참고하지 말고 아무것도 없는 백지에서 시작해 보도록 노력해 보세요!**

## Advanced
* 왜 CSS는 어려울까요?
* CSS의 어려움을 극복하기 위해 어떤 방법들이 제시되고 나왔을까요?
* CSS가 브라우저에 의해 해석되고 적용되기까지 내부적으로 어떤 과정을 거칠까요?
* 웹 폰트의 경우에는 브라우저 엔진 별로 어떤 과정을 통해 렌더링 될까요?
