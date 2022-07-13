# ex02: 번들링 환경(webpack.config.js) 설정

##  1. 설치 패키지
### [ex02]$ npm i -D webpack webpack-cli express
&nbsp;
##  2. 번들링 환경 설정(webpack.config.js)
### - mode
### - entry
### - output
```c
{
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output: {
        path:path.resolve('public'),
        filename:'assets/js/bundle.js'
    }
}
```
&nbsp;
##  3. 스크립팅
```c
"scripts": {
    "start": "node dev-server",
    "build": "npx webpack"
  }
```
&nbsp;
##  4. 빌드
### [ex02]$ npm run build
&nbsp;
##  5. 애플리케이션 실행(테스트 서버 실행)
### [ex02]$ npm start
