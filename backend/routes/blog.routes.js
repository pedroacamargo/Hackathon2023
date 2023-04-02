const { authJwt } = require("../middleware");
const controller = require("../controllers/blog.controller");

// Initialize the multer middleware with the storage configuration
const multer = require('multer');

// Set up storage configuration for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/blog/list", controller.list);
  app.post("/api/blog/new", [authJwt.verifyToken, upload.single('file')], controller.new);
};
