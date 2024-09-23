const express = require("express");

const app = express();

app.use('/',(req, res) => {
    res.status(200).json({message:"Hello from CICD aws github"})
})

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Stated at ${PORT}`);
});
