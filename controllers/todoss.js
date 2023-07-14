//App Logic Goes Here

import { list } from "../models/Todo.js";

//get Request : get_todo function
export const getTodo = async (req, res) => {
  const alltodos = await list.find({});
  // console.log(alltodos);
  try {
    res.send(alltodos);
  } catch (error) {
    res.status(400).send(error);
  }
};

//post_todos
export const postTodo = async (req, res) => {
  try {
    const { title, checked } = req.body;
    const newTodo = new list({
      title,
      checked,
    });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//Edit Todos

export const editTodo = async (req, res) => {
  try {
    const { todoId } = req.body; //ID must comes fro req.body not from params
    console.log(todoId);
    const { title } = req.body;
    console.log(title);
    const updatedTodo = await list.findByIdAndUpdate(
      todoId,
      { title },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//Delete One todo

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(typeof id);
    console.log({ id });
    await list.findByIdAndRemove(id);
    // console.log(todoId);
    res.sendStatus(204);
    console.log("Successfully Removed ID", id);
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteManyTodo = async (req, res) => {
  try {
    const { todoIds } = req.body;
    console.log(todoIds);
    await list.deleteMany({ _id: { $in: todoIds } });
    res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting todos:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
