module.exports = function check(str, bracketsConfig) {
  let stack = [];
  if (str.length % 2) {
    return false
  }
  let openBr = bracketsConfig.map(el => el[0]);
  console.log(openBr);
  let closeBr = bracketsConfig.map(el => el[1]);
  console.log(closeBr);
  for (let i = 0; i < str.length; i++) {
    if (openBr.includes(str[i])) {
      stack.push(str[i])
    }
    if (closeBr.indexOf(str[i]) === openBr.indexOf(stack[stack.length - 1])) {
      stack.pop(str[i])
    }
    if (openBr.includes(str[i]) && closeBr.includes(str[i])) {
      if (stack[stack.length - 1] === str[i]) {
        stack.pop();
      }
      else {
        stack.push(str[i]);
      }
  }
}
  return stack.length === 0;
}
