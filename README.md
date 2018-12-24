# **Project 2: Rating Ninja** <img align="right" src="https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67"/>
## Overview

Rating Ninja is a web application that uses MongoDB, Express and Node.js to store a collection of user added data such as Restaurants. It utilises user authentication to register and log in a user to allow them to make changes to their own data and to add reviews to all restaurants.

Rating Ninja is my second project from General Assembly's Web Development Immersive. It was an individual project built in **one week**, and was my first multi-page, web app that didn't only involve working with the front-end. Working on this project helped me understand the basics of working with databases using Node.js packages and the MVC model.

Launch on [Heroku](https://rating-ninja.herokuapp.com/). Check out the GitHub [Repo](https://github.com/ShamSZ/wdi-project-two).


## Brief

Create a platform for reviewing restaurants that meets the following technical requirements:

* Have at least 2 models – one representing a user and one that represents the main resource of your app.
* Include relationships - embedded or referenced.
* Have complete RESTful routes for at least one of your resources with all CRUD actions.
* Be deployed online and accessible to the public.
* Have semantically clean HTML
* The app should include authentication - with encrypted passwords & an authorisation flow.
* The app should be styled with Bulma.

## Technologies Used

* EJS
* CSS3
* Bulma CSS Framework
* JavaScript(ES6)
* Git
* GitHub
* Heroku
* MongoDB
* Express
* Node.js

## Approach Taken
I started off by planning the routes I would need, general app structure and models: how many, fields & data types.

![notes](/readme-images/project2-notes.jpg)

Once I had this down on paper, It was easy to follow and I made progress quickly.


### Wireframes

The brief provided wireframes drawn up by GA's UXDI students:

![Wireframes](/readme-images/wireframes.png)
### Functionality
#### Average Ratings
To gauge each restaurants rating, I needed to calculate and display the average rating. Each review would be saved in an array within the restaurant object. It was better to use the existing data from the model instance rather than saving it as a separate property, so I created a virtual to calculate this each time that restaurant was called. The below code from `/models/restaurant.js` does that by summing all the review ratings and then dividing it by the number of reviews:


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

#### Embedded reference
As I had intended on creating a user edit page, I wanted to ensure that the reviews would be updated with any change to the users data, like username. So I referenced the user in the reviews author.

``` JavaScript
const restaurantSchema = mongoose.Schema({
  ...
  reviews: [{
    reviewAuthor: { type: mongoose.Schema.ObjectId, ref: 'User'},
    comment: String,
    rating: Number,
    createdAt: { type: String }
  }],
  ...
});
```
### Featured Piece of Code no. 1
The code below validates the user's credentials. If an incorrect email or password has been entered, a failed login page is rendered. There is only one extra line of text stating "Incorrect email or password". I thought this was a neat way of creating the illusion of a pop up message on the login page, without knowing how to create pop-up messages.

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

### Featured Piece of Code no. 2

Once I had reached MVP, I decided to add a User Edit page that would allow the user to edit their details and change their password. To add a layer of security, the form requested the old password to make any changes:
``` JavaScript
const updateUser = (req, res) => {
  if (req.body.oldPassword === res.locals.currentUser.password){
    User.findByIdAndUpdate(req.params.userId, req.body)
      .then(user => {
        res.redirect(`/users/${user._id}`);
      });
  }
};
```
## Screenshots

### MVP
![mvp index](/readme-images/mvp-index.png)

![mvp show](/readme-images/mvp-show.png)

![mvp new](/readme-images/mvp-new.png)

![mvp edit](/readme-images/mvp-edit.png)

### Final Product
![register](/readme-images/register.png)
**Home:**
![home](/readme-images/home.png)
![about](/readme-images/about.png)
**Hotels:**
![coming-soon](/readme-images/coming-soon.png)

![index1](/readme-images/index1.png)
![index2](/readme-images/index2.png)
![new](/readme-images/new.png)

![show1](/readme-images/show1.png)
![show2](/readme-images/show2.png)

![edit](/readme-images/edit.png)

**User profile**
![profile3](/readme-images/profile3.png)

**Current user's profile:**
![profile1](/readme-images/profile1.png)
![profile2](/readme-images/profile2.png)

![profile-edit](/readme-images/profile-edit.png)

## Bugs
Below is a list of some of the known bugs within the app:

* Review stars - When setting the rating, the stars don't indicate which value has been selected. This could be resolved by adding some styling once a selection has been made.
* Multiple reviews - If multiple reviews have been made on the same restaurant by the user, the profile page repeats the restaurant name multiple times as having been reviewed. Time permitting, I would have filtered the array of addedReviews to remove duplicates.


## Wins and Blockers
I was new to using the Bulma framework, so initially it was very slow progress as I had to search how to use this framework for every bit of styling I needed.

Tinkering with timestamps to get the date format as desired and HTML input options to get the 'right' selection method for price/star-rating was fun.

## Future Content

There are a number of potential future features I could implement, such as:

* Adding map functionality, for locating restaurants and geographical tagging.
* Search/sort by cuisine, rating, distance.
* Adding other services to rate, like hotels, car rentals, movies, books etc.
* Review/restaurant moderation.
* Password encryption.
* And much more!
