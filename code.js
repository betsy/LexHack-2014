test = new Date();
month = test.getMonth();
month = (month * 1) + 1;
day = test.getDate();
year = test.getFullYear();
// document.write("<p> ",month,"/",day,"/",year," </p>");



$( document ).ready(function() {
    $("#game").hide(0).delay(500).fadeIn(3000);
});

var narration = [
 /* 0 */ "A long, long time ago, in a galaxy far, far away, you are a prisoner on a maximum security automated galactic prison ship and you seem to have forgotten everything about your past and who you are",
 /* 1 */"For the first time in years, a solar flare causes a power outage on the ship and the locks are disabled...what do you do?", 
 /* 2 */"You notice that the oxygen generators are no longer working... you estimate that you have about 10 mins of oxygen and set a timer on your watch", 
 /* 3 */"The prison wardens back on the planet most likely know that all of the prisoners escaped from their cells into the main portion of the ship (you also know that there are escape pods somewhere on the ship: you want to find one and get back home)", 
 /* 4 */"You hear someone coming...what do you do? You have two options: approach or avoid the sound", 
 /* 5 */"The sound was made by another prisoner, they knock you out and you are unconscious for one minute.",
 /* 6 */"You survive for now...",
 /* 7 */"You keep probing around for the escape pods. About 100 ft down the hall you see flashing blue and red buttons which could possibly open the door in front of you: They look ominous, but you know that you have to press one of them to open the door.What do you do? ", 
 /* 8 */"Turns out that the blue button calls an automated guard and it drugs you. You are able to avoid the brunt of the attack, but you pass out for a minute", 
 /* 9 */"Turns out that the red button opens the door. However, the door creates a loud metallic scratching sound as it opens so you better run away to make sure that no one comes looking for you", 
 /* 10 */"As you stealthily make your way down the hallway, you see other prisoners. Do you want to:", 
 /* 11 */"They knock you out and you pass out for a minute", 
 /* 12 */"You survive and keep going", 
 /* 13 */"You see a circulating blue light on top of an object that is moving in the same direction as you. Do you:", 
 /* 14 */"Oh no, it's actually a guard! Fortunately for you, instead of killing you on the spot, it knocks you out for a minute, then loses power and shuts down.", 
 /* 15 */"You survive, YAY :D", 
 /* 16 */"Ahead you see a constant purple light. Do you:", 
 /* 17 */"It is where the escape pods are", 
 /* 18 */"You wander around aimlessly", 
 /* 19 */"Hooray! You have reached the escape pods! A few of them are missing, so there must be a way to get off the ship.", 
 /* 20 */"You see a control panel for the escape pod nearest to you. It has several buttons, but none of them are labelled.",
 /* 21 */"You focus on the 3 main buttons: the blue, green and red ones. You want to open the door first so that you can get inside. Which button do you press?", 
 /* 22 */"Correct! It opens", 
 /* 23 */"Gears click but nothing else happens", 
 /* 24 */"That escape pod is launched away. You find a new one.", 
 /* 25 */"Once inside, you see a similar control panel. However, this one also has an input bar (for the coordinates of the final destination) You want to close the door. Which button do you push now?", 
 /* 26 */"red button flashes, but nothing else changes", 
 /* 27*/"door closes behind you, and the shuttle starts moving",
 /* 28 */"Now the input bar flashes, and you select the nearest coordinates, labeled 'Home.' Good job! You have finished the game!...or so you think",
/* 29 */"Just then, a meteor shower threatens to throw you off course. You try to grab your steering wheel, but it is too late. A meteor hits your escape pod and sends you flying. You lose your gyroscope. QUICK! CATCH YOUR GYROSCOPE BEFORE IT'S TOO LATE!!!!!!!",
/* 30 */"You were able to catch your gyroscope and get back on course. Unfortunately, you used up a lot of Oxygen when trying to catch the gyroscope",
/* 31 */"You want to take a shortcut home so that you don't risk of running out of oxygen. However, the shortcut might have rogue, deadly pirates. Do you risk running into pirates, who will take both your life and your ship, or will you risk running out of oxygen?",
/* 32 */"You dare the pirates. People like you ain't afraid of no pirates.",
/* 33 */"You risk running out of oxygen and avoid the pirates",
/* 34 */"You safely continue on your way home. The way is calm, and you drift off to sleep."
];
var choices = [
  /* s#  a# */	
  /* 0   0 */ [{next: 1, text: "Click me"}],
  /* 1   1 */ [{next: 2, text: "Continue"}],
  /* 2   2 */ [{next: 3, text: "Gotta hurry"}],
  /* 3   3 */ [{next: 4, text: "Continue"}],
  /* 4   5 */ [{next: 6, text: "Avoid"}, {next:5, text: "Approach"}],
  /* 5   4 */ [{next: 7, text: "Continue"}],
  /* 6   6 */ [{next: 7, text: "Continue"}],
  /* 7   7 */ [{next: 8, text: "Blue"}, {next: 9, text: "Red"}],
  /* 8  8  */ [{next: 10, text: "Continue"}],
  /*9   9  */			[{next: 10, text: "Continue"}],
  /* 10    */ [{next: 11, text: "Approach"}, {next: 12, text: "Avoid"}],
  /* 11 10 */ [{next: 13, text: "Continue"}],
    /* 12 10 */ [{next: 13, text: "Continue"}],
  /* 13    11*/ [{next: 14, text: "Approach"}, {next: 15, text: "Avoid"}],
  /* 14 12 */ [{next: 16, text: "Continue"}],
    /* 15 12 */ [{next: 16, text: "Continue"}],
  /* 16   13*/ [{next: 17, text: "Approach"}, {next: 18, text: "Avoid"}],
  /* 17   14 */ [{next: 19, text: "Continue"}], 
  /* 18   15*/ [{next: 0, text: "Retry"}],
  /* 19   16*/ [{next: 20, text: "Continue"}],
  /* 20   17*/ [{next: 21, text: "Continue"}],
  /* 21   18*/ [{next: 22, text: "Green"}, {next: 24, text: "Blue"}, {next: 23, text: "Red"}],
  /* 22   18*/ [{next: 25, text: "Continue"}],
  /* 23   19*/ [{next: 21, text: "Continue"}], 
  /* 24   20*/ [{next: 21, text: "Continue"}],
  /* 25   21*/ [{next: 26, text: "Green"}, {next: 27, text: "Red"}, {next: 26, text: "Blue"}],
  /* 26   22*/ [{next: 25, text: "Continue"}],
  /* 27   23*/ [{next: 28, text: "Continue"}],
 /*28*/			[{next: 29, text: "Continue"}], 
 /*29*/		     [{next: 30, text: "Gyroscope"}],
/*30*/			 [{next: 31, text: "Continue"}],
 /*31*/          [{next: 32, text: "I'll risk the pirates"}, {next: 33, text: "Pirates are scary"}],
];

