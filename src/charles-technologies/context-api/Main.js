import { useState } from "react"
import ParentComponent from "./ParentComponent"
import MessageContext from "./MessageContext"

const Main = () => {
    
    const message = useState('Hello from Context API') //state

    return(
        <MessageContext.Provider value={message}>
            <ParentComponent/>
        </MessageContext.Provider>
    )
}

export default Main