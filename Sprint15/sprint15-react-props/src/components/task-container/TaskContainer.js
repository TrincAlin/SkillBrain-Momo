import TaskCard from "../task-card/TaskCard";
import "./TaskContainer.css";


export default function TaskContainer({data}) {
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