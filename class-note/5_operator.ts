// function logMessage(value: any): void {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);

// 하나의 타입 이상을 사용할 수 있게 해주는 Union Type
let seho: string | number | boolean;
function logMessage(value: string | number | boolean) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value musst be string or number');
}
logMessage('hello');
logMessage(100);
logMessage(true);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// function askSomeone(someone: Developer | Person) {
//     // someone.name;
//     // someone.skill
//     // someone.age
// }

// askSomeone({ name: 'Developer', skill: '웹개발' });
// askSomeone({ name: 'Person', age: 100 });

function askSomeone(someone: Developer & Person) {
    someone.name;
    someone.skill
    someone.age
}

// askSomeone({ name: 'Developer', skill: '웹개발' });
// askSomeone({ name: 'Person', age: 100 });

// let sehoon: string | number | boolean;
