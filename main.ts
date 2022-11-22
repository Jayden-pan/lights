input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.lightLevel()))
})
input.onButtonPressed(Button.B, function () {
    if (input.lightLevel() <= 51) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (input.lightLevel() <= 102) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (input.lightLevel() <= 153) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (input.lightLevel() <= 204) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (input.lightLevel() <= 255) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    input.calibrateCompass()
    if (input.compassHeading() < 45) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else if (input.compassHeading() < 135) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # . .
            # . . . .
            # # # # #
            `)
    } else if (input.compassHeading() < 225) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
    } else if (input.compassHeading() < 315) {
        basic.showLeds(`
            # . . . #
            # . # . #
            # . # . #
            # . # . #
            . # . # .
            `)
    }
})
