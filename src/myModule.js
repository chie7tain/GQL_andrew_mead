const message = "some message from myModule.js";
const name = "Ifeanyi";
const location = "Lagos";

const welcome = (name) => `welcome ${name}`;
console.log(name);
export { message, name,welcome, location as default };
