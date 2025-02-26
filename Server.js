const express = require('express');  
const app = express();  
const port = 3000;  

app.get('/', (req, res) => {  
  res.send('Bimo’s backend is live!');  
});  

app.listen(port, () => {  
  console.log(`Bimo server is running on port ${port}`);  
});
