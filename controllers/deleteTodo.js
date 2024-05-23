//import the model
const Todo = require("../models/Todo");

//define route handler
exports.deleteTodo = async(req, res) => {
    try {
        // getting the id of the data to be deleted
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        
        res.json ({
            success: true,
            message: "data for provided id is deleted",
        })
    } catch (err) {
        console.error(err);
        res.status(500).json(
            {
                success:false,
                error:err.message,
                message:"Server Error",
            }
        ); 
    }
};
