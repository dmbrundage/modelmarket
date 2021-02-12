const mongoose = require('mongoose');
const connection_string = "mongodb+srv://<username>:<password>@cluster0.4gsz2.mongodb.net/<db></db>?retryWrites=true&w=majority";
//const connection = mongoose.connect(connection_string)
mongoose.connect(connection_string, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Database Connected Successfully", mongoose.connection.db.listCollections().toArray(function (err, names) {
        if (err) {
            console.log(err);
        } else {
            console.log(names);
        }
    })))
    .catch(err => console.log(err));
