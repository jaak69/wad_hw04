const express = require('express');
const app = express();
const path = require('path');

//import database connection
const pool = require('./data/database.js');

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

app.get('/posts', async(req, res) => {
    try {
        console.log("get posts request has arrived");
        const posts = await pool.query(
        "SELECT * FROM public.postitused"
        );
        res.render('posts', { posts: posts.rows });
        } catch (err) {
        console.error(err.message);
        }
});

app.get('/contactus', (req, res) => {
    res.render('contactus');
});

app.use((req, res) => {
    res.status(404).render('404');
});
