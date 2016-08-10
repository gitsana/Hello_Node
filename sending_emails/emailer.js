'use strict';
// FYI this is not functioning
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

var mailOptions = {from: "sana.ismail@invoice2go.com", 
			to: "ismail.sana@gmail.com",
			subject: "hello there",
			text: "hello world test email text",
			html: "<b>Hello world</b>" };

transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        return console.log(error);
    }
    console.log("Message sent: " + info.response);	
});

