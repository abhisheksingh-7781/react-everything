
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {

  const users=[
    {
      img:"https://images.unsplash.com/photo-1696453424412-fe6ea4b2db54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=928",
      intro:"",
      tag:"Satisfied"
    },
     {
      img:"https://images.unsplash.com/photo-1752361421429-da1a23f7af70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      intro:"",
      tag:"UnderServed"
    },
     {
      img:"https://images.unsplash.com/photo-1664194909179-6629daf52b9d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGdpcmwlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
      intro:"",
      tag:"UnderServed"
    },
    {
      img:"https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro:"",
      tag:"UnderServed"
    },
   
  ]
  return (
    <div>
     <Section1 users={users} />
     <Section2 />
    </div>
  )
}

export default App