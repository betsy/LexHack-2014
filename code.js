test = new Date();
month = test.getMonth();
month = (month * 1) + 1;
day = test.getDate();
year = test.getFullYear();
document.write("<p> ",month,"/",day,"/",year," </p>");

var log=

function myFunction() {
	var demoElement = document.getElementById("demo");
	var hist=document.getElementById("history");
	var newel = document.createElement("div");
	newel.innerText = "earioghoer;h";
	hist.appendChild(newel);
	// hist.removeChild(newel);
	//hist.innerHTML = "<p>earioghoer;h</p>" + hist.innerHTML;
    if(demoElement.style.color=="red"){
    	demoElement.style.color = "green";
    }
    else demoElement.style.color = "red";
}

function clearHidden(){
	
}