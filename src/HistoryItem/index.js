import './index.css'

const HistoryItem = props => {
  const {historyItem, onDeleteItem} = props
  const {id, domainUrl, logoUrl, timeAccessed, title} = historyItem

  const deleteItem = () => {
    onDeleteItem(id)
  }

  return (
    <li className="history-item-container">
      <p className="time-text">{timeAccessed}</p>
      <div className="history-item">
        <div className="history-text">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <p className="history-title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>

        <button
          type="button"
          data-testid="delete"
          className="btn"
          onClick={deleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
