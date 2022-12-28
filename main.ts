input.onButtonPressed(Button.A, function () {
    run = 1
    while (run == 1) {
        strip.showRainbow(1, 360)
        for (let index = 0; index < 30; index++) {
            strip.show()
            strip.rotate(1)
            basic.pause(200)
        }
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.clear()
})
input.onButtonPressed(Button.B, function () {
    run = 0
})
let run = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
