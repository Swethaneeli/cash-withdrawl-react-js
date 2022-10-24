// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, cashWithdraw} = props
  const {value} = denominationDetails

  const onClickOfDenomination = () => {
    cashWithdraw(value)
  }

  return (
    <li>
      <button
        type="button"
        className="denomination"
        onClick={onClickOfDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
