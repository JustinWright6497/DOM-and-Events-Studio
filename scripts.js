// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeOffButton = document.getElementById('takeoff');
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    const rocket = document.getElementById('rocket');

    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');

    takeOffButton.addEventListener('click', function (event) {
        let takeoffReady = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (takeoffReady === true) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.background = 'blue';
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
            landButton.disabled = false;
            upButton.disabled = false;
            downButton.disabled = false;
            leftButton.disabled = false;
            rightButton.disabled = false;
            takeOffButton.disabled = true;
            rocket.style.top = '125px';
        };
    });

    landButton.addEventListener('click', function (event) {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.background = 'green';
        shuttleHeight.innerHTML = 0;
        landButton.disabled = true;
        takeOffButton.disabled = false;
        upButton.disabled = true;
        downButton.disabled = true;
        leftButton.disabled = true;
        rightButton.disabled = true;
        rocket.style.top = '251px';
        rocket.style.left = '0px';
    });

    abortButton.addEventListener('click', function (event) {
        let abortReady = window.confirm('Confirm that you want to abort the mission.');
        if (abortReady === true) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.background = 'green';
            shuttleHeight.innerHTML = 0;
            landButton.disabled = true;
            takeOffButton.disabled = true;
            abortButton.disabled = true;
            upButton.disabled = true;
            downButton.disabled = true;
            leftButton.disabled = true;
            rightButton.disabled = true;
            rocket.style.top = '251px';
            rocket.style.left = '0px';
        };
    });

    upButton.addEventListener('click', function (event) {
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        rocket.style.top = (parseInt(rocket.style.top) - 10) + 'px';
    });

    downButton.addEventListener('click', function (event) {
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
        rocket.style.top = (parseInt(rocket.style.top) + 10) + 'px';
    });

    leftButton.addEventListener('click', function (event) {
        rocket.style.left = (parseInt(rocket.style.left) - 10) + 'px';
    });

    rightButton.addEventListener('click', function (event) {
        rocket.style.left = (parseInt(rocket.style.left) + 10) + 'px';
    });
};

window.addEventListener('load',init);