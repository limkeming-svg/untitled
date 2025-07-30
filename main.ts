function Start () {
    basic.showIcon(IconNames.Heart)
}
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 999; index++) {
        Steps += 1
    }
    basic.showNumber(Steps)
})
let Steps = 0
Steps += 1
basic.forever(function () {
    if (Steps == 10000) {
        music.play(music.stringPlayable("C C5 E A A E C5 C ", 2025), music.PlaybackMode.UntilDone)
    }
})
