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
let btn_menu = document.getElementById('btn_menu-bar');
let navbar_list = document.getElementsByClassName('navbar-list')[0];
btn_menu.addEventListener('click', () => {
    if (navbar_list.classList.toggle('navbar-list-active'))
        navbar_list.classList.add('navbar-list-active');
    else
        navbar_list.classList.remove('navbar-list-active');

    console.log("click")
})

function handleButtonClick(target) {
    window.location.href = target;
}

buttonData.forEach(item => {
    item.button.addEventListener('click', () => {
        handleButtonClick(item.target);
    });
});

