// const express = require("express");
// const app = express();
// const PORT = 8080;       

// app.use(express.json());
// //Middleware that every request that comes in will go through this 
// //express json middleaer which will convert it to json allowing our
// //callbacks to read the information

// app.listen(PORT, ()=> console.log(`running on: ${PORT}`))

// app.get('/magic', (req, res) => {
//     res.status(200).send({
//         tag: "it's magic baby!"
//     })
// })

// app.post('/magic/:id', (req, res) =>{
//     const {id} =req.params;
//     const {emoji} = req.body;

//     if(!emoji){
//         res.status(418).send({message: 'An Emoji is required.'})
//     }
//     res.send({
//         emoji:`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ yay! ${emoji} is ID ${id}`,
//     })
// })