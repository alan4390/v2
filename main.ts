input.onGesture(Gesture.ScreenDown, function () {
    basic.showNumber(49 + 57)
})
input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # # # .
        # . . . #
        . # . # #
        . # # # .
        . # . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
})
