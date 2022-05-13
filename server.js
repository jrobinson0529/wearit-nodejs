import express from 'express';
import getUsers from './queries.js';

const app = express();
const port = 3080;

app.get('/', (req, res) => {
  res.json({ info: "Node js server running"})
});
app.get('/users', getUsers);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
