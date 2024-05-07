const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin : " http://127.0.0.1:5500",
    Credential : true
}));

app.get('/', (req, res) => {
    const jsonData = new Array();
    jsonData.push({"name":"Yoonseo"});
    jsonData.push({"name":"YooNsEo"});
    jsonData.push({"name":"yoOnSeo"});
    res.send(jsonData);
});

app.post('/', (req, res) => {
    const jsonData = new Array();
    jsonData.push({"phone":"samsung"});
    jsonData.push({"name":"iphone"});
    res.send(jsonData);
});

app.listen(3003);