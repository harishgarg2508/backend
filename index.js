const express =  require('express')
const app =  express();
app.set("view engine",'ejs')
const morgan =  require('morgan')
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use((req,res,next)=>
    {
        console.log("this is a middle ware");
        const a = 10;
        const b = 20;
    
    
       console.log(a+b)
        
        return next();
        
    
    })
    
///*****


app.get('/about',(req,res)=>{

  
    res.send("My name is harish")
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/profile',(req,res)=>{
    res.send("I a web devrloper")
})
app.get('/service',(req,res)=>{
    res.send("freelancing")
})
app.post('/get-form-data',(req,res)=>{
    console.log(req.body);
    res.send("data reecived")
    
})

app.listen(3000)
