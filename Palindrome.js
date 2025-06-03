/*
Palindrome: 
A palindrome is a string or number that reads the same forward and backward.
For example:

121 → is a palindrome

123 → is NOT a palindrome

'mam', 'racecar', and even 'a' → all are palindromes
So the idea is: it mirrors around the center."

ex : s = racecar
 Index:    0  1  2  3  4  5  6
 String:   r  a  c  e  c  a  r
           ^                 ^
        left               right
*/
let isPalindrome = function(s){
    let str = s.toString();
    if(str < 0) return false;
    let left = 0;
    let right = str.length - 1;
    while(left < right){
        if(str[left] != str[right]){
            return false;
        }
        left ++;
        right --;
    }
    return true;
}
console.log(isPalindrome(-121));