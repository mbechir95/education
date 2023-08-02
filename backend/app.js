//import express module
const express = require("express");

//import bcrypt module
const bcrypt = require("bcrypt");

const axios = require("axios");

//import multer module
const multer = require("multer");
//import path module
const path = require("path");

//import body-parser module
const bodyParser = require("body-parser");

//importation mongoose module
const mongoose = require("mongoose");

//'mongodb://127.0.0.1:27017' => @de de base mongoDB port(27017)
//marsDB => DB name
mongoose.connect("mongodb://127.0.0.1:27017/kidDB");

//creates express application
const app = express();

//app configuration

//send json response
app.use(bodyParser.json());
//get object from request
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Headers",

    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",

    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );

  next();
});
app.use("/myFiles", express.static(path.join("backend/images")));
// Media Types
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storageConfig = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});

const User = require("./models/user");
const Course = require("./models/course");
const Session = require("./models/session");
const Evaluation = require("./models/evaluation");

app.post("/users/parents", (req, res) => {
  //traitement
  console.log("here into Bl:add Parent");
  bcrypt.hash(req.body.password, 8).then((cryptedPwd) => {
    req.body.password = cryptedPwd;
    console.log("here crypted password", req.body.password);
    let userObj = new User(req.body);
    userObj.save((err, doc) => {
      if (err) {
        res.json({ msg: false });
      } else {
        res.json({ msg: true });
      }
    });
  });



  res.json({ msg: "added with success" });
});



app.post(
  "/users/signup",
  multer({ storage: storageConfig }).single("img"),
  (req, res) => {
    //traitement
    console.log("here into Bl:add user", req.body);
    bcrypt.hash(req.body.password, 8).then((cryptedPwd) => {
      req.body.password = cryptedPwd;
      req.body.avatar = "http://localhost:3000/myFiles/" + req.file.filename;
      console.log("here crypted password", req.body.password);
      let userObj = new User(req.body);
      userObj.save((err, doc) => {
        if (err) {
          res.json({ msg: false });
        } else {
          res.json({ msg: true });
        }
      });
    });
  }
);
//bussiness logic
//response 0 : please  check you email
//response 1 : please  check you pwd
//response 2 : welcome
app.post("/users/login", (req, res) => {
  let user;
  //traitement
  console.log("here into Bl:login", req.body);
  User.findOne({ email: req.body.email })
    .then((doc) => {
      user = doc;
      console.log("here doc", doc);
      if (!doc) {
        res.json({ msg: "0" });
      } else {
        return bcrypt.compare(req.body.pwd, doc.password);
      }
    })
    .then((checkPwd) => {
      console.log("here checkPwd", checkPwd);
      if (!checkPwd) {
        res.json({ msg: "1" });
      } else {
        let userToSend = {
          id: user._id,
          fName: user.firstName,
          lName: user.lastName,
          role: user.role,
          tel: user.tel,
        };
        res.json({ msg: "2", connectedUser: userToSend });
      }
    });
});
app.get("/users", (req, res) => {
  //traitement
  console.log("here into Bl: get all Users");
  User.find().then((docs) => {
    res.json({ users: docs });
  });
});
app.get("/users/teachers", (req, res) => {
  //traitement
  console.log("here into Bl: get all Teachers");

  User.find({ role: "teacher" }).then((docs) => {
    // if (docs.role=="teacher") {
    //   res.json({ teachers: docs });
    // }
    res.json({ teachers: docs });
  });
});
app.get("/users/students", (req, res) => {
  //traitement
  console.log("here into Bl: get all students");

  User.find({ role: "student" }).then((docs) => {
    // if (docs.role=="teacher") {
    //   res.json({ teachers: docs });
    // }
    res.json({ students: docs });
  });
});
app.get("/students/course/:id", (req, res) => {
  //traitement
  console.log("data recieved:", req.body);

  Session.find({ idCourse: req.params.id }).then((docs) => {
    res.json({ students: docs });
  });
});

app.get("/users/parents", (req, res) => {
  //traitement
  console.log("here into Bl: get all parents");

  User.find({ role: "parent" }).then((docs) => {
    // if (docs.role=="teacher") {
    //   res.json({ teachers: docs });
    // }
    res.json({ parents: docs });
  });
});
app.get("/users/:id", (req, res) => {
  //traitement
  console.log("here into Bl:user by id");
  let id = req.params.id;
  User.findOne({ _id: id }).then((doc) => {
    res.json({ user: doc });
  });
});
app.delete("/users/:id", (req, res) => {
  //traitement
  console.log("here into Bl: delete user by id");
  let id = req.params.id;
  User.deleteOne({ _id: id }).then((response) => {
    console.log("here response after delete", response);
    if (response.deletedCount == 1) {
      res.json({ message: "user deleted successfully" });
    } else {
      res.json({ message: "Error" });
    }
  });
});
app.get("/courses", (req, res) => {
  //traitement
  console.log("here into Bl: get all Courses");
  Course.find().then((docs) => {
    res.json({ courses: docs });
  });
});
app.post("/courses", (req, res) => {
  //traitement
  console.log("here into Bl:add Course");
  let courseObj = new Course(req.body);
  courseObj.save();

  res.json({ msg: "added with success" });
});
app.delete("/courses/:id", (req, res) => {
  //traitement
  console.log("here into Bl: delete course by id");
  let id = req.params.id;
  Course.deleteOne({ _id: id }).then((response) => {
    console.log("here response after delete", response);
    if (response.deletedCount == 1) {
      res.json({ message: "course deleted successfully" });
    } else {
      res.json({ message: "Error" });
    }
  });
});
app.get("/courses/:id", (req, res) => {
  //traitement
  console.log("here into Bl:course by id");
  let id = req.params.id;
  Course.findOne({ _id: id }).then((doc) => {
    res.json({ course: doc });
  });
});

