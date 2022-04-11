console.log("yoza")

const redirectToEzProxy = () => {
    const currentUrl = window.location.href
    console.log(currentUrl)

    const url = new URL(currentUrl);

    const destUrl = `https://${url.hostname}.ezproxy.auckland.ac.nz${url.pathname}`;
    console.log(destUrl)

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