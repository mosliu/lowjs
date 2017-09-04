// 判断是否为数字
/**
 * Check if the input value is a number.
 * 
 * 
 * @param {any} s 
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 * 
 * IsNum(3)
 * // => true
 * 
 * IsNum('3')
 * // => true
 * 
 * IsNum('0x3')
 * // => true
 * 
 * IsNum('3a')
 * // => false
 * 
 * IsNum('0x3a')
 * // => true
 * 
 * IsNum('')
 * // => false
 * 
 * IsNum('Infinity')
 * // => true
 * 
 * IsNum(Infinity)
 * // => true
 * 
 * IsNum('NaN')
 * // => false
 * 
 * IsNum(NaN)
 * // => false
 */
function IsNum(s) {
  if (s != null && s !== '') {
    return !isNaN(s);
  }
  return false;
}

const a = IsNum('3a');
console.log(a);
console.log(parseInt('0010', 36));
