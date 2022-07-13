# ex04: CSS Module 번들링

##  1. 설치 패키지
### [ex04]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader
&nbsp;
##  2. CSS Loader 설정(webpack.config.js)
### - devServer
```c
devServer: {
module: {
    rules: [{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
    }]
  }
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
### [ex04]$ npm run build
&nbsp;
##  5. 개발 서버 실행
### [ex04]$ npm start
