import { useState } from "react";

function App() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  
  const addElement = () => {
    const newElement = arr.length + 1;
    const newArr = [...arr, newElement];

    setArr(newArr);
  };

  return (
    <div>
      {
        arr.map((a)=> (
          <p>{a}</p>
        ))
      }
      <button onClick={addElement}>Add Element</button>
    </div>
  )
}

export default App
