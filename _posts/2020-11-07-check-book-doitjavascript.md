---
layout: blog_page
menu: speach
big_group: Myblog
small_group: IT 기술
background: map.jpg
title:  <b>[book]</b> Doit! 웹 프로그래밍을 위한 자바스크립트 기본편
subtitle: "Javascript"
date_start: 2020-11-06
date_end: 2020-11-10
tags: javascript
comments: true
---

### 책소개
- 책 제목 : Doit! 웹 프로그래밍을 위한 자바스크립트 기본편
- 지은이 : 고경희
- 출판사 : 이지스퍼블리싱

Javascript API를 사용하거나, 홈페이지 속 Componenet를 만들어 본 경험도 많이 있지만, 그래도 한번쯤 Javascript를 다시 한번 정리해 보고 싶었던 것 같다. 과거에 Javascript와 관련해서 head first 책이나, 다른 책들도 읽어본 적이 있었는데 그 당시에는 언어에 관련된 설명 (변수 설정하는법, if문 등등..) 이 주된 내용이어서, 그보다는 좀더 실무적인 내용이 많았으면 좋겠다고 생각 했었는데, 이 책은 가볍게 이론도 정리해 주면서 실무에서 많이 쓰이는 용법과 내용도 함께 담고 있어서, 한번쯤 그동안 썼던 Javascript를 정리하기에 좋은 기회가 되었다. 

처음 책을 사서 펼쳤을때, ES5로 설명되어있다고 해서 조금.. 내가 원한것과는 다른데? 라고 생각했었다. (나는 ES6로 자바스크립트를 다시 한번 정리하고 싶은 마음이 컸기에 최근 출간된 책을 다시 산건데..) 그러나, 중요 개념을 설명한 다음에 밑에 ES6로 변경하여 구현할때의 문법을 함께 정리해 주어서 읽고나서는 만족스러웠던 책이었다. 

특히, 이 책은 실제로 홈페이지 제작시에 자주 사용되는 component들을 실습 과제로 설정해 두고, 설명해 주는 부분이 많아서 이 책으로 입문하신다면 실무에서 매우 유용하리라는 생각이 들었다. 
사실, 만들어 보는 것만큼 유용한 것이 어디있으랴. 그런 부분에서 실습과제와 설명의 양의 배치가 적절하다는 느낌(!) 이었던 것 같다. ^^ 


이 책의 장점을 한번에 요약하면 다음과 같다. 
- 이론을 간편하게 정리할 수 있다. (350페이지 미만)
- ES5로 쓰여졌으나, 중요한 ES6문법은 함께 정리해 준다.
- 기본적인 내용만 있지않고, 실무에서 많이 쓰이는 event나 form, Dom, BOM에 관한 내용도 반 정도 차지하고 있다는 점이 특히 좋았다.
- 실제로 component를 만드는 실습과제가 많이 있어서 좋다.


#### 이벤트 캡처링과 버블링

addEventListenr 함수에 관해 설명하면서, 이벤트 캡처링 여부를 지정할 수 있다고 나와있다. 
책에는 간단히 이벤트 캡처링은 '부모 노드에서 자식 노드로 이벤트가 전달되는 것' 이고,
이벤트 버블링은 '자식 노드에서 부모 노드로 이벤트가 전달되는 것'이라고 설명되어있다. Javascript에서 뭔가 잘 안된다면 callback 과 이벤트일 확률이 꽤 있었기에, 여기에 좀 더 자세한 글들을 링크해 두고 싶다. 

- ['JAVASCRIPT.INFO 사이트의 버블링과 캡처링'](https://ko.javascript.info/bubbling-and-capturing) 이라는 글이다.
- ['CAPTAIN PANGYO 님의 이벤트관련 글'](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/) 이 블로그는 우연히 찾게 되었는데, 지금 보니까 이 다음에 읽으려고 하는 Do it Vue.js 저자 이신듯. 블로그가 상당히 깔끔하다는 느낌을 받을 수 있다. 
- 이렇게 문득 event에 대해서 알아보다가 불현듯 기억난 이전 코드 ㅎㅎ
{% highlight javascript %}
$('a').click(function(e) {
    e.preventDefault();
}
{% endhighlight %}

j-query로 이 코드 안써본 사람 없을 것 같았다. ㅎㅎ 여기서 e가 무슨 의미가 있는지 궁금했었는데, 그냥 매개변수 였다. 나 말고도 이거에 대해 궁금해 하는 사람이 많은 것 같다. 질문과 답변 링크가 있길래 걸어둔다.
[qstack 사이트에서 'Javascript / jQuery에서 (e)는 무엇을 의미합니까?' 라는 글](https://qastack.kr/programming/10323392/in-javascript-jquery-what-does-e-mean)


#### visual studio code
이번에 사용한 IDE는 visual studio code 이다. visual studio code가 나온지는 꽤 되었는데, 이전에 한번 사용해 보고 오랜만에 다시 다운받아서 사용해 본 것 같다. UI/UX 의 느낌은 여전히 visual studio 다웠고 ^^ㅋㅋ (아마, 뭔가 딱딱한듯, 섬세한 그 visual studio만의 감성적인 감성..Microsoft감성인가.. 나만 느끼나..) 음. 편리하기도 했고, 무엇보다 visual studio 처럼 보이지만 라이트 하다는 것이 가장 큰 장점이 아닌가 싶다. ^^


#### github repository
이 책의 실습파일들은 모두 github repository에 올라가 있어서 clone하여 사용 하면 된다.
- original repository : [github.com/funnycom/js-basic-book](github.com/funnycom/js-basic-book)
- mygithub repository : [https://github.com/Gelato7673/js-basic-book](https://github.com/Gelato7673/js-basic-book)

### 기억에 남는 한줄
책 앞장에 써있는 글이 특히 기억에 남아서 여기에 적어두려고 한다. 
> 진짜 어려움은 극복할 수 있다. 정복할 수 없는 것은 상상 속의 어려움뿐이다. -시어도어 N.베일
> Real difficulties can be overcome; it is only the imaginary ones that are unconquerable. -Theodore N.Vail