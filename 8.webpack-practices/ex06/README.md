# ex06: image 모듈 번들링

##  1. 설치 패키지
### [ex06]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader
&nbsp;
##  2. Image Loader 설정(webpack.config.js)
### - devServer
```c
devServer: {
  output: {
    path:path.resolve('public'),
    filename:'main.js',
    assetModuleFilename: 'assets/images/[hash][ext]'
  },
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(png|jpe?g|gif|svg|ico|tiff?|bmp)$/i,
      type: 'asset/resource'
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
### [ex06]$ npm run build
&nbsp;
##  5. 개발 서버 실행
### [ex06]$ npm start
