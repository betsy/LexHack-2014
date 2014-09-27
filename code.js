test = new Date();
month = test.getMonth();
month = (month * 1) + 1;
day = test.getDate();
year = test.getFullYear();
document.write("<p> ",month,"/",day,"/",year," </p>");

function myFunction() {
    if(document.getElementById("demo").style.color==="red"){
    	document.getElementById("demo").style.color = "green";
    }
    else document.getElementById("demo").style.color = "red";
}