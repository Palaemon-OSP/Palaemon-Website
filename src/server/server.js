const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// statically serve everything in the dist forler on the route /dist
app.use(express.static(path.resolve(__dirname, '../../dist')));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// use react router browser routing for all routing requests
app.get('*', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../../dist/index.html'))
);

// Catch all handler
app.use((req, res) => res.sendStatus(404));
