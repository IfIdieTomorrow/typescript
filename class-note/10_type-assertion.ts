// 타입 단언(type assertion)
let a;
a = 20;
a = 'a'
var b = a as string;

// DOM API 조작
// <div id="app">hi</div>
const div = document.querySelector('div');
if(div) {
    div.innerText = ''
}
