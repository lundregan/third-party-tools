require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const tools = require('./routes/api/tools')
const games = require('./routes/api/games')

app.use('/api/tools', tools)
app.use('/api/games', games)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})