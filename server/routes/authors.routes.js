const AuthorController = require('./../controllers/authors.controller')

module.exports = (app) => {
   app.get("/api", (req, res) => {
      res.send("Our express api server is now sending this over to the browser");
   });
   app.get("/api/authors", AuthorController.findAllAuthors);
   app.get("/api/author/:id", AuthorController.findOneSingleAuthor);
   app.put("/api/author/:id/update", AuthorController.updateExistingAuthor);
   app.post("/api/author/new", AuthorController.createNewAuthor);
   app.delete("/api/author/:id/delete", AuthorController.deleteAnExistingAuthor);
}