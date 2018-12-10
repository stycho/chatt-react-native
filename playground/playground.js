const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(({ data }) => {
    
    console.log(data.title);
    })
    .catch(err => {
        console.log(err);
    })