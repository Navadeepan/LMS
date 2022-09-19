// express 
const express = require("express")

// express using as app
const app = express()
app.set("view engine", 'ejs')
app.use(express.static(__dirname + '/public'))
// app.use(express.static(__dirname + "/files"))


// middlewares
app.use(express.urlencoded({ extended: true }));

// mongoose for db
const mongoose = require("mongoose")

// port number
const port=3000

// routes
//app.use(require("./routes/index"))
//app.use(require("./routes/todo"))


// import of schema 
const user = require("./models/registerSchema");
const task = require("./models/taskSchema");

// body-parser
const bodyparser = require("body-parser");
const { json } = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",function(req,res){
  res.render('Home')
})

app.get("/Register",function(req,res){
  res.render('Register')
})

app.get("/login",function(req,res){
  res.render('Login')
})

app.get("/index",function(req,res){
  res.render('index')
})

app.get("/courses",function(req,res){
  res.render('courses')
})

app.get("/tasks",async(req, res) =>{
  const allTask= await task.find();
  res.render("Tasks", {task: allTask})
})
app.get("/delete/task/:_id", (req, res) => {
  const { _id } = req.params;
  task.deleteOne({ _id })
    .then(() => {
      console.log("Deleted Task Successfully!");
      res.redirect("/tasks");
    })
    .catch((err) => console.log(err));
});

app.get("/profile",function(req,res){
  const id = '6327379ea3c9fd85987480b4';
  user.findById(id)
  .then(result =>{
   res.render('Profile',{user : result})
  })
})

app.get('*', function(req, res){
  res.sendStatus(404)
})

// app.get("/logout", function(req, res) {
//   req.session.destroy(() => {
//    req.logout();
//    res.redirect("/login"); //Inside a callback… bulletproof!
//   });
//  });

 app.get('/logout', function (req, res) {
  delete req.session.user_id;
  res.redirect('/login');
}); 

// to connect to mongodb
const dburl = "mongodb+srv://navadeepan:navadeepan@learnandbuild.tmmen.mongodb.net/test";
mongoose.connect(dburl, {useNewUrlParser:true,useUnifiedTopology:true})
  .then((result)=>app.listen(port),console.log('Connection to DB success'))
  .catch((err)=>console.log(err))

// post method
  app.post("/Register", function(req,res){
    let userdata = new user({ 
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      confirmPassword:req.body.confirmPassword
    })
    userdata.save()
    .then(() => {
      res.send('Successfully registered');
    })
    .catch((err) => console.log(err));
    
  });

  app.post("/add/task", (req, res) => {
    const newTask = new task({task:req.body.task});

    // save the todo
    newTask
      .save()
      .then(() => {
        console.log("Successfully added task!");
        res.redirect("/tasks");
      })
      .catch((err) => console.log(err));
  })

