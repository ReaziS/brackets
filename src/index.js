module.exports = function check(str, bracketsConfig) {
 // const check = (str, bracketsConfig) => {
  let expected = [];
  let ret = '';
  let br;
  let brackets = {};
  bracketsConfig.map(_ => {
    brackets[_[0]] = _[1];
  });
  br = str.split('');
  br.map(item => {
    if (brackets[item]) {
      expected.push(brackets[item]);
    } else {
      if (item === expected[expected.length-1]) {
        expected.pop();
      }
    }
  });
  return expected.length == 0 ? true : false; 
}
//console.log(check('|()|', [['(', ')'], ['|', '|']]));
