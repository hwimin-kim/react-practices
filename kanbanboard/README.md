# backend
## 테스트
eclipse Ctrl+F11 (IDE Run)

## 빌드
```sh
$ mvn -f kanbanboard/backend clean package
```
  * ### 결과: kanbanboard/backend/target/kanbanboard07.jar
  * ### 실행
    ```
      $ java -D spring.profiles.active=production -jar kanbanboard/backend/target/kanbanboard07.jar
    ```

# frontend
##  1.설치
``` sh
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-syntax-throw-expressions @babel/plugin-transform-runtime
$ npm i react react-dom prop-types react-addons-update react-router react-router-dom
```
&nbsp;
##  2. 설정
  * ###  config/webpack.config 설정
  * ###  config/babel.config.json 설정
&nbsp;
##  3. npm scripting
``` json
 "scripts": {
    "start": "npx webpack serve --config config/webpack.config.js --progress --mode development",
    "build": "npx webpack --config config/webpack.config.js --mode production"
  }
```
##  4. 테스트
```sh
$ npm start
```

##  5. 빌드
```sh
$ npm run build
```