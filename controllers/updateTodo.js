//import the model
const Todo = require("../models/Todo");

//define route handler
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        // Corrected syntax for findByIdAndUpdate
        const todo = await Todo.findByIdAndUpdate(
            id, // pass id directly
            { title, description, updatedAt: Date.now() }, // update object
            { new: true } // options object to return updated document
        );

        res.status(200).json({
            success: true,
            data: todo,
            message: `Data updated successfully`,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server Error",
        });
    }
};
