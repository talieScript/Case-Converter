$('.ui.radio.checkbox')
  .checkbox()


$("#convert").click(function(){
  var radioValInput = $("input[name='input']:checked").val()
  var radioValOutput = $("input[name='output']:checked").val()
  var textInput = $("#textInput").val()
  var textOutput = $("#textOutput").val()
  if(radioValInput==undefined || radioValOutput==undefined){
    alert("Please select input and output")
  } else if($("#textInput").val() == ""){
    alert("Please enter some input text ")
  } else{
    if(radioValInput === "kebabInput"){
      if(radioValOutput === "camelOutput"){
        $("#textOutput").val(kebabToCamel(textInput))
      }
      else if(radioValOutput === "snakeOutput"){
        $("#textOutput").val(kebabToSnake($("#textInput").val()))
      }
    } 
  }   
})


function kebabToCamel(str){
	var c = [];
	var sep = str.split("-");
	for(var i=0;i<sep.length;i++){
		c.push(sep[i][0].toUpperCase()+sep[i].slice(1));
	}
	var campt = c.join("-");
  var re = /-/gi;
  campt = campt.replace(re, '');
  campt = campt.split(' ');
  console.log(campt.length)
  var converted = [];
  for(var i = 0; i<campt.length-1; i++){
    campt[i] = campt[i].replace(campt[i][0], campt[i][0].toLowerCase())
    converted.push(campt[i]);
  }
  return converted.join(' ');
}

function kebabToSnake(str){
  var converted = str.replace(/-/g, "_");
  return converted;
};
