const { authJwt } = require("../middleware");
const controller = require("../controllers/question.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/question/list", controller.list);
  app.get("/api/question/get-item", controller.getItem);
  app.post("/api/question/new", authJwt.verifyToken, controller.new);
};
