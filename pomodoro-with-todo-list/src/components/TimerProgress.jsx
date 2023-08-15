import { styled } from '@stitches/react'
import { schema } from '../configs/theme';

const Tracker = styled('div', {
  margin: ".5rem 0",
  borderRadius: ".25rem",
  height: "5px",
  width: "100%",
  backgroundColor: schema.white,
  overflow: "hidden"
})

const Indicator = styled('div', {
  backgroundColor: schema.primary,
  width: "20%",
  height: "100%",
  borderRadius: ".25rem"
});

function TimerProgress({ totalSeconds = 0, remainingSeconds = 0 }) {
  const progress = (totalSeconds - remainingSeconds) / totalSeconds * 100;

  return (
    <Tracker>
      <Indicator style={{ width: `${progress}%` }} />
    </Tracker>
  )
}

export default TimerProgress