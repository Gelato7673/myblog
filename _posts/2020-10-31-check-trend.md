---
layout: blog_page
menu: speach
big_group: Myblog
small_group: IT 기술
background: map.jpg
title: <b>[trend search]</b>2020. 10. 5주차
subtitle: "dependency-manager, preprocessors, phython"
date_start: 2020-10-23
date_end: 2020-10-29
tags: githubpage
comments: true
---

### Javascript, Vue.js, Typescript 
Front-end에서 중요한 기술들 3가지에 대해 이것저것 찾아보는 시간을 가졌다.
첫 술에 배부를 생각 말고, 앞으로도 열심히 찾아보고 읽어봐야지..라는 생각을 하면서. ^^;;
이것저것 알아본 내용들을 정리해 본다.


### Javascript(ES6)와 이후의 발전동향

#### ES6란?
ES6는 ECMA Script 6의 줄임말로, 다른이름으로 ECMA Script 2015라는 이름이 있다. 따라서, 2015년에 나왔다.
ES5와 ES6사이에는 꽤 긴 공백이 있었고, ES6가 처음나왔을때 많은 브라우저에서 그 스펙을 뒷받침해 주지 못했다.
그러나, 이후에 개발된 다양한 프레임워크에서 ES6를 채택하였고, 브라우저의 지원율 또한 늘어났다.
그럼, ES6는 무엇이 다를까? 
- [ES6-Features.org 개인적으로 추천! 달라진 코드를 한눈에 비교할 수 있다.](http://es6-features.org/#Constants)
- [ES6-Features.org : github repository](https://github.com/lukehoban/es6features)
- [ECMAScript official website](http://www.ecma-international.org/ecma-262/6.0/)
- [W3C HTML5 Korean Interest Group 에서 진행한 W3C HTML5 KIG 회의 발표자료](https://www.slideshare.net/mixed/ecmascript2015)


#### ES6까지의 발전을 기록한 글.
Naver D2를 보다가 "ECMAScript 6 에디터이기도 했던 Allen Wirfs-Brock과 Brendan Eich는 매우 간헐적(13~15년 주기)으로 열리는 The History of Programming Languages Conference에서 지난 20년(1995~2015)간의 JavaScript 역사를 다룬 190페이지 분량의 방대한 내용의 문서 JavaScript: the first 20 years를 3년의 작업 시간을 거쳐 완성 후 공개했습니다" 라는 내용을 발견하여서 관련 링크를 따라가 글을 읽어보았다. 이번엔 대강 읽어서 딱히 정리까진 어렵겠지만, 정독해 볼만한 가치가 있는 글 이었다.
- 링크: [JavaScript: the first 20 years - Allen Wirfs-Brock, Brendan Eich](https://dl.acm.org/doi/abs/10.1145/3386327)


#### ES6이후의 발전을 기록한 글.
이번에 Javascript에 관한 글을 찾아보면서 Naver D2의 'Javascript 동향'관련 글들에서 배울 수 있는 점이 참 많았다.
특히, '2020년과 이후 JavaScript의 동향' 편에서 WEBASSEMBLY의 개념이 잘 정리되어있는데, 많은 도움이 되었다. 이후에 찬찬히 읽어보고 좋은 내용들은 따로 리뷰해야겠다.
- [2020년과 이후 Javascript의 동향](https://d2.naver.com/helloworld/4268738)
- [2016년과 이후 Javascript의 동향](https://d2.naver.com/helloworld/3618177)


### Vue.js
ES6 출시이후 여러 프레임워크가 등장하였다. Angular, React등.. 둘다 학습곡선이 약간 있는데(Angular는 약간은 아닌듯 ^^;), vue.js의 경우 배우기가 일단 매우 쉽다! 화면제어를 위해서 많이 사용된다.
vue.js 홈페이지에 들어가면 따라하면서 쉽게 시작해 볼 수 있다.
- [https://vuejs.org/](https://vuejs.org/)
- [한글버전 가이드 : https://kr.vuejs.org/v2/guide/index.html](https://kr.vuejs.org/v2/guide/index.html)


### Typescript
Microsoft에서 개발한 타입스크립트. JS 가 단순한 기능을 넘어서 서버제어의 영역까지 넘어가면서, 정적 타입 언어가 가지는 안정성이 중시되었다. 이 부분을 보완해 줄 수 있는 것이 Typescript의 장점이라고 생각되어진다. 
- [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- [Typescript 나무위키](https://namu.wiki/w/TypeScript)
- ['타입스크립트, 써야할까? - HyunSeob'](https://hyunseob.github.io/2018/08/12/do-you-need-to-use-ts/)
- ['TypeScript 하기 전에 이정도는 알아야지! - dongwon kim' : 타입스크립트의 장점을 잘 설명해 놓은글](https://medium.com/@ehddnjs8989/typescript-%ED%95%98%EA%B8%B0-%EC%A0%84%EC%97%90-%EC%9D%B4%EC%A0%95%EB%8F%84%EB%8A%94-%EC%95%8C%EC%95%84%EC%95%BC%EC%A7%80-5179d8269193)


### 조사하면서 알게된 용어들
- [WEBASSEMBLY](https://webassembly.org/): WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.
- [크로미움](https://ykarma1996.tistory.com/72)
- 브라우저 벤더란? 브라우저 벤더란 브라우저를 만들거나 파는 회사들
- MPA : Multi Page Application(MPA)
- SPA : Single Page Application(SPA)

