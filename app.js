const express = require('express')
var cors = require('cors')

// crud === create, read, update, delete,
//           post,   get,  put,   delete,
const app = express();

 const data = [
    {title:"task 1 ",id:"dd785646-6120-48dc-9f8c-9c7f86d0f2c6",emoji:"🍉"},
    {title:"find the ninja within ",id:"3a81949a-855c-4167-b00b-8986b5097119",emoji:"🥷"},
    {title:"task 3",id:"93c7d58a-a9d3-49cb-9d53-bb370da62629",emoji:"🍉"}
]

    app.use(cors());

    app.get('/emoji-tasks', (req, res) => {
    res.json(data)
    })

    app.listen(8080);