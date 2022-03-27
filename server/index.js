const express = require("express")
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());


app.listen(5000, () => {
    console.log("server has started on port 5000")
})

app.post("/todos", async (req, res) => {
    try {
    //   const { description } = req.body;
    //   const newTodo = await pool.query(
    //     "INSERT INTO todo (description) VALUES($1) RETURNING *",
    //     [description]
    //   );
  
    //   res.json(newTodo.rows[0]);
    console.log(req.body)
    } catch (err) {
      console.error(err.message);
    }
  });