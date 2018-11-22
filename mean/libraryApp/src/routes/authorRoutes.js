const express = require('express');
const authorsRouter = express.Router();



var authors = [
    {
        name: "Marijn Haverbeke",
        country: "Brazil",
        books: 3,
        img : "/img/authors/1.jpg"
    },
    {
        name: "Addy Osmani",
        country: "Argentina",
        books: 2,
        img : "/img/authors/2.jpg"
    },
    {
        name: "Axel Rauschmayer",
        country: "Canada",
        books: 5,
        img : "/img/authors/3.jpg"
    },
    {
        name: "Eric Elliott",
        country: "England",
        books: 6,
        img : "/img/authors/4.jpg"
    },
    {
        name: "Nicholas C. Zakas",
        country: "Portugal",
        books: 1,
        img : "/img/authors/5.jpg"
    },
    {
        name: "Kyle Simpson",
        country: "Croatia",
        books: 2,
        img : "/img/authors/6.jpg"
    },
    {
        name: "Richard E. Silverman",
        country: "Italy",
        books: 1,
        img : "/img/authors/7.jpg"
    },
    {
        name:  "Glenn Block, et al.",
        country: "Germany",
        books: 3,
        img : "/img/authors/8.jpg"
    }
];

function router(nav){

    authorsRouter.route('/')
    .get((req, res)=>{
        res.render('authors',
        {
            nav,
            title: "Library App: Authors",
            authors,


        })
    });


    authorsRouter.route('/:id')
        .get((req, res)=>{
            //res.send("Hello single Author ");
            const id = req.params.id;
            res.render('author',
            {
                nav,
                title: "Library App",
                author: authors[id] 
            }
            );
    });


    return authorsRouter;

}


module.exports = router;