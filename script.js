let innerMain = document.querySelector("main");

fetch("./page1.html")
.then(reponse=> reponse.text())
.then(data => innerMain.innerHTML = data)


console.log(innerMain);
