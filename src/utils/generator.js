const generator = (size) => {
    return new Array(parseInt(size)).fill("").map(e => (e = Math.floor(Math.random() * 100) + 1))

}
export default generator;