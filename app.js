const express = require('express');
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blogRoutes');

//create an express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://netninja:test123@node-tuto.bpyf5.mongodb.net/node-tuto?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');


//listen to request
// app.listen(3000);

//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); // POST Request middleware to get all url from form


// //mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog",
//     snippet: "about my new blog",
//     body: "more about my new blog",
//   });

// //save the document to the database
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// //retrieve all the blogs from the collection
// app.get('/all-blogs', (req,res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });

// //retrieve a single blog
// app.get('/single-blog', (req, res) => {
//     Blog.findById("6210b46ed8a258d3fadcf6b6")
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// }


//Outputting documents in views


//routes
app.get('/', (req, res) => {
    res.redirect('/blogs');

    // const blogs = [
    //   { title: "Irv finds ball", snippet: "lorem ipsum dollar" },
    //   { title: "Antony blocks the ball", snippet: "lorem ipsum dollar" },
    //   { title: "Jason steals the ball", snippet: "lorem ipsum dollar" },
    // ];

    // res.render('index', {title: 'Home', blogs});

    // res.send('<p>Home Page</p>');
});


app.get("/about", (req, res) => {
  // res.sendFile('/views/about.html', { root: __dirname });

  res.render("about", { title: "about" });

  //   res.send("<p>about Page</p>");
});
//redirects

// router.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// BLOG ROUTES
app.use('/blogs', blogRoutes);


//404 pages
app.use((req, res) => {
    // res.status(404).sendFile('/views/404.html', { root: __dirname })

    res.render('404', {title: '404'});
});