# ex05: SASS/SCSS 모듈 번들링

##  1. 설치 패키지
### [ex05]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader
&nbsp;
##  2. SASS/SCSS Loader 설정(webpack.config.js)
### - devServer
```c
devServer: {
module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
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
### [ex05]$ npm run build
&nbsp;
##  5. 개발 서버 실행
### [ex05]$ npm start
