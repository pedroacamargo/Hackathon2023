const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const path = require("path");
const multer = require('multer');
const authJwt = require("./backend/middleware/authJwt");
const jwt = require("jsonwebtoken");
const config = require("./backend/config/auth.config.js");

const app = express();


app.use('/static', express.static(path.resolve("frontend")));

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "bezkoder-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true,
    sameSite: 'strict'
  })
);

// database
const db = require("./backend/models");
const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// routes
require("./backend/routes/auth.routes")(app);
require("./backend/routes/org.routes")(app);
require("./backend/routes/post.routes")(app);
require("./backend/routes/blog.routes")(app);
require("./backend/routes/user.routes")(app);

// Set up static files and views
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/new-post', (req, res) => {
  res.sendFile(path.resolve("frontend", "pages", "new-post.html"));
});

app.get('/new-blog', (req, res) => {
  res.sendFile(path.resolve("frontend", "pages", "new-blog.html"));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.resolve("frontend", "pages", "profile.html"));
});

app.get('/edit-profile', (req, res) => {
  res.sendFile(path.resolve("frontend", "pages", "edit-profile.html"));
});

app.get('/repo', (req, res) => {
  res.sendFile(path.resolve("frontend", "pages", "repo.html"));
});

app.get('/university', (req, res) => {
  res.sendFile(path.resolve("frontend", "pages", "university.html"));
});

app.get('/unirepos', (req, res) => {
  res.sendFile(path.resolve("frontend", "pages", "unirepos.html"));
});

// // Display the uploaded files in a StackOverflow/Reddit-like way
// app.get('/files', (req, res) => {
//   res.render('files', { files: uploadedFiles });
// });

// simple route
app.get("/*", (req, res) => {
  let token = req.session.token;

  if (!token) {
    return res.sendFile(path.resolve("frontend", "pages", "login.html"));
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.sendFile(path.resolve("frontend", "pages", "login.html"));
    }
    req.userId = decoded.id;
  });

  res.sendFile(path.resolve("frontend", "pages", "landing.html"));
  // res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});