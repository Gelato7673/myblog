---
layout: blog_page
menu: MB
big_group: Daily Programming
small_group: 블로그관리
background: map.jpg
title:  <b>[blog]</b>github pages에서 블로그 만들고 관리하기
date_start: 2020-08-29
date_end: 2020-10-26
tags: githubpage, jekyll, liquid, fireball
comments: true
---

### 여기에 기록하려고 하는것은..

일단, 거창한 기록을 하려는 것이 아니다. 그저, 만들때 찾아봤던 사이트들의 링크를 남김으로써, 이후에도 참고 자료로 쓰고 싶을 뿐이다.
만약, jekyll로 githubpage를 만들고 싶어서 찾아왔다면, 블로그들을 찾아보기보다는 **jekyll의 original document**를 꼭 참고하라고 이야기 하고 싶다.   
어떤 개발이든, original document를 보는것은 정말 좋은 습관이고, 특히나 jekyll은 docs가 매우 잘되어있다. 중요한 앞부분의 tutorial은 심지어 마음씨 좋은 분이 한국어로 번역도 해두셔서 읽기가 매우 쉽다.!!


### 중요 참고 사이트들
1. [지킬(Jekyll) Docs : https://jekyllrb-ko.github.io/](https://jekyllrb-ko.github.io/)
2. [liquid문법 : https://shopify.github.io/liquid/](https://shopify.github.io/liquid/)
3. [markdown문법 : https://daringfireball.net/projects/markdown/syntax](https://daringfireball.net/projects/markdown/syntax)
4. [sass문법 : http://thesassway.com/](http://thesassway.com/)
5. [언제나 그렇듯 stackoverflow에 왠만한건 다 있다](https://stackoverflow.com/)


### 추후에 구현하고 싶은 내용들
1. 지킬에 검색창 달기 [https://imyeonn.github.io/blog/blog/30/](https://imyeonn.github.io/blog/blog/30/)
2. 태그모음달기


### 오답노트

#### github pages
- [프로젝트 별로 github pages 만들기](https://dreamgonfly.github.io/blog/jekyll-remote-theme/)
- [github pages에서 코드 그대로 보이도록 만들기](https://hhj6212.github.io/blog/2020/08/22/Jekyll%EC%97%90%EC%84%9C-%EC%BD%94%EB%93%9C%EB%B8%94%EB%A1%9D-%ED%95%98%EC%9D%B4%EB%9D%BC%EC%9D%B4%ED%8A%B8%ED%95%98%EA%B8%B0.html)
- rouge 파일을 이용해서 코드의 syntax highlight 사용하기(https://moon9342.github.io/jekyll-rouge)
- rouge 파일을 이용한 코드 추가 예시
~~~javascript
function sample(highlight) {
   var foo = 'Hello World';
}
~~~

#### jekyll
- [front-matter](https://jekyllrb.com/docs/configuration/front-matter-defaults/)
- [front-matter default 설정하기](https://jekyllrb.com/docs/configuration/front-matter-defaults/)
- [pagination](https://jekyllrb.com/docs/pagination/)
- [data formatting](http://alanwsmith.com/jekyll-liquid-date-formatting-examples)
- [liquid 문법으로, 현재 데이터 얻는법](https://stackoverflow.com/questions/12464656/get-todays-date-in-jekyll-with-liquid-markup)
- [variables](https://jekyllrb.com/docs/variables/)
- [collection](https://jekyllrb.com/docs/step-by-step/09-collections/)
- [alphabetically sorting으로 변경](https://stackoverflow.com/questions/8991995/using-liquid-to-sort-posts-alphabetically)
- [count만들기 : stackoverflow](https://stackoverflow.com/questions/48046411/how-to-increment-the-counter-inside-a-liquid-for-loop)
- [count만들기 : github](https://gist.github.com/Phlow/1f27dfafdf2bbcc5c48e)
- [이미지 파일 추가](https://jekyllrb.com/docs/static-files/)
- [liquid문법의 include를 이용해서, 함수처럼 사용할수 있다고?!](http://hamishwillee.github.io/2014/11/13/jekyll-includes-are-functions/)
- [include문법 소개](https://jekyllrb.com/docs/includes/)
- [깜빡하기 쉬운 liquid문법, elseif가 아니라 elsif다. 헉.](https://stackoverflow.com/questions/12423658/how-do-i-chain-if-statements-in-jekyll)
- [jekyll 에 gem 파일 추가하는 법](https://jekyllrb.com/docs/plugins/installation/)
- subtitle이 없을 경우에 나오지 않도록 처리 (if문 사용)
<pre class="highlight"><code>{% raw %}
{% if post.subtitle != none %}
	{{ post.subtitle }}
{% endif %} 
{% endraw %}</code></pre>
- [highlight추가하기](https://moon9342.github.io/jekyll-rouge)


#### markdown
- [daringfireball](https://daringfireball.net/projects/markdown/basics)


