import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;

const currentDir = process.cwd();

app.use(express.static(currentDir + '/'));

app.get('/', (req, res) => {
  res.sendFile(currentDir + '/index.ejs');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});