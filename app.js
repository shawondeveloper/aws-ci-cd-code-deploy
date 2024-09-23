const express = require('express')

const app = express()

app.use('/',(req, res)=>{
    res.send({message:"Hellow from aws node app"})
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log('Server Started from '+ PORT)
})
