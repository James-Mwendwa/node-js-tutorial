const express = require('express');
const morgan = require("morgan");

//create an express app
const app = express();

//connect to mongodb
const dbURI = "mongodb+srv://Net-Ninja:SiL8CnHGbnia8FX@nodejstutorial.rirmu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


//register view engine
app.set('view engine', 'ejs');


//listen to request
app.listen(3000);

//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));




app.get('/', (req, res) => {

    const blogs = [
      { title: "Irv finds ball", snippet: "lorem ipsum dollar" },
      { title: "Antony blocks the ball", snippet: "lorem ipsum dollar" },
      { title: "Jason steals the ball", snippet: "lorem ipsum dollar" },
    ];

    res.render('index', {title: 'Home', blogs});

    // res.send('<p>Home Page</p>');
});

app.get("/about", (req, res) => {
    // res.sendFile('/views/about.html', { root: __dirname });

    res.render('about', {title: 'about'});

//   res.send("<p>about Page</p>");
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'create a new blog' });
});


//redirects

// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });


//404 pages
app.use((req, res) => {
    // res.status(404).sendFile('/views/404.html', { root: __dirname })

    res.render('404', {title: '404'});
});