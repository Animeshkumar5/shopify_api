const express = require('express');
const request = require('request');

let apikey = '9526727b2141dd3b9411e19919c50846';
let pass = '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';
let endpoint = 'products';
let product_id = '7324780560435';

let deleteproduct = {
    method: 'DELETE',
    url: `https://${apikey}:${pass}@6b8161-1f.myshopify.com/admin/api/2024-04/${endpoint}.json`,
    headers: {
        'Content-Type': 'application/json'
    },
};

app.get("/delete", (req, resp) => {
    request(deleteproduct, function(error, response) {
        if (error) throw Error(error); // if error occurred
        resp.send(response.body); // send response to the browser
    });
});

const port = 3200; // Changed from 'port' to '3100'
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});