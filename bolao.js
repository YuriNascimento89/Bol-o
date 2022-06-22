function mascaracpf(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    i.setAttribute("maxlength", "14");
    if (v.length === 3 || v.length === 7) i.value += ".";
    if (v.length === 11) i.value += "-";
 }
 
 function mascaracelular(i){
    
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    i.setAttribute("maxlength", "10");
    if (v.length === 5) i.value += "-";
 }
 
 function mascaragols(i){
     
     var v = i.value;
     
     if(isNaN(v[v.length-1])){
         i.value = v.substring(0, v.length-1);
         return;
     }
     i.setAttribute("maxlength", "1");
 }
 
 function converteParaMaiusculas() {
   var field = document.forms[0].fnome;
   var upperCaseVersion = field.value.toUpperCase();
   field.value = upperCaseVersion;
 }
 