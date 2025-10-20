bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    receivedString = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (receivedString == "up") {
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P1, 0)
    }
    if (receivedString == "down") {
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P1, 180)
    }
    if (receivedString == "right") {
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P1, 180)
    }
    if (true) {
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P1, 0)
    }
    if (receivedString == "left" == "stop") {
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P1, 90)
    }
    if (receivedString == "open") {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
    if (receivedString == "close") {
        pins.servoWritePin(AnalogPin.P2, 180)
    }
})
let receivedString = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
