---
layout: blog_page
menu: etc_note
big_group: Daily Programming
small_group: etc.오답노트
background: map.jpg
title:  "todoList만들기 에서, 지우는 이벤트를 추가하기"
date_start: 2020-11-23
date_end: 2020-11-23
tags: todoList
---
### 오답노트
** 무언가를 코딩으로 만들다가 잘 안될때 먼저 생각해봐야 할 내용들.  
1. 일단. 오타가 없는지 살펴라
2. 뭐가 잘못되었는지 찾는 것이 먼저, 제대로 원인을 파악하고, 해결방법을 생각할것.(물론 얻어걸릴때도있지만.)  
=> 이부분이 잘 안될때에는, 글로 써가면서 추론해 나가는것도 좋은 생각이다.
3. 빠르게 체크하면서 넘어가야 한다. 같은걸 두번 시도하고 있지 말아라.
4. 뭔가 잘 안될때는 기술문서를 꼼꼼히 잘 읽어라. 기능은 모두 설명되어있다.
5. 문제를 한정해서 생각해라, 다른 문제로 새지 마라.  


### 문제
** 책을 보면서 to-do list 내용을 실습해 보고 있었다.   
to-do list textform에 내용을 입력하고, 입력 버튼을 누르면 아래와 같은 매커니즘으로, 내용옆에 삭제 버튼이 달려서 추가가 되는 페이지 였다.


수정한 내용은 다음과 같았다.
~~~javascript
function newRegister() {
    let newP = document.createElement('p');
    let userName = document.querySelector('#userName');
    let newText= document.createTextNode(userName.value)
    newP.appendChild(newText);

    //del추가
    let delBtn = document.createElement('span');
    let delText = document.createTextNode('X');
    delBtn.setAttribute('class', 'del');
    delBtn.appendChild(delText);
    newP.appendChild(delBtn);

    let nameList = document.querySelector('#nameList');
    nameList.appendChild(newP);

    userName.value ='';

    var removeBtns = document.querySelectorAll(".del");
    function removeF() {
        if(this.parentNode.parentNode)
            this.parentNode.parentNode.removeChild(this.parentNode);
    }

    for (var i=0; i<removeBtns.length; i++) {
        if(removeBtns.length > 1) {
            for(var j=0; j<(removeBtns.length-1); j++) {
                removeBtns[j].removeEventListener('click', removeF);
            }
        }
        removeBtns[i].addEventListener('click', removeF);
    }
    
}
~~~
for문 위의 내용까지는 책의 내용과 거의 같다고 볼 수 있다. 
내가 수정하게된 내용들은 for문으로 해서 addEventListener했던 내용을 지우는 구문인데,
addEvnetListener가 매번 새롭게 추가되는 과정에서, 이전에 입력되어있던 내용들은 event가 반복적으로 추가되는 현상을 콘솔을 통해 발견하고 수정했던 부분이었다.  

마지막으로, appendchild에 관해서 찾아본 Mozila문서를 링크 걸어놓으려고 한다. 
- [appendchild](https://developer.mozilla.org/ko/docs/Web/API/Node/appendChild)