var playSound = function init() {
    // Fix up for prefixing
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    var context = new AudioContext();
    var vco = context.createOscillator();
    var freq = document.getElementById('freq').value;
    vco.frequency.value = freq;

    vca = context.createGain();
    vca.gain.value = document.getElementById('volume').value;

    vco.connect(vca);
    vca.connect(context.destination);

    vco.start(0);
    vco.stop(1);
};

var button = document.getElementById('play');
button.addEventListener('click', playSound);
