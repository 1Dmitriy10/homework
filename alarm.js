const sound = new Howl({
    src: ['alarm.mp3']
});

export let alarm = () => {
    // Play the sound.
    sound.play();
}
export let alarmStop = () => {
    sound.stop();
}