import { useState } from 'react'

type AuthUser = {
    name: string,
    email: string
}

const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const handleLoggin = () => {
        setUser({
            name: "Aung Naing Tun",
            email: 'ant.pwt@gmail.com'
        })
    }
    const handleLoggout = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLoggin}>LoggIn</button>
            <button onClick={handleLoggout}>LoggOut</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}

export default User