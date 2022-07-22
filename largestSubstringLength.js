/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let largestSubstring = s[0] || '';
    let subString = '';
    for (i = 0; i < s.length; i++) {
        subString = s[i];
        for (j = i + 1; j < s.length; j++) {
            if (subString.includes(s[j])) {
                break;
            }
            subString = subString.concat(s[j]);
        }
        if (subString.length > largestSubstring.length) {
            largestSubstring = subString;
        }
    }
    return largestSubstring.length;
}