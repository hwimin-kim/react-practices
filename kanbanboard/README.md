# backend
## 테스트
eclipse Ctrl+F11 (IDE Run)

## 빌드
```sh
$ mvn -f kanbanboard/backend exec:exec clean package
```
  * ### 결과: kanbanboard/backend/target/kanbanboard07.jar
  * ### 실행
    ```
      $ java -Dspring.profiles.active=production -jar kanbanboard/backend/target/kanbanboard07.jar
    ```
##  ssh 연결(ssh key 사용하기)
  * ### key 생성하기
```sh
$ ssh-keygen -t rsa -b 2048 -m PEM -C "자기이메일@gmail.com"
```
  * ### 생성확인
    * ### id_rsa: private key
    * ### id_rsa.pub: public key
  * ### 공개키(id_rsa.pub) 서버 설치
    ```
    # mv ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys
    ```
  * ### ssh(client) 연결
    ```
    $ ssh -i /d/douzone2022/mykey.pem root@192.168.10.40
    ```
  * ### ssh 연결 환경 설정(~/.ssh/environment)
    ```
    # vi ~/.ssh/environment
    ``` 
    ```
    /usr/local/douzone/git/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/douzone/java/bin:/usr/local/douzone/maven/bin:/usr/local/douzone/mariadb/bin:/usr/local/douzone/node/bin:/root/bin
    ```
    ```
    # vi /etc/ssh/sshd_config

    ```
    ```
    PermiuUserEvironment yes
    ```
    ```
    # systemctl restart sshd
    ```
  * ### jenkins ssh server 설정
    * ### Publish over SSH 플러그인 설치
    * ### Publish over SSH 플러그인으로 ssh server 등록하기
    * ### project 빌드 후 조치(build-post action) 설정
      * ### proj-apps.jar: transfer
      * ### launch.sh: transfer + execution
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
    "build": "npm i && npx webpack --config config/webpack.config.js --mode production"
  }
```
##  4. 테스트
```sh
$ npm start
```

##  5. 빌드
```sh
$ npm i
$ npm run build
```