import { useState } from "react"

const Loggin = () => {
  const [isLoggedIn,setisLoggedIn] = useState(false)

  const handleLoggin = () => {setisLoggedIn(true)}
  const handleLoggout = () => {setisLoggedIn(false)}

  return (
    <div>
      <button onClick={handleLoggin}>LoggIn</button>
      <button onClick={handleLoggout}>LoggOut</button>
      <div>This User is {isLoggedIn ? 'Loggin' : 'loggout'}</div>
    </div>
  )
}

export default Loggin