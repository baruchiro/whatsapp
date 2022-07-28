let the_thing
var onee = document.getElementById("byclic");
onee.addEventListener('click',newfunn);
doit.addEventListener('keypress',(e)=> {
 if (e.keyCode===13){

  newfunn ()
  }
})

function newfunn (){
  the_thing =  document.getElementById("doit").value;

  the_thing = the_thing.replace(/-| |\+/g,"")
  let  count =(the_thing.length);

  if (count==12){
  the_thing=("https://wa.me/"+the_thing);
      window.open(the_thing, "_blank");
  }
  else if (count==10){
      the_thing = the_thing.replace(/0/,"");
      the_thing=("https://wa.me/972"+the_thing)
     window.open(the_thing, "_blank")
  }

 else{
  alert ("no number found");
 }
    console.log (the_thing);
}
