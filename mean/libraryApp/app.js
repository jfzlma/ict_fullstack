const express = require('express');
const chalk = require('chalk');
const path = require('path')

var app = new express();
var nav = [
    {
        link:'/books',
        title:'Books'
    },
    {
        link:'/authors',
        title:'Authors'
    },
    {
        link:'addBook',
        title:'Add Book'
    },
    {
        link:'/about',
        title:'About us'
    },
    {
        link:'/contact',
        title:'Contact Us'
    }
];


const booksRouter = require('./src/routes/booksRoutes')(nav);    // requiring booksRoutes from another file, extension is optional
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const contactRouter = require('./src/routes/contactRouter')(nav);
const aboutRouter = require('./src/routes/aboutRouter')(nav);
const addBookRouter = require('./src/routes/addBookRouter')(nav);

app.use(express.static(path.join(__dirname, "/public")));   //to include css and js
app.use('/books', booksRouter);      //routing /books
app.use('/authors', authorsRouter); //routing /authors
app.use('/contact', contactRouter); //routing /contact Us
app.use('/addBook', addBookRouter);
app.use('/about', aboutRouter); //routing /about Us
app.set('views','./src/views');     // template directory
app.set('view engine', 'ejs');      // template engine

                                    // ---sending ejs file with data--- #3







app.get('/', function(req, res){
        // res.render('index');
        // res.render('index', {title:"Library"});  
        // res.render('index',{
        //     nav:['Books','Authors'],
        //     title:"Library App"
        //     }
        // );

    res.render('index',{
            nav,
            title:"Library App"
            }
        );


});














// app.get('/', function(req, res){
//     res.render('index', {title:"Library"});  
    
//  });


                                    // ---sending ejs file--- #2

// app.get('/', function(req, res){
//      res.render('index');
    
//  });

                                  //---sending html file---  #1
 
// app.get('/',function(req, res){
//     res.sendFile(path.join(__dirname, "views/index.html"));
//     //res.sendFile(__dirname+"/views/index.html");
// });

app.listen(3011,function(){
    console.log('Listening to port ' +chalk.yellow('3011...'));
});     