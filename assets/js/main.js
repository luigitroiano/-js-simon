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
  var seconds = 30;
  var interval = setInterval(function() {
    $('#secondi').html(seconds);
    if (seconds === 0) {
      // $('#secondi').hide();
      for (var index = 0; index < arrayNumber.length; index++) {
        var numberUser = Number(prompt('Inserisci uno dei numeri precedenti'));
        arrayUser.push(numberUser);
        if (arrayNumber.indexOf(numberUser) !== -1) {
          arrayGuessed.push(numberUser);
        } 
      };
      console.log(arrayUser);
      // $('#secondi').hide();
      clearInterval(interval);
    } else {
      seconds--;
    }  
  }, 1000);
  
  var arrayUser = [];
  var arrayGuessed = [];
  // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
  setTimeout(myFunction, 31000);

  function myFunction() {
    alert('I numeri scelti dal pc randomicamente sono: ' + arrayNumber + '\nI numeri che tu hai ricordato correttamente sono: ' + arrayGuessed);
    alert('Punteggio: ' + arrayGuessed.length + '/5' + '\nPercentuale di successo: ' + (arrayGuessed.length/5*100).toFixed(0) + '%');
  }
});

