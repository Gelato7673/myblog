// 전체처리
var all_count = document.getElementsByClassName('count');
var all_list = document.getElementsByClassName('list');

function all_hidden(elt1, elt2) {
  for (var i=1, len=elt1.length; i<len; i=i+1) {
    elt1[i].setAttribute("style", "display:none");
  }
  for (var i=1, len=elt2.length; i<len; i=i+1) {
    elt2[i].setAttribute("style", "display:none");
  }
}

all_hidden(all_list, all_count);

// 페이지 네이션
var count = 1;

var right = document.getElementById('right-bar');
var left = document.getElementById('left-bar');
var total = document.getElementsByClassName('total')[0].innerHTML;

function Fright() {
  if(count == total) {
    return 0;
  }
  else {
    let i = count-1;
    all_count[i].setAttribute("style", "display:none");
    all_count[i+1].setAttribute("style", "display:block");
    all_list[i].setAttribute("style", "display:none");
    all_list[i+1].setAttribute("style", "display:block");
    return count = count + 1;
  }
}

function Fleft() {
  if(count == 1) {
    return 0;
  }
  else {
    let i = count-1;
    all_count[i].setAttribute("style", "display:none");
    all_count[i-1].setAttribute("style", "display:block");
    all_list[i].setAttribute("style", "display:none");
    all_list[i-1].setAttribute("style", "display:block");
    count = count - 1;
  }
}

right.addEventListener("click", Fright);
left.addEventListener("click", Fleft);


