import React, { useEffect, useState } from 'react'
import '../styles/landing.css';

const initialList = [
  {
    "itemID": 1,
    "itemName": "A",
    "isComplete": false
  },
  {
    "itemID": 2,
    "itemName": "B",
    "isComplete": false
  },
  {
    "itemID": 3,
    "itemName": "C",
    "isComplete": false
  },
  {
    "itemID": 4,
    "itemName": "D",
    "isComplete": false
  },
  {
    "itemID": 5,
    "itemName": "E",
    "isComplete": false
  },
]

const Landing = () => {
  const [data, setData] = useState([]);

  const setListData = async () => {
    setData(initialList);
  };

  const handleDelete = async val => {
    let itemIdToRemove = val;
    // let indexToRemove = list.findIndex(item => item.itemID === itemIdToRemove);

    // if (indexToRemove !== -1) {
    //   list.splice(indexToRemove, 1);
    // }
    // setListData();

    const updatedList = data.filter(item => item.itemID !== itemIdToRemove);
    setData(updatedList);
    console.log(updatedList);
  }

  useEffect(() => {
      setListData();
  }, []);

  return (
    <div className="main-backDrop">
      <div className="landingContent">
        <h1>ToDo List</h1>
        <input placeholder='Add to do' className='contentInput' />
        <ul>
          {data.length > 0 ? (
            data.map((items) =>
              <li>
                <input type='checkbox' style={{ marginRight: '1em' }} />
                {items.itemName}
                <button onClick={() => handleDelete(items.itemID)}>X</button>
              </li>
            )
          ) : "No items"}
        </ul>
      </div>
    </div>
  )
}

export default Landing