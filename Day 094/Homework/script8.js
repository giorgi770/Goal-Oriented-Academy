const words = ['apple', 'banana', 'Strawberry', 'orange'];
const wordCount = {};
words.forEach(word => {
  wordCount[word] = (wordCount[word] || 0) + 1;
});
console.log(wordCount);