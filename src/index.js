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
    console.log(item);
    if (brackets[item]) {
      if ((brackets[item] == '|' && expected[expected.length-1] == '|') || (brackets[item] == '7' && expected[expected.length-1] == '7') ||(brackets[item] == '8' && expected[expected.length-1] == '8'))  {
        expected.pop();
      } else {
        expected.push(brackets[item]);

      }
      
    } else {
        if (expected.length == 0) {
          expected.push('null');
        } 
        if (item === expected[expected.length-1]) {
          expected.pop();
      }
    }
  });
  return expected.length == 0 ? true : false; 
}
//console.log(check(')()',[['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]));
