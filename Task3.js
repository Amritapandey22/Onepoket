const fs = require('fs');

const filename = 'data.txt';

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err.message}`);
    return;
  }

  const wordCount = countWords(data);
  console.log(`Total word count: ${wordCount}`);
});

function countWords(text) {
  const words = text.split(/\s+/);
  const nonEmptyWords = words.filter((word) => word !== '');
  return nonEmptyWords.length;
}
