// 타입 추론 기본 1
let a = 'abc';

function getB(b = 10) {
    let c = 'hi';
    return b + c;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T
//     title: string;
// }

// let shoppingItem: Dropdown<string> = {
//     value: '쇼핑',
//     title: '제목'
// }

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

let detailedItem: DetailedDropdown<string> = {
    value: '값',
    title: '제목',
    description: '내용',
    tag: '내용'
}

// Best Common Type
let arr = [1,2,true,'a'];
