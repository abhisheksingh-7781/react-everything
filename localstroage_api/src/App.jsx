import React from 'react'

const App = () => {
 
    const data=localStorage.setItem("hello","hii i am abhishek singh")

 
 const user=localStorage.getItem("data")
 console.log(JSON.parse(user));
 
    
    

  return (
    <div>
        Hello
    </div>
  )
}

export default App