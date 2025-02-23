//Component - js function which returns an html element - JSX
import axios from 'axios';
import { useState } from 'react';

function ImageGenerator() {

  // function makeCall(){
    
  // }

  const [ response , setResponse ] = useState([]); //react hooks

  const makeCall = () => {
    axios.get('https://fake-json-api.mock.beeceptor.com/users').then( res =>
      setResponse(res.data[0])
    )
  }// ES6 Function

  return (
    <div>
        <button onClick={makeCall}>Click Me !</button>
        <br />
        <input id='name' type='text' value={response.name}/>
        <br />
        <img src={response.photo} alt=''/>
    </div>
  );
}

export default ImageGenerator;
