function displayPhrase() {
    const clothing = ['Gentilezza', 'Comprensione','Forza','Amore per il prossimo','Accettazione','Sorriso','Tenacia','Costanza','Provaci, magari ci risci','Ambizione'];
   let x = getRandomInt(clothing.length)
    document.getElementById("demo").innerHTML = clothing[x];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }