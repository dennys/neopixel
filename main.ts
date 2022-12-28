input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    run = 0
})
let run = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