var stage=0;
var counter;


function myFunction(index) {

	stage = index; //EDIT THIS LATER
	stage=stage%narration.length;
	var demoElement = document.getElementById("demo");
	var hist=document.getElementById("history");
	var newel = document.createElement("div");
	newel.innerText = narration[stage];
	hist.insertBefore(newel, hist.firstChild);
	// hist.removeChild(newel);
	//hist.innerHTML = "<p>earioghoer;h</p>" + hist.innerHTML;
    clearHidden();


	if(stage==2 && !counting){
		counter=setInterval(timer, 1000); //1000 will  run it every 1 second
    	counting=true;
    }
    else if(stage==5 || stage==8 || stage==11 || stage==14 || stage==18) count-=60;
    else if(stage==32){
    	var survive=Math.random()<0.5;
    	if(survive) stage=34;
    	else count=0;
    }
    else if(stage==33){
    	var survive=Math.random()*400<count;
    	if(survive) stage=34;
    	else count=0;
    }
    if(stage==34){
		$('#game').fadeOut(500, function(){
			$('#win').fadeIn(5000, function(){$('#win').fadeOut(5000, function(){location.reload();});});
		});
    }
    var buttons=document.getElementById("buttons");
	clearButtons(buttons);

	for(var i=0;i<choices[stage].length;i++){ (function(_i) {
		var newButton=document.createElement("div");
		newButton.className="demo";
		newButton.onclick=function(){
			myFunction(choices[stage][_i].next);
		};
		newButton.innerText=choices[stage][_i].text;

		var newContainer=document.createElement("div");
		$(newContainer).addClass("button_container");
		newContainer.appendChild(newButton);
		buttons.appendChild(newContainer);
	}(i)) }

	if(stage==29){
		console.log('wobbling');
    	$(".button_container").each(function(index, element) {
	    	$(element).addClass("wobble");
	    	console.log('added wobble');
    	});

	    $(".wobble").on("mouseover", function(){
	            $(this).css({
	                left:(Math.random()*200)+700+"px",
	                top:(Math.random()*200)+100+"px",
	            });
	    });
    }

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

var counting=false;
var count=600;
function timer()
{
	document.getElementById("timer").innerText="Oxygen: "+count;
  	count=count-1;
    document.getElementById("game").style.opacity=count/600;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     document.getElementById("lose").style.display="block";
     document.getElementById("lose").style.transition="opacity 5s";
     setTimeout(function() {
     	document.getElementById("lose").style.opacity=1;
     }, 0);
     return;
  }
}
