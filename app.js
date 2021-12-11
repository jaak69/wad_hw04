const express = require('express');
const app = express();
const path = require('path');
const postController = require('./controllers/postController')
//const datepicker = require('js-datepicker')

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

app.get('/contactus', (req, res) => {
    res.render('contactus');
});

app.get('/posts', postController.posts)

app.get('/singlepost/:id', postController.singlepost);

app.delete('/posts/:id', postController.postdelete);

app.get('/create', postController.postcreate);

app.use((req, res) => {
    res.status(404).render('404');
});
