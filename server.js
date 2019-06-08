const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/dist/test-for-ebitware'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/test-for-ebitware/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}...`)
});
