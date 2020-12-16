import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useState} from 'react'
function App(props) {
  const counter = useSelector((state)=>{
    return state;
  });
  const dispatch = useDispatch();

  const [text, setText] = useState("")
  
  const handleChange = (event) => {
    setText(event.target.value);
  }
  const handleAdd = () => {
    dispatch({
        type: 'add',
        payload: text
    })
    setText("")
  }
  return (
    <div>
      <div>
     Слово из стейта: {counter}  
    </div>
    <div>
    <input type="text" value={text} onChange={handleChange}/>
    </div>
    <div><button onClick={handleAdd}> add </button> </div>
    <div><button onClick={()=>dispatch({type: 'reset'})}> reset </button> </div>
    </div>
    
  );
}

export default App;
