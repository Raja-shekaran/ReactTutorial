import { useState } from "react";
import SecondComponent from "./SecondComponent";

export default function FirstComponent() {
  //name is used to print or get value stored in it
  //setName is used to set or assign a value to it
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  //String a = ''

  //   function passRaja(){
  //     setName('Raja')
  //     //a = 'Raja'
  //   }

  //   function passNk(){
  //     setName('Nk')
  //     //a = 'Nk'
  //   }

  function onChangeEventHandler(event) {
    setValue(event.target.value)
  }

  function onClickSubmitEventHandler() {
    setName(value)
  }

  function onClickResetEventHandler() {
    //clear textbox
    
    //clear state
    setName('')
  }

  return (
    <div>
      {/* <table>
        <th>Names</th>
        <tr>
          <td onClick={passRaja}>Raja</td>
        </tr>
        <tr>
          <td onClick={passNk}>Nk</td>
        </tr>
      </table> */}

      {/* click - event
      onClick - evenHandler
      onClickSubmitEventHandler - eventHandlerFunction */}

      <input name="textbox" type="text" onChange={event => onChangeEventHandler(event)} />
      <button onClick={onClickSubmitEventHandler}>Submit</button>
      <button onClick={onClickResetEventHandler}>Reset</button>

      <SecondComponent name={name} />
    </div>
  );
}

//TODO - COmplete reset function