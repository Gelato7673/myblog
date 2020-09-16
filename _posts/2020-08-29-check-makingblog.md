---
layout: blog_page
menu: speach
big_group: My blog
small_group: IT 기술
background: logo.png
title:  "포트폴리오 및 블로그 만들면서 느끼는 점.29 "
subtitle: "산다는건 정말이지"
date_start: 2020-08-29
date_end: 2020-09-08
tags: jekyll tags tree
---

html5 sementic tag
https://www.w3schools.com/html/html5_semantic_elements.asp


지킬에 검색창 달기
https://imyeonn.github.io/blog/blog/30/


폰트 아이콘
https://m.blog.naver.com/PostView.nhn?blogId=reactionweb&logNo=220337009100&proxyReferer=https:%2F%2Fwww.google.com%2F

sass를 이용해서, 각 페이지에 맞게 배경화면을 바꿀 수 있을까??


use는 import와 달라. 
모두 가져오는게, 아니라 
'mixin','function','variables'만 데려오는거야.
그래서, 어떤 모듈을 계속 변경해 가면서 쓸 수 있게 해주는거지!
https://sass-lang.com/documentation/at-rules/use

https://sass-lang.com/documentation/at-rules/forward

fork 하는것과 오픈소스로 이용해서 작업하는 것에 대하여서 알아보자.

jekyll 을 환경을 설정해서 서버를 구동시킬때에 regeneration-auto가 disable로 나오는 문제에 대하여

중요한것! build와 serve는 다르다. build가 안되는것은. 여러가지 문제가 있어.
안올라가 있다던가 배포 상의 문제나.. 그건 별개고,

환경에서 자꾸 build를 쓰는 경향이 있는데 (github에 그렇게 적혀있기 때문이지.)

build를 쓰지말고, serve를 쓰면 된다.

기억하자
css not 선택자!
https://developer.mozilla.org/en-US/docs/Web/CSS/:not


presued element로 fontawesome 사용하기
https://stackoverflow.com/questions/20782368/use-font-awesome-icon-as-css-content

https://fontawesome.com/how-to-use/on-the-web/advanced/css-pseudo-elements

까먹을까봐. a에 관해서
https://aboooks.tistory.com/88

text-decoration
text-underline
https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness


태그에 관련된 내용
https://jekyllrb.com/docs/posts/


page 안에서 array 하는법
https://learn.cloudcannon.com/jekyll/introduction-to-jekyll-front-matter/


데이터 스타일
https://jekyllrb.com/docs/front-matter/


한 폴더에 같은 데이터 스타일을 지정할때
https://jekyllrb.com/docs/configuration/front-matter-defaults/

liquid 문법에 관한여
https://shopify.github.io/liquid/basics/types/#array

date 관련해서 변경할때에.

http://alanwsmith.com/jekyll-liquid-date-formatting-examples

https://stackoverflow.com/questions/7395520/how-does-jekyll-date-formatting-work



지금데이터 얻는법
https://stackoverflow.com/questions/12464656/get-todays-date-in-jekyll-with-liquid-markup


각종 variable
https://jekyllrb.com/docs/variables/

지킬 collection
https://jekyllrb.com/docs/step-by-step/09-collections/

지킬 sorting에 관해서
https://stackoverflow.com/questions/8991995/using-liquid-to-sort-posts-alphabetically

https://gist.github.com/Phlow/1f27dfafdf2bbcc5c48e


지킬 count
https://stackoverflow.com/questions/48046411/how-to-increment-the-counter-inside-a-liquid-for-loop
https://gist.github.com/Phlow/1f27dfafdf2bbcc5c48e


알맞는것 모으기
https://jekyllrb.com/docs/liquid/filters/

지킬에서, 내용이 있을때와 없을때를 구분
https://jekyllrb.com/docs/liquid/filters/


subtitle이 없다면? 이라고 하고 싶을때
{% if post.subtitle != none %}
	{{ post.subtitle }}
{% endif %}


text-align
https://www.w3schools.com/cssref/pr_text_text-align.ASP

wordbreak
https://www.w3schools.com/cssref/css3_pr_word-break.asp

이미지 파일 추가
https://jekyllrb.com/docs/static-files/

defaults property
https://jekyllrb.com/docs/configuration/front-matter-defaults/

pagination
https://jekyllrb.com/docs/pagination/

jekyll 에 gem 파일 추가하는 법
https://jekyllrb.com/docs/plugins/installation/


아. 진짜 힘들다. 거의 다 온것 같은데. 정말로 힘내보자.
include로 함수 만들기.
http://hamishwillee.github.io/2014/11/13/jekyll-includes-are-functions/

지킬 include 함수
https://jekyllrb.com/docs/includes/

헐..elseif가 아니라
elsif였다..헐..
https://stackoverflow.com/questions/12423658/how-do-i-chain-if-statements-in-jekyll

프로젝트별로 pages 만들기
https://dreamgonfly.github.io/blog/jekyll-remote-theme/

git 삭제하기
https://stackoverflow.com/questions/1514054/how-do-i-delete-a-local-repository-in-git
