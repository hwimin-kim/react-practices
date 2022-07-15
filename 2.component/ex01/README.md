# ex01: Property(props)
* ### 컴포넌트의 데이터
* ### 부모에서 자식으로 전달
  * ### Component Communication(컴포넌트간의 통신), Data Flow
  * ### Top -> Down
* ### 자식 컴포넌트에서 변경 불가
* ### 부모가 소유하는 데이터
---
##  src/01 : FoodList: 클래스 컴포넌트
##  src/02 : FoodList: Data Flow(Top -> Down): 클래스 컴포넌트
##  src/03 : FoodList: Data Flow(Top -> Down): 함수 컴포넌트
##  src/04 : Property Validation
---
##  1. 설치
* ### [ex01]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
* ### [ex01]$ npm i react react-dom prop-types
&nbsp;
##  2. 설정
  * ###  webpack.config 설정
  * ###  babel.config.json 설정
&nbsp;
##  3. npm scripting
&nbsp;
##  4. 실행
### [ex01]$ npm run debug src=(01|02|03|04|05|06|07|08)
&nbsp;
##  5. 빌드(번들링)
### [ex01]$ npm run build
