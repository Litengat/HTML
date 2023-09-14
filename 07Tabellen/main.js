document.body.onload = addElement();

function addElement() {
const stunden = ["Latein","Mathe","Englisch","Chemie","Erdkunde","Musik"]
const newtable = document.createElement("tabele");

for (let i = 0; i < 5; i++) {
    var newtr = document.createElement("tr")
    for(let i = 0;i < 6;i++){
        var newtd = document.createElement("td");
        var newContent = document.createTextNode(stunden[getRandomInt(stunden.length)]);
        console.log(newContent);
        newtd.appendChild(newContent);
        newtr.appendChild(newtd)
    }
    newtable.appendChild(newtr);
}
const currentDiv = document.getElementById("plan");
console.log(currentDiv)
document.body.insertBefore(newtable, currentDiv);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}