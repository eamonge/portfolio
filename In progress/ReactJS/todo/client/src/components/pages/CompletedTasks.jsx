import React, { useEffect, useState, useContext } from 'react'
import { getCompletedTasks, getPendingTasks } from '../api/tasksAPI'
import DataContext from '../context/DataContextProvider';

const CompletedTasks = () => {
  const [completedTaskData, setCompletedTaskData] = useState([]);
  const { userData } = useContext(DataContext);

  const handleFetchData = async () => {
    // usrId = userData.personID;
    getCompletedTasks(userData.personID)
      .then(items => {
        setCompletedTaskData(items);
      })
      .catch(err => {
        console.log(err);
      })
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div>
      <ul>
        {
          completedTaskData.length > 0 ? (
            completedTaskData.map((tasks) =>
              <li key={tasks.taskID} style={{textDecoration: 'line-through'}}>
                {tasks.TaskTitle}
              </li>
            )
          ) : "No items"
        }
      </ul>
    </div>
  )
}

export default CompletedTasks