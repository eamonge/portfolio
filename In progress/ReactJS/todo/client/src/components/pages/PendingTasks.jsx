import React, { useContext, useEffect, useState } from 'react'
import { getPendingTasks } from '../api/tasksAPI'
import DataContext from '../context/DataContextProvider';
import '../styles/pending.css';

const PendingTasks = () => {
  const [pendingTaskData, setPendingTaskData] = useState([]);
  const { userData } = useContext(DataContext);


  const handleFetchData = async () => {
    // usrId = userData.personID;
    getPendingTasks(userData.personID)
      .then(items => {
        setPendingTaskData(items);
      })
      .catch(err => {
        console.log(err);
      })
  };

  useEffect(() => {
    handleFetchData();
  }, [])

  return (
    <div>
      <ul>
        {
          pendingTaskData.length > 0 ? (
            pendingTaskData.map((tasks) =>
              <li key={tasks.taskID}>
                {tasks.TaskTitle}
              </li>
            )
          ) : "No items"
        }
      </ul>
    </div>
  )
}

export default PendingTasks