$(document).resize(function(){
  
  caResize();
  
});


$('#theCanvas').contextmenu(function(e){
  
  charges.push(new Charge(e.clientX, e.clientY, -0.1, 10, kinetic));
  return false;
  
});


$('#theCanvas').click(function(e){
  
  charges.push(new Charge(e.clientX, e.clientY, 0.1, 10, kinetic));
  tutorial1 = false;
  
});


var kinetic = true;
function staticMode() {
  kinetic = !kinetic;
  console.log('Static-Mode: ', !kinetic);
}