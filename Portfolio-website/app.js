const express = require('express');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.static("style"));



app.get("/",function(req, res){
    res.sendFile(__dirname + "./index.html");
    console.log(__dirname);
});

app.post("/", function(req, res){
    const comm = req.body.message;
    const na = req.body.nameofperson;
var transpoter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'venkatakalyaninaagi@gmail.com',
        pass: 'Kalyani@123'
    }

})
var mailOptions = {
    from: 'venkatakalyaninaagi@gmail.com',
    to: req.body.username,
    cc: 'venkatakalyaninaagi@gmail.com',
    subject: 'Thanks for giving feedback' + na,
    text: 'Thanks for your message you have sent to us' + comm
};

transpoter.sendMail(mailOptions, function(error, info ){
    if(err){
        console.log(error);
    }
    else{
       // res.send("Mail submitted");
       res.redirect('/');
       console.log("email send" + info.response);
    }
})

});


app.listen(3000, function(){
    console.log("server started at 3000");
});