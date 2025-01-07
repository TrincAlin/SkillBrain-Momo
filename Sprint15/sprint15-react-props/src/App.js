import "./App.css"
import TaskContainer from "./components/task-container/TaskContainer.js";

function App() {

  const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2025, 6, 23)
    },
    {
      id: "T-2",
      name: "Create a Design System for Enum Workspace.",
      status: "In progress",
      dueDate: new Date(2025, 8, 23)
    },
    {
      id: "T-3",
      name: "Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2025, 7, 23)
    },
    {
      id: "T-4",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2025, 11  , 23)
    },
    {
      id: "T-5",
      name: "Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2025, 10, 23)
    },
    {
      id: "T-6",
      name: "Create a Design System for Enum Workspace.",
      status: "In progress",
      dueDate: new Date(2025, 4, 23)
    },
    {
      id: "T-7",
      name: "Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2025, 2, 23)
    },
    {
      id: "T-8",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2025, 1, 23)
    },
  ]

  return (
    <div className="background">
      <h1>Task Manager</h1>
      <div className="task-container">
      <TaskContainer data={data}/>
      </div>
    </div>
  )
}

export default App;