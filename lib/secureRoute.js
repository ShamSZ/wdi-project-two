const secureRoute = (req, res, next) => {
  if(req.session.userId){
    next();
  } else {
    console.log('User must log in to access this');
    res.redirect('/login');
  }
};

module.exports = secureRoute;
