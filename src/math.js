const add = (...vals)=> vals.reduce((acc,curr)=> acc + curr, 0);

const subtract = (a,b) => a - b;

export {add as default, subtract}