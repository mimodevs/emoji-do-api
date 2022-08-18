const express = require('express')
var cors = require('cors')

const app = express();
// crud === create, read, update, delete,
//           post,   get,  put,   delete,
app.use(express.json()) // for parsing application/json
app.use(cors());


const PORT = 8080;


 const data = [
    {title:"workout",id:"dd785646-6120-48dc-9f8c-9c7f86d0f2c6",emoji:"🍉"},
    {title:"meal prep ",id:"3a81949a-855c-4167-b00b-8986b5097119",emoji:"🥷"},
    {title:"zoom class",id:"93c7d58a-a9d3-49cb-9d53-bb370da62629",emoji:"🍉"},
    {title:"zoom class",id:"93c7d58a-a9d3-49cb-9d53-bb370da62610",emoji:"🦩"},

 ]

   

    app.get('/emoji-tasks', (request, response) => {
        response.json(data)
    })

    app.post('/add', (request, response) => {
     data.push(request.body) 
     console.log(request.body)
     response.json(data) 
    })

    app.listen(PORT, () => console.log(`listening on port ${PORT} for your requests`));