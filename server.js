const express = require('express')
const request = require('request')
const port = 5550
const app = express()

app.use(express.static('public'))
app.use(express.json()); 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

request.get('/', {
  url: 'https://api.api-ninjas.com/v1/randomword',
  headers: {
    'X-Api-Key': 'N+/gymp2ogPLVQ3YHFwWUQ==Sl26jzvucXrCcG5e'
  },

}, function(error, response, body) {
    if(error) {
        return console.error('Request failed:', error);
    }

    else if(response.statusCode != 200) {
        return console.error('Error:', response.statusCode, body.toString('utf8'));
    }
    
    else console.log(body)
});