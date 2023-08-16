import { styled } from "@stitches/react"
import { Button } from "../layouts/Button"
import { schema } from "../configs/theme"

const TaskRow = styled('div', {
  display: "grid",
  gridTemplateColumns: "auto 1fr auto auto",
  gridGap: "1rem",
  alignItems: "center",
  padding: '.75rem',
  background: "#fff",
  borderRadius: ".5rem",
  cursor: "pointer",
  transition: "border .3s ease-in-out",
  variants: {
    isActive: {
      [true]: {
        border: `4px solid ${schema.primary}`
      },
      [false]: {
        border: `4px solid transparent`
      }
    }
  }
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
  onDeleteClick = () => {},
  onClick = () => {},
  isActive = false
}) {
  function handleDeleteClick(event) {
    onDeleteClick({ event, taskId: id })
  }

  function handleSelectClick(event) {
    onClick({ event, taskId: id })
  }

  return (
    <TaskRow isActive={isActive} onClick={handleSelectClick}>
      <input name={id} type="checkbox" onChange={() => {}} checked={isCompleted} />
      <DescriptionCol title={description}>{description}</DescriptionCol>
      <span>{actPomodoros}/{estimatedPomodoros}</span>
      <Button variant="secondary" onClick={handleDeleteClick}>Excluir</Button>
    </TaskRow>
  )
}

export default Task