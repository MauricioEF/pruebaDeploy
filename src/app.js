import express from 'express';

const app = express();

app.listen(8080,()=>console.log(`Listening on PORT 8080`))

app.get('/',(req,res)=>{
    res.send({status:"success",message:"listo"})
})