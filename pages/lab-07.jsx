import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Todo from "../components/Todolist";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";
import Footer from "../components/Footer";

export default function Home() {
  const [todo, setTodo] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    const todoStr = JSON.stringify(todo);
    localStorage.setItem("todo-react", todoStr);
  }, [todo]);

  useEffect(() => {
    const todoStr = localStorage.getItem("todo-react");
    if (!todoStr) setTodo([]);
    else setTodo(JSON.parse(todoStr));
  }, []);

  const deleteTodo = (idx) => {
    todo.splice(idx, 1);
    const newTodo = [...todo];
    setTodo(newTodo);
  };

  const markTodo = (idx) => {
    todo[idx].completed = !todo[idx].completed;
    setTodo([...todo]);
  };

  const moveUp = (idx) => {
    if (idx == 0) return;
    let temp = todo[idx];
    todo[idx] = todo[idx - 1];
    todo[idx - 1] = temp;
    setTodo([...todo]);
  };

  const moveDown = (idx) => {
    if (idx == todo.length - 1) return;
    let temp = todo[idx];
    todo[idx] = todo[idx + 1];
    todo[idx + 1] = temp;
    setTodo([...todo]);
  };

  const addTodo = (title, completed) => {
    setTodo([{ title: title, completed: completed }, ...todo]);
  };

  const handleInput = (event) => {
    if (event.key == "Enter") {
      if (event.target.value === "") {
        alert("Todo cannot be empty");
        return;
      }
      addTodo(event.target.value, false);
      event.target.value = "";
    }
  };

  return (
    <div>
      <Navbar />
      {/* Entire App container (required for centering) */}
      <div style={{ maxWidth: "700px" }} className="mx-auto">
        {/* App header */}
        <p className="display-4 text-center fst-italic m-4">
          Minimal Todo List <span className="fst-normal">☑️</span>
        </p>
        {/* Input */}
        <input
          className="form-control mb-1 fs-4"
          placeholder="insert todo here..."
          onKeyUp={handleInput}
        />

        {todo.map((element, i) => (
          <Todo
            key={i}
            title={element.title}
            completed={element.completed}
            onMark={() => markTodo(i)}
            onDelete={() => deleteTodo(i)}
            onMoveUp={() => moveUp(i)}
            onMoveDown={() => moveDown(i)}
          />
        ))}

        {/* Todos */}
        {/* Example 1 
        <div className="border-bottom p-1 py-2 fs-2 d-flex gap-2">
          <span className="me-auto">Todo</span>
        </div>*/}
        {/* Example 2 
        <div className="border-bottom p-1 py-2 fs-2 d-flex gap-2">
          <span className="me-auto">Todo with buttons</span>

          <button className="btn btn-success">
            <IconCheck />
          </button>
          <button className="btn btn-secondary">
            <IconArrowUp />
          </button>
          <button className="btn btn-secondary">
            <IconArrowDown />
          </button>
          <button className="btn btn-danger">
            <IconTrash />
          </button>
        </div>*/}

        {/* summary section */}
        <p className="text-center fs-4">
          <span className="text-primary">All ({todo.length}) </span>
          <span className="text-warning">
            Pending ({todo.filter((e) => e.completed == false).length})
          </span>
          <span className="text-success">
            Completed ({todo.filter((e) => e.completed == true).length})
          </span>
        </p>

        {/* Made by section */}
        <p className="text-center mt-3 text-muted fst-italic">
          made by Winittra Saengsroy 640612097
        </p>
      </div>
      <Footer />
    </div>
  );
}
