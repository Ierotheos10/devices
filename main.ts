input.onButtonPressed(Button.AB, function () {
    devices.tellCameraTo(MesCameraEvent.StopVideoMode)
    devices.tellCameraTo(MesCameraEvent.LaunchPhotoMode)
})
bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
input.onButtonPressed(Button.A, function () {
    devices.tellCameraTo(MesCameraEvent.TakePhoto)
})
input.onButtonPressed(Button.B, function () {
    devices.tellCameraTo(MesCameraEvent.StopPhotoMode)
    devices.tellCameraTo(MesCameraEvent.LaunchVideoMode)
})
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startLEDService()
basic.forever(function () {
	
})
