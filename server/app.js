const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Todo = require('./Todo');

const app = express();

app.use(express.json());
app.use(cors());

//add todo
app.post('/tasks', async (req, res) => {
  try {
    await Todo.create(req.body);
    res.json({ status: 'success' });
  } catch (error) {
    res.json({ status: 'failed' });
  }
});
//get all todos
app.get('/tasks', async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json({ status: 'success', todos });
  } catch (error) {
    res.json({ status: 'failed' });
  }
});
//get one todo
app.get('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    res.json({ status: 'success', todo });
  } catch (error) {
    res.json({ status: 'failed' });
  }
});
//delete one todo
app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    res.json({ status: 'success' });
  } catch (error) {
    res.json({ status: 'failed' });
  }
});
//edit todo
app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findByIdAndUpdate(id, req.body);
    res.json({ status: 'success' });
  } catch (error) {
    res.json({ status: 'failed' });
  }
});
//edit todo
app.delete('/clear', async (req, res) => {
  try {
    await Todo.deleteMany({});
    res.json({ status: 'success' });
  } catch (error) {
    res.json({ status: 'failed' });
  }
});

mongoose
  .connect('mongodb://localhost:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    app.listen(5000, () => {
      console.log(`listening on port 5000`);
    });
  })
  .catch(() => {
    console.log('mongoose connection failed');
  });
