const express = require('express');
const cors = require('cors');
const request = require('request');

const app = express();
app.use(cors());

let apikey = '9526727b2141dd3b9411e19919c50846';
let pass = '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';
let endpoint = 'products';

let udproduct = {
    method: 'PUT',
    url: `https://${apikey}:${pass}@6b8161-1f.myshopify.com/admin/api/2024-04/${endpoint}.json`,
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "product": {
            "title": "test new data update",
            "body_html": "<p> We are testing new data and here we running update query <p>",
            "product_type":"test",
            "variants": [
                {

                    "price": "300.00",
                    "sku": null,
                    "position": 1,
                    "inventory_policy": "deny",

                    "grams": 0,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_quantity": 100,
                    "old_inventory_quantity": 1,
                
                }
            ]
        }
    })
};

app.get("/update", (req, resp) => {
    request(udproduct, function(error, response) {
        if (error) throw Error(error); // if error occurred
        resp.send(response.body); // send response to the browser
    });
});

const port = 3200; // Changed from 'port' to '3100'
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
