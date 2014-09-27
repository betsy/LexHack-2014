test = new Date();
month = test.getMonth();
month = (month * 1) + 1;
day = test.getDate();
year = test.getFullYear();
document.write("<p> ",month,"/",day,"/",year," </p>");

function myFunction() {
	var demoElement = document.getElementById("demo");
    if(demoElement.style.color==="red"){
    	demoElement = "green";
    }
    else demoElement.style.color = "red";

    document.body.innerHTML += "<p>earioghoer;h</p>";
}