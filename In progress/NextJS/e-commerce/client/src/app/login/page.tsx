'use client';
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

type LoginFormData = {
  email: string;
  password: string;
};

export default function page() {

  // redirect logic
  const router = useRouter();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Login logic
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData)

    const uNameInput = formData.email;
    const uPwdInput = formData.password;

    if (!uNameInput || !uPwdInput) {
      console.log("Missing data");
      return;
    }

    if (uNameInput !== "aa" || uPwdInput !== "bb") {
      console.log("Incorrect username or password");
      return;
    }

    console.log("Logged in!");

    setIsLoggingIn(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    // 🚀 redirect
    router.push("/landing");
  };

  return (
    <div className={styles.teststs}>
      <div className={styles["modal-form"]}>
        <h1 className='title-h1'>
          Login user
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Email'
            name="email"
            className={styles["login-input"]}
            value={formData.email}
            onChange={handleChange}
          />
          <input
            placeholder='Contraseña'
            name="password"
            className={styles["login-input"]}
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <button
            type="submit"
            disabled={isLoggingIn}
          >
            {/* Log in */}

            {isLoggingIn ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  )
}