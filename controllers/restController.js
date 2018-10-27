const home = (req, res) => res.render('pages/home');
const about = (req, res) => res.render('pages/about');
const indexRest = (req, res) => res.render('restaurants/index');

module.exports = {
  home: home,
  about: about,
  index: indexRest
};
