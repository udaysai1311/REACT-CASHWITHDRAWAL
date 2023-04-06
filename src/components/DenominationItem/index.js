import './index.css'

const DenominationItem = props => {
  const {userList, add} = props
  const {value, id} = userList

  const onButton = () => {
    add(value)
  }

  return (
    <li>
      <button className="button" onClick={onButton}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
