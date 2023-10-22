
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.sendFile('index.html', {root:'public'});
});


app.use((request,response) => {
  response.json({message: 'Hey! This is the server respnse!'})
})
module.exports=app;