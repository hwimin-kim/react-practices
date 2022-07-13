# ex01: JS Module 번들링

##  1. 설치 패키지
### [ex01]$ npm i -D webpack webpack-cli express
&nbsp;
##  2. 스크립팅
```c
  "scripts": {
    "start": "node dev-server",
    "build": "npx webpack ./src/index.js -o ./public"
  }
```
&nbsp;
##  3. 빌드
### [ex01]$ npm run build
&nbsp;
##  4. 애플리케이션 실행(테스트 서버 실행)
### [ex01]$ npm start