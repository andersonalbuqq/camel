module.exports = function HomeController() {
  function index(req, res) {
    return res.render("index", {
      title: "Home"
    });
  }
  return {
    index,
  };
};
