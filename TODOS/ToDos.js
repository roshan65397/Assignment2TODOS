
import React, { useState } from "react";
import "./styles.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const displayItem = { textDecoration: "line-through" };
  function handleOnChange(e) {
    setInputText(e.target.value);
    setIsDone(false);
  }
  function addItem() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  function itemClick(e) {
    setIsDone(isDone === true ? false : true);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={inputText} onChange={handleOnChange} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return (
              <li>
                <span onClick={itemClick}  style={isDone ? displayItem : null} className="lItems">
                  {item}
                </span>
            
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;


// import React,{useState} from 'react';
// // import Note from './Note';



// export default function Home  () {
//     const [inputText,setText]=useState("");
//     const [items,setItem]=useState([]);

     
  
//     // const [isDone,setIsDone]=useState(false);
//     function handleOnclick (e) {
//          setItem(prevValue=>{
//            return [...prevValue,inputText]
//          })
//          setText("")
//     }

//     function handleOnchange(e){
//          setText(e.target.value);
//     }
//   return <div>
      
      
//       <h1>Todo List</h1>
//        <p>Add Todo</p>
//        {/* {console.log(detail)} */}
//       <input  value={inputText} type={'text'} onChange={handleOnchange} placeholder='Add new todo'/> 
//       <button type='button' onClick={handleOnclick}>Add</button>
//       <ul>
//         {items.map(item=>{
//          return <li><span>{item}</span></li>
//         })}
//       </ul>
    
//   </div>;
// };
