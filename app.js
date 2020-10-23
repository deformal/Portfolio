var PORT = process.env.PORT;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var nodemailer = require('nodemailer');

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//email client
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'drake9211@gmail.com',
        pass: 'saurabh007'
    }
});


app.get("/", function (req, res) {
    const abC = "<div class='card ' style='width: 18rem; '>" +
        "<img class='card-img-top' src='/css/manager.png'  alt='Card image cap' />" +
        "<div class='card-body'>" +
        "<h5 class='card-title font-weight-bold'>Who Am I ?</h5>" +
        "<p class='card-text'>" +
        " Hello! I am Saurabh a full stack web-developer based in New Delhi. I design and build websites for fun and also for money." +
        "</p>" +
        "</div>" +
        "</div>";
    const skillsC = "<div class='card ' style='width: 18rem; '>" +
        "<img class='card-img-top' src='/css/skills2.png'  alt='Card image cap' />" +
        "<div class='card-body'>" +
        "<h5 class='card-title font-weight-bold'>My Skills </h5>" +
        "<p class='card-text'>" +
        "As a full stack web-developer I dont have money but what i do have is a very peticular set of skills which can be very useful to you. If you contact me just remember I will reach out to you and I will help you." +
        "</p>" +
        "<form action='/skills' method='GET'>" +
        "<button class='btn btn-outline-danger cardbtn ' type='submit'>CHECK-ALL</button>" +
        "</form>" +
        "</div>" +
        "</div>";

    const projectsC = "<div class='card ' style='width: 18rem; '>" +
        "<img class='card-img-top' src='/css/project3.png'  alt='Card image cap' />" +
        "<div class='card-body'>" +
        "<h5 class='card-title font-weight-bold'>My Projects</h5>" +
        "<p class='card-text'>" +
        " Check out some of  my personal projects and after that you decide if I am good enough for the work you want to get done." +
        "</p>" +
        "<form action='/projects' method='GET'>" +
        "<button class='btn btn-outline-danger cardbtn ' type='submit'>PROJECTS</button>" +
        "</form>" +
        "</div>" +
        "</div>";
    res.render("theaboutPage", { aboutme: abC, skills: skillsC, projects: projectsC });

});


//the projects page
app.get("/projects", function (req, res) {
    const empty = "";
    const a = "<div class='card ' style='width: 18rem; '>" +
        "<img class='card-img-top pi' src='/css/project2.png'  alt='Card image cap' />" +
        "<div class='card-body'>" +
        "<h5 class='card-title font-weight-bold'>WAVE RUNNER GAME.</h5>" +
        "<p class='card-text '>" +
        " Wave Runner is my adaptation on a already present game. The game is simply about avoiding obstacles and collecting points and making a high score. This game show's my skills a c# programmer." +
        "</p>" +
        "<a href='/resources/WaveApk.apk ' class='btn btn-outline-danger cardbtn'>DOWNLOAD(apk)</a>" +
        "</div>" +
        "</div>";
    const b = "<div class='card ' style='width: 18rem; '>" +
        "<img class='card-img-top pi' src='/css/layers.png'  alt='Card image cap' />" +
        "<div class='card-body'>" +
        "<h5 class='card-title font-weight-bold'>BROZKIS ONLINE STORE </h5>" +
        "<p class='card-text'>" +
        " I used online website creator tool WIX which is a free to use, to create this online e-commerce store for a fictional company called Brozkis to showcase my designing and developing skills." +
        "</p>" +
        "<a href='https://drake9211.wixsite.com/mysite-1'' target='_/blank' class='btn btn-outline-danger cardbtn'>VISIT SITE</a>" +
        "</div>" +
        "</div>";

    const c = "<div class='card ' style='width: 18rem; '>" +
        "<img class='card-img-top' src='/css/IssueTracker.png'  alt='Card image cap' />" +
        "<div class='card-body'>" +
        "<h5 class='card-title font-weight-bold'>Issue Tracker App</h5>" +
        "<p class='card-text'>" +
        " This is an Issue Tracking App built using ReactJS, NodeJS, MongoDB, Express." +
        "This app is usefull for small business to maitain issue tracking and the effort put into fixing that issue." +
        "</p>" +
        "<a href='http://ui-issuetracker.herokuapp.com/'' target='_/blank' class='btn btn-outline-danger cardbtn'>VISIT SITE</a>" +
        "</div>" +
        "</div>";
    res.render("projects", { a: a, b: b, c:c });
});



