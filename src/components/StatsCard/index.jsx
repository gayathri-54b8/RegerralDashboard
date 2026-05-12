import "./index.css"

const StatsCard = props => {

  const {title, value, icon} = props.details

  return (
    <div className="card">

      <div>{icon}</div>

      <h3>{title}</h3>

      <p>{value}</p>

    </div>
  )
}

export default StatsCard