


// const express = require("express");
// const app = express();

// //load config from env file
// require("dotenv").config();
// const PORT = process.env.PORT || 4000;

// //middleware to parse json request body
// app.use(express.json());

// //import routes for TODO API
// const todoRoutes = require("./routes/todos");

// //mount the todo API routes
// app.use("/api/v1", todoRoutes);


// //start server
// app.listen(PORT, () => {
//     console.log(`Server started successfully at ${PORT}`);
// })

// //connect to the database
// const dbConnect = require("./config/database");
// dbConnect();

// //default Route
// app.get("/", (req,res) => {
//     res.send(`<h1> This is Our HomePage......</h1>`);
// })


// cloning of the above code begins..

const express = require("express");
const app = express();

require("dotenv").config();

//middleware for parsing or fetching of data
app.use(express.json());

const PORT= process.env.PORT || 4000;

app.listen(PORT, () =>{
    console.log("The server has started on provided port");
})

const routes = require("./routes/todos");

// mouting the routes over a common path
app.use("/api/v1", routes);

const dbConnector = require("./config/database");
dbConnector();

app.get("/", (req,res)=>{
    res.send(`The backend server is ready to be operated`);
})
