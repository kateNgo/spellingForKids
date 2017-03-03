$(document).ready(function(){
	$(document).foundation();
	$( "section" ).load( "main.html", function() {

	});
	absoluteFooter();	
});

function allowDrop(ev) {
		ev.preventDefault();
	
}

function drag(ev) {
	
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	if ((ev.target.id.search("div")!=-1) && (ev.target.innerHTML.trim().length == 0)){
		ev.preventDefault();
    	var data = ev.dataTransfer.getData("text");
    	console.log("data: " + data);
    	ev.target.appendChild(document.getElementById(data));
	}
	
}
function relativeFooter(){
	
	$("footer").css("position","relative");
}
function absoluteFooter(){
	
	$("footer").css("position","absolute");
}
function menuHome(){
	$( "section" ).load( "main.html", function() {
		
	});
	absoluteFooter();
}
function menuFruit(){
	relativeFooter();
	$("section").load("fruit.html");
}
function menuAnimal(){
	$("section").load("test.html");
}
function fruitItemSelection(){
	
	$( "section" ).load( "content.html", function() {
		
	});
	absoluteFooter();
	//$("section").css("");
}
function play(word){
	var numberOfLetter =1;
	var htmlStr="";
	var htmlDiv="<div id='letter'> </div>";
	numberOfLetter = word.length;
	
	for(i=1; i<=numberOfLetter;i++){
		htmlStr = htmlStr + htmlDiv;
	}
	$("word").innerHTML= htmlStr;
}
function checkAnswer(){
	var result="";
	var answer = document.getElementById("answerToCheck").innerHTML;
	
	var yourAnswer = document.getElementById("yourAnswer");
	
	var c = yourAnswer.children;
    var i;
    for (i = 0; i < c.length; i++) {
    	if ( c[i].tagName == "DIV"){
    		if (c[i].childElementCount >0){
    			var imagePath = c[i].firstChild.src;
        		var arr = imagePath.split("/");
        	    result += arr[arr.length-1].substr(0,1);
    		}else{
    			result += " ";
    		}
    		
    	}
    }
    
    if (result == answer){
    	
    	document.getElementById("myModal").innerHTML = 
    		"<h5> Well Done! </h5> <a class='close-reveal-modal'>&times;</a>";
    }else{
    	document.getElementById("myModal").innerHTML = "<h5> Please try again... </h5> <a class='close-reveal-modal'>&times;</a>";
    }
    
}