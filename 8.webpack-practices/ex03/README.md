# ex03: webpack 개발 서버 설정

##  1. 설치 패키지
### [ex03]$ npm i -D webpack webpack-cli webpack-dev-server
&nbsp;
##  2. webpack 개발 서버 설정(webpack.config.js)
### - devServer
```c
devServer: {
    host: '0.0.0.0',
    port: 9090,
    liveReload: true,
    hot: false,
    compress: true
}
```
&nbsp;
##  3. 스크립팅
```c
"scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack"
  }
```
&nbsp;
##  4. 빌드
### [ex03]$ npm run build
&nbsp;
##  5. 개발 서버 실행
### [ex03]$ npm start
