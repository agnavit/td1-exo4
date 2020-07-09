input.onButtonPressed(Button.A, function () {
    if (deplacement == 0) {
        led.unplot(deplacement, ligne)
        deplacement += 1
        ligne += 1
        if (ligne == 4) {
        	
        }
        led.plot(deplacement, ligne)
    } else if (deplacement < 4) {
        led.unplot(deplacement, ligne)
        deplacement += 1
        led.plot(deplacement, ligne)
    }
})
input.onButtonPressed(Button.B, function () {
    if (deplacement == 4) {
        led.unplot(deplacement, ligne)
        deplacement += -1
        ligne += 1
        led.plot(deplacement, ligne)
    } else if (deplacement > 0) {
        led.unplot(deplacement, ligne)
        deplacement += -1
        led.plot(deplacement, ligne)
    }
})
let ligne = 0
let deplacement = 0
deplacement = 2
ligne = 0
led.plot(deplacement, ligne)
basic.forever(function () {
	
})
