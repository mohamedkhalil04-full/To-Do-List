
import { useRef, useState } from 'react';
import './App.css';


function App() {

  const [x, setx] = useState([])

  const inputRef = useRef()
  const add = () => {

    const value = inputRef.current.value
    const newData = { completed: false, value }
    if (inputRef.current.value !== "") {

      setx([...x, newData])
      inputRef.current.value = ""
    }
  }
  const addByEnter = (event) => {
    if (event.key === 'Enter') {
      add()
    }
  }
  const itemDone = (index) => {
    const newx = [...x]
    x[index].completed = !x[index].completed
    setx(newx)
  }

  const deleteone = (index) => {
    const newx = [...x]
    newx.splice(index, 1)
    setx(newx)
  }
  return (
    <div className="App">
      <div className='container '>

        <h2 className='title'>To Do List</h2>

        <input type='text' onKeyDown={addByEnter} ref={inputRef} placeholder='Enter new task ....' />
        <button onClick={add}>add task</button>

        <ul>
          {x.map((item, index) => {
            return <div id='content' >
              <li className={item.completed ? "differentStyle" : ""} onClick={() => itemDone(index)}>{item.value}</li>
              <span onClick={() => deleteone(index)}><i class="fa-solid fa-trash"></i></span>
            </div>
          })}

        </ul>

      </div>

    </div>
  );
}

export default App;
