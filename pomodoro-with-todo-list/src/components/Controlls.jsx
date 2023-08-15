import { Row as R } from '../layouts/Row'
import { Button } from '../layouts/Button'
import { styled } from '@stitches/react'

const Row = styled(R, {
  marginTop: "2rem"
})

function Controlls({ 
  onInitClick = () => {},
  onFinishStepClick = () => {}
}) {
  return (
    <Row>
      <Button onClick={onInitClick}>Iniciar</Button>
      <Button onClick={onFinishStepClick} variant="secondary">Finalizar Pomodoro</Button>
    </Row>
  )
}

export default Controlls