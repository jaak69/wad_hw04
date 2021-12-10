const express = require('express');
const app = express();
const path = require('path');

//import database connection
//const pool = require('./data/database');

// register the ejs view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//
app.use(express.json());
//app.use(cors());
app.use(express.static('public'));
app.listen(3001);


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/posts', (req, res) => {
    /* res.sendFile('./views/index.html', { root: __dirname }); */

    let posts = [
        {id : 1, title : "Esimene postitus", sisu: "Igavene jama" },
        {id : 2, title : "Teine postitus", sisu: "Lõplik jama" },
        {id : 3, title : "Teine postitus", sisu: "PUPU" },
    ]
    res.render('posts', {posts});
});

app.get('/contactus', (req, res) => {
    res.render('contactus');
});

app.use((req, res, next) => {
    res.status(404).render('404');
});