//contact page
app.get("/contact", function (req, res) {
    var empty = "";
    var form = "<form action='/contact' method='POST'>" +
        "<input type='email' name='email' id='emailId' placeholder='email' />" +
        "<br>" +
        "<br>" +
        "<input type='text' name='phone' id='emailId' placeholder='phone' value='+91' />" +
        "<br>" +
        "<br>" +
        "<textarea name='message' id='messagearea' cols='30' rows='10'></textarea>" +
        "<br>" +
        "<br>" +
        "<button type='submit' class='btn btn-sm btn-outline-warning submitbtn'>Submit</button>" +
        "</form>";
    res.render("contact", { formOrmsg: form });
});

app.post("/contact", function (req, res) {
    var err = "<h3 class='text-danger'>Sorry! some problem occured</h3>";
    var success = "<h3 class='text-success'>THANK YOU</h3>";
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
    transporter.sendMail(mailOptions, function (error, info) {
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

app.get("/skills", function (req, res) {
    var empty = "";
    const abC = "<div class='card ' style='width: 18rem; '>" +
        "<img class='card-img-top' src='/css/landing-page.png'  alt='Card image cap' />" +
        "<div class='card-body'>" +
        "<h5 class='card-title font-weight-bold'>FRONTEND TECHNOLOGIES</h5>" +
        "<p class='card-text'>" +
        " HTML 5 <br/> " +
        " CSS 3<br/> " +
        " BOOTSTRAP 4<br/>" +
        " SASS <br/>" +
        " JAVA SCRIPT <br/> " +
        " JQUERY <br/> " +
        " REACT.js <br/> " +
        " ANGULAR <br/> " +
        " GIT/VERSION CONTROL <br/> " +
        " RESTFUL/API <br/> " +
        "</p>" +
        "</div>" +
        "</div>";
    const skillsC = "<div class='card ' style='width: 18rem; '>" +
        "<img class='card-img-top' src='/css/backend.png'  alt='Card image cap' />" +
        "<div class='card-body'>" +
        "<h5 class='card-title font-weight-bold'>BACKEND TECHNOLOGIES</h5>" +
        "<p class='card-text'>" +
        " NODE.js <br/> " +
        " EXPRESS.js<br/> " +
        " E-JS (templating engine)<br/>" +
        " MONGO DB <br/>" +
        " MONGOOSE (ODM library) <br/> " +
        " HEROKU <br/> " +
        " MY SQL <br/> " +
        " .NET<br/> " +
        "</p>" +
        "</div>" +
        "</div>";

    const projectsC = "<div class='card ' style='width: 18rem; '>" +
        "<img class='card-img-top' src='/css/programming.png'  alt='Card image cap' />" +
        "<div class='card-body'>" +
        "<h5 class='card-title font-weight-bold'>PROGRAMMING LANGUAGES</h5>" +
        "<p class='card-text'>" +
        " C <br/> " +
        " C++ <br/> " +
        " C# <br/> " +
        " JAVA <br/> " +
        " JAVA SCRIPT <br/> " +
        " ASSEMBLY " +
        "</p>" +
        "</div>" +
        "</div>";
    const gameengines = "<div class='card ' style='width: 18rem; '>" +
        "<img class='card-img-top' src='/css/arcade-game.png'  alt='Card image cap' />" +
        "<div class='card-body'>" +
        "<h5 class='card-title font-weight-bold'>GAME ENGINES</h5>" +
        "<p class='card-text'>" +
        " UNITY 3D<br/> " +
        " UNREAL <br/> " +
        "</p>" +
        "</div>" +
        "</div>";
    res.render("skills", { frontend: abC, backend: skillsC, programming: projectsC, gameengines: gameengines });

});



app.listen(process.env.PORT || 3000, function (req, res) {
    console.log("server started on port 3000")
})