const express = require ('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.post('/register', (req,res) => {

res.json('test ok2'); // send a json response

});
 app.listen(4000) // start the server on port 4000