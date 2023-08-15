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

function TimerProgress() {
  return (
    <Tracker>
      <Indicator />
    </Tracker>
  )
}

export default TimerProgress