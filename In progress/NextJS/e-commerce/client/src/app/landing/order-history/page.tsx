import React from 'react'
import styles from './page.module.css';

export default function OrderHistoryComponent() {
  return (
    <div className='landingWrapper-content'>
      <h1>Order history</h1>
      <table>
        <thead>
          <tr>
            <th scope='col'>Img</th>
            <th scope='col'>Name</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Account">
              <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAJSplpFJrMtBJjLoUQzCC8lctxqDn9RS1g&s'} width={75} height={75}/>
            </td>
            <td>Item #1</td>
            <td>3</td>
            <td>134.23</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}