import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="pawan" age="21" img="https://images.unsplash.com/photo-1751958801579-6af86cdcd8e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600"/>
      <Card user="Himanshu" age="28" img="https://images.unsplash.com/photo-1755230838541-98bd1195d5bf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600"/>
      <Card user="Abhishek" age="23" img="https://images.unsplash.com/photo-1499026008573-50eedca8407b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"/>
    </div>
  )
}

export default App