test = new Date();
month = test.getMonth();
month = (month * 1) + 1;
day = test.getDate();
year = test.getFullYear();
// document.write("<p> ",month,"/",day,"/",year," </p>");

var narration = ["A long, long time ago, in a galaxy far, far away, you are a prisoner on a maximum security automated galactic prison ship. You seem to have forgotten everything about your past and who you are, except your name.",
"For the first time in years, a solar flare causes a power outage on the ship and the locks are disabled...what do you do?",
"You notice that the oxygen generators are no longer working... you estimate that you have about 10 mins of oxygen and set a timer on your watch"];
var choices = [["Continue"],["Get up","Go back to sleep"],["Continue"]];
var stage=0;

function myFunction() {
	stage=stage%narration.length;
	var demoElement = document.getElementById("demo");
	var hist=document.getElementById("history");
	var newel = document.createElement("div");
	newel.innerText = narration[stage];
	hist.insertBefore(newel, hist.firstChild);
	// hist.removeChild(newel);
	//hist.innerHTML = "<p>earioghoer;h</p>" + hist.innerHTML;
    clearHidden();

    var buttons=document.getElementById("buttons");
	clearButtons(buttons);
	for(var i=0;i<choices[stage].length;i++){
		var newButton=document.createElement("div");
		newButton.className="demo";
		newButton.onclick=myFunction;
		newButton.innerText=choices[stage][i];
		buttons.appendChild(newButton);
	}
	stage++; //EDIT THIS LATER
}

function clearButtons(buttons){
	while (buttons.firstChild) buttons.removeChild(buttons.firstChild);
}

function clearHidden(){
	var list=document.getElementById("history").childNodes;
	for(var i=0; i<list.length; i++) {
	    if (list[i].nodeName.toLowerCase() == 'div') {
	         if(i>5) document.getElementById("history").removeChild(list[i]);
	     }
	}
}