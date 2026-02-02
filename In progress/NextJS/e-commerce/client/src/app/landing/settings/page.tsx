"use client";
import React from 'react'
import styles from './page.module.css';

export default function UserSettings() {
  return (
    <div className={`${styles["landingWrapper-content"]} ${styles.wrapper}`}>
      <h1>User settings page</h1>
      <form>
        <img
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAJSplpFJrMtBJjLoUQzCC8lctxqDn9RS1g&s'}
          alt='EM'
          width={75}
          height={75}
        />
        <input
          placeholder='First name'
          className={styles["inputFormUserData"]}
          type='text'
          required
        />
        <input
          placeholder='Last name'
          className={styles["inputFormUserData"]}
          type='text'
          required
        />
        <input
          placeholder='Email'
          className={styles["inputFormUserData"]}
          type='text'
          required
        />
        <input
          placeholder='Password'
          className={styles["inputFormUserData"]}
          type='password'
          required
        />
        <input
          placeholder='Confirm password'
          className={styles["inputFormUserData"]}
          type='password'
          required
        />
        <input
          placeholder='DoB'
          className={styles["inputFormUserData"]}
          type='date'
          required
        />
        <button
          type='button'
          className={`positive-action ${styles["confirmButton"]} ${styles["actionBtn"]}`}
        >
          Update information
        </button>
        <br />
        <br />
        <button
          type='button'
          className={`negative-action ${styles["confirmButton"]} ${styles["actionBtn"]}`}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}