/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const stack = []
    const paths = path.split('/')
    for (let i = 0; i < paths.length; i++) {
        if (paths[i] === "..") {
            stack.pop()
        } else if (paths[i] && paths[i] !== ".") {
            stack.push(paths[i])
        }
    }
    return "/" + stack.join('/')
};