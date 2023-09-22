document.body.onload = addElement();

function addElement() {
    const stunden = ["Latein","Mathe","Englisch","Chemie","Erdkunde","Musik","Informatik"," "]
    const newtabel = document.createElement("table")
    const Tage = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"]
    var newth = document.createElement("tr");
    for (let i = 0; i < 5; i++) { 
        var newtd = document.createElement("th");
        var newContent = document.createTextNode(Tage[i]);
        newtd.appendChild(newContent);
        newth.appendChild(newtd);
    }
    newtabel.appendChild(newth);



    for (let i = 0; i < 6; i++) {
        var newtr = document.createElement("tr");
        for(let i = 0;i < 5;i++){
            var newtd = document.createElement("td");
            var stunde = stunden[getRandomInt(stunden.length)];
            var newContent = document.createTextNode(stunde);
            console.log(newContent);
            newtd.setAttribute("id",stunde)
            newtd.appendChild(newContent);
            newtr.appendChild(newtd)
        }
        newtabel.appendChild(newtr);
    }
    newtabel.appendChild(document.createElement("tr"))
    document.getElementById("plan").replaceWith(newtabel)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}