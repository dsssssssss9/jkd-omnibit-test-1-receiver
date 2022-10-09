radio.onReceivedString(function (receivedString) {
    if (receivedString == "stop") {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
        mbit_Robot.Music_Car(mbit_Robot.enMusic.power_down)
    } else if (receivedString == "fore") {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 60)
    } else if (receivedString == "aft") {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 60)
    } else if (receivedString == "left") {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 60)
    } else if (receivedString == "right") {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, 60)
    }
})
radio.setGroup(42)
mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
mbit_Robot.Music_Car(mbit_Robot.enMusic.power_up)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
