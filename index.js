
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

//get all movies
app.get('/movies', (req, res) => {
    res.send('Successful GET request returning data on all the movies');
});

app.get('/movies/:Title', (req, res) => {
    res.send('Successful GET request returning data on movies by title');
});

app.get('/movies/:genre', (req, res) => {
    res.send('Successful GET request returning data on movies by genre');
});

app.get('/directors/:directors name', (req, res) => {
    res.send('Successful GET request returning data on all the directors');
});

app.post('/users', (req, res) => {
    res.send('Successful POST request allowing user to register');
});

app.put('/users/:username', (req, res) => {
    res.send('Successful PUT request allowing users to update info');
});

app.delete('/users/:username', (req, res) => {
    res.send('Successful DELETE request allowing users to deregister');
});

app.post('/users/:username/movies/:movieID', (req, res) => {
    res.send('Successful POST request allowing users to add movies to a favorites list');
});

app.post('/users/:username/movies/:movieID', (req, res) => {
    res.send('Successful POST request allowing users to delete movies from a favorites list');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(8080, () =>{
    console.log('Your app is listening on port 8080.');
});
