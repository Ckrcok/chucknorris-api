const request = require("request");
const jokeURL = "https://api.chucknorris.io/jokes/random";
const categoriesURL = "https://api.chucknorris.io/jokes/categories";

module.exports = {
  index
};

function index(req, res) {
  request(categoriesURL, function(err, response, body) {
    const categories = JSON.parse(body);
    if (req.query.category) {
      request(jokeURL + req.query.category, function(err, response, body) {
        const joke = JSON.parse(body);
        res.render("index", { categories, joke: null, catagory: null });
      });
    }
  });
}
