const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/logo2.jpg") {
        myImage.setAttribute("src", "images/logo.jpg");
    } else {
        myImage.setAttribute("src", "images/logo2.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName} the fuck`;
    }
}


if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `fuck the ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};


