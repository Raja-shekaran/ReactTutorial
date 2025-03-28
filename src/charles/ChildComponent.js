import { useContext } from "react";
import MessageContext from "./MessageContext";

const ChildComponent = () => {
    const message = useContext(MessageContext) //hook
    return <div>
        {message}
    </div>
}

export default ChildComponent;