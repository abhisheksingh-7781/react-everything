import { createContext, useState } from "react"

 export const ThemChange= createContext()
    const ThemContext = (props) => {

        const [them, setThem] = useState("dark")

      return (
        <div>
            <ThemChange.Provider value={[them,setThem]} >
                   {props.children}  
           </ThemChange.Provider>     
        </div>
  )    
}      
       
export default ThemContext

