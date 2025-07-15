const { getTasks, addTask, deleteTask, updateTaskState, getPendingTasks, getCompletedTasks } = require('../models/tasksModel');

const router = require('express').Router();

//Gets all tasks for user
router.get('/:id', async (req, res) => {
    const UserId = req.params.id;

    try {
        const tasks = await getTasks(UserId);
        res.json(tasks);
    } catch (err) {
        res.status(500).send(`Error fetching tasks: ${err}`);
    }
});

//Adds task
router.post('/add/:id', async (req, res) => {
    const UserId = req.params.id;
    const {taskTitle} = req.body;

    try {
        const tasks = addTask(UserId, taskTitle);
        res.json(tasks);
    } catch (err) {
        res.status(500).send(`Error adding tasks: ${err}`);
    }
});

//Delete task
router.delete('/:userid/:taskId', async (req, res) => {
    // const {userid, taskId} = req.params;
    const userid = req.params.userid;
    const taskId = req.params.taskId;

    try {
        const taskDeleted = deleteTask(taskId, userid);
        res.json(taskDeleted);
    } catch (err) {
        res.status(500).send(`Error adding tasks: ${err}`);
    }

});

//Updates task isComplete
router.patch('/:userid/:taskId', async (req, res) => {
    const userid = req.params.userid;
    const taskId = req.params.taskId;
    const {updatedComplete} = req.body;

    try {
        const taskUpdate = updateTaskState(taskId, userid, updatedComplete);
        res.json(taskUpdate);
    } catch (err) {
        res.status(500).send(`Error adding tasks: ${err}`);
    }

});

//get pending tasks
router.get('/pending/:id', async (req, res) => {
    const UserId = req.params.id;
    try {
        const tasks = await getPendingTasks(UserId);
        res.json(tasks);
    } catch (err) {
        res.status(500).send(`Error fetching tasks: ${err}`);
    }

});

//get pending tasks
router.get('/completed/:id', async (req, res) => {
    const UserId = req.params.id;
    try {
        const tasks = await getCompletedTasks(UserId);
        res.json(tasks);
    } catch (err) {
        res.status(500).send(`Error fetching tasks: ${err}`);
    }

});

module.exports = router;