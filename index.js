const express = require('express');
var bodyParser = require('body-parser')

const path = require('path');

const app = express();

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('pages', path.join(__dirname, '/pages'));

app.get('/',(req,res)=>{
    console.log(req.query);

    if(req.query.busca == null){
        res.send('home')
    }else{
        res.send('Você buscou: '+req.query.busca)
    }
    res.send('home')
})

app.get('/:slug',(req,res)=>{
    res.send(req.params.slug);
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})