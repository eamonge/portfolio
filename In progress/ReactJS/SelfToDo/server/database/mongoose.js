var mongoose = require('mongoose');

mongoose.connect(process.env.DB)
.then(() => console.log('Connected to database!'))
.catch((error) => console.log(error));

module.exports = mongoose;


// mongodb+srv://elmo:<password>@elmocluster.flfb3qd.mongodb.net/

// mongodb+srv://elmo:${process.env.PASSWORD}@elmocluster.flfb3qd.mongodb.net/?retryWrites=true&w=majority&appName=ElmoCluster