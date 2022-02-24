module.exports = function check(str, bracketsConfig) {
  str = str.split('');
  const stack = [];
  const bracketsObjCheck = {};
  bracketsConfig.forEach((e) => {
    bracketsObjCheck[e[1]] = e[0];
  });
  for (let i = 0; i < str.length; i++) {
    if (stack.length === 0) {
      stack.push(str[i]);
    } else if (stack[stack.length - 1] === bracketsObjCheck[str[i]]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.length ? false : true;
};
