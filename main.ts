let h = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    h = pins.analogReadPin(AnalogPin.P2)
    basic.showNumber(h)
})
