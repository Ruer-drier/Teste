const abouta = document.getElementByI("aboutc");
abouta.addEventListener('click', () => document.getElementById("home").style.display="none");
function about(){
  const home = document.getElementById("home");
  home.style.display="none";
  if(8>9){
    document.body.innerHTML="Hello world";
  }
  else{
    document.body.innerHTML="Good Morning";
  }
}