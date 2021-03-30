var PORT = process.env.PORT;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { aboutmeTag, skillsTag, projectsTag } = require("./components/homeModuels")
const { game, store, IssueTracker } = require("./components/projectModuels")
const { contactform, err, success,duplicate } = require("./components/contactModules")
const {frontEnd, backEnd,progLang,gameEngines} = require("./components/skillsModules")
const dontenv = require('dotenv')
dontenv.config();
const mongoose = require('mongoose')

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
//globalvars
const dbstring = process.env.DB_STRING
const port = process.env.PORT



//dbconnectionest
mongoose.connect(dbstring,{useNewUrlParser:true,useUnifiedTopology: true });
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
//dbconnectionconfirmation
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(err,result) {
   if(err) console.error({err})
   else{
    console.log(`connected to the database ${dbstring}`)
   }
});

const clientSchema = {
    email : {
      type: String,
      required: true,
      unique : true
    },
    phone: {
       type: String,
       unique: true,
       required: true
    },
    description: String
    
}

const Client = mongoose.model("Client",clientSchema) // creates a Collection named Article with scehma article schema
//serverSchemas and models end


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
    const client = new Client({
        email : email,
        phone : phonenumber,
        description : text
    })
    client.save(function (err, client) {
        if (err) {
        console.error(err);
        res.render('contact',{formOrmsg:duplicate})
        }
        else{
            console.log(`Success new client is ${client} `)
            res.render('contact',{formOrmsg:success})
        }
      })
   
});


//skill page

app.get("/skills", function(req, res) {
    res.render("skills", { frontend: frontEnd, backend: backEnd, programming: progLang, gameengines: gameEngines });

});



app.listen(process.env.PORT, function(req, res) {
    console.log(`Server started on port ${port}`)
})