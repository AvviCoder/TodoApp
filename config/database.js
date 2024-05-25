
// const mongoose = require("mongoose");

// require("dotenv").config();

// const dbConnect = () => {
//     mongoose.connect(process.env.DATABASE_URL, {
//         useNewUrlParser:true,
//         useUnifiedTopology: true,
//     })// if the command runs successfully....
//     .then(() => console.log("DB ka Connection is Successful"))
//     .catch( (error) => {
//         console.log("Issue in DB Connection");
//         console.error(error.message);
//         //this below line is used for termination of the code base on occurance of error
//         process.exit(1);
//     } );
// }

// module.exports = dbConnect;


// REPLICATING THE DATABASE CONNECTION CODE HERE......

const mongoose = require("mongoose");

require("dotenv").config();

const dbConnector = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => {
        console.log("The database connection has been done succesfully....");
    })
    .catch((error) =>{
        console.log("Error occured while connecting with the database...");
        console.log(error.message);
        // the below line shows about the unexpected exit of the code due to failure in connection with database
        process.exit(1);

    });
}

module.exports = dbConnector;