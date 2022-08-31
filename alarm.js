import { Howl, Howler } from 'howler';
const myAlarm = require('./alarm.mp3');

const sound = new Howl({
    src: myAlarm
});

export let alarm = () => {
    console.log(sound)
    sound.play();
}
export let alarmStop = () => {
    sound.stop();
}