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
    isSelected: {
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
  variants: {
    isFinished: {
      [true]: {
        textDecoration: "line-through"
      },
      [false]: {
        textDecoration: "none"
      }
    }
  }
})

function Task({
  id = "",
  description = "",
  estimatedPomodoros = 0,
  actPomodoros = 0,
  onFinishClick = () => { },
  onDeleteClick = () => { },
  onClick = () => { },
  isSelected = false,
  isFinished = false
}) {
  function handleDeleteClick(event) {
    onDeleteClick({ event, taskId: id })
  }

  function handleSelectClick(event) {
    const checkboxEl = event.currentTarget.querySelector('input[type=checkbox]')

    if (checkboxEl.contains(event.target) || checkboxEl === event.target) {
      return;
    }

    onClick({ event, taskId: id })
  }

  function handleFinishTaskClick(event) {
    onFinishClick({ event, taskId: id })
  }

  return (
    <TaskRow isSelected={isSelected} onClick={handleSelectClick}>
      <input
        name={id}
        type="checkbox"
        value="teste"
        onChange={handleFinishTaskClick}
        checked={isFinished}
      />
      <DescriptionCol isFinished={isFinished} title={description}>{description}</DescriptionCol>
      <span>{actPomodoros}/{estimatedPomodoros}</span>
      <Button variant="secondary" onClick={handleDeleteClick}>Excluir</Button>
    </TaskRow>
  )
}

export default Task