// function fetchItems(): string[] {
//     var items = ['a','b','c'];
//     return items;
// }
var result = fetchItems();
result.then(response => {
    console.log(response);
})

function fetchItems(): Promise<string[]> {
    let items = ['a','b','c'];
    return new Promise((resolve, reject) => {
        resolve(items);
    })
}


