input.onButtonPressed(Button.A, function () {
    basic.showNumber(Step)
    basic.pause(100)
})
input.onGesture(Gesture.Shake, function () {
    Step += 1
})
let Step = 0
Step = 0
