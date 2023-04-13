const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const path = require('path');

app.use(cors());
app.use(express.json());

app.get

// app.get('/message', (req, res) => {
//     res.json({ message: 'Hello World!' });
// });

// app.get('/submission/:data', (req, res) => {
//     const unirest = require('unirest');
    
//     const BASE_URL = ""http://[::1]:8000" +"/api/HttpTrigger";
//       // post data to api
//     const request = unirest('POST', BASE_URL);

//     request.headers({
//         'Content-Type': 'application/json'
//     });

//     const body = {
//         url: req.params.data
//     };

//     request.send(body);

//     request.end(function (response) {
//         if (response.error) throw new Error(response.error);

//         console.log("inserted " + data);
//     });
// });

app.use(express.static(path.join(__dirname,"client", 'build')));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port} .`);
});