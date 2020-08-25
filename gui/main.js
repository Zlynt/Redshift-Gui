var sys = require('sys')
var exec = require('child_process').exec;

let daemonSwitch = document.getElementById('switch_daemon');
let saveSettingsButton = document.getElementById('save_settings');

daemonSwitch.addEventListener('click', () => {
    if (daemonSwitch.innerHTML === "Start") {
        daemonSwitch.innerHTML = "Stop";
        exec("redshift &");
    }else{
        exec("pkill redshift");
        daemonSwitch.innerHTML = "Start";
    }

});

saveSettingsButton.addEventListener('click', () => {
    alert('Cannot save the Settings.');
});