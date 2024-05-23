//import the model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res) => {
    try {
        // fetch all the data from the database
            const todos = await Todo.find({});

            // updating the response 
            res.status(200).json(
                {
                    success:true,
                    data:todos,
                    message:"Entire Todos data is fetched from the database",
                }
            );

    }
    catch(err) {
        console.error(err);
        res.status(500).json(
            {
                success:false,
                error:err.message,
                message:"Server Error",
            }
        );
    }
}


exports.getTodoById = async(req, res)=>
{
    try{
          // extract data based on id of the data in the database
          //getting the id of the data to be fetched
          const id = req.params.id;
          // due to database interaction there is a pause through await keyword in the code
          const todo = await Todo.findById({_id: id});
          
          // data for the entered id not found
          if(!todo)
          {
            return res.status(404).json
            (
                {
                    success: false,
                    message:"No Data Found with Given id",
                }
            )
          }
          // if the data is successfull fetched
           
          res.status(200).json({
            success:true,
            data: todo,
            message:`Todo ${id} data is successfully fetched`,
          })
           

    }
    catch(err)
    { 
        console.error(err);
        res.status(500).json(
            {
                success:false,
                error:err.message,
                message:"Server Error",
            }
        ); 

    }
}