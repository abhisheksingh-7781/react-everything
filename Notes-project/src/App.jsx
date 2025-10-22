import { useState } from 'react';
import { X } from 'lucide-react';


const App = () => {

    const [title, setTitle] = useState('')
    const [details, setdetails] = useState("")
    const [task, setTask] = useState([])


   const submitHendler=(e)=>{
        e.preventDefault()
        const copyTask=[...task];
        copyTask.push({title,details})
        setTask(copyTask)
       
        setTitle("")
        setdetails("")
   }

   const DeleteHendler=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
   }
    


    return (
        <div className=' h-screen  lg:flex bg-black text-white'>

            <form onSubmit={(e)=>{
                submitHendler(e)
            }}
             className=' flex gap-4  lg:w-1/2 p-10 flex-col items-start'>
                <h1 className='text-4xl font-bold'>Add Notes</h1>
                <input 
                type="text"
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                    placeholder='Enter Notes Heading'
                    className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
                />

                <textarea
                    type="text"
                    onChange={(e)=>{setdetails(e.target.value)}}
                    value={details}
                    placeholder='Enter Notes Heading'
                    className='px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded'

                > </textarea>

                <button className='bg-white font-medium w-full outline-none text-black px-5 py-2 rounded '>Add Notes</button>

            </form>
            <div className=' lg:w-1/2 lg:border-l-2 p-10 '>
                <h1 className='text-4xl font-bold '>Your Notes</h1>
                <div className=' flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
                    {task.map((elem,idx)=>{
                        return <div key={idx} className=' relative h-52 w-40 bg-cover rounded-2xl text-black py-7 px-4 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
                             <h2 onClick={()=>{DeleteHendler(idx)}} className=' absolute top-5 right-5 bg-red-500 rounded-full p-1'><X size={16} strokeWidth={1.5} /></h2>
                             <h3 className='text-xl font-bold leading-tight '>{elem.title}</h3>
                             <p className='mt-2  leading-tight font-medium text-gray-400'>{elem.details}</p>
                        </div>
                    })}   
                </div>   
            </div>      
        </div>         
    )
}

export default App


