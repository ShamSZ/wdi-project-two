# General Assembly WDI Project 2: Rating Ninja

[Heroku](https://rating-ninja.herokuapp.com/)

[GitHub Repo](https://github.com/ShamSZ/wdi-project-two)

Rating Ninja is a web application that uses MongoDB, Express and Node.js to store a collection of user added data such as Restaurants. It utilises user authentication to register and log a user in to allow them to make changes to their own data and to add reviews to all restaurants.

Rating Ninja is my second project from General Assembly's Web Development Immersive. It was an individual project built in a week, and was my first multi-page, web app that didn't only involve working with the front-end. Working on this project helped me understand the basics of working with databases using Node.js packages and Models.

## Screenshots of all screens

## Brief

Create a platform for reviewing restaurants that meets the following technical requirements:

* Have at least 2 models – one representing a user and one that represents the main resource of your app.
* Include relationships - embedded or referenced.
* The app should include authentication.
* Have complete RESTful routes for at least one of your resources with all CRUD actions.
* Be deployed online and accessible to the public.


## Technologies Used

* EJS
* CSS3
* Bulma CSS Framework
* JavaScript (ECMAScript 6)
* Git
* GitHub
* Heroku
* MongoDB
* Express
* Node.js

## Approach Taken



### Featured Piece of Code no. 1

From `/controllers/authController.js`:
``` JavaScript
const loginUser = (req, res) => {
  User.findOne({ email: req.body.email}).then( user => {
    if(!user || req.body.password !== user.password){
      res.render('auth/failedLogin');
    } else {
      req.session.userId = user._id;
      res.redirect('/');
    }
  });
};
```

## MVP


### After some styling


### Featured Piece of Code no. 2

From `/models/restaurant.js`.
``` JavaScript
restaurantSchema.virtual('averageRating')
  .get(function() {
    const avgRating = this.reviews.reduce((total, review) => total + review.rating, 0) / this.reviews.length;
    if (this.reviews.length > 0){
      return Math.round(avgRating);
    } else {
      return 'None';
    }
  });
}
```


## Wins and Blockers


<!-- The biggest win, by far, was the amount of confidence I gained working with JavaScript during this project. I got the opportunity to apply my new learnings in a real-world project and achieved more than I had set out at the start. -->

## Future Content

There are a number of potential future features I could implement, such as:

* Adding map functionality, for locating restaurants and geographical tagging
* Search/sort by cuisine, rating, distance
* Adding other services to rate, like hotels, car rentals, movies, books etc.
* Review moderation
* Password encryption
