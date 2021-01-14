---
layout: blog_page
menu: study_program
big_group: Daily Programming
small_group: 강의/book/clonecoding
background: map.jpg
title:  <b>[clone coding]</b> vue.js - Todolist Sigle Application
date_start: 2020-12-20
date_end: 2020-12-20
tags: javascript vue
comments: true
---
"Doit! 예제로 이해하고 실전프로젝트로 완성한다! Vue.js 입문" 책 뒷편에 나온 코드들을 직접 따라해보면서 완성한 Todolist Singlie 
Application 입니다. Vue.js로 제작하였습니다.

<p>
<img src="{{site.baseurl}}/assets/conts_img/20201220_124720.png" style="width:500px; border: 1px solid #efefef;">
</p>

### Clone coding & 실전 프로젝트는 어떻게 따라하면, 공부가 잘 될까?
- 일단은 따라서 clonecoding을 해본다.
- 익숙한 언어라면 처음부터 어떻게 싱글 어플리케이션을 구성하면 될지 스스로 풀어보는 것도 좋지만, vue.js로 싱글어플리케이션을 제작해 보는것은 처음이기 때문에 clonecoding형식으로 따라해보는 것이 좋을것 같았다.
- 중반쯤까지 clonecoding을 하다보면은, 뭔가 꼬여서 잘 안된다는 느낌을 받는다. 왜냐하면, 어플리케이션을 스스로 구성하고 이해하면서 코드를 짜고 있는것이 아닌 단순 clonecoding상태이기 때문에 조금만 가도 꼬인다 ㅋㅋㅋ
- 이때부터, 다시 내가 싱글 어플리케이션을 만들어 본다는 느낌으로 앞부터 스스로 다시 구성해보면서 코딩해본다.(머리로 잘 안될때는 펜과 종이를 이용해라) 그러면, 앞에서 무작정 따라 했던 내용이 정리되어서 들어올 것이다. 
- 뒷 부분을 참조해 가면서 실전 프로젝트를 마무리 짓는다.  

### 싱글어플리케이션 만들때 순서 & 느낀점
1. 일단 기능을 중심으로 조각조각 components를 나눈다. 내가 생각한것 보다 더 잘게 나눠야 하는듯.
2. 일단 보이는 껍데기를 만든다. html으로 구조를 만들고, css로 보이는 스타일을 입혀주자.
3. 그 components의 기능을 구현하자. (데이터 연동은 나중으로 미룬다. 그냥 그 컴포넌트 안에서 구현되는 정도의 기능이면 된다.)
4. 데이터가 잘 연동될 수 있도록 코드를 수정하자. data-flow에 관련된 코드는 App.vue에 들어가 있게 되는 것 같다.
5. transition 효과등 animation 효과를 추가해서 좀더 자연스럽게 보이도록 노력한다.


### 참고문헌, 저장소
- 참고문헌 : "Doit! 예제로 이해하고 실전프로젝트로 완성한다! Vue.js 입문"
- git 저장소 : [https://github.com/Gelato7673/vue_todolist.git](https://github.com/Gelato7673/vue_todolist.git)