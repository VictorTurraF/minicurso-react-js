import { styled } from "@stitches/react"
import { Button } from "../layouts/Button"

const TaskRow = styled('div', {
  display: "grid",
  gridTemplateColumns: "auto 1fr auto auto",
  gridGap: "1rem",
  alignItems: "center",
  padding: '1rem',
  background: "#fff",
  borderRadius: ".5rem",
  cursor: "pointer"
})

const DescriptionCol = styled('span', {
  overflowX: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: "nowrap",
})

function Task({
  id = "",
  isCompleted = false,
  description = "",
  estimatedPomodoros = 0,
  actPomodoros = 0,
  onDeleteClick = () => {}
}) {

  function handleDeleteClick(event) {
    onDeleteClick({ event, taskId: id })
  }

  return (
    <TaskRow>
      <input name={id} type="checkbox" onChange={() => {}} checked={isCompleted} />
      <DescriptionCol title={description}>{description}</DescriptionCol>
      <span>{actPomodoros}/{estimatedPomodoros}</span>
      <Button variant="secondary" onClick={handleDeleteClick}>Excluir</Button>
    </TaskRow>
  )
}

export default Task