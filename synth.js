var playSound = function init() {
    try {
        // Fix up for prefixing
        window.AudioContext = window.AudioContext||window.webkitAudioContext;
        var context = new AudioContext();
        var oscillator = context.createOscillator();
        var freq = document.getElementById('freq').value;
        oscillator.frequency.value = freq;
        oscillator.connect(context.destination);
        oscillator.start(0);
        oscillator.stop(1);
    }
    catch(e) {
        alert('Web Audio API is not supported in this browser');
    }
};

var button = document.getElementById('play');
button.addEventListener('click', playSound);
