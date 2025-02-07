import express,{json} from require("express");

const app= express();
const PORT= 5000

//midleware
app.use(json);


app.get("/",(req,res)=>{
    res.send(`Server Online `)
});



app.listen(PORT,()=>{
    console.log(`server in ascolto su http://localhost/${PORT}`);
    
})

