const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../../dist/bundle'))
);

// Catch all handler
app.use((req, res) => res.sendStatus(404));
