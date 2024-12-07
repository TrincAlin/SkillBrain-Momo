import "./Badge.css"


export default function Badge(props) {
  return (
    <div className="badge">
      <p>{props.status}</p>
    </div>
  )
}