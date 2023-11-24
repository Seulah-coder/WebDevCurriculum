# Quest 04. OOP의 기본

## Introduction
* 이번 퀘스트에서는 바닐라 자바스크립트의 객체지향 프로그래밍에 대해 알아볼 예정입니다.

## Topics
* 객체지향 프로그래밍
  * 프로토타입 기반 객체지향 프로그래밍
  * 자바스크립트 클래스
    * 생성자
    * 멤버 함수
    * 멤버 변수
  * 정보의 은폐
  * 다형성
* 코드의 재사용

## Resources
* [MDN - Classes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
* [MDN - Inheritance and the prototype chain](https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [MDN - Inheritance](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Inheritance)
* [Polymorphism](https://medium.com/@viktor.kukurba/object-oriented-programming-in-javascript-3-polymorphism-fb564c9f1ce8)
* [Class Composition](https://alligator.io/js/class-composition/)
* [Inheritance vs Composition](https://woowacourse.github.io/javable/post/2020-05-18-inheritance-vs-composition/)

## Checklist
* 객체지향 프로그래밍은 무엇일까요? - 프로그래밍에서 필요한 데이터를 추상화 시켜 상태와 행위를 가진 객체로 만들고, 객체의 상호 작용을 통해 로직을 구성하는 방법
  * `#`로 시작하는 프라이빗 필드는 왜 필요한 것일까요? 정보를 은폐(encapsulation)하면 어떤 장점이 있을까요? 
    - 프라이빗 필드를 사용하여 정보 은폐를 구현할 수 있으며 외부에서 객체의 내부 상태를 직접적으로 변경하지 못하도록 하여 불변성과 안정성을 보장하고, 외부 코드에 영향을 미치지 않도록 하는 것
  * 다형성이란 무엇인가요? 다형성은 어떻게 코드 구조의 정리를 도와주나요?
    - 하나의 인터페이스나 클래스가 여러 개의 구현체를 가질 수 있는 성질. 상속과 인터페이스로 구현할 수 있음 
  * 상속이란 무엇인가요? 상속을 할 때의 장점과 단점은 무엇인가요?
    - 장점 : 코드의 재사용성이 높아짐, 클래스 기능 확장 및 수정, 클래스 간 계층구조 구성, 클래스 간 의존성을 줄임
    - 단점 : 클래스간 결합도가 높아지기 때문에, 하위 클래스에서 상위 클래스의 변경 사항에 민감해짐, 하위 클래스에서 상위 클래스의 private 멤버에 접근할 수 없음, 상위 클래스 변경 사항이 전체 시스템에 영향을 미칠 수 있음
  * OOP의 합성(Composition)이란 무엇인가요? 합성이 상속에 비해 가지는 장점은 무엇일까요? 
    - 합성 (조합): 기존 클래스가 새로운 클래스의 구성 요소로 쓰인다. 새로운 클래스를 만들고 private 필드로 기존 클래스의 인스턴스를 참조한다.
    - 예시 참조 : WinningLotto 클래스에서 인스턴스 변수로 lotto 클래스를 가지는 것
      - ex ) public class WinningLotto {
              private Lotto lotto;
              private BonusBall bonusBall;
      }
    - 장점 : 메서드를 호출하는 방식으로 동작하기 때문에 캡슐화를 깨뜨리지 않는다.
    -  기존 클래스에 변화에 영향이 적어지며 안전하다.
* 자바스크립트의 클래스는 어떻게 정의할까요?
    - 클래스 키워드를 사용하여 선언. 내부에 여러 메소드를 정의할 수 있음 
  * 프로토타입 기반의 객체지향 프로그래밍은 무엇일까요?
    - 프로토타입은 일종의 디자인 패턴중 하나로 객체를 효율적으로 생성하는 방법을 다루는 패턴 중 하나임. 원본 객체가 존재하고 그 객체를 복제해서 새로운 객체를 생성하는 방법.
    - 모든 객체는 프로토타입이라는 다른 객체를 가리키는 내부 링크를 가지고 있으며 직접 객체를 연결하는 것을 프로토타입 체인이라고 함
    - 클래스 기반 프로그래밍과 다른 점은 객체를 생성하지 않고 복제를 하기 때문에 객체의 생성 비용이 낮고 메모리 측면에서 효율적임
    - ES6에서 class가 나오기 전 프로토타입을 이용하여 객체 지향처럼 상속, 추상화, 다형성을 구현함 / class는 없지만 객체 지향을 사용하는 느낌으로 코드를 작성할 수 있음
  * 자바스크립트의 클래스는 이전의 프로토타입 기반의 객체지향 구현과 어떤 관계를 가지고 있나요?
    - 기존 prototype을 class 문법이 대체하려고 하며 클래스 기반 객체지향 프로그래밍에 대한 시도가 이루어지고 있음

## Quest
* 웹 상에서 동작하는 간단한 바탕화면 시스템을 만들 예정입니다.
* 요구사항은 다음과 같습니다:
  * 아이콘은 폴더와 일반 아이콘, 두 가지의 종류가 있습니다.
  * 아이콘들을 드래그를 통해 움직일 수 있어야 합니다.
  * 폴더 아이콘은 더블클릭하면 해당 폴더가 창으로 열리며, 열린 폴더의 창 역시 드래그를 통해 움직일 수 있어야 합니다.
  * 바탕화면의 생성자를 통해 처음에 생겨날 아이콘과 폴더의 개수를 받을 수 있습니다.
  * 여러 개의 바탕화면을 각각 다른 DOM 엘리먼트에서 동시에 운영할 수 있습니다.
  * Drag & Drop API를 사용하지 말고, 실제 마우스 이벤트(mouseover, mousedown, mouseout 등)를 사용하여 구현해 보세요!

## Advanced
* 객체지향의 역사는 어떻게 될까요?
* Smalltalk, Java, Go, Kotlin 등의 언어들로 넘어오면서 객체지향 패러다임 측면에서 어떤 발전이 있었을까요?
