const express = require('express');
const aboutRouter = express.Router();
 
var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et doloremque fugit, animi quia optio quibusdam, culpa nostrum dolore excepturi earum dolores blanditiis in ea vitae minima eligendi unde ipsum quasi? ";


var about = {
    librarian: 'Dr. Abdul Azeez T. A.',
    adress: 'University of calicut',
    pin: 673125,
    contact: 9636521452,
    email: 'librarian@libapp.com'
}


function router(nav){

    aboutRouter.route('/')
        .get((req, res)=>{
            res.render('about',
            {
                nav,
                lorem,
                about,  
                title: "Library App: About ",
            });
    });


    return aboutRouter;

}


module.exports = router;