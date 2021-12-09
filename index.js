const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// if port environment variable doesnt exist, use 9000
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json())
app.use("/api/", (req, res) => {
  res.json({
    data: "API Data Served!"
  })
  
})

app.listen(port, () => {
  console.log(`Server is on port: ${port}`)
})


// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USER); // environment variables, USER on mac
// console.log(process.env.APIKEY)
// console.log(process.env.PORT)
// console.log(process.env.DBPASS)