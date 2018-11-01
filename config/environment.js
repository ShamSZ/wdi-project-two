const port = process.env.PORT || 4000;
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/restaurants';



module.exports = {
  port: port,
  dbUri: dbUri
};
