var PORT = process.env.PORT;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var nodemailer = require('nodemailer');
const { aboutmeTag, skillsTag, projectsTag } = require("./components/homeModuels")
const { game, store, IssueTracker } = require("./components/projectModuels")
const { contactform, err, success } = require("./components/contactModules")
const {frontEnd, backEnd,progLang,gameEngines} = require("./components/skillsModules")

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//email client
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'drake9211@gmail.com',
        pass: 'lltsidazgzmkxyor'
    }
});


app.get("/", function(req, res) {

    res.render("theaboutPage", { aboutme: aboutmeTag, skills: skillsTag, projects: projectsTag });

});


//the projects page
app.get("/projects", function(req, res) {

    res.render("projects", { first: game, second: store, third: IssueTracker });
});



//contact page
app.get("/contact", function(req, res) {

    res.render("contact", { formOrmsg: contactform });
});

app.post("/contact", function(req, res) {

    var email = req.body.email;
    var text = req.body.message;
    var phonenumber = req.body.phone;
    var total = email + " " + phonenumber + "  " + text;
    var mailOptions = {
        from: "drake9211@gmail.com",
        to: "drake9211@gmail.com",
        subject: "this person needs help",
        text: total
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.render("contact", { formOrmsg: err });
            console.log(error);
        } else {
            res.render("contact", { formOrmsg: success });
            console.log('Email sent: ' + info.response);
        }
    });
});


//skill page

app.get("/skills", function(req, res) {
    res.render("skills", { frontend: frontEnd, backend: backEnd, programming: progLang, gameengines: gameEngines });

});



app.listen(process.env.PORT || 3000, function(req, res) {
    console.log("server started on port 3000")
})