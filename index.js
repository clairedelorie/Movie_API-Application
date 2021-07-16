
const express = require('express');
const morgan = require('morgan');

const app = express();


const topMovies = [
    {
        title: 'Howls Moving Castle',
        director: 'Hayao Miyazaki',
        genres: 'Fantasy Adventure',
    },
    {
        title: 'Spirited Away',
        director: 'Hayao Miyazaki',
        genres: 'Fantasy Family',
    },
    {
        title: 'Princess Mononoke',
        director: 'Hayao Miyazaki',
        genres: 'Fantasy Adventure',
    },
    {
        title: 'My Neighbor Totoro',
        director: 'Hayao Miyazaki',
        genres: 'Fantasy Family',
    },
    {
        title: 'Ponyo',
        director: 'Hayao Miyazaki',
        genres: 'Fantasy Adventure',
    },
    {
        title: 'Iron Man',
        director: 'Jon Favreau',
        genres: 'Action Adventure',
    },
    {
        title: 'Rear Window',
        director: 'Alfred Hitchcock',
        genres: 'Mystery',
    },
    {
        title: 'The Lord of the Rings: The Fellowship of the Rings',
        director: 'Peter Jackson',
        genres: 'Fantasy Adventure',
    },
    {
        title: 'Cinderella',
        director: 'Kenneth Branagh',
        genres: 'Romance Family',
    },
    {
        title: 'Tangled',
        director: 'Byron Howard',
        genres: 'Musical Family',
    }
];


app.use(express.static('public'));
app.use(morgan('common'));

app.get('/topMovies', (req,res) => {
    res.json(topMovies);
});

app.get('/', (req,res) => {
    res.send('Welcome! Thanks for checking out my movie API!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(8080, () =>{
    console.log('Your app is listening on port 8080.');
});