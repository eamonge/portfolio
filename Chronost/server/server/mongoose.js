var mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.db_username}:${process.env.db_pwd}@cluster0.vfi5s3l.mongodb.net/?retryWrites=true&w=majority`,
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Database connected!'))
.catch((error) => console.log(error));

module.exports = mongoose;