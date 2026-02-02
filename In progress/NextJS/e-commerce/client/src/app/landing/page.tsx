'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function LandingPage() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = async () => {

        setIsLoggedIn(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        router.push('/login');
    }

  return (
    <div>
        Landing Page yeaa
        <button
            onClick={handleLogout}
            disabled={isLoggedIn}
        >
            { isLoggedIn ? "Logging out..." : "Logout"}
        </button>
    </div>
  )
}