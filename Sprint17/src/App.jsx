import React from "react";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import TodoItem from "./components/todo-item/TodoItem";
import TextArea from "./components/input/TextArea";
import Button from "./components/button/Button";
import "./App.css";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "6",
    title: "Todo 6",
    description: "Terminam cursul de React",
    completed: false,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "5",
    title: "Todo 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

function App() {

  const compareTodosIdFn = (todo1, todo2) => parseInt(todo1.id) > parseInt(todo2.id) ? 1 : -1;
  const [todos, setTodos] = React.useState(TODOS_MOCK);
  const lastId = todos.sort(compareTodosIdFn).slice().pop().id;
  const nextId = React.useRef(parseInt(lastId) + 1);
  const uncompletedTodos = todos.filter(todo => !todo.completed);
  const uncompletedTodosTags = uncompletedTodos.map(todo => <TodoItem key={todo.id} todo={todo} />);
  const completedTodos = todos.filter(todo => todo.completed);
  const completedTodosTags = completedTodos.map(todo => <TodoItem key={todo.id} todo={todo} />);

  const onTodoCreate = (e) => {
    e.preventDefault();
    setTodos(todos => [...todos,
    {
      id: nextId.current.toString(),
      title: title,
      description: description,
      completed: false,
    }]);
    setTitle("");
    setDescription("");
    nextId.current = nextId.current + 1; 
  }

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <div className="App">
      <div className="app-container">
        {/* 
            This is your Create Card component.
          */}
        <Card>
          <h2>Create Todo</h2>
          <form>
            <Input onChange={(e) => { setTitle(e.target.value) }} placeholder="Title" type="text" value={title} />
            <TextArea onChange={(e) => { setDescription(e.target.value) }} placeholder="Description" value={description} />
            <Button type="submit" onClick={onTodoCreate}>Create</Button>
          </form>
        </Card>

        {/* 
          My Todos
        */}
        <Card>
          <h1>My todos</h1>
          <Button onClick={() => console.log("Open Modal")}>Add +</Button>
          <div className="list-container">
            {uncompletedTodosTags}
          </div>
          <div className="separator"></div>
          <h2>Completed</h2>
          <div className="list-container">
            {completedTodosTags}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
