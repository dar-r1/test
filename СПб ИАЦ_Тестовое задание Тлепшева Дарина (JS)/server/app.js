const path = require('path');
require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT ?? 4000;

const serverConfig = require('./config/serverConfig');

const authRouter = require('./routes/api/auth.routes');
const bookRouter = require('./routes/api/books.routes');

serverConfig(app);

app.use('/api/auth', authRouter);
app.use('/api', bookRouter);

try {
  app.listen(PORT, () => {
    console.log(`*** Server started at ${PORT} port ***`);
  });
} catch (error) {
  console.log(error.message);
}
