const express = require('express');
const dotenv = require('dotenv');
const connectDb = require("./config/ConnectDb");

connectDb();

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/api/data", (req , res)=> {
    res.json("Salut")
})


app.listen(port, () => {
  console.log('Server is running on port ' + port);
});

