let count = 0;
var total;
const str = prompt('Enter a string: ');
var givenChar = prompt('Enter letter to check: ');
for (const i = 0; i<=str.len; i++){
    count = count++;
    total = str.matchAll(givenChar);
}
console.alert(`Occurence of ${givenChar} is ${total} `);