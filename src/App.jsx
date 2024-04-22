import { useState } from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Task from "./Task";

function App() {
  const [nameText, setNameValue] = useState("");
  const [descText, setDescValue] = useState("");
  const [counter, setCounter] = useState(0);
  const [tStatus, settStatus] = useState(0);
  const [todos, setTodos] = useState([]);

  const FilterStatus = (item) => {
    settStatus(item);
  };

  // Event handler function to update the state when input changes
  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  // Event handler function to update the state when input changes
  const handleDescChange = (event) => {
    setDescValue(event.target.value);
  };

  const addTodo = () => {
    if (!nameText || !descText) {
      alert("Please fill in both Name and Description fields.");
      return; // Exit the function early if either field is empty
    }

    //console.log(`Name: ${nameText}, Desc: ${descText}\n`)
    // Create a new todo object
    const newTodo = {
      name: nameText,
      description: descText,
      id: counter,
      status: false,
    };
    setCounter((counter) => counter + 1);
    // Update the todos state with the new todo
    setTodos([...todos, newTodo]);

    // Clear the input fields after adding todo
    setNameValue("");
    setDescValue("");
  };

  const editTodo = (todoName, todoDesc, todoid) => {
    setNameValue(todoName);
    setDescValue(todoDesc);
    //    console.log(todoid);

    const newTodo = todos.filter((item) => item.id !== todoid);
    setTodos(newTodo);
  };
  const removeTodo = (todoid) => {
    const newTodo = todos.filter((item) => item.id !== todoid);
    setTodos(newTodo);
  };

  const SetStatus = (todoid, todostatus) => {
    const newTodo = todos.map((item) => {
      if (item.id === todoid) {
        return { ...item, status: todostatus };
      } else {
        return item;
      }
    });
    console.log(newTodo);
    setTodos(newTodo);
  };

  return (
    <>
      <div className="container bg-info-subtle">
        <h1 className="text-center">My ToDo</h1>
        <form action="" className="text-center">
          <div className="mb-3 form-check-inline col-sm-4">
            <input
              type="text"
              className="form-control"
              // id="floatingInput"
              placeholder="ToDo Name"
              value={nameText}
              onChange={handleNameChange}
            />
            {/* <label htmlFor="floatingInput">ToDo Name</label> */}
          </div>
          <div className="form-check-inline col-sm-4">
            <input
              type="text"
              className="form-control"
              // id="floatingPassword"
              placeholder="ToDo Description"
              value={descText}
              onChange={handleDescChange}
            />
            {/* <label htmlFor="floatingPassword">ToDo Description </label> */}
          </div>
          <button
            type="button"
            className="btn btn-primary btn-lg form-check-inline"
            onClick={addTodo}
          >
            AddToDo
          </button>
        </form>
        <div className="d-flex justify-content-between">
          <h3 className="text-center form-check-inline justify-align-content">
            My ToDos
          </h3>
          <h3 className="text-center form-check-inline justify-align-content">
            Status Filter :{" "}
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* filter */}
                {tStatus === 2
                  ? "Not Completed"
                  : tStatus === 1
                  ? "Completed"
                  : tStatus === 0 && "All"}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => FilterStatus(0)}
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => FilterStatus(1)}
                  >
                    Completed
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => FilterStatus(2)}
                  >
                    Not Completed
                  </a>
                </li>
              </ul>
            </div>
          </h3>
        </div>
        <div className="container">
          <div className="row row-gap-4">
            {tStatus === 2
              ? todos
                  .filter((item) => item.status === false)
                  .map((todo) => {
                    return (
                      <Task
                        key={todo.id}
                        name={todo.name}
                        description={todo.description}
                        id={todo.id}
                        status={todo.status}
                        removeTodo={removeTodo}
                        editTodo={editTodo}
                        SetStatus={SetStatus}
                      />
                    );
                  })
              : tStatus === 1
              ? todos
                  .filter((item) => item.status === true)
                  .map((todo) => {
                    return (
                      <Task
                        key={todo.id}
                        name={todo.name}
                        description={todo.description}
                        id={todo.id}
                        status={todo.status}
                        removeTodo={removeTodo}
                        editTodo={editTodo}
                        SetStatus={SetStatus}
                      />
                    );
                  })
              : todos.map((todo) => {
                  return (
                    <Task
                      key={todo.id}
                      name={todo.name}
                      description={todo.description}
                      id={todo.id}
                      status={todo.status}
                      removeTodo={removeTodo}
                      editTodo={editTodo}
                      SetStatus={SetStatus}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
