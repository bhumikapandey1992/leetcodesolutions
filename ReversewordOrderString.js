/* Reversing words in a sentence
Example 1:
Input : 'the sky is blue'
Output: 'blue is sky the'

Example 2:
Input : '   the   sky   is blue  '
Output: 'blue is sky the'

Steps:
- trim the sentence to remove leading/trailing spaces.
- split it using a regex to clean up extra spaces.
- reverse the array of words.
- join them back into a sentence.

/\s+/ explanation:
\s means 'any whitespace character' — including spaces, tabs, etc.
+ means 'one or more'
this means : So /\s+/ matches any sequence of one or more spaces. 
This means even if there are multiple spaces between words, 
it will treat them as one separator.
*/

let reversedString = function(s){

    let revString = s.trim().split(/\s+/).reverse().join(' ');

    return revString;
}
console.log(reversedString('the sky is blue'))