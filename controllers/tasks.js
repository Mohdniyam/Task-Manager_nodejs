const Task = require("../models/Tasks.js");
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).send({ tasks });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).send({ task });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).send({ msg: `Task Id not found : ${taskID}` });
    }
    res.status(201).send({ task });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).send({ msg: `Task Id not found : ${taskID}` });
    }
    res.status(200).send({ task });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new : true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send({ msg: `Task Id not found : ${taskID}` });
    }
    res.status(200).json({ task });

  }
   catch (error) {
    res.status(500).send({ msg: error });
  }
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