app.post("/users/logain", (req, res) => {
  let user;
  //traitement
  console.log("here into Bl:login", req.body);
  User.findOne({ tel: req.body.tel })
    .then((doc) => {
      user = doc;
      console.log("here doc", doc);
      if (!doc) {
        res.json({ msg: "0" });
      } else {
        return bcrypt.compare(req.body.pwd, doc.password);
      }
    })
    .then((checkPwd) => {
      console.log("here checkPwd", checkPwd);
      if (!checkPwd) {
        res.json({ msg: "1" });
      } else {
        if (user.status == "notOk") {
          res.json({ msg: "2" });
        } else {
          let userToSend = {
            id: user._id,
            fName: user.firstName,
            lName: user.lastName,
            role: user.role,
            status: user.status,
            confTel:user.confTel,
          };
          res.json({ msg: "3", connectedUser: userToSend });
        }
      }
    });
});

app.get("/users/validate/:id", (req, res) => {
  User.updateOne({ _id: req.params.id }, { status: "ok" }).then((response) => {
    res.json({ updated: "success" });
  });
});

app.put("/courses", (req, res) => {
  //traitement
  console.log("here into Bl:edit course");
  let course = req.body;
  Course.updateOne({ _id: course._id }, course).then((response) => {
    console.log("response is", response);
    if (response.nModified == 1) {
      res.json({ message: "course updated successfully" });
    } else {
      res.json({ message: "Error" });
    }
  });
});
app.post("/users/telVerification", (req, res) => {
  //traitement
  console.log("here into Bl: get all Users");
  User.findOne({ tel: req.body.confTel })
  .then((doc) => {
    user = doc;
    console.log("here doc", doc);
    if (!doc) {
      res.json({ msg: "0" });
    } else {
      res.json({ msg: "1" });
    }
  })
});
app.post("/sessions", (req, res) => {
  //traitement
  console.log("here into Bl:add session");
  let sessionObj = new Session(req.body);
  sessionObj.save();

  res.json({ msg: "added with success" });
});
app.post("/sessions/idVerification", (req, res) => {
  //traitement
  console.log("here into Bl: get all Users");
  Session.findOne({ idStudent: req.body.idStudent })
    .then((doc) => {
      if (!doc) {
        res.json({ msg: "0" }); // No matching document found, so send msg: "0"
      } else {
        res.json({ msg: "1" }); // Matching document found, so send msg: "1"
      }
    })
    .catch((error) => {
      console.error("Error occurred while fetching data:", error);
      res.status(500).json({ msg: "Error occurred" });
    });
});



// app.get("/users/telVerification", (req, res) => {
//   //traitement
//   console.log("here into Bl: get all Teachers");

//   User.find({ role: "teacher" }).then((docs) => {
//     // if (docs.role=="teacher") {
//     //   res.json({ teachers: docs });
//     // }
//     res.json({ teachers: docs });
//   });
// });
app.get("/courses/idTeacher/:id", (req, res) => {
  //traitement
  console.log("here into Bl:course by id teacher");
  let id = req.params.id;
  Course.findOne({ idTeacher: id }).then((doc) => {
    res.json({ course: doc });
  });
});


  app.get("/sessions/idCourse/:id", (req, res) => {
    //traitement
    console.log("here into Bl:session by id course");
    let id = req.params.id;
    Session.findOne({idCourse: id }).then((doc) => {
      res.json({ session: doc });
    });

});

app.get("/sessions", (req, res) => {
  //traitement
  console.log("here into Bl: get all Sessions");
  Session.find().then((docs) => {
    res.json({ sessions: docs });
  });
});
app.delete("/sessions/:id", (req, res) => {
  //traitement
  console.log("here into Bl: delete session by id");
  let id = req.params.id;
  Session.deleteOne({ _id: id }).then((response) => {
    console.log("here response after delete", response);
    if (response.deletedCount == 1) {
      res.json({ message: "session deleted successfully" });
    } else {
      res.json({ message: "Error" });
    }
  });
});



app.post("/evaluations", (req, res) => {
  //traitement
  console.log("here into Bl:add evaluation");
  let evaluationObj = new Evaluation(req.body);
  evaluationObj.save();

  res.json({ msg: "added with success" });
});


app.get("/evaluations", (req, res) => {
  //traitement
  console.log("here into Bl: get all evaluations");
  Evaluation.find().then((docs) => {
    res.json({ evaluations: docs });
  });
});


app.delete("/evaluations/:id", (req, res) => {
  //traitement
  console.log("here into Bl: delete user by id");
  let id = req.params.id;
  Evaluation.deleteOne({ _id: id }).then((response) => {
    console.log("here response after delete", response);
    if (response.deletedCount == 1) {
      res.json({ message: "user deleted successfully" });
    } else {
      res.json({ message: "Error" });
    }
  });
});



app.get("/users/parentById/:id", (req, res) => {
  //traitement
  console.log("here into Bl:teacher by rel");
  let id = req.params.confTel;
  User.findOne({ tel: id }).then((doc) => {
    res.json({ user: doc });
  });
});



//make app exportable
module.exports = app;
