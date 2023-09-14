document.body.onload = addElement();

function addElement() {
    const stunden = ["Latein","Mathe","Englisch","Chemie","Erdkunde","Musik","Informatik",""]
    const newtable = document.createElement("tabele");
    const Tage = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"]
    var newtb = document.createElement("th");
    for (let i = 0; i < 5; i++) { 
        var newtd = document.createElement("td")
        newtb.appendChild(newtd);
    }
    newtable.appendChild(newtb);



    for (let i = 0; i < 5; i++) {
        var newtr = document.createElement("tr");
        for(let i = 0;i < 6;i++){
            var newtd = document.createElement("td");"
            var newContent = document.createTextNode(stunden[getRandomInt(stunden.length)]);
            console.log(newContent);
            newtd.appendChild(newContent);
            newtr.appendChild(newtd)
        }
        newtable.appendChild(newtr);
    }
    newtable.appendChild(document.createElement("tr"))



    newtable.setAttribute("id", "plan")
    const currentDiv = document.getElementById("plan");
    console.log(currentDiv)
    document.body.insertBefore(newtable, currentDiv);
    document.getElementById("plan").setAttribute("border","1")
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}