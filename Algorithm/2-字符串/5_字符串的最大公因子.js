//  利用最大公因数求解
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) return ''
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    return str1.substring(0, gcd(str1.length, str2.length))
};