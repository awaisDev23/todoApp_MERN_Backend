import "./controllers/todoss.js";
import "./models/Todo.js";
import "./routes/todo.js";

import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import router from "./routes/todo.js";

const app = express();
const PORT = 5005;

// Middleware
app.use(cors()); //cors must be used before routes
app.use(express.json());
app.use("/", router);

// Mongoose configuration
connect("mongodb://127.0.0.1:27017/tododatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// // Mongoose schema and model
// const todoSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   checked: {
//     type: Boolean,
//     default: false,
//   },
// });

// const Todo = model("Todo", todoSchema);

// Routes
// app.get("/todos", async (req, res) => {
//   try {
//     const todos = await Todo.find();
//     res.json(todos);
//   } catch (error) {
//     console.error("Error fetching todos:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.post("/todos", async (req, res) => {
//   try {
//     const { title, checked } = req.body;
//     const newTodo = new Todo({
//       title,
//       checked,
//     });
//     const savedTodo = await newTodo.save();
//     res.json(savedTodo);
//   } catch (error) {
//     console.error("Error adding todo:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

//Edit (text)
// app.put("/todos/:todoId", async (req, res) => {
//   try {
//     const { todoId } = req.params;
//     const { title } = req.body;
//     const updatedTodo = await Todo.findByIdAndUpdate(
//       todoId,
//       //   { checked },
//       { title },
//       { new: true }
//     );
//     res.json(updatedTodo);
//   } catch (error) {
//     console.error("Error updating todo:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

//Delete ONE with ID
// app.delete("/todos/:todoId", async (req, res) => {
//   try {
//     const { todoId } = req.params;
//     await Todo.findByIdAndRemove(todoId);
//     res.sendStatus(204);
//   } catch (error) {
//     console.error("Error deleting todo:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

//Delete Multiple:with Checked Items
// app.delete("/todos", async (req, res) => {
//   try {
//     const { todoIds } = req.body;
//     await Todo.deleteMany({ _id: { $in: todoIds } });
//     res.sendStatus(204);
//   } catch (error) {
//     console.error("Error deleting todos:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
