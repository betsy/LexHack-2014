test = new Date();
month = test.getMonth();
month = (month * 1) + 1;
day = test.getDate();
year = test.getFullYear();
document.write("<p> ",month,"/",day,"/",year," </p>");

function myFunction() {
	var demoElement = document.getElementById("demo");
	var hist=document.getElementById("history");
	hist.innerHTML = "<p>earioghoer;h</p>" + hist.innerHTML;
    if(demoElement.style.color=="red"){
    	demoElement.style.color = "green";
    }
    else demoElement.style.color = "red";

    
}