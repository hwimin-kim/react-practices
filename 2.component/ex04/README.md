# ex04: State 🥇🥇🥇🥇🥇🥇
##  01.  기본 개념
* ### state
  * ### 컴포넌트 내부의 현재 상태를 나타내는 쓰기 가능한 데이터
  * ### 컴포넌트 this.state 안에 여러 데이터(상태)를 가질 수 있다.
  * ### this.state 특정 컴포넌트전용이다.
  * ### "상태가 변경되면 컴포넌트의 반응형(Reactive) 렌더링의 트리거가 되고 컴포넌트와 자식 컴포넌트가 다시 렌더링 된다."
  * ### 클래스 컴포넌트에서는 상태 변경을 위해서 반드시 setState 함수를 사용한다.
  * ### 함수 컴포넌트에서는 useState 후크(hook) 함수를 사용해서 초기화 한다.
  * ### 함수 컴포넌트에서는 상태 변경을 위해 useState 후크 함수에서 반환된 배열의 두번째 요소를 함수로 사용한다.
* ### 예제: src/01


##  02.  제어 컴포넌트
* ### input, textarea, select 같은 폼(form) 컴포넌트에서 사용자 입력에 따라 state값이 변경되고 렌더링하는 컴포넌트를 제어 컴포넌트
* ### 제어 컴포넌트
  * ### 예제 src/02
  * ### '컴포넌트의 UI를 외부에서 변경할 수 없고 내부의 상태 변경으로 가능하다' 
    ### 라는 리액트 컴포넌트의 작성 원칙을 준수 할 수 있다.
  * ### 사용자 입력 값을 제어(제한, 다양한 validation) 할 수 있다.
* ### 비제어 컴포넌트
  * ### 예제 src/03
  * ### 폼 컴포넌트를 반드시 제어 컴포넌트로 작성해야 하는 것은 아니다.
  * ### 상태를 제어하지 않는 비제어 컴포넌트를 만들 수 있다.


##  03.  상태 컴포넌트 vs 순수(Pure, Dumb) 컴포넌트
* ### 상태 컴포넌트
  * ### 상태를 관리하는 컴포넌트
  * ### 보통 상태 컴포넌트는 컴포넌트 계층의 상위에 있다.
  * ### 보통 상태 컴포넌트는 순수 컴포넌트를 하나 이상 매핑할 수 있다.
* ### 순수 컴포넌트
  * ### 상태없이 속성(props)로 화면만 렌더링하는 컴포넌트
  * ### 재사용 및 테스트하기 좋다.
* ### 애플리케이션의 컴포넌트들은 상태 컴포넌트와 순수 컴포넌트로 분리하여 개발하는 것이 좋다.
* ### 어떤 컴포넌트가 상태 컴포넌트인가?
  * ### 상태를 기반으로 렌더링하는 컴포넌트 ex) 제어 컴포넌트
  * ### 다 수의 하위 컴포넌트를 가지고 있는 공통(하나)의 컴포넌트
  * ### 컴포넌트 Hierachy에서 상위에 있는 상태를 가져야만 하는 컴포넌트
  * ### 못 찾겠으면, 상태를 관리하는 컴포넌트를 만들고 하위(pure) 컴포넌트를 래핑하도록 한다.
* ### 예제: emaillist


##  04. Data Flow(Bottom -> up)
* ### 예제: emaillist


---
##  1. 설치
* ### [ex04]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
* ### [ex04]$ npm i react react-dom prop-types
&nbsp;
##  2. 설정
  * ###  webpack.config 설정
  * ###  babel.config.json 설정
&nbsp;
##  3. npm scripting
&nbsp;
##  4. 실행
### [ex04]$ npm run debug src=(01|02...) css-modules=(false|true)
&nbsp;
##  5. 빌드(번들링)
### [ex04]$ npm run build
