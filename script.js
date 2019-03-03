//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    i = 0,
    oldestSpeech = speechesArray[0].year,
    newestSpeech = speechesArray[0].year;

function ageComparison() {
    for (var k = 0; k < speechesArray.length; k += 1) {
        if (speechesArray[k].year > oldestSpeech) {
            oldestSpeech = speechesArray[k].year;
        }

        if (speechesArray[k].year < newestSpeech) {
            newestSpeech = speechesArray[k].year;
        }

        if (speechesArray[k] === newestSpeech) {
            console.log("This is the most recent speech on the page")
        } else if (speechesArray[k] === oldestSpeech) {
            console.log("This is the oldest speech on the page")
        }
    }
}


while (i < speechesArray.length) {
    console.log("This speech is written by " + speechesArray[i].author + ".");
    i += 1;
}

//Donate Button
document.getElementById('BtnDonate').addEventListener('click', function() {
    var favoriteSpeech = window.prompt('Which speech author is your favorite?');

    for (var k = 0; k < speechesArray.length; k += 1) {
        if (favoriteSpeech === speechesArray[k].author) {
            console.log(speechesArray[k].author + " was " + speechesArray[k].authorAge + " during this speech.")
        }
    }
});

//Churchill Button
document.getElementById('BtnChurchill').addEventListener('click', function(){
  console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  ageComparison ();

});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

    ageComparison ();

});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

    ageComparison ();

});

