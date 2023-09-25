const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/catagori.json');
const news = require('./data/news.json');

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World")
})


app.get("/categories", (req, res) => {
    res.send(categories)
})

app.get("/news",(req, res) => {
    res.send(news)
})

app.get("/news/:id",(req, res)=> {
    const id = req.params.id;
    console.log(id);
    const selectNews = news.find(nws => nws._id == id); 
    res.send(selectNews)
})
app.get("/categories/:id",(req, res) => {
    const catagoryId = parseInt(req.params.id);
    if(catagoryId === 0){
        res.send(news);
    }
    else{
        const newsCatagory = news.filter(nws => parseInt(nws.category_id) === catagoryId)
         res.send(newsCatagory);
    }
})

app.listen(port, () => {
    console.log(`localhost ${port}`)
})