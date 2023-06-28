// Write your code below (Sets and Conditions)
/*Given a word, return true if that word contains only unique characters. Return false otherwise.

For example:

hasUniqueChars("Monday")
// returns true
hasUniqueChars("Moonday")
// returns false
Uppercase and lowercase letters should be considered separately:

hasUniqueChars("Bob")
// returns true*/

function uniqueValues(word){
    let uniqueChars = new Set();
    for(let i = 0; i < word.length; i++) {
    if(uniqueChars.has(word[i])) {
        return false
    }
    uniqueChars.add(word[i]);
}
 return true;
}

console.log(uniqueValues('Monday'));
console.log(uniqueValues('Moonday'));