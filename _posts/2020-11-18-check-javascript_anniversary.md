---
layout: blog_page
menu: side
big_group: Daily Programming
small_group: SideProject/ToyProject
background: map.jpg
title: <b>[side project]</b> Javascript - 기념일 계산기 만들기
date_start: 2020-11-12
date_end: 2020-11-13
tags: javascript
comments: true
---
### 기념일 계산기 만들기!

#### 서론
지난번에 Do it 과 Javascript 강의를 들으면서, 공부했던 실습 부분들을 스스로 만들어 보면서, 복습하는 시간들을 가지려고 한다.  
첫번째 실습은 Javascript로 간단한 기념일 계산기 만들기 프로그램 이었다.  
원래 css와 html 파일은 doit 책의 실습 파일에서 제공되지만, 뭔가 좀더 눈에 확 띄게 만들고 싶다는 욕심이 들어서 ㅎㅎ 직접 css와 html 을 만들기로 했다. (세삼 html과 css의 코드량이 일반 programming language보다 많다는 생각을 하게 되었다.. Javascript 실습하는데 css랑 html 코딩길이역시 만만치 않다 ㅎㅎ)

#### 제작순서
1. 핑크색 계산기를 상상하면서 html과 css를 사용해서 디자인을 만들어 보자.
2. 자바스크립트를 이용해서 프로그램을 만들어 본다.     
1) 기본적으로 오늘날짜가 메인창에 떠있도록 만든다.    
2) '처음만난날'을 입력하고 버튼을 입력하면, 값을 가지고 있게 한다.    
3) 각 버튼을 누를때 버튼에 해당되는 계산을 '처음만난날'을 기준으로 해서 창에 뜨게한다.  

#### 공부한 내용들
이번 실습을 통해서 공부한 내용들은 다음과 같다.  
1. 객체를 많이 사용해보았다. 
2. date()관련 함수들을 많이 사용해보았다.
3. eventlistener로 이벤트를 연결했다. (오답노트)

#### 오답노트

1. addEvneListener
기념일을 계산해주는 calc함수를 추가해보자. 처음에 이렇게 추가했다.  

~~~javascript
//500일 기념일 계산
let calcDate = () => {

    let annivSeconds = firstmeet() + 500*(1000*60*60*24);
    let annivDate = new Date(annivSeconds);
    let anniv = {
        year: annivDate.getFullYear(),
        month: annivDate.getMonth() + 1,
        date: annivDate.getDate()
    }
    document.querySelector(".show-date").innerHTML = `500일은 ${anniv.year}년 ${anniv.month}월 ${anniv.date}일`;
}

//500일
let fiveHundred = document.querySelector("#first-year");
fiveHundred.addEventListener("click", calcDate);
~~~
  
여기까지는 잘되었다.   
그런데, 만약 이런식으로 함수를 생성하고 추가하면, 나는 calcDate 함수를 2개 더 만들어야 했다.    
그래서, 머리를 좀 써야겠다고 생각하고 다음과 같이 수정했다.  

~~~javascript
//500일 기념일 계산
let calcDate = (days) => {

    let annivSeconds = firstmeet() + days*(1000*60*60*24);
    let annivDate = new Date(annivSeconds);
    let anniv = {
        year: annivDate.getFullYear(),
        month: annivDate.getMonth() + 1,
        date: annivDate.getDate()
    }
    document.querySelector(".show-date").innerHTML = `500일은 ${anniv.year}년 ${anniv.month}월 ${anniv.date}일`;
}

//500일
let fiveHundred = document.querySelector("#first-year");
fiveHundred.addEventListener("click", calcDate(500));
~~~

비웃지 않아주시길 ㅋㅋ 어쨌든 함수는 동작이 안되었다.   
왜 안되었을까? 왜 addEventListner에 추가하는 함수는 인자를 받을 수 없는걸까.  
그이유는 이 함수는 자동으로 event를 인자로 가지는 함수이기 때문이었다.   
그럼.. 함수를 두개 더 만들어야 하나.. 라는 생각을 하다가, 남들은 어떻게 처리하나 구경 다니기로 했다.  
그러다가 찾은 영상 하나. [(생활코딩-addEvnetListener방식)](https://www.youtube.com/watch?v=ncv3UwUarUc)
![생활코딩캡쳐]({{site.baseurl}}/assets/conts_img/20201119_001358.png)
  
으흠~ switch를 이용해 봐야겠다. 그리하여 이렇게 수정되었다.  

~~~javascript
let calcDate = (event) => {
    let days;
    let c;
    switch(event.Target.id) {
        case 'days500':
            days = 500;
            c = '500일';
            break;
        case 'days100':
            days = 100;
            c = '100일';
            break;
        case 'year1':
            days = 365;
            c = '1년';
            break;
    }
    
    let annivSeconds = firstmeet() + days*(1000*60*60*24);
    let annivDate = new Date(annivSeconds);
    let anniv = {
        year: annivDate.getFullYear(),
        month: annivDate.getMonth() + 1,
        date: annivDate.getDate()
    }
    document.querySelector(".show-date").innerHTML = `${c}은 ${anniv.year}년 ${anniv.month}월 ${anniv.date}일`;
}

let fiveHundred = document.querySelector("#first-year");
fiveHundred.addEventListener("click", calcDate);
~~~

응.. 근데 또 안돼. 왜 안되니이..^^    
정확히 어떻게 안되었냐 하면, 함수에서 console.log(event.target.id);를 입력했을때, <li>(이벤트가 활성화되고 있는 area)의  id가 나오길 기대했는데,  emptystring 이라는 글이 콘솔에 뜨고 있었다.   
음.. id를 못 잡아내는거네? 그래서, 몇가지 실험에 들어갔다. (이건 html 부분이랑 함께봐야해서 함께 써놓겠다.)  
   
~~~html
<ul class="button-group">
    <li id="today">
        <p>오늘 몇일째?</p>
        <p><i class="far fa-heart"></i></p>
    </li>
    <li id="days500" class="unique">
        <p>500일</p>
        <p><i class="far fa-heart"></i></p>
    </li>
    <li id="days100" class="unique">
        <p>100일</p>
        <p><i class="far fa-heart"></i></p>
    </li>
    <li id="year1" class="unique">
        <p>1년</p>
        <p><i class="far fa-heart"></i></p>
    </li>
</ul>
~~~
~~~javascript
let calcDate = (event) => {
	console.log(event.target.id); //console -> emptystring 이 뜬다.
	event.target.style.visibility = "hidden" //li전체가 사라지지 않고, li안에 첫번째p만 스타일이 사라진다.
}

let fiveHundred = document.querySelector("#first-year");
fiveHundred.addEventListener("click", calcDate);
~~~
  
 event.target.style.visibility = "hidden" 구문에서 첫번째 p만 안보이게 된다는 거슨?!  
 target이 가리키고 있는것이 첫번째 p라는건데?? 조금 옮겨서 클릭을 해보니까 조금씩 달라지는 콘솔..  
 아하. 그렇다면, 지금 이벤트가 일어나는 area를 가리키고 있는게 아니라, 내가 클릭하고 있는 그 포인트를 target하고 있구나.  
 이벤트가 일어나는 area자체를 타겟팅 해야하는데?!  
 Mozila 문서를 뒤져보자. 뒤적뒤적..  
[Mozilla event target](https://developer.mozilla.org/en-US/docs/Web/API/Event/Comparison_of_Event_Targets)  


그리하여 최종완성..  

~~~javascript
//날짜별 기념일
let calcDate = (event) => {
    let days;
    let c;
    switch(event.currentTarget.id) {
        case 'days500':
            days = 500;
            c = '500일';
            break;
        case 'days100':
            days = 100;
            c = '100일';
            break;
        case 'year1':
            days = 365;
            c = '1년';
            break;
    }
    
    let annivSeconds = firstmeet() + days*(1000*60*60*24);
    let annivDate = new Date(annivSeconds);
    let anniv = {
        year: annivDate.getFullYear(),
        month: annivDate.getMonth() + 1,
        date: annivDate.getDate()
    }
    document.querySelector(".show-date").innerHTML = `${c}은 ${anniv.year}년 ${anniv.month}월 ${anniv.date}일`;
}

//날짜별 함수
let unique = document.querySelectorAll(".unique");
unique.forEach(element => {
    element.addEventListener("click", calcDate);
});
~~~

앞에서 진행해 온 내용과 추가로 조금 달라진 부분이  있다면, 이 함수를 여러 번 추가해야해서, queyrSelectorAll(클래스네임)으로 해서 배열로 만든 후에 forEach를 만든후에 추가했다는 점 정도가 있겠다.   

  
** 이 문제를 해결하면서, 해결포인트를 바로 target으로 접근하지 못하고 처음에 event bubbling에러가 아닐까? 하고 생각한 지점이 있었는데, 이는 내가 event bubbling을 제대로 이해하지 못하고 있었어서 생긴 문제점 이었던 것 같다.  
그래서, 이번엔 그냥 글을 읽어보고 끝나지 않고, 하나씩 실습해 보면서 이해해보았고, 마무리로 글로쓰면서 한번더 기억해 보려고 한다.  
일단, 이벤트 버블링이 생각보다 자연스러운 현상인 것이, DOM은 tree구조로 되어있고, 따라서 클릭지점은 어떤 지점에 속한 지점일 수밖에 없다.  
아까 내가 클릭했던 <p>가 <li>에 속해 있는 것처럼 말이다.  
이때, 만약 p와 li에 모두 이벤트가 걸려있다면, p를 클릭한다고 해도 p의 이벤트만 발현되는 것이 아니라 li의 이벤트도 (p는 li에 속해있으니까!) 발현되는 것이 event bubbling 이다. 반대로, li를 클릭했을때 p의 이벤트까지 발현되는 것이 capturing인 것이다.   
이걸 막기 위해서 쓸 수 있는 코드로는 아래 함수가 있다. 그러나, 무조건 막을 생각을 하기보다는 어떻게 하면 잘 이용할지에 관한 지혜가 필요하다.
~~~javascript
function logEvent(event) {
	event.stopPropagation();
}
~~~

유용한 사진으로 답글을 달아놓은 [stackoverflow](https://stackoverflow.com/questions/7398290/unable-to-understand-usecapture-parameter-in-addeventlistener) 를 링크하며 오답노트를 마치려 한다. 


#### 더공부하고 싶은 내용
이번에 만들면서 찾아보게 된 youtube영상들이 있는데, 자바스크립트를 더 공부하고 싶은 마음도 있어서 언젠가 다시 보게 되지 않을까.. 하고 링크를 남겨둔다.
- [드림코딩 by 엘리 - Javascript콜백](https://www.youtube.com/watch?v=s1vpVCrT8f4&t=350s)
- [생활코딩](https://www.youtube.com/watch?v=zGBkPTwydeg)
- 으흠, 다음번에는 javascript 의 this속성을 좀 잘 써보고 싶다. 


#### 참고사항
- [이번실습 코드가 담겨져 있는 git repository 바로가기](https://github.com/Gelato7673/js-anniv.calculator.git)
- 본실습은 visual studio Code를 사용하고, doit 책을 참고하여 진행하였습니다.

