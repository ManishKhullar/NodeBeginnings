
//First way
const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
const todo = await response.json();
console.log(todo);

//Second way using async function
async function* fetchId(){
    const todoIdList = [...1,2,3,4,];
    for (const id of todoIdList){
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const todo = await response.json();
        console.log(todo.title);
    }
}
fetchId();