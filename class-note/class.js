function Human(name, age) {
    this.name = name;
    this.age = age;
    console.log('생성 되었습니다.')
}

const capt = new Human('캡틴', 100);
console.log(capt);

// ES2015 (ES6)
class Person {
    // 클래스 로직
    constructor(name, age) { // 생성자
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

const seho = new Person('세호', 30);
console.log(seho)