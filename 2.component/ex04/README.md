# ex04: State π₯π₯π₯π₯π₯π₯
##  01.  κΈ°λ³Έ κ°λ
* ### state
  * ### μ»΄ν¬λνΈ λ΄λΆμ νμ¬ μνλ₯Ό λνλ΄λ μ°κΈ° κ°λ₯ν λ°μ΄ν°
  * ### μ»΄ν¬λνΈ this.state μμ μ¬λ¬ λ°μ΄ν°(μν)λ₯Ό κ°μ§ μ μλ€.
  * ### this.state νΉμ  μ»΄ν¬λνΈμ μ©μ΄λ€.
  * ### "μνκ° λ³κ²½λλ©΄ μ»΄ν¬λνΈμ λ°μν(Reactive) λ λλ§μ νΈλ¦¬κ±°κ° λκ³  μ»΄ν¬λνΈμ μμ μ»΄ν¬λνΈκ° λ€μ λ λλ§ λλ€."
  * ### ν΄λμ€ μ»΄ν¬λνΈμμλ μν λ³κ²½μ μν΄μ λ°λμ setState ν¨μλ₯Ό μ¬μ©νλ€.
  * ### ν¨μ μ»΄ν¬λνΈμμλ useState νν¬(hook) ν¨μλ₯Ό μ¬μ©ν΄μ μ΄κΈ°ν νλ€.
  * ### ν¨μ μ»΄ν¬λνΈμμλ μν λ³κ²½μ μν΄ useState νν¬ ν¨μμμ λ°νλ λ°°μ΄μ λλ²μ§Έ μμλ₯Ό ν¨μλ‘ μ¬μ©νλ€.
* ### μμ : src/01


##  02.  μ μ΄ μ»΄ν¬λνΈ
* ### input, textarea, select κ°μ νΌ(form) μ»΄ν¬λνΈμμ μ¬μ©μ μλ ₯μ λ°λΌ stateκ°μ΄ λ³κ²½λκ³  λ λλ§νλ μ»΄ν¬λνΈλ₯Ό μ μ΄ μ»΄ν¬λνΈ
* ### μ μ΄ μ»΄ν¬λνΈ
  * ### μμ  src/02
  * ### 'μ»΄ν¬λνΈμ UIλ₯Ό μΈλΆμμ λ³κ²½ν  μ μκ³  λ΄λΆμ μν λ³κ²½μΌλ‘ κ°λ₯νλ€' 
    ### λΌλ λ¦¬μ‘νΈ μ»΄ν¬λνΈμ μμ± μμΉμ μ€μ ν  μ μλ€.
  * ### μ¬μ©μ μλ ₯ κ°μ μ μ΄(μ ν, λ€μν validation) ν  μ μλ€.
* ### λΉμ μ΄ μ»΄ν¬λνΈ
  * ### μμ  src/03
  * ### νΌ μ»΄ν¬λνΈλ₯Ό λ°λμ μ μ΄ μ»΄ν¬λνΈλ‘ μμ±ν΄μΌ νλ κ²μ μλλ€.
  * ### μνλ₯Ό μ μ΄νμ§ μλ λΉμ μ΄ μ»΄ν¬λνΈλ₯Ό λ§λ€ μ μλ€.


##  03.  μν μ»΄ν¬λνΈ vs μμ(Pure, Dumb) μ»΄ν¬λνΈ
* ### μν μ»΄ν¬λνΈ
  * ### μνλ₯Ό κ΄λ¦¬νλ μ»΄ν¬λνΈ
  * ### λ³΄ν΅ μν μ»΄ν¬λνΈλ μ»΄ν¬λνΈ κ³μΈ΅μ μμμ μλ€.
  * ### λ³΄ν΅ μν μ»΄ν¬λνΈλ μμ μ»΄ν¬λνΈλ₯Ό νλ μ΄μ λ§€νν  μ μλ€.
* ### μμ μ»΄ν¬λνΈ
  * ### μνμμ΄ μμ±(props)λ‘ νλ©΄λ§ λ λλ§νλ μ»΄ν¬λνΈ
  * ### μ¬μ¬μ© λ° νμ€νΈνκΈ° μ’λ€.
* ### μ νλ¦¬μΌμ΄μμ μ»΄ν¬λνΈλ€μ μν μ»΄ν¬λνΈμ μμ μ»΄ν¬λνΈλ‘ λΆλ¦¬νμ¬ κ°λ°νλ κ²μ΄ μ’λ€.
* ### μ΄λ€ μ»΄ν¬λνΈκ° μν μ»΄ν¬λνΈμΈκ°?
  * ### μνλ₯Ό κΈ°λ°μΌλ‘ λ λλ§νλ μ»΄ν¬λνΈ ex) μ μ΄ μ»΄ν¬λνΈ
  * ### λ€ μμ νμ μ»΄ν¬λνΈλ₯Ό κ°μ§κ³  μλ κ³΅ν΅(νλ)μ μ»΄ν¬λνΈ
  * ### μ»΄ν¬λνΈ Hierachyμμ μμμ μλ μνλ₯Ό κ°μ ΈμΌλ§ νλ μ»΄ν¬λνΈ
  * ### λͺ» μ°Ύκ² μΌλ©΄, μνλ₯Ό κ΄λ¦¬νλ μ»΄ν¬λνΈλ₯Ό λ§λ€κ³  νμ(pure) μ»΄ν¬λνΈλ₯Ό λννλλ‘ νλ€.
* ### μμ : emaillist


##  04. Data Flow(Bottom -> up)
* ### μμ : emaillist


---
##  1. μ€μΉ
* ### [ex04]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
* ### [ex04]$ npm i react react-dom prop-types
&nbsp;
##  2. μ€μ 
  * ###  webpack.config μ€μ 
  * ###  babel.config.json μ€μ 
&nbsp;
##  3. npm scripting
&nbsp;
##  4. μ€ν
### [ex04]$ npm run debug src=(01|02...) css-modules=(false|true)
&nbsp;
##  5. λΉλ(λ²λ€λ§)
### [ex04]$ npm run build
