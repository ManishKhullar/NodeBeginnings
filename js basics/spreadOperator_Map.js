const a = [7,2,5];
const b = [4,9,1];

const c = [...a,...b].map(num =>{return num % 2 === 0 ? num * 2 : num * 3;});