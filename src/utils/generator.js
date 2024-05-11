import run from "./chat.js";
const generator = (size) => {
    return new Array(parseInt(size)).fill("").map(e => (e = Math.floor(Math.random() * 100) + 1))

}
export default generator;
// run("").then((d) => console.log(d)) 