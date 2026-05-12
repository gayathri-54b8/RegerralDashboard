import "./index.css"

const ReferralBox = props => {

  const {title, value} = props

  const onCopy = () => {
    navigator.clipboard.writeText(value)
    alert("Copied")
  }

  return (
    <div className="referral-box">

      <h3>{title}</h3>

      <p>{value}</p>

      <button onClick={onCopy}>
        Copy
      </button>

    </div>
  )
}

export default ReferralBox