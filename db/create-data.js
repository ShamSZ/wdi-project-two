const mongoose = require('mongoose');
const env = require('../config/environment');
const Restaurant = require('../models/restaurant');
const User = require('../models/user');
Restaurant.collection.drop();
User.collection.drop();

mongoose.connect(env.dbUri, { useNewUrlParser: true });

const userData = [
  {
    username: 'Sham',
    email: 'sh@m',
    password: 'pass',
    profilePic: 'http://purepng.com/public/uploads/large/purepng.com-ninjashinobininjacovert-agentassassinationguerrilla-warfaresamuraiclip-art-1421526960616u3iia.png'
  }
];

User.create(userData).then((users) => {
  console.log(`Created ${users.length} new users.`);
  const restaurantsData = [
    { name: 'Franco Manca',
      price: 1,
      description: 'Sourdough pizza',
      cuisine: 'Pizza',
      image: 'https://www.francomanca.co.uk/wp-content/uploads/2018/05/Ealing-external-1-4811-1000x723.jpg',
      address: '10 Widmore Rd, Bromley BR1 1RY',
      restAuthor: users[0]
    },
    { name: 'McDonalds',
      price: 1,
      description: 'Classic, long-running fast-food chain known for its burgers, fries & shakes.',
      cuisine: 'Fast Food',
      image: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/04/03/667939-mcdonald-s-meal.png',
      address: 'High St, Bromley BR1 1DN',
      // restAuthor: '5bd6e6e147cd907e36fb0393'
      restAuthor: users[0]
    },
    { name: 'Cafe Rouge',
      price: 2,
      description: 'Chain bistro for French classics from croque-monsieurs to mussels in a retro Parisian setting.',
      cuisine: 'French',
      image: 'https://cdn.prezzybox.com/Images/43526.jpg',
      address: '12-13, Market Square, Bromley BR1 1NA',
      restAuthor: users[0]
    }
  ];
  Restaurant.create(restaurantsData).then((restaurants) => {
    console.log(`Created ${restaurants.length} new restaurants.`);
    mongoose.connection.close();
  });
});
