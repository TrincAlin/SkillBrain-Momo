import TaskCard from "./components/task-card/TaskCard.js";
import "./App.css"


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
    <div className="app-container">
      <TaskCard
        cardData={data[0]}
      />
      <TaskCard
        cardData={data[1]}
      />
      <TaskCard
        cardData={data[2]}
      />
      <TaskCard
        cardData={data[3]}
      />
      <TaskCard
        cardData={data[4]}
      />
      <TaskCard
        cardData={data[5]}
      />
      <TaskCard
        cardData={data[6]}
      />
      <TaskCard
        cardData={data[7]}
      />
    </div>
  )
}

export default App;