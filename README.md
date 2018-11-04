# General Assembly WDI Project 2: Rating Ninja

[Heroku](https://rating-ninja.herokuapp.com/)

[GitHub Repo](https://github.com/ShamSZ/wdi-project-two)

Rating Ninja is a web application that uses MongoDB, Express and Node.js to store a collection of user added data such as Restaurants. It utilises user authentication to register and log a user in to allow them to make changes to their own data and to add reviews to all restaurants.

Rating Ninja is my second project from General Assembly's Web Development Immersive. It was an individual project built in a week, and was my first multi-page, web app that didn't only involve working with the front-end. Working on this project helped me understand the basics of working with databases using Node.js packages and Models.

## Screenshots of all screens

## Brief


You should create a platform for reviewing restaurants that meets the following minimum criteria:
MVP

Technical Requirements
Your app must:
Have at least 2 models – one representing a user and one that represents the main resource of your app.
Include relationships - embedded or referenced.
The app should include authentication.
Have complete RESTful routes for at least one of your resources with all CRUD actions.
Be deployed online and accessible to the public.


## Technologies Used

* EJS
* CSS3
* Bulma Framework
* JavaScript (ECMAScript 6)
* Git
* GitHub
* Heroku
* MongoDB
* Express
* Node.js

## Approach Taken

### Featured Piece of Code no. 1

From `/app.js`.
``` JavaScript
const loginUser = (req, res) => {
  User.findOne({ email: req.body.email}).then( user => {
    if(!user){
      res.render('auth/failedLogin');
    } else {
      if (req.body.password === user.password){
        console.log('Correct password. Logging user in...');
        req.session.userId = user._id;
        res.redirect('/');
      } else {
        res.render('auth/failedLogin');
      }
    }
  });
};
```

## MVP

### After some styling


### Featured Piece of Code no. 2

From `/style.css`.
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

One of the problems I had initially, was the removal of  debris after it had left the grid; the console would return many errors stating it couldn't remove the class of undefined - I managed to get around this by limiting the movement of the debris only within the 10x20 grid.

The biggest win, by far, was the amount of confidence I gained working with JavaScript during this project. I got the opportunity to apply my new learnings in a real-world project and achieved more than I had set out at the start.

## Future Content

Along with adding the shooting functionality, there are a number of potential future features I'd like to implement, such as:
* Boss game-mode, where the player must destroy an alien being that fires multiple projectiles at the player
* An additional player(2nd spacecraft) that can help with Boss mode or just play Arcade mode to see who can score more points
* Ability to choose from a variety of spacecraft with different images, survivability and weaponry
* Ability to increase the grid size
* Authentication so users can keep track of their highest scores, compare it to other players globally, develop their spacecraft with upgrades and achievements
* And much more!
