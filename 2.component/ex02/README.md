# ex02: Component Styling
1. ## Inline Styling
2. ## Normal CSS
   * ### css-loader options: {module: false}
   * ### [ex02]$ npm run debug src=02 css-modules=false
3. ## CSS Module I
   * ### css-loader options: {module: true}
   * ### [ex02]$ npm run debug src=03 (css-modules=true 생략 가능)
4. ## CSS Module II
   * ### css-loader options: {module: true}
   * ### [ex02]$ npm run debug src=04 (css-modules=true 생략 가능)
5. ## SASS & SCSS
   * ### css-loader options: {module: true}
   * ### [ex02]$ npm run debug src=05 (css-modules=true 생략 가능)
6. ## CSS in JS(Style Component), Less & Styleable 
7. ## Font Awesome
   * ### 코어 설치
     * ### [ex02]$ npm i @fortawesome/fontawesome-svg-core
     * ### [ex02]$ npm i @fortawesome/react-fontawesome
   * ### icon(light(유료), regular, solid(기본), brand(기업)) 선택 설치
     * ### [ex02]$ npm i @fortawesome/free-solid-svg-icons
     * ### [ex02]$ npm i @fortawesome/free-regular-svg-icons
     * ### [ex02]$ npm i @fortawesome/free-brands-svg-icons
8. ## React Modal
---
##  1. 설치
* ### [ex02]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
* ### [ex02]$ npm i react react-dom prop-types
&nbsp;
##  2. 설정
  * ###  webpack.config 설정
  * ###  babel.config.json 설정
&nbsp;
##  3. npm scripting
&nbsp;
##  4. 실행
### [ex02]$ npm run debug src=(01|02...) css-modules=(false|true)
&nbsp;
##  5. 빌드(번들링)
### [ex02]$ npm run build
