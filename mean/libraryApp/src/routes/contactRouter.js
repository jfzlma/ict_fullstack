const express = require('express');
const contactRouter = express.Router();


var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et doloremque fugit, animi quia optio quibusdam, culpa nostrum dolore excepturi earum dolores blanditiis in ea vitae minima eligendi unde ipsum quasi?";

function router(nav){

    contactRouter.route('/')
        .get((req, res)=>{
            res.render('contact',
            {
                nav,
                lorem,
                title: "Library App: Contact",
            });
    });


    return contactRouter;

}


module.exports = router;