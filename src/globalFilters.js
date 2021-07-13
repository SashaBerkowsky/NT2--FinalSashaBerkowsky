import Vue from "vue";

Vue.filter("minuscula", function(text) {

  return text.toLowerCase()
});

Vue.filter("mayuscula", function(text) {
  return text.toUpperCase();
});

Vue.filter("intercaladoA", function(text) {
  const codedText = text.split('').map((letra, pos)=> pos%2?letra.toLowerCase():letra.toUpperCase()).join('')
  return codedText;
});

Vue.filter("intercaladoB", function(text) {
  const codedText = text.split('').map((letra, pos)=> pos%2?letra.toUpperCase():letra.toLowerCase()).join('')
  return codedText;
});

Vue.filter("codificado", function(text) {
  let codedText =''
  for(let letra of text){
    
    switch(letra){
      case 'a':codedText = codedText.concat('u')
        break
      case 'e':codedText = codedText.concat('o')
        break
      case 'o':codedText = codedText.concat('e')
        break
      case 'u':codedText = codedText.concat('a')
        break
      default: codedText = codedText.concat(letra)
    }
  }
  return  codedText;
});


