// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeOffButton = document.getElementById('takeoff');

    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');

    takeOffButton.addEventListener('click', function (event) {
        let takeoffReady = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (takeoffReady === true) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.background = 'blue';
            shuttleHeight.innerHTML = 10000;
        }
    });
};

window.addEventListener('load',init);