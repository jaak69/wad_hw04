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
        {
            "userId": 1,
            "id": 1,
            "user_data": {
              "name": "John Doe",
              "email": "john.doe@example.com"
            },
            "caption": "I think it's going to rain",
            "date": "2021-10-21T05:55:06.419Z",
            "post_image": "https://drive.google.com/uc?export=view&id=18Rk7E056Y3J90d-PfTEFRIDfHWtXsMCv"
          },
          {
            "userId": 2,
            "id": 2,
            "user_data": {
              "name": "Mick Jagger",
              "email": "mick99@example.com"
            },
            "caption": "Which weighs more, a pound of feathers or a pound of bricks?",
            "date": "2021-10-21T06:06:06.419Z",
            "post_image": ""
          },
          {
            "userId": 1,
            "id": 3,
            "user_data": {
              "name": "John Doe",
              "email": "john.doe@example.com"
            },
            "caption": "Felt cute, might delete later",
            "date": "2021-10-21T07:12:06.419Z",
            "post_image": "https://drive.google.com/uc?export=view&id=18Rk7E056Y3J90d-PfTEFRIDfHWtXsMCv"
          },
          {
            "userId": 2,
            "id": 4,
            "user_data": {
              "name": "Mick Jagger",
              "email": "mick99@example.com"
            },
            "caption": "Something, something, something?",
            "date": "2021-10-21T08:06:06.419Z",
            "post_image": ""
          },
          {
            "userId": 1,
            "id": 5,
            "user_data": {
              "name": "John Doe",
              "email": "john.doe@example.com"
            },
            "caption": "Felt, felt, felt",
            "date": "2021-10-21T09:12:06.419Z",
            "post_image": "https://drive.google.com/uc?export=view&id=18Rk7E056Y3J90d-PfTEFRIDfHWtXsMCv"
          },
          {
            "userId": 1,
            "id": 6,
            "user_data": {
              "name": "John Doe",
              "email": "john.doe@example.com"
            },
            "caption": "I think it's going to rain",
            "date": "2021-10-21T10:55:06.419Z",
            "post_image": "https://drive.google.com/uc?export=view&id=18Rk7E056Y3J90d-PfTEFRIDfHWtXsMCv"
          },
          {
            "userId": 2,
            "id": 7,
            "user_data": {
              "name": "Mick Jagger",
              "email": "mick99@example.com"
            },
            "caption": "Which weighs more, a pound of feathers or a pound of bricks?",
            "date": "2021-10-21T11:06:06.419Z",
            "post_image": ""
          },
          {
            "userId": 1,
            "id": 8,
            "user_data": {
              "name": "John Doe",
              "email": "john.doe@example.com"
            },
            "caption": "Felt cute, might delete later",
            "date": "2021-10-21T12:12:06.419Z",
            "post_content": "<p>Barbara selina toymaker america deadshot bullock pennyworth calendar grayson. Luthor league thorne chimera grayson manor the gargoyle luthor doom! Swamp lazarus manor justice joker luthor zeus lazarus aquaman al quinn? Quinn czonk phantom joe batcave ghul zeus wayne. Ra wayne ivy toymaker. Martha zatanna batgirl bartok czonk ragman luthor shade. Clayface chimera night clayface nocturna raatko vale. Face killer master catwoman joker. Anarky.</p><p>Shade penguin maroni kane tumbler prey green ghul owl todd red gotham tally. America nocturna phantom abdullah. Joe ragman face, czonk cain tim atkins arrow ragman. Grundy rhino catwoman faith todd hatter canary ghul. Metallo phantom shrike al scorn carmine aquaman zucco oswald outsider canary batman. Atkins oracle crane barbara fox arkham joker raatko edward rupert kyle katana. Caird moth mad alfred alcor ivy ragdoll abbott.</p>",
            "post_image": "https://drive.google.com/uc?export=view&id=18Rk7E056Y3J90d-PfTEFRIDfHWtXsMCv"
          },
          {
            "userId": 2,
            "id": 9,
            "user_data": {
              "name": "Mick Jagger",
              "email": "mick99@example.com"
            },
            "caption": "Something, something, something?",
            "date": "2021-10-21T13:06:06.419Z",
            "post_image": ""
          },
          {
            "userId": 1,
            "id": 10,
            "user_data": {
              "name": "John Doe",
              "email": "john.doe@example.com"
            },
            "caption": "Felt, felt, felt",
            "date": "2021-10-21T14:12:06.419Z",
            "post_image": "https://drive.google.com/uc?export=view&id=18Rk7E056Y3J90d-PfTEFRIDfHWtXsMCv"
          }
    ]
    res.render('posts', {posts});
});

app.get('/contactus', (req, res) => {
    res.render('contactus');
});

app.use((req, res) => {
    res.status(404).render('404');
});
