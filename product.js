const express = require('express');
const cors = require('cors');
const request = require('request');

const app = express();
app.use(cors());

let apikey = '9526727b2141dd3b9411e19919c50846';
let pass = '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';
let endpoint = 'products';

let option = {
    method: 'GET',
    url: `https://${apikey}:${pass}@6b8161-1f.myshopify.com/admin/api/2024-04/${endpoint}.json`,
    headers: {
        'Content-Type': 'application/json'
    }
};

app.get("/", (req,resp)=>{

    request(option, function(error,response){
    if (error)throw Error(error);// if error came
     resp. send (response.body);//send to browser in the running port
    });
     });

app.listen(3000, () => {
    console.log(`Server started on port ${port}`);
});


