$('.ui.radio.checkbox')
  .checkbox()


$("#convert").click(function(){
  var radioValInput = $("input[name='input']:checked").val();
  var radioValOutput = $("input[name='output']:checked").val();
  var textInput = $("#textInput").val();
  var textOutput = $("#textOutput").val();
  if(radioValInput==undefined || radioValOutput==undefined){
    alert("Please select input and output")
  } else if($("#textInput").val() == ""){
    alert("Please enter some input text ")
  } else{
    // kebab input
    if(radioValInput === "kebabInput"){
      if(radioValOutput === "camelOutput"){
        $("#textOutput").val(kebabToCamel(textInput))
      }
      else if(radioValOutput === "snakeOutput"){
        $("#textOutput").val(kebabToSnake($("#textInput").val()))
      } 
      else {
        wat();
      }  
    }  
    // snake input
    else if(radioValInput === "snakeInput"){
        if(radioValOutput === "camelOutput") {
          $("#textOutput").val(snakeToCamel(textInput))
        } 
        else if(radioValOutput === "kebabOutput") {
          $("#textOutput").val(snakeToKebab(textInput))
        }
        else {
          wat()
        }
    } 
    // camel input
    else if(radioValInput === "camelInput"){
      if(radioValOutput === "snakeOutput") {
        $("#textOutput").val(camelToSanke(textInput))
      } 
      else if(radioValOutput === "kebabOutput") {
        $("#textOutput").val(camelToKebab(textInput))
      }
      else {
        wat()
      }
    }
  }   
})

// same input & output
function wat(){
  var ranNo = Math.round(Math.random()*10)
  var funnyMessage = ["You trying to trick me?", "Same case silly billy!", "Come on stop messing around!",
  "What?", "cAn NoT cOmPuTe", "Computer says no...", "Are you trying to be funny?",
   "OK I'll just convert that... Not!", "You're not the sharpest tool in the box, are you?", "How am I supose to work with this?" ];
  $("#textOutput").val(funnyMessage[ranNo]);
}

// kebab input functions
function kebabToCamel(str) {
	var c = [];
	var sep = str.split("-");
	for(var i=0;i<sep.length;i++){
    c.push(sep[i][0].toUpperCase()+sep[i].slice(1));
	}
  campt = campt.replace(/-/gi, '');
  campt = campt.split(' ');
  var converted = [];
  for(var i = 0; i<campt.length; i++){
    converted.push(campt[i][0].toLowerCase()+campt[i].slice(1));
  }
  return converted.join(' ');
};
function kebabToSnake(str) {
  var converted = str.replace(/-/g, "_");
  return converted;
};

// snake input functions
function snakeToCamel(str) {
  var c = [];
	var sep = str.split('_');
	for(var i=0;i<sep.length;i++){
    c.push(sep[i][0].toUpperCase()+sep[i].slice(1));
	}
	var campt = c.join('');
  campt = campt.split(' ');
  var converted = [];
  for(var i = 0; i<campt.length; i++){
    converted.push(campt[i][0].toLowerCase()+campt[i].slice(1));
  }
  return converted.join(' ');
}
function snakeToKebab(str) {
  var converted = str.replace(/_/g, "-");
  return converted;
}

// camel input functions

function camelToSanke(str) {
  var converted = []
  var sep = str.split(/(?=[A-Z])/)
  console.log(sep)
  for(var i = 0; i < sep.length; i++) {
    converted.push(sep[i][0].toLowerCase()+sep[i].slice(1))
  }
  console.log(converted)
  return converted.join("_");
}
function camelToKebab(str) {
  var converted = []
  var sep = str.split(/(?=[A-Z])/)
  console.log(sep)
  for(var i = 0; i < sep.length; i++) {
    converted.push(sep[i][0].toLowerCase()+sep[i].slice(1))
  }
  console.log(converted)
  return converted.join("-");
}
