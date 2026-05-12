import "./index.css"

const StatsCard = props => {

  const {title, value, icon} = props.details

  return (
    <div className="card">

      <div>{icon}</div>

      <h4>{title}</h4>

      <p>{value}</p>

    </div>
  )
}

export default StatsCard