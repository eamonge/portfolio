import axios from 'axios';
import { useState } from 'react';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

//Pulls task data by client ID
export const getTaskData = async personID => {
    try {
        const taskData = await axios.get(`${BASE_URL}/tasks/${personID}`);
        return taskData.data;
    } catch (err) {
        console.log('Error fetching task data: ', err);
    }

};

//Adds task
export const addTask = async (personID, taskTitle) => {
    try {
        const res = await axios.post(`${BASE_URL}/tasks/add/${personID}`, {
            taskTitle: taskTitle
        });
        console.log('item added!');
    } catch (error) {
        console.log(`Error throwing data: ${error}`)
    }
};

//Deletes task personID, taskID
export const deleteTask = async (taskId, userID) => {
    try {
        await axios.delete(`${BASE_URL}/tasks/${userID}/${taskId}`);
    } catch (error) {
        console.log(`Error deleting task: ${error}`)
    }
}

export const updateTaskStatus = async (taskId, userID, isCompleteUpdated) => {
    try {
        const update = await axios.patch(`${BASE_URL}/tasks/${userID}/${taskId}`, {
            updatedComplete: isCompleteUpdated
        });
        return update;
    } catch (error) {
        console.log(`Error deleting task: ${error}`)
    }
}

export const getPendingTasks = async personID => {
    try {
        const pendingTaskData = await axios.get(`${BASE_URL}/tasks/pending/${personID}`);
        return pendingTaskData.data;
    } catch (err) {
        console.log('Error fetching task data: ', err);
    }
}

export const getCompletedTasks = async personID => {
    try {
        const completedTaskData = await axios.get(`${BASE_URL}/tasks/completed/${personID}`);
        return completedTaskData.data;
    } catch (err) {
        console.log('Error fetching task data: ', err);
    }
}