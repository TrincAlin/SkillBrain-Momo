import "./DateContainer.css"

export default function DateContainer(props) {
  return (
    <div>
      <p className="due-date">Due Date</p>
      <p className="date">{props.date.toLocaleDateString()}</p>
    </div>
  )
}