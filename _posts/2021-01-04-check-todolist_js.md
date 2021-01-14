---
layout: blog_page
menu: study_program
big_group: Daily Programming
small_group: 강의/book/clonecoding
background: map.jpg
title:  <b>[clone coding]</b> Javascript - Todolist Sigle Application
date_start: 2020-12-22
date_end: 2020-12-25
tags: javascript vue
comments: true
---
Nomad coders의 바닐라 JS로 크롬 앱 만들기 를 통해 직접 따라해보면서 완성한 Todolist Singlie Application 이며, Javascript로 제작하였다.

<p>
<img src="{{site.baseurl}}/assets/conts_img/JS_todolist.png" style="width:500px; border: 1px solid #efefef;">
</p>

### 제작순서
Vue.js에 이어서 두번재로 만드는 todolist Single Application 이었다. Vue때와 다른 점이 있다면 Vanila Javascript라는 점, 그리고 순서구현에 있어서 기능을 먼저 구현했다는 점이 있다. 공동점은 두 프로젝트 모두 css와 javascript를 componenets별로 나누어서 제작했다는 점이 있을 것 같다. 

1. 일단 기능을 중심으로 components를 나누고 만들 순서를 정한다. (지난프로그램과 다르게, 여러 기능을 구현하였다)
- 시간표시
- background 사진 변경
- 이름입력받아 표시
- 현재지역의 온도표시
- 할일입력

2. 그 components의 기능을 구현하자. (데이터 연동은 나중으로 미룬다. 그냥 그 컴포넌트 안에서 구현되는 정도의 기능이면 된다.)   
- vue.js와 다르게, 데이터의 연동 부분까지 한번에 끝
2. 보이는 껍데기를 만든다. html으로 구조를 만들고, css로 보이는 스타일을 입혀주자.
3. transition 효과등 animation 효과를 추가해서 좀더 자연스럽게 보이도록 노력한다.

### 참고문헌, 저장소
- 참고강의 : "바닐라 JS로 크롬 앱 만들기" - Nomad coders
- git 저장소 : [https://github.com/Gelato7673/js_todolist](https://github.com/Gelato7673/js_todolist.git)