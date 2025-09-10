fetch("navbar.html")
    .then(res => res.text())
    > then(data => document.getElementById("navbar").innerHTML = data)

fetch("finance.html")
    .then(res => res.text())
    .then(data => document.getElementById("finance").innerHTML = data)

