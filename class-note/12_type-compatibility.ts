// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

// interface Person {
//     name: string;
// }
class Person {
    name: string;
    skill: string;
}

let developer: Developer;
let person: Person;
developer = new Person();
// developer = person;
person = developer;

// 함수
let add = (a:number) => {
    // ....
    console.log(a);
}

let sum = (a: number, b: number) =>{ 
    // ....
}

sum = add;
// add = sum;

// 제네릭
interface Empty<T> {

}

// Empty 인터페이스가 비어있기 때문에 제네릭으로 어떤 타입을 받아도 호환이 된다.
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T
}

let notEmpty1: NotEmpty<string>;
let NotEmpty2: NotEmpty<number>;
// notEmpty1 = NotEmpty2;
// NotEmpty2 = notEmpty1;
