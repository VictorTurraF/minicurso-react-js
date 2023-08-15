import { styled } from '@stitches/react'

const Display = styled('div', {
  fontSize: "3rem",
  letterSpacing: ".25rem"
})

function TimerDisplay() {
  return (
    <Display>
      25:00
    </Display>
  )
}

export default TimerDisplay