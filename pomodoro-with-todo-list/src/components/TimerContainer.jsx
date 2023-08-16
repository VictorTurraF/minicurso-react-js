import React from 'react'

import TimerDisplay from "./Timer";
import TimerProgress from "./TimerProgress";
import Controlls from "./Controlls";
import { Box } from '../layouts/Box';

function TimerContainer({
  step = "pomodoro",
  remainingSeconds = 0,
  isTimerRunning = false,
  fullStepDuration = 0,
  onTimerToggle = () => { },
  onFinishStepClick = () => { }
}) {
  return (
    <Box>
      <TimerDisplay
        currentStep={step}
        remainingSeconds={remainingSeconds}
      />
      <TimerProgress
        totalSeconds={fullStepDuration}
        remainingSeconds={remainingSeconds}
      />
      <Controlls 
        isTimerRunning={isTimerRunning} 
        onTimerToggle={onTimerToggle} 
        onFinishStepClick={onFinishStepClick} 
      />
    </Box>
  )
}

export default TimerContainer