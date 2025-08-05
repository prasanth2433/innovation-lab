
function reverseWordsInSentence(sentence) {
  return sentence
    .split(' ')          
    .map(word => word.split('').reverse().join('')) 
    .join(' ');          
}


function removeDuplicates(arr) {
  return [...new Set(arr)]; 
}

// Function to count vowels in a string
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}

// Reverse words in a sentence
const sentence = "Hello world! Welcome to Java Script.";
const reversedSentence = reverseWordsInSentence(sentence);
console.log("Reversed Sentence: ", reversedSentence);

// Remove duplicates from an array
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);
console.log("Array with Duplicates Removed: ", uniqueArray);

// Count vowels in a string
const string = "Hello World, Welcome to HTML !";
const vowelCount = countVowels(string);
console.log("Vowel Count: ", vowelCount);
