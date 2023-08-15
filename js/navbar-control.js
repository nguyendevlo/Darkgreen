const buttonData = [
    { button: document.getElementById('btn_adobe'), target: "adobe.html" },
    { button: document.getElementById('btn_google'), target: "google.html" },
    { button: document.getElementById('btn_microsoft'), target: "microsoft.html" },
    { button: document.getElementById('btn_netflix'), target: "netflix.html" },
    { button: document.getElementById('btn_spotify'), target: "spotify.html" },
    { button: document.getElementById('btn_antivirus'), target: "antivirus.html" },
    { button: document.getElementById('btn_vpns'), target: "vpns.html" },
    { button: document.getElementById('btn_canvas'), target: "canvas.html" },
    { button: document.getElementById('btn_dropbox'), target: "dropbox.html" }
];
function handleButtonClick(target) {
    window.location.href = target;
}

buttonData.forEach(item => {
    item.button.addEventListener('click', () => {
        handleButtonClick(item.target);
    });
});
