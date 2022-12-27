import './index.css'

const TodoItem = props => {
  const {title, id, deleteBtn} = props

  const onDelete = () => {
    deleteBtn(id)
  }

  return (
    <div>
      <li>
        <p>{title}</p>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </li>
    </div>
  )
}

export default TodoItem
