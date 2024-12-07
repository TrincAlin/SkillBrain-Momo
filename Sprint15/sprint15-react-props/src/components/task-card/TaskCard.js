import "./TaskCard.css"
import Badge from "../badge/Badge"
import DateContainer from "../date-container/DateContainer"


export default function TaskCard(props) {

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-number">{props.cardData.id}</p>
        <Badge status={props.cardData.status} />
      </div>
      <div className="card-content">
        <p>{props.cardData.name}</p>
      </div>
      <div className="card-footer">
        <DateContainer date = {props.cardData.dueDate} />
      </div>
    </div>
  )
}

