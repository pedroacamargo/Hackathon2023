const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const path = require("path");
const multer = require('multer');

const app = express();

const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // January is 0
const year = String(currentDate.getFullYear()).substr(-2);

const formattedDate = `${day}-${month}-${year}`;


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
const db = require("./app/models");
const Role = db.role;
`""" `
db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("frontend", "pages", "login.html"));
  // res.json({ message: "Welcome to bezkoder application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// Set up static files and views
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Set up storage configuration for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${formattedDate}-${file.originalname}`);
  },
});

// Initialize the multer middleware with the storage configuration
const upload = multer({ storage: storage });

// An array to store the uploaded files
const uploadedFiles = [];

// Handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file was provided.' });
  }

  // Add the uploaded file to the array
  uploadedFiles.push({
    filename: req.file.filename,
    originalname: req.file.originalname,
  });

  res.status(200).json({ message: 'File uploaded successfully.', filename: req.file.filename });
});

// Display the uploaded files in a StackOverflow/Reddit-like way
app.get('/files', (req, res) => {
  res.render('files', { files: uploadedFiles });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}
