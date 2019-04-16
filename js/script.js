function init(){
//add your javascrip between these two lines of code
var button = document.getElementById("entrybutton");
button.addEventListener('click', function(){
  var msg = document.getElementById("entryinput").value;
  alert("Bolortuya Tumurbaatar: " + msg);
  document.getElementById("textoutput").innerHTML = msg;
});
}
window.addEventListener('load', init);
