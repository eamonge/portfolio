import React, { useEffect, useState, useContext } from 'react'
import DataContext from '../context/DataContextProvider'
import { addTask, deleteTask, getTaskData, updateTaskStatus } from '../api/tasksAPI';
import ItemPopup from './ItemPopup';




const AllTasks = () => {
    const { userData } = useContext(DataContext)
    const [taskData, setTaskData] = useState([]);
    const [popupItem, setPopupItem] = useState(false);
    const [itemID, setItemID] = useState("");
    const [taskTitle, setTaskTitle] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    const handleFetchTasks = async () => {
        getTaskData(userData.personID)
            .then(items => {
                setTaskData(items);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();

            if (taskTitle == "") {
                setAlertMessage("Please add a title!");
            } else {
                handleAddTask();
                setAlertMessage("");
            }
        }
    }

  const handleChange = async (e) => {
    setTaskTitle(e.target.value);
  }

    const handleAddTask = async () => {
        const clientID = userData.personID;

        try {
            await addTask(clientID, taskTitle);
            setTaskTitle("");
            handleFetchTasks();
        } catch (err) {
            console.group('Error adding task: ', err)
        }
    };

    const handleDeletTask = async taskID => {
        try {

            await deleteTask(taskID, userData.personID);
            handleFetchTasks();
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = async (taskId, userid) => {
        const item = taskData.find(item => item.taskID === taskId);

        if (!item) return;

        const newStatus = !item.isComplete;

        try {
            await updateTaskStatus(taskId, userid, newStatus);

            //Update local state if API succeeds
            const updateTaskData = taskData.map(item =>
                item.taskID === taskId ? { ...item, isComplete: newStatus } : item
            );
            setTaskData(updateTaskData);
        } catch (err) {
            console.log('Error updating task status: ', err);
        }
    }

    useEffect(() => {
        handleFetchTasks();
    }, []);
    return (
        <div>
            <input
                placeholder='Add to do'
                className='contentInput'
                value={taskTitle}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <ul>
                {
                    taskData.length > 0 ? (
                        taskData.map((tasks) =>
                            <li key={tasks.taskID}>
                                <input
                                    type='checkbox'
                                    checked={tasks.isComplete}
                                    onChange={() => handleUpdate(tasks.taskID, userData.personID)}
                                    style={{ marginRight: '1em' }}
                                />
                                <span
                                    onClick={(e) => { setPopupItem(true); setItemID(tasks.TaskTitle) }}
                                    style={{ textDecoration: tasks.isComplete ? 'line-through' : 'none' }}
                                >
                                    {tasks.TaskTitle}
                                </span>
                                <button onClick={() => handleDeletTask(tasks.taskID)}>X</button>
                            </li>
                        )
                    ) : "No items"
                }
            </ul>
            <ItemPopup trigger={popupItem} setTrigger={setPopupItem} itemId={itemID} setItemId={setItemID} />
        </div>
    )
}

export default AllTasks