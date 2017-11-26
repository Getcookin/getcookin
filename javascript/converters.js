/*temperature converter*/
function temperatureConverter(source,valNum) {
	valNum = parseFloat(valNum);
	var inputFahrenheit = document.getElementById("inputFahrenheit");
	var inputCelsius = document.getElementById("inputCelsius");
	if (source=="inputFahrenheit") {
    inputCelsius.value=((valNum-32)/1.8).toFixed(1);
	}
	if (source=="inputCelsius") {
    inputFahrenheit.value=((valNum*1.8)+32).toFixed(1);
	}
}
/*weight converter*/
function weightConverter(source,valNum) {
	valNum = parseFloat(valNum);
	var inputPounds = document.getElementById("inputPounds");
	var inputKilograms = document.getElementById("inputKilograms");
	var inputOunces = document.getElementById("inputOunces");
	var inputGrams = document.getElementById("inputGrams");
	if (source=="inputPounds") {
		inputKilograms.value=(valNum / 2.2046).toFixed(2);
		inputOunces.value=(valNum * 16).toFixed(2);
		inputGrams.value=(valNum / 0.0022046).toFixed(2);
	}
	if (source=="inputKilograms") {
		inputPounds.value=(valNum * 2.2046).toFixed(2);
		inputOunces.value=(valNum * 35.274).toFixed(2);
		inputGrams.value=(valNum * 1000).toFixed(2);
	}
	if (source=="inputOunces") {
		inputPounds.value=(valNum * 0.0625).toFixed(2);
		inputKilograms.value=(valNum / 35.274).toFixed(2);
		inputGrams.value=(valNum / 0.035274).toFixed(2);
	}
	if (source=="inputGrams") {
		inputPounds.value=(valNum * 0.0022046).toFixed(2);
		inputKilograms.value=(valNum / 1000).toFixed(2);
		inputOunces.value=(valNum * 0.035274).toFixed(2);
	}
}
/*volume converter*/
function volumeConverter(source,valNum) {
	valNum = parseFloat(valNum);
	var inputLiters = document.getElementById("inputLiters");
	var inputMl = document.getElementById("inputMl");
	var inputFlOunces = document.getElementById("inputFlOunces");
	var inputPints = document.getElementById("inputPints");
	var inputCups = document.getElementById("inputCups");
	if (source=="inputLiters") {
		inputMl.value=(valNum * 1000).toFixed(2);
		inputFlOunces.value=(valNum * 33.814).toFixed(2);
		inputPints.value=(valNum * 1.75975).toFixed(2);
		inputCups.value=(valNum * 4.1666).toFixed(2);
	}
	if (source=="inputMl") {
		inputLiters.value=(valNum * 2.2046).toFixed(2);
		inputFlOunces.value=(valNum * 0.033814).toFixed(2);
		inputPints.value=(valNum * 0.00175975).toFixed(2);
		inputCups.value=(valNum * 0.00416667).toFixed(2);
	}
	if (source=="inputFlOunces") {
		inputLiters.value=(valNum * 0.0295735).toFixed(2);
		inputMl.value=(valNum * 29.5735).toFixed(2);
		inputPints.value=(valNum * 0.0520421).toFixed(2);
		inputCups.value=(valNum * 0.123223).toFixed(2);
	}
	if (source=="inputPints") {
		inputLiters.value=(valNum * 0.568261).toFixed(2);
		inputMl.value=(valNum * 568.261).toFixed(2);
		inputFlOunces.value=(valNum * 19.2152).toFixed(2);
		inputCups.value=(valNum * 2.36776).toFixed(2);
	}
	if (source=="inputCups") {
		inputLiters.value=(valNum * 0.24).toFixed(2);
		inputMl.value=(valNum * 240).toFixed(2);
		inputPints.value=(valNum * 0.422341).toFixed(2);
		inputFlOunces.value=(valNum * 8.11537).toFixed(2);
	}
}
/*timer*/
function startTimer(){
     var min = document.getElementById("minutes").value;
     var sec = document.getElementById("seconds").value;
     interval = setInterval(function(){
       document.getElementById("output").innerHTML = "Remaining time:</br>"+ min + " minutes " + sec + " seconds" ;
      if(sec == 00)
       {
         min--;
         sec = 60;
       };
        sec--;
      if(min == 00)
      {document.getElementById("output").innerHTML = "Remaining time</br>: 0 minutes " + sec + " seconds" ;};
      if(min <0)
      {document.getElementById("output").innerHTML = "Time is up!";}
      },1000);
  }
  function resetTimer(){
    clearInterval(interval);
    document.getElementById("output").innerHTML = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
  }