import { Row as R } from '../layouts/Row'
import { Button } from '../layouts/Button'
import { styled } from '@stitches/react'

const Row = styled(R, {
  marginTop: "2rem"
})

function Controlls({
  onTimerToggle = () => { },
  onFinishStepClick = () => { },
  isTimerRunning = false
}) {
  return (
    <Row>
      {isTimerRunning ? <Button onClick={onTimerToggle} variant="secondary">Pausar</Button> : <Button onClick={onTimerToggle}>Iniciar</Button>}
      <Button onClick={onFinishStepClick} variant="secondary">Finalizar Pomodoro</Button>
    </Row>
  )
}

export default Controlls