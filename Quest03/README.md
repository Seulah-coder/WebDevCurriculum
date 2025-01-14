# Quest 03. 자바스크립트와 DOM

## Introduction
* 자바스크립트는 현재 웹 생태계의 근간인 프로그래밍 언어입니다. 이번 퀘스트에서는 자바스크립트의 기본적인 문법과, 자바스크립트를 통해 브라우저의 실제 DOM 노드를 조작하는 법에 대하여 알아볼 예정입니다.

## Topics
* 자바스크립트의 역사
* 기본 자바스크립트 문법
* DOM API
  * `document` 객체
  * `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()` 함수들
  * 기타 DOM 조작을 위한 함수와 속성들
* 변수의 스코프
  * `var`, `let`, `const`

## Resources
* [자바스크립트 첫걸음](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps)
* [자바스크립트 구성요소](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks)
* [Just JavaScript](https://justjavascript.com/)

## Checklist
* 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요? 
  - ES1(1997년 6월) — ES2(1998년 6월) — ES3(1999년 12월) — ES4(Abandoned) - ES5(2009년) - ES6(2015년)
    * 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요? ECMAScript가 언어의 공식 이름이며 ES1, ES2, ES3, ES5, ES6으로 축약되어 오다가 2016년부터 연도별로 지정됨 
      - ES5: 1. 배열에 forEach, map, filter, reduce, some, every 와 같은 메소드 지원 , 2.object에 대한 getter/setter 지원 3. 자바스크립트 strict 모드지원 4. json지원(기존에는 xml)
      - ES6(2015): const, let 키워드 추가, arrow 문법 지원, iterator/ generator 추가, module의 import/ export 추가, Promise 도입
      - ES7(2016): Array.prototype.include(), ** 연산자 추가 = Math.pow()
      - ES8(2017): async - await 추가
    * 자바스크립트의 표준은 어떻게 제정될까요? 자바스크립트 표준은 1996년 부터 유럽 컴퓨터 제조업자 협회(ECMA)에서 개발되었고 최신 표준은 2015년부터 1년에 한번씩 새로운 버전의 ECMAScript를 공개하고 있다.
* 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?
  - 인터프리터 언어 :컴파일 언어가 아닌 소스 코드를 한 줄씩, 번역과 실행을 동시에 진행하는 인터프리터 언어
  - 동적 타입 언어 : 실행되는 도중에 타입이 동적으로 바뀔 수 있는 동적 타입 언어
  - 함수 자체가 자료형이고 객체임 : 다른 함수를 호출 할 때 함수를 인자로 넘길수도 있고 함수 자체를 리턴할 수 있음
  - 객체지향 & 함수지향
  - 함수가 스코프를 정의한다: 함수 범위에 따라 변수의 스코프가 정의됨 
  - 브라우저를 조작할 수 있다 : 브라우저의 화면이나 기능들을 조작할 수 있는 api를 제공함
  * 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?
    - 1. for : 코드를 여러번 반복
    - 2. for/in : 객체의 속성을 반복
    - 3. for/of : 배열의 요소를 반복
    - 4. while : 주어진 조건이 참인 동안 코드를 반복한다.
    - 5. do/while : 주어진 조건이 참인 동안 코드를 반복한다.
* 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?
      - element.setAttribute('class', '추가하고 싶은 클래스 명')
    * IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?
      - element.className = '추가하고 싶은 클래스 명'
* 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?
      - 지역 변수 : 함수 내에서 선언된 변수 
      - 전역 번수 : 함수 외부에서 선언된 변수 
  * `var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?
      - var: var는 중복 사용이 가능하며 기존의 선언해둔 변수를 잊고 재할당하는 등의 실수가 발생할 가능성이 큼 이후 추가된 변수 선언 방식이 let, const임
      - let: 중복 선언 불가능, 재할당 가능
* 자바스크립트의 익명 함수는 무엇인가요?
      - 이름이 없는 함수. 함수의 재사용이 필요 없는 경우 변수에 함수 호출 결과값을 넣어줌으로 1회성으로 함수 사용. 항상 메모리를 차지하는 일반 함수에 비해 메모리를 차지 하지 않아 메모리 관리에도 효과적
  * 자바스크립트의 Arrow function은 무엇일까요?
      - function name() {}의 형태를 let func = () => {}으로 변경한 것/ 단순하고 간결한 문법으로 함수를 만들 수 있음/ 일반 함수와 다른점: this를 가지지 않음, arguments를 지원하지 않음, new와 함께 호출 불가

## Quest
* (Quest 03-1) 초보 프로그래머의 영원한 친구, 별찍기 프로그램입니다.
  * [이 그림](jsStars.png)과 같이, 입력한 숫자만큼 삼각형 모양으로 콘솔에 별을 그리는 퀘스트 입니다.
    * 줄 수를 입력받고 그 줄 수만큼 별을 그리면 됩니다. 위의 그림은 5를 입력받았을 때의 결과입니다.
  * `if`와 `for`와 `function`을 다양하게 써서 프로그래밍 하면 더 좋은 코드가 나올 수 있을까요?
  * 입력은 `prompt()` 함수를 통해 받을 수 있습니다.
  * 출력은 `console.log()` 함수를 통해 할 수 있습니다.
* (Quest 03-2) skeleton 디렉토리에 주어진 HTML을 조작하는 스크립트를 완성해 보세요.
  * 첫째 줄에 있는 사각형의 박스들을 클릭할 때마다 배경색이 노란색↔흰색으로 토글되어야 합니다. 완료
  * 둘째 줄에 있는 사각형의 박스들을 클릭할 때마다 `enabled`라는 이름의 CSS Class가 클릭된 DOM 노드에 추가되거나 제거되어야 합니다. 완료
* 구현에는 여러 가지 방법이 있으나, 다른 곳은 건드리지 않고 TODO 부분만 고치는 방향으로 하시는 것을 권장해 드립니다.

## Advanced
* Quest 03-1의 코드를 더 구조화하고, 중복을 제거하고, 각각의 코드 블록이 한 가지 일을 전문적으로 잘하게 하려면 어떻게 해야 할까요?
* Quest 03-2의 스켈레톤 코드에서 `let` 대신 `var`로 바뀐다면 어떤 식으로 구현할 수 있을까요?
