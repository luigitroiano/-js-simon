$(function() {  
  // Funzione per ottenere un intero random tra due valori con estremi inclusi
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  var arrayNumber = [];
  for (var i = 0; i < 5; i++) {
    var randomNumber = getRandomInt(1, 100);
    arrayNumber.push(randomNumber);
  }
  console.log(arrayNumber);
  // Un alert espone 5 numeri casuali diversi.
  alert('Numeri random: ' + arrayNumber + '\nProva a memorizzare questi numeri...sarai in grado di ricordarli?\nPremi "ok" per scoprirlo.');

  // Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.





});

// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.