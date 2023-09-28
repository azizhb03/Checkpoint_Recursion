function isPalindrome(word) {
    // Remove non-alphanumeric characters and convert to lowercase
    word = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the word
    const reversedWord = word.split('').reverse().join('');
    
    // Check if the original word is the same as the reversed word
    return word === reversedWord;
  }
  
  // Example usage:
  const testWord1 = "gag";
  const testWord2 = "kayak";
  const testWord3 = "php";
  const testWord4 = "radar";
  
  
  console.log(isPalindrome(testWord1)); // true
  console.log(isPalindrome(testWord2)); // true
  console.log(isPalindrome(testWord3)); // true
  console.log(isPalindrome(testWord4)); // true