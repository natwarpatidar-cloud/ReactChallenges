import { useState } from "react";
/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const addCities = () => {
    //Complete function
    if(todo == "") return;
    setTodos(p => [...p, todo]);
    setTodo('');
  };

  const deleteCities = (index) => {
    setTodos(p => p.filter((e, i) => i != index));
  }

  return (
    <div className="App">
      <input onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="Add city name..." />
      <button onClick={addCities}>Add</button>

      <ul>
        {
          todos?.map((item, index) =>  {
            return (
              <div key={index}>
                <li key={index}>{item}</li>
                <button onClick={() => deleteCities(index)}>X</button>
              </div>
            )
          })
        }
      </ul>
    </div>
  );
}