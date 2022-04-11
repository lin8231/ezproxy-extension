console.log("yoza")

const redirectToEzProxy = () => {
    const currentUrl = window.location.href

    const destUrl = `http://ezproxy.auckland.ac.nz/login?url=${currentUrl}`;

    window.location = destUrl;
}

var cssFile = document.createElement('link');
cssFile.rel = 'stylesheet';
cssFile.href = "styles.css";
document.head.appendChild(cssFile);


let redirectButton = document.createElement("button");
redirectButton.innerHTML = "ezproxy ►";
redirectButton.className = "ezproxy-button";

redirectButton.addEventListener("click", redirectToEzProxy);

let body = document.getElementsByTagName("body")[0];
body.appendChild(redirectButton);