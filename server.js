const path = require('path');
const express = require('express');
const app = express();
const colors = ('colors');
//algo que funciono es poniendo el build
//const publicPath = path.join(__dirname,'public');
const port = process.env.PORT || 5000;

app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res)=> res.sendFile(__dirname + "/build/index.html"));
app.listen(port, () => {
   console.log('Server is Arriba!');
   console.log(__dirname);
});