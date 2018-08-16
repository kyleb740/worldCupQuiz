// function to get 2nd question if favorite is selected on Q1
function getQ2() {
  var Q2 = document.getElementById('Q2').innerHTML;
  var question = document.getElementById('questions');
  question.innerHTML = Q2;
}

// function to get 3rd question if team play is selected
function getQ3() {
  var Q3 = document.getElementById('Q3').innerHTML;
  var question = document.getElementById('questions');
  question.innerHTML = Q3;
}

// function to get 4th question if wine is selected
function getQ4() {
  var Q4 = document.getElementById('Q4').innerHTML;
  var question = document.getElementById('questions');
  question.innerHTML = Q4;
}

// function to get 5th question if beer is selected
function getQ5() {
  var Q5 = document.getElementById('Q5').innerHTML;
  var question = document.getElementById('questions');
  question.innerHTML = Q5;
}

// function to get 6th question if star on Q1 is selected
function getQ6() {
  var Q6 = document.getElementById('Q6').innerHTML;
  var question = document.getElementById('questions');
  question.innerHTML = Q6;
}

// function to get 6th question if confindence is selected on Q6
function getQ7() {
  var Q7 = document.getElementById('Q7').innerHTML;
  var question = document.getElementById('questions');
  question.innerHTML = Q7;
}

// function to show France as team if selected
function getFrance() {
  var franceImg = document.createElement('img');
  franceImg.src = "img/france.jpg"
  var question = document.getElementById('questions');
  question.innerHTML = '<span class="teamSelect">France is your team!<br>Allez Les Bleus!</span>'
  question.appendChild(franceImg)
  franceImg.style.height = "auto";
  franceImg.style.width = "100%";
  franceImg.style.maxWidth = "40%";
  franceImg.style.display = "block";
  franceImg.style.margin = "auto";
}

// function to show Spain as team if selected
function getSpain() {
  var spainImg = document.createElement('img');
  spainImg.src = "img/spain.png"
  var question = document.getElementById('questions');
  question.innerHTML = '<span class="teamSelect">Spain is your team!<br>Que Viva Espa&#241a!</span>'
  question.appendChild(spainImg)
  spainImg.style.height = "auto";
  spainImg.style.width = "100%";
  spainImg.style.maxWidth = "40%";
  spainImg.style.display = "block";
  spainImg.style.margin = "auto";
  spainImg.style.paddingTop = "20px";
}

// function to show Germany as team if selected
function getGermany() {
  var germanyImg = document.createElement('img');
  germanyImg.src = "img/germany.jpg"
  var question = document.getElementById('questions');
  question.innerHTML = "<span class='teamSelect'>Germany is your team!<br>Auf geht's, Deutschland!</span>"
  question.appendChild(germanyImg)
  germanyImg.style.height = "auto";
  germanyImg.style.width = "100%";
  germanyImg.style.maxWidth = "40%";
  germanyImg.style.display = "block";
  germanyImg.style.margin = "auto";
}

// function to show Belgium as team if selected
function getBelgium() {
  var belgiumImg = document.createElement('img');
  belgiumImg.src = "img/belgium.png"
  var question = document.getElementById('questions');
  question.innerHTML = "<span class='teamSelect'>Belgium is your team!<br>Hup Hup Belgi&euml!</span>"
  question.appendChild(belgiumImg)
  belgiumImg.style.height = "auto";
  belgiumImg.style.width = "100%";
  belgiumImg.style.maxWidth = "40%";
  belgiumImg.style.display = "block";
  belgiumImg.style.margin = "auto";
}

// function to show Portugal as team if selected
function getPortugal() {
  var portugalImg = document.createElement('img');
  portugalImg.src = "img/portugal.png"
  var question = document.getElementById('questions');
  question.innerHTML = "<span class='teamSelect'>Portugal is your team!<br>Portugal Allez!</span>"
  question.appendChild(portugalImg)
  portugalImg.style.height = "auto";
  portugalImg.style.width = "100%";
  portugalImg.style.maxWidth = "40%";
  portugalImg.style.display = "block";
  portugalImg.style.margin = "auto";
}

// function to show Argentina as team if selected
function getArgentina() {
  var argentinaImg = document.createElement('img');
  argentinaImg.src = "img/argentina.jpg"
  var question = document.getElementById('questions');
  question.innerHTML = "<span class='teamSelect'>Argentina is your team!<br>Vamos Vamos Argentina!</span>"
  question.appendChild(argentinaImg)
  argentinaImg.style.height = "auto";
  argentinaImg.style.width = "100%";
  argentinaImg.style.maxWidth = "40%";
  argentinaImg.style.display = "block";
  argentinaImg.style.margin = "auto";
}

// function to show Brazil as team if selected
function getBrazil() {
  var brazilImg = document.createElement('img');
  brazilImg.src = "img/brazil.png"
  var question = document.getElementById('questions');
  question.innerHTML = "<span class='teamSelect'>Brazil is your team!<br>For&ccedila Brasil!</span>"
  question.appendChild(brazilImg)
  brazilImg.style.height = "auto";
  brazilImg.style.width = "100%";
  brazilImg.style.maxWidth = "40%";
  brazilImg.style.display = "block";
  brazilImg.style.margin = "auto";
}
