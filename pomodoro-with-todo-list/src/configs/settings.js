export const settings = {
  pomodoroDurationInSeconds: 25 * 60,
  shortBreakDurationInSeconds: 5 * 60,
  longBreakDurationInSeconds: 15 * 60
}

export const pomodoroSteps = [
  'pomodoro',
  'short-break',
  'pomodoro',
  'short-break',
  'pomodoro',
  'short-break',
  'pomodoro',
  'long-break',
]

export const durationMap = new Map([
  ['pomodoro', settings.pomodoroDurationInSeconds],
  ['short-break', settings.shortBreakDurationInSeconds],
  ['long-break', settings.longBreakDurationInSeconds]
])
