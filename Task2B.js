const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse request bodies as JSON
app.use(bodyParser.json());

// POST API endpoint for calculating the sum
app.post('/sum', (req, res) => {
  try {
    const inputData = req.body;

    if (!inputData.numbers) {
      throw new Error('Input must contain a "numbers" property.');
    }

    const numbersArray = JSON.parse(inputData.numbers);

    if (!Array.isArray(numbersArray)) {
      throw new Error('Invalid input format. "numbers" must be an array.');
    }

    if (numbersArray.length === 0) {
      return res.status(200).json({ result: 0 });
    }

    const sum = numbersArray.reduce((acc, current) => acc + current, 0);
    return res.status(200).json({ result: sum });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
