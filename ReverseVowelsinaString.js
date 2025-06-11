/*
Input:  "leetcode"
Vowels:  e, e, o, e
Reversed: e, o, e, e → Output: "leotcede"

two-pointer approach to solve this efficiently:
- One pointer starts at the beginning (left), the other at the end (right).
- move both pointers inward until we find vowels.
- Then we swap the vowels and continue.


leetcode
*/

let reverservow = function(s){
    let left = 0;
    let right = s.length - 1;
    let chars = s.split('');
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);

    while(left < right){

        while(left < right && !vowels.has(chars[left])) left++;
        while(left < right && !vowels.has(chars[right])) right--;

        let temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;

        left++;
        right--;
    }
    return chars.join('');
}
console.log(reverservow('hello'));