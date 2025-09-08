import React from 'react'

const BulkChange = () => {
  return (
    <div>
        <h1>BULK SCHEDULE CHANGE REQUEST</h1>
        <form>
            <label>From:</label>
            <br />
            <input placeholder='From' type='date'/>
            <br />
            <label>To:</label>
            <br />
            <input placeholder='From' type='date'/>

        </form>
    </div>
  )
}

export default BulkChange