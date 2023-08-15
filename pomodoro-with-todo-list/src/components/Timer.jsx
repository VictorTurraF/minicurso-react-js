import { styled } from '@stitches/react'
import { Row } from '../layouts/Row';
import { Badge } from '../layouts/Badge';

const Display = styled('div', {
  fontSize: "3rem",
  letterSpacing: ".25rem"
})

const DisplayRow = styled(Row, {
  alignItems: 'center'
})

const stepBadgesMap = new Map([
  ['pomodoro', <Badge>Pomodoro</Badge>],
  ['short-break', <Badge variant="secondary">Pausa Curta</Badge>],
  ['long-break', <Badge variant="secondary">Pausa Longa</Badge>]
])

function TimerDisplay({ remainingSeconds = 0, currentStep = "pomodoro" }) {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
    <DisplayRow>
      <Display>
        {formattedMinutes}:{formattedSeconds}
      </Display>
      {stepBadgesMap.get(currentStep)}
    </DisplayRow>
  )
}

export default TimerDisplay