/*Merge Strings Alternately
Example:
word1 = 'pqr';
word2 = 'abc';
Output = 'paqbrc';
*/

let mergedalternateString = function(word1,word2){
     let i=0;
     let j=0;
     let finalString = '';

     while(i<word1.length || j<word2.length){
        if(i<word1.length) finalString += word1[i++];
        if(j<word2.length) finalString += word2[j++]
     }
     return finalString;
}
console.log(mergedalternateString('pqr','abc'));