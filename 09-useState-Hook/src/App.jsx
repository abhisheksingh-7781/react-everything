import React, { useState } from 'react'

const App = () => {
    const [num, setnum] = useState(20)
    const [user, setuser] = useState("golu")
    const [users, setUsers] = useState(["rahul"," ","vikash"," ","ramu"])
  return (
    <div className='m-20  '>
        <h1>Hello i am {user} and my age is {num} <br/> and my friend name is {users} </h1>
        <button className='bg-gray-500 px-1 py-2 rounded  ' onClick={()=>{ setnum(100),setuser("Abhishek") , setUsers(["Alok"," "," Akash"])}}>Click me </button>
    </div>
  )

}

export default App